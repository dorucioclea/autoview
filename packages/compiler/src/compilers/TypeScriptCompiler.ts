import type { IAutoViewCompilerResult } from "@autoview/interface";
import { IPointer } from "tstl";
import ts from "typescript";
import transform from "typia/lib/transform";

import { RAW } from "../raw/RAW";

export namespace TypeScriptCompiler {
  export const build = (
    typescript: string,
    target: "cjs" | "esm",
    reactEnabled: boolean,
  ): IAutoViewCompilerResult => {
    // PREPARE RAW FILES
    const dict: Map<string, ts.SourceFile> = new Map();
    for (const [file, content] of RAW) {
      if (file.endsWith("packageJson.d.ts")) continue;
      const replaced: string = file.replace("file:///", "");
      const source: ts.SourceFile = ts.createSourceFile(
        file,
        content,
        ts.ScriptTarget.ES2015,
      );
      dict.set(replaced, source);
    }

    // CREATE SOURCE FILE
    const source: ts.SourceFile = ts.createSourceFile(
      "main.ts",
      typescript,
      ts.ScriptTarget.ES2015,
    );
    dict.set("main.ts", source);

    // DO COMPILE
    const output: IPointer<string> = { value: "" };
    const diagnostics: ts.Diagnostic[] = [];
    const program: ts.Program = ts.createProgram(
      [reactEnabled ? "main.tsx" : "main.ts"],
      {
        target: ts.ScriptTarget.ESNext,
        jsx: ts.JsxEmit.ReactJSX,
        esModuleInterop: true,
        downlevelIteration: true,
        forceConsistentCasingInFileNames: true,
        strict: true,
        skipLibCheck: true,
        ...(target === "cjs"
          ? {
              module: ts.ModuleKind.CommonJS,
            }
          : {
              module: ts.ModuleKind.ESNext,
              moduleResolution: ts.ModuleResolutionKind.Bundler,
            }),
        noImplicitAny: false,
      },
      {
        // KEY FEATURES
        fileExists: (file) => dict.has(file),
        writeFile: (_file, text) => (output.value = text),
        readFile: (file) =>
          file.startsWith("node_modules/") && file.endsWith("/package.json")
            ? RAW.find((r) => r[0] === `file:///${file}`)![1]
            : undefined,
        getSourceFile: (file: string) => dict.get(file),

        // ADDITIONAL OPTIONS
        getDefaultLibFileName: () =>
          "node_modules/typescript/lib/lib.es2015.d.ts",
        directoryExists: () => true,
        getCurrentDirectory: () => "",
        getDirectories: () => [],
        getNewLine: () => "\n",
        getCanonicalFileName: (file) => file,
        useCaseSensitiveFileNames: () => false,
        jsDocParsingMode: ts.JSDocParsingMode.ParseAll,
      },
    );
    diagnostics.push(...ts.getPreEmitDiagnostics(program, source));

    program.emit(source, undefined, undefined, undefined, {
      before: [
        transform(
          program,
          {},
          { addDiagnostic: (input) => diagnostics.push(input) },
        ),
      ],
    });
    if (diagnostics.length)
      return {
        type: "failure",
        diagnostics: diagnostics.map((diag) => ({
          category: getCategory(diag.category),
          code: diag.code,
          start: diag.start,
          length: diag.length,
          messageText: getMessageText(diag.messageText),
        })),
        typescript,
      };
    return {
      type: "success",
      typescript,
      javascript: output.value,
    };
  };
}

const getCategory = (
  value: ts.DiagnosticCategory,
): IAutoViewCompilerResult.DiagnosticCategory => {
  if (value === ts.DiagnosticCategory.Message) return "message";
  else if (value === ts.DiagnosticCategory.Suggestion) return "suggestion";
  else if (value === ts.DiagnosticCategory.Warning) return "warning";
  return "error";
};
const getMessageText = (text: string | ts.DiagnosticMessageChain): string =>
  typeof text === "string" ? text : text.messageText;
