import { SignUpResponse } from "@/types/auth/sign-up";
import { signUpSchema } from "@/lib/validations/auth/sign-up.schema";
import { signUpRepo } from "@/lib/repositories/auth/sign-up.repo";

export async function signUpService(
  input: unknown,
  emailRedirectTo?: string,
): Promise<SignUpResponse> {
  const parsed = signUpSchema.parse(input);

  return await signUpRepo(parsed, emailRedirectTo);
}
