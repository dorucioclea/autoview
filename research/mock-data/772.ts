
import Component from "../components/772";

export type InputType = Parameters<typeof Component>[0];

export function random(): InputType {
  return {"limit":"contributors_only","origin":"https://api.github.com/repos/example-org/sample-repo","expires_at":"2025-06-01T12:00:00Z"};
}
