
import Component from "../components/388";

export type InputType = Parameters<typeof Component>[0];

export function random(): InputType {
  return {"enabled_repositories":"selected","selected_repositories_url":"https://api.example.org/orgs/sample-org/actions/permissions/repositories/selected","allowed_actions":"selected","selected_actions_url":"https://api.example.org/orgs/sample-org/actions/permissions/actions/selected"};
}
