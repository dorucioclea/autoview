
import Component from "../components/1011";

export type InputType = Parameters<typeof Component>[0];

export function random(): InputType {
  return [{"key":"ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIEFakePublicKeyStringForTestingExample== test@example.com","id":101,"title":"SSH Signing Key Alpha (Test)","created_at":"2025-05-18T10:15:30Z"},{"key":"ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDfakeKeyContentForUITesting sample-key@example.org","id":102,"title":"SSH Signing Key Beta (Sample)","created_at":"2025-05-19T14:30:00Z"}];
}
