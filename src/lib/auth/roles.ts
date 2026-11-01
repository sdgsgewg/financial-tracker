import { Role } from "@/enums/Role";
import { Profile } from "@/types/profile";

export function isGuest(profile: Pick<Profile, "role"> | null | undefined) {
  return profile === null || profile === undefined;
}

export function isUser(profile: Pick<Profile, "role"> | null | undefined) {
  return profile?.role === Role.USER;
}

export function isAdmin(profile: Pick<Profile, "role"> | null | undefined) {
  return profile?.role === Role.ADMIN;
}

export function canManageContent(
  profile: Pick<Profile, "role"> | null | undefined,
) {
  return profile?.role === Role.ADMIN || profile?.role === Role.EDITOR;
}

export function canManageSystem(
  profile: Pick<Profile, "role"> | null | undefined,
) {
  return profile?.role === Role.ADMIN;
}
