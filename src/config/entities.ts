import { ROUTES } from "@/constants/routes";
import { LucideIcon, Shield, Users } from "lucide-react";

interface EntityConfig {
  table: string;
  label: string;
  publicRoute?: string;
  dashboardRoute?: string;
  icon?: LucideIcon;
}

export const ENTITY_CONFIG = {
  accountType: {
    table: "account_types",
    label: "Account Type",
    dashboardRoute: ROUTES.DASHBOARD.CONTENT.ACCOUNT_TYPES,
    icon: Users,
  },

  account: {
    table: "accounts",
    label: "Account",
    dashboardRoute: ROUTES.DASHBOARD.CONTENT.ACCOUNTS,
    icon: Shield,
  },

  userAccount: {
    table: "user_accounts",
    label: "User Account",
    dashboardRoute: ROUTES.DASHBOARD.FINANCE.ACCOUNTS,
    icon: Users,
  },

  category: {
    table: "categories",
    label: "Category",
    dashboardRoute: ROUTES.DASHBOARD.CONTENT.CATEGORIES,
    icon: Shield,
  },

  merchant: {
    table: "merchants",
    label: "Merchant",
    dashboardRoute: ROUTES.DASHBOARD.CONTENT.MERCHANTS,
    icon: Shield,
  },

  tag: {
    table: "tags",
    label: "Tag",
    dashboardRoute: ROUTES.DASHBOARD.CONTENT.TAGS,
    icon: Shield,
  },

  transaction: {
    table: "transactions",
    label: "Transaction",
    dashboardRoute: ROUTES.DASHBOARD.FINANCE.TRANSACTIONS,
    icon: Shield,
  },

  transactionTag: {
    table: "transaction_tags",
    label: "Transaction Tag",
  },

  recurringTransaction: {
    table: "recurring_transactions",
    label: "Recurring Transaction",
    dashboardRoute: ROUTES.DASHBOARD.FINANCE.RECURRING,
    icon: Shield,
  },

  profile: {
    table: "profiles",
    label: "Profile",
    dashboardRoute: ROUTES.DASHBOARD.ADMIN.USERS,
    icon: Users,
  },
} as const satisfies Record<string, EntityConfig>;

export type Entity = keyof typeof ENTITY_CONFIG;

export type EntityTable = (typeof ENTITY_CONFIG)[Entity]["table"];

export type EntityLabel = (typeof ENTITY_CONFIG)[Entity]["label"];
