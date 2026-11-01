import {
  CONTENT_MANAGE_ROUTES,
  ADMIN_MANAGE_ROUTES,
  GUEST_ONLY_ROUTES,
  FINANCE_MANAGE_ROUTES,
} from "./manage-routes";

import { canManageContent, isAdmin, isGuest, isUser } from "./roles";

export const MANAGE_ROUTE_PERMISSIONS = [
  {
    routes: GUEST_ONLY_ROUTES,
    type: "guest",
    check: isGuest,
  },
  {
    routes: FINANCE_MANAGE_ROUTES,
    type: "user",
    check: isUser,
  },
  {
    routes: CONTENT_MANAGE_ROUTES,
    type: "protected",
    check: canManageContent,
  },
  {
    routes: ADMIN_MANAGE_ROUTES,
    type: "protected",
    check: isAdmin,
  },
];
