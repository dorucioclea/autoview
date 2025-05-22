
import Component from "../components/946";

export type InputType = Parameters<typeof Component>[0];

export function random(): InputType {
  return [{"email":"test.user@example.com","primary":true,"verified":true,"visibility":"public"},{"email":"backup.sample@example.org","primary":false,"verified":false,"visibility":null}];
}
