export const ROUTES = {
  AUTH: {
    SIGN_UP: "/sign-up",
    LOGIN: "/login",
    FORGOT_PASSWORD: "/forgot-password",
    UPDATE_PASSWORD: "/update-password",
  },

  HOME: "/",

  DASHBOARD: {
    BASE: "/dashboard",

    FINANCE: {
      ACCOUNTS: "/dashboard/accounts",
      TRANSFERS: "/dashboard/transfers",
      TRANSACTIONS: "/dashboard/transactions",
      RECURRING: "/dashboard/recurring",
    },

    CONTENT: {
      ACCOUNT_TYPES: "/dashboard/content/account-types",
      ACCOUNTS: "/dashboard/content/accounts",
      CATEGORIES: "/dashboard/content/categories",
      TAGS: "/dashboard/content/tags",
      MERCHANTS: "/dashboard/content/merchants",
    },

    ADMIN: {
      USERS: "/dashboard/admin/users",
      SETTINGS: "/dashboard/admin/settings",
    },
  },
};
