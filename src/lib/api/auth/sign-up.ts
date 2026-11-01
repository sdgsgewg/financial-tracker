import { SignUpInput, SignUpResponse } from "@/types/auth/sign-up";
import { apiClient } from "../client";
import { ApiResponse } from "@/types/api";

export interface SignUpPayload extends SignUpInput {
  locale: string;
  next: string;
}

export const signUpUser = async (
  payload: SignUpPayload,
): Promise<SignUpResponse> => {
  const { data } = await apiClient.post<ApiResponse<SignUpResponse>>(
    "/auth/sign-up",
    payload,
  );

  return data.data;
};
