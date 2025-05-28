
import Component from "../components/888";

export type InputType = Parameters<typeof Component>[0];

export function random(): InputType {
  return [{"name":"v1.0.0-sample","commit":{"sha":"f0e1d2c3b4a5968778695a4b3c2d1e0f98765432","url":"https://api.example.com/repos/example-org/sample-repo/commits/f0e1d2c3b4a5968778695a4b3c2d1e0f98765432"},"zipball_url":"https://api.example.com/repos/example-org/sample-repo/zipball/v1.0.0-sample","tarball_url":"https://api.example.com/repos/example-org/sample-repo/tarball/v1.0.0-sample","node_id":"MDM6VGFnMTIzNDU2OnYxLjAuMC1zYW1wbGU="},{"name":"v2.0.0-beta-test","commit":{"sha":"a1b2c3d4e5f60718273645a6b7c8d9e0f1a2b3c4","url":"https://api.example.com/repos/example-org/sample-repo/commits/a1b2c3d4e5f60718273645a6b7c8d9e0f1a2b3c4"},"zipball_url":"https://api.example.com/repos/example-org/sample-repo/zipball/v2.0.0-beta-test","tarball_url":"https://api.example.com/repos/example-org/sample-repo/tarball/v2.0.0-beta-test","node_id":"MDM6VGFnNzg5MDExOnYyLjAuMC1iZXRhLXRlc3Q="}];
}
