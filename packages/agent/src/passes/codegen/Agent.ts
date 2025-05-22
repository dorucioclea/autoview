import { IAutoViewCompilerService } from "@autoview/interface";
import { Driver, WorkerConnector } from "tgrid";
import { is_node } from "tstl";

import { AgentBase, LlmFailure, LlmProxy } from "../../core";
import { BOILERPLATE_ALIAS, BOILERPLATE_SUBTYPE_PREFIX } from "../common";
import { Input, Output } from "./dto";
import { prompt } from "./prompt";

/**
 * The agent for the code generation pass. This agent is responsible for generating the final React component code from the context.
 */
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
    });

    const boilerplate = await service.generateBoilerplateForReactComponent(
      BOILERPLATE_ALIAS,
      BOILERPLATE_SUBTYPE_PREFIX,
    );
    const systemPrompt = prompt({
      boilerplate,
      pre_defined_components_info: "NO-COMPONENTS-SUPPORTED-YET",
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

/**
 * A high-order function for handling the text output from the LLM.
 *
 * The returned function extracts the component code from the text output and then compiles the component.
 *
 * It will throw `LlmFailure` if the component code is not found or the component code is invalid, so the LLM will be retried.
 *
 * @param service - The service for the code generation.
 * @returns The function for handling the text output.
 */
function handleText(
  service: Driver<IAutoViewCompilerService, false>,
): (input: Input, text: string) => Promise<Output> {
  return async function (input: Input, text: string) {
    const output = parseOutput(text);

    const boilerplate = await service.generateBoilerplateForReactComponent(
      BOILERPLATE_ALIAS,
      BOILERPLATE_SUBTYPE_PREFIX,
    );
    const entireTsCode = `${boilerplate}\n\n${output.component}`;

    const result = await service.compileReactComponent(
      boilerplate,
      output.component,
    );

    if (result.type === "exception") {
      throw result.error;
    }

    if (result.type === "failure") {
      if (input.onCompilerError != null) {
        const maybePromise = input.onCompilerError(
          entireTsCode,
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

    return {
      generatedTsCode: output.component,
      entireTsCode,
      jsCode: result.javascript["main.jsx"]!,
    };
  };
}

interface TextOutput {
  component: string;
}

/**
 * Parse the output text to the text output.
 *
 * This function expects the output text is formatted as follows:
 *
 * ```xml
 * <component>
 *   ...
 * </component>
 * ```
 *
 * PROMPT: This format is bound to the prompt, so it should not be changed without proper prompt update.
 *
 * @param text - The output text.
 * @returns The parsed text output, including the component code.
 */
function parseOutput(text: string): TextOutput {
  const component = text.match(/<component>([\s\S]*?)<\/component>/);

  if (component?.[1] == null) {
    throw new LlmFailure(
      `failed to parse the output; your response should contain a React component within <component> tags`,
    );
  }

  const stripped = component[1]
    .replace(/```typescript/, "")
    .replace(/```ts/, "")
    .replace(/```/, "");

  return {
    component: stripped,
  };
}
