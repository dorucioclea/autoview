
import Component from "../components/622";

export type InputType = Parameters<typeof Component>[0];

export function random(): InputType {
  return {"id":101};
}
