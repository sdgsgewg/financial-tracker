import { LayoutDashboard } from "lucide-react";

import { useTranslations } from "next-intl";

import { ROUTES } from "@/constants/routes";
import {
  DASHBOARD_ADMIN_ITEMS,
  DASHBOARD_CONTENT_ITEMS,
  DASHBOARD_FINANCE_ITEMS,
} from "@/constants/dashboard-navigation";

import { NavLink } from "@/types/NavLink";

export function useSidebarLinks() {
  const tNav = useTranslations("navigation.dashboard");

  const navLinks: NavLink[] = [
    {
      name: tNav("base"),
      path: ROUTES.DASHBOARD.BASE,
      icon: LayoutDashboard,
      exact: true,
    },
  ];

  const financeManageLinks: NavLink[] = DASHBOARD_FINANCE_ITEMS.map((item) => ({
    name: tNav(`finance.${item.key}`),
    path: item.href,
    icon: item.icon,
  }));

  const contentManageLinks: NavLink[] = DASHBOARD_CONTENT_ITEMS.map((item) => ({
    name: tNav(`content.${item.key}`),
    path: item.href,
    icon: item.icon,
  }));

  const adminManageLinks: NavLink[] = DASHBOARD_ADMIN_ITEMS.map((item) => ({
    name: tNav(`admin.${item.key}`),
    path: item.href,
    icon: item.icon,
  }));

  return {
    navLinks,
    financeManageLinks,
    contentManageLinks,
    adminManageLinks,
  };
}
