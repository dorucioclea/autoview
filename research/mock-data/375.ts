
import Component from "../components/375";

export type InputType = Parameters<typeof Component>[0];

export function random(): InputType {
  return {"total_active_caches_count":128,"total_active_caches_size_in_bytes":536870912};
}
