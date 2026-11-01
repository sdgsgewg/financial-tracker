"use client";

import { AuthCard, SignUpForm } from "@/components/forms/auth";
import { ROUTES } from "@/constants/routes";
import { useLocale, useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";

export default function Page() {
  const t = useTranslations("auth");
  const searchParams = useSearchParams();

  const locale = useLocale();

  const next = searchParams.get("next") ?? ROUTES.DASHBOARD.BASE;

  return (
    <AuthCard
      title={t("createNewAccount")}
      description={t("registerDescription")}
      footer={{
        prompt: t("alreadyHaveAccount"),
        href: `/login?next=${encodeURIComponent(next)}`,
        label: t("login"),
      }}
    >
      <SignUpForm locale={locale} next={next} />
    </AuthCard>
  );
}
