
import Component from "../components/459";

export type InputType = Parameters<typeof Component>[0];

export function random(): InputType {
  return [{"subject_type":"Organization","subject_name":"Sample Org (Test)","subject_id":101,"total_request_count":1500,"rate_limited_request_count":30,"last_rate_limited_timestamp":"2025-05-19T14:45:00Z","last_request_timestamp":"2025-05-19T15:00:00Z"},{"subject_type":"User","subject_name":"Test User Account","subject_id":202,"total_request_count":850,"last_rate_limited_timestamp":null,"last_request_timestamp":"2025-05-19T14:55:23Z"},{"subject_name":"API Key (Sample)","subject_id":303,"total_request_count":420,"rate_limited_request_count":5,"last_request_timestamp":"2025-05-18T09:15:00Z"}];
}
