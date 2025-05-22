
import Component from "../components/610";

export type InputType = Parameters<typeof Component>[0];

export function random(): InputType {
  return {"total_count":2,"secrets":[{"name":"TEST_SECRET_ALPHA","created_at":"2025-05-19T14:30:00Z","updated_at":"2025-05-20T09:15:00Z"},{"name":"CI_TOKEN_DUMMY","created_at":"2025-04-10T08:00:00Z","updated_at":"2025-04-10T10:30:00Z"}]};
}
