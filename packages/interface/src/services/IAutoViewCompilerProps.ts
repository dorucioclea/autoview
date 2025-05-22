import { IAutoViewCompilerMetadata } from "./IAutoViewCompilerMetadata";

export interface IAutoViewCompilerProps {
  inputMetadata: IAutoViewCompilerMetadata;
  compilerOptions?: Partial<IAutoViewCompilerProps.ICompilerOptions>;
}
export namespace IAutoViewCompilerProps {
  export interface ICompilerOptions {
    module: "cjs" | "esm";
  }
}
