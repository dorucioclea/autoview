
import Component from "../components/626";

export type InputType = Parameters<typeof Component>[0];

export function random(): InputType {
  return {"id":123,"key_prefix":"ISSUE-","url_template":"https://issues.example.com/{prefix}{id}","is_alphanumeric":true};
}
