import { IAutoViewCompilerService } from "@autoview/interface";
import { Driver, WorkerConnector } from "tgrid";
import { is_node } from "tstl";

import { AgentBase, LlmFailure, LlmProxy } from "../../core";
import { Input, Output } from "./dto";
import { prompt } from "./prompt";

export class Agent implements AgentBase<Input, Output> {
  private worker: WorkerConnector<null, null, IAutoViewCompilerService> | null =
    null;

  async open(): Promise<void> {
    this.worker = new WorkerConnector(null, null);

    if (is_node()) {
      await this.worker.connect(
        `${__dirname}/../../../../compiler/lib/worker/index.js`,
      );
    } else {
      await this.worker.connect("/worker.js");
    }
  }

  async close(): Promise<void> {
    if (this.worker == null) return;
    await this.worker.close();
    this.worker = null;
  }

  async execute(input: Input): Promise<Output> {
    if (!this.worker) throw new Error("worker not initialized");

    const service = this.worker.getDriver();
    await service.initialize({
      inputMetadata: input.inputSchema,
      componentMetadata: input.componentSchema,
    });

    const boilerplate = await service.generateBoilerplate(
      "Schema",
      input.transformFunctionName,
    );
    const systemPrompt = prompt({
      input_schema: input.inputSchema,
      output_schema: input.componentSchema,
      initial_analysis: input.initialAnalysis,
      data_exploration: input.dataExploration,
      ideas: input.ideas,
      reasoning: input.reasoning,
      planning: input.planning,
      boilerplate,
    });

    const results = await new LlmProxy<Input, Output>()
      .withTextHandler(handleText(service))
      .call(
        input,
        input.vendor.api,
        {
          model: input.vendor.model,
          messages: [
            {
              role: "user",
              content: systemPrompt,
            },
          ],
          ...(input.vendor.isThinkingEnabled
            ? { reasoning_effort: "medium" }
            : {}),
        },
        input.vendor.options,
      );

    const result = results[0];

    if (result == null) {
      throw new LlmFailure(`expect 1 output, but got ${results.length}`);
    }

    return result;
  }
}

function handleText(
  service: Driver<IAutoViewCompilerService, false>,
): (input: Input, text: string) => Promise<Output> {
  return async function (input: Input, text: string) {
    const output = parseOutput(text);
    const rawTsCode = `${await service.generateBoilerplateForRawTsCode("Schema", input.transformFunctionName)}\n\n${output.typescript_function}`;

    const result = await service.compile(
      output.typescript_function,
      "Schema",
      input.transformFunctionName,
    );

    if (result.type === "error") {
      throw result.error;
    }

    if (result.type === "failure") {
      if (input.onCompilerError != null) {
        const maybePromise = input.onCompilerError(
          rawTsCode,
          result.diagnostics,
        );

        if (maybePromise != null) {
          await maybePromise;
        }
      }

      throw new LlmFailure(
        `your code failed to compile; please review the error and try again:\n\n<error>\n${JSON.stringify(
          result.diagnostics,
          null,
          2,
        )}\n</error>`,
      );
    }

    // const randomResult = await service.compileRandom("Schema");

    // if (randomResult.type !== "success") {
    //   throw new Error(
    //     "[internal bug] failed to generate random function; please report this at `https://github.com/wrtnlabs/autoview/issues`",
    //   );
    // }

    // const transform = new Function(
    //   "$input",
    //   `${result.javascript}\n\nreturn module.transform($input);`,
    // );
    // const random = new Function(
    //   `${randomResult.javascript}\n\nreturn module.generateRandom();`,
    // );

    // const MAX_ATTEMPTS = 10;

    // for (let i = 0; i < MAX_ATTEMPTS; ++i) {
    //   // SAFETY: random should not throw any error
    //   const input = random();

    //   try {
    //     const output = transform(input);
    //     assertGuard<IAutoViewComponentProps>(output);
    //   } catch (error) {
    //     if (error instanceof TypeGuardError) {
    //       throw new LlmFailure(
    //         `your transformer function failed to generate correct output against the input:\n\n<input>\n${JSON.stringify(
    //           input,
    //           null,
    //           2,
    //         )}\n</input>\n\n<output>\n${JSON.stringify(
    //           output,
    //           null,
    //           2,
    //         )}\n</output>\n\nand here is the error:\n\n<error>\n${error.message}\n</error>\n\nplease fix the error and try again`,
    //       );
    //     }

    //     throw new LlmFailure(
    //       `your transformer function emits an error against the input:\n\n<input>\n${JSON.stringify(
    //         input,
    //         null,
    //         2,
    //       )}\n</input>\n\nand here is the error:\n\n<error>\n${error}\n</error>\n\nplease fix the error and try again`,
    //     );
    //   }
    // }

    return {
      analysis: output.analysis,
      // transform,
      // random,
      transformTsCode: rawTsCode,
    };
  };
}

interface TextOutput {
  analysis: string;
  typescript_function: string;
}

function parseOutput(text: string): TextOutput {
  const analysis = text.match(
    /<transformation_analysis>([\s\S]*?)<\/transformation_analysis>/,
  );
  const typescriptFunction = text.match(
    /<typescript_function>([\s\S]*?)<\/typescript_function>/,
  );

  if (analysis?.[1] == null) {
    throw new LlmFailure(
      `failed to parse the output; your response should contain analysis within <analysis> tags`,
    );
  }

  if (typescriptFunction?.[1] == null) {
    throw new LlmFailure(
      `failed to parse the output; your response should contain typescript function within <typescript_function> tags`,
    );
  }

  const stripped = typescriptFunction[1]
    .replace(/```typescript/, "")
    .replace(/```ts/, "")
    .replace(/```/, "");

  return {
    analysis: analysis[1],
    typescript_function: stripped,
  };
}
