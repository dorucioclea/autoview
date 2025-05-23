
import Component from "../components/454";

export type InputType = Parameters<typeof Component>[0];

export function random(): InputType {
  return {"url":"https://api.example.org/v1/webhooks/sample-listener","content_type":"json","secret":"dummySecretKey_123456","insecure_ssl":"0"};
}
