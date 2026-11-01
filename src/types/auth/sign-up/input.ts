import { signUpSchema } from "@/lib/validations/auth/sign-up.schema";
import z from "zod";

export type SignUpInput = z.infer<typeof signUpSchema>;
