
import Component from "../components/10";

export type InputType = Parameters<typeof Component>[0];

export function random(): InputType {
  return {"id":"123e4567-e89b-12d3-a456-426614174000","created_at":"2025-05-19T14:30:00Z","code":"DEP-TEST-0001","source":"TestBank (Sample)","direction":1};
}
