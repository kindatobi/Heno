"use server";

import { formatError } from "@/lib/utils";
import { signInUserSchema } from "@/lib/validators";
import { SignUpUser } from "@/types";

export default async function signUpUser(data: SignUpUser) {
  try {
    const validatedUser = signInUserSchema.parse(data);
    return { success: "true", message: "User logged in successfully" };
  } catch (error) {
    return { success: "false", message: formatError(error) };
  }
}
