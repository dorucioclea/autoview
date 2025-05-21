import { IAutoViewCompilerService } from "@autoview/interface";
import { OpenApi, OpenApiTypeChecker } from "@samchon/openapi";
import { OpenApiValidator } from "@samchon/openapi/lib/utils/OpenApiValidator";
import { WorkerConnector } from "tgrid";
import { is_node } from "tstl";
import typia from "typia";

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
    });

    const boilerplate = await service.generateBoilerplateForReactComponent(
      "AutoViewInput",
      "AutoViewInputSubTypes",
    );
    const systemPrompt = prompt({
      boilerplate,
    });

    const results = await new LlmProxy<Input, Output>()
      .withTextHandler(handleText)
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

function handleText(input: Input, text: string): Output {
  const output = parseOutput(text);

  const [sanitizedSchema, sanitizedComponents] = removeInvalidPattern(
    input.inputSchema.schema,
    input.inputSchema.components,
  );
  const result = OpenApiValidator.validate({
    schema: sanitizedSchema,
    components: sanitizedComponents,
    value: output.mock_data,
    required: true,
  });

  if (!result.success) {
    throw new LlmFailure(
      `the mock data you've generated is not match with the type \`AutoViewInput\`; analyze the type again with the errors and try again: \n\n<error>\n${JSON.stringify(
        result.errors,
        null,
        2,
      )}\n</error>`,
    );
  }

  return {
    mockData: output.mock_data,
  };
}

interface TextOutput {
  mock_data: any;
}

function parseOutput(text: string): TextOutput {
  const mockData = text.match(/<mock_data>([\s\S]*?)<\/mock_data>/);

  if (mockData?.[1] == null) {
    throw new LlmFailure(
      `failed to parse the output; your response should contain a mock data within <mock_data> tags`,
    );
  }

  try {
    return {
      mock_data: JSON.parse(mockData[1]),
    };
  } catch (error: unknown) {
    throw new LlmFailure(
      `failed to parse the output; the mock data string you've generated is not a valid JSON value: \n\n<error>\n${JSON.stringify(
        error,
        null,
        2,
      )}\n</error>`,
    );
  }
}

function removeInvalidPattern(
  schema: OpenApi.IJsonSchema,
  components: OpenApi.IComponents,
): [OpenApi.IJsonSchema, OpenApi.IComponents] {
  const clonedSchema = typia.misc.assertClone(schema);
  const clonedComponents = typia.misc.assertClone(components);

  removeInvalidPatternInline(clonedSchema);

  if (clonedComponents.schemas) {
    for (const value of Object.values(clonedComponents.schemas)) {
      removeInvalidPatternInline(value);
    }
  }

  return [clonedSchema, clonedComponents];
}

function removeInvalidPatternInline(schema: OpenApi.IJsonSchema): void {
  if (OpenApiTypeChecker.isString(schema)) {
    removeInvalidPatternString(schema);
  } else if (OpenApiTypeChecker.isArray(schema)) {
    removeInvalidPatternArray(schema);
  } else if (OpenApiTypeChecker.isTuple(schema)) {
    removeInvalidPatternTuple(schema);
  } else if (OpenApiTypeChecker.isObject(schema)) {
    removeInvalidPatternObject(schema);
  } else if (OpenApiTypeChecker.isOneOf(schema)) {
    removeInvalidPatternOneOf(schema);
  }
}

function removeInvalidPatternString(string: OpenApi.IJsonSchema.IString): void {
  if (string.pattern) {
    try {
      new RegExp(string.pattern);
    } catch {
      string.pattern = undefined;
    }
  }
}

function removeInvalidPatternArray(array: OpenApi.IJsonSchema.IArray): void {
  removeInvalidPatternInline(array.items);
}

function removeInvalidPatternTuple(tuple: OpenApi.IJsonSchema.ITuple): void {
  for (const prefixItem of tuple.prefixItems) {
    removeInvalidPatternInline(prefixItem);
  }

  if (tuple.additionalItems && typeof tuple.additionalItems === "object") {
    removeInvalidPatternInline(tuple.additionalItems);
  }
}

function removeInvalidPatternObject(object: OpenApi.IJsonSchema.IObject): void {
  if (object.properties) {
    for (const value of Object.values(object.properties)) {
      removeInvalidPatternInline(value);
    }
  }

  if (
    object.additionalProperties &&
    typeof object.additionalProperties === "object"
  ) {
    removeInvalidPatternInline(object.additionalProperties);
  }
}

function removeInvalidPatternOneOf(oneOf: OpenApi.IJsonSchema.IOneOf): void {
  for (const value of oneOf.oneOf) {
    removeInvalidPatternInline(value);
  }
}
