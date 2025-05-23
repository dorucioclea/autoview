
import Component from "../components/42";

export type InputType = Parameters<typeof Component>[0];

export function random(): InputType {
  return {"id":"channel_001_sample","created_at":"2025-05-19T14:30:00Z","code":"ONLINE_STORE_TEST","name":"Online Store (Sample Channel)"};
}
