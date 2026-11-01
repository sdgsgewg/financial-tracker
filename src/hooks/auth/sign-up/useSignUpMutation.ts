"use client";

import { useMutation } from "@tanstack/react-query";
import { useTranslations } from "next-intl";

import { signUpUser, SignUpPayload } from "@/lib/api/auth/sign-up";
import { getApiErrorMessage } from "@/lib/crud/error";
import { toast } from "sonner";

interface UseSignUpMutationOptions {
  onSuccess?: (data: Awaited<ReturnType<typeof signUpUser>>) => void;
  onError?: (error: unknown) => void;
}

export function useSignUpMutation(options?: UseSignUpMutationOptions) {
  const t = useTranslations("auth");

  return useMutation({
    mutationFn: (payload: SignUpPayload) => signUpUser(payload),

    onSuccess: (data) => {
      options?.onSuccess?.(data);
    },

    onError: (error) => {
      const message = getApiErrorMessage(error) ?? t("errorOccurred");

      toast.error(message);

      options?.onError?.(error);
    },
  });
}
