"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useSignUpForm, useSignUpMutation } from "@/hooks/auth/sign-up";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { SignUpInput } from "@/types/auth/sign-up";
import {
  EmailField,
  PasswordField,
  TextField,
} from "@/components/forms/fields";
import { useTranslations } from "next-intl";
import { useCrudFormState } from "@/hooks/crud";
import { User, UserPlus } from "lucide-react";

interface SignUpFormProps {
  locale: string;
  next: string;
}

export default function SignUpForm({ locale, next }: SignUpFormProps) {
  const t = useTranslations("auth");

  const tCommonLabels = useTranslations("common.form.labels");
  const tCommonPlaceholders = useTranslations("common.form.placeholders");

  const router = useRouter();

  const signUpMutation = useSignUpMutation({
    onSuccess: () => {
      toast.success(t("registerSuccess"), {
        duration: 6000,
      });
      router.push(next);
    },
  });

  const handleSubmit = (payload: SignUpInput) => {
    signUpMutation.mutate({
      ...payload,
      locale,
      next,
    });
  };

  const form = useSignUpForm({
    onSubmit: handleSubmit,
  });

  const { canSubmit } = useCrudFormState({ form });

  const isSubmitting = signUpMutation.isPending;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        form.handleSubmit();
      }}
    >
      <div className="flex flex-col gap-6">
        {/* Name */}
        <form.Field name="name">
          {(field) => (
            <TextField
              field={field}
              label={tCommonLabels("name")}
              icon={User}
              placeholder={tCommonPlaceholders("name")}
              disabled={isSubmitting}
              inputClassName="pl-10"
              required
            />
          )}
        </form.Field>

        {/* Email */}
        <form.Field name="email">
          {(field) => (
            <EmailField
              field={field}
              label={t("email")}
              placeholder="name@example.com"
              disabled={isSubmitting}
              required
            />
          )}
        </form.Field>

        {/* Password */}
        <form.Field name="password">
          {(field) => (
            <PasswordField
              field={field}
              label={t("password")}
              placeholder="••••••••"
              autoComplete="new-password"
              disabled={isSubmitting}
              required
            />
          )}
        </form.Field>

        {/* Confirm Password */}
        <form.Field name="password_confirmation">
          {(field) => (
            <PasswordField
              field={field}
              label={t("confirmPassword")}
              placeholder="••••••••"
              autoComplete="new-password"
              disabled={isSubmitting}
              required
            />
          )}
        </form.Field>

        <Button
          type="submit"
          disabled={!canSubmit || isSubmitting}
          className="w-full"
        >
          {isSubmitting ? (
            <>
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
              {t("signingUp")}
            </>
          ) : (
            <>
              <UserPlus className="h-4 w-4" />
              {t("register")}
            </>
          )}
        </Button>
      </div>

      <div className="mt-4 text-center text-sm">
        Already have an account?{" "}
        <Link href="/auth/login" className="underline underline-offset-4">
          Login
        </Link>
      </div>
    </form>
  );
}
