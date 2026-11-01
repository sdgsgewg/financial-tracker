import { Role } from "../enums/Role";

export interface Profile {
  id: string;
  full_name: string | null;
  avatar_url: string | null;
  role: Role;
}
