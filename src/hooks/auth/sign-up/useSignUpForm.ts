"use client";

import { useForm } from "@tanstack/react-form";

import { signUpSchema } from "@/lib/validations/auth/sign-up.schema";
import { SignUpInput } from "@/types/auth/sign-up";

interface UseSignUpFormOptions {
  onSubmit: (payload: SignUpInput) => void | Promise<void>;
}

const defaultValues: SignUpInput = {
  name: "",
  email: "",
  password: "",
  password_confirmation: "",
};

export function useSignUpForm({ onSubmit }: UseSignUpFormOptions) {
  const form = useForm({
    defaultValues,

    validators: {
      onChange: signUpSchema,
      onSubmit: signUpSchema,
    },

    onSubmit: async ({ value }) => {
      await onSubmit(value);
    },
  });

  return form;
}
