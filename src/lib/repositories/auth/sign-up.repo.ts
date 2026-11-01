import { SignUpInput, SignUpResponse } from "@/types/auth/sign-up";
import { createClient } from "@/lib/supabase/server";
import { HttpError } from "@/lib/errors/http-error";

export async function signUpRepo(
  payload: SignUpInput,
  emailRedirectTo?: string,
): Promise<SignUpResponse> {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.signUp({
    email: payload.email,
    password: payload.password,
    options: {
      emailRedirectTo,
      data: {
        name: payload.name,
      },
    },
  });

  if (error) {
    throw new HttpError(error.message, 400);
  }

  return {
    hasSession: Boolean(data.session),
    userId: data.user?.id,
    email: data.user?.email,
  };
}
