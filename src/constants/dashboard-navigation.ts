import { ENTITY_CONFIG } from "@/config/entities";

export const DASHBOARD_FINANCE_ITEMS = [
  {
    key: ENTITY_CONFIG["userAccount"]["table"],
    href: ENTITY_CONFIG["userAccount"]["dashboardRoute"],
    icon: ENTITY_CONFIG["userAccount"]["icon"],
  },
  {
    key: ENTITY_CONFIG["transaction"]["table"],
    href: ENTITY_CONFIG["transaction"]["dashboardRoute"],
    icon: ENTITY_CONFIG["transaction"]["icon"],
  },
  {
    key: ENTITY_CONFIG["recurringTransaction"]["table"],
    href: ENTITY_CONFIG["recurringTransaction"]["dashboardRoute"],
    icon: ENTITY_CONFIG["recurringTransaction"]["icon"],
  },
] as const;

export const DASHBOARD_CONTENT_ITEMS = [
  {
    key: ENTITY_CONFIG["accountType"]["table"],
    href: ENTITY_CONFIG["accountType"]["dashboardRoute"],
    icon: ENTITY_CONFIG["accountType"]["icon"],
  },
  {
    key: ENTITY_CONFIG["account"]["table"],
    href: ENTITY_CONFIG["account"]["dashboardRoute"],
    icon: ENTITY_CONFIG["account"]["icon"],
  },
  {
    key: ENTITY_CONFIG["category"]["table"],
    href: ENTITY_CONFIG["category"]["dashboardRoute"],
    icon: ENTITY_CONFIG["category"]["icon"],
  },
  {
    key: ENTITY_CONFIG["merchant"]["table"],
    href: ENTITY_CONFIG["merchant"]["dashboardRoute"],
    icon: ENTITY_CONFIG["merchant"]["icon"],
  },
  {
    key: ENTITY_CONFIG["tag"]["table"],
    href: ENTITY_CONFIG["tag"]["dashboardRoute"],
    icon: ENTITY_CONFIG["tag"]["icon"],
  },
] as const;

export const DASHBOARD_ADMIN_ITEMS = [
  {
    key: ENTITY_CONFIG["profile"]["table"],
    href: ENTITY_CONFIG["profile"]["dashboardRoute"],
    icon: ENTITY_CONFIG["profile"]["icon"],
  },
] as const;
