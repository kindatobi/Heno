"use server";

import { auth } from "@/lib/auth";
import { formatError } from "@/lib/utils";
import { signInUserSchema, signUpUserSchema } from "@/lib/validators";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

import z from "zod";

export async function signUpUser(data: z.infer<typeof signUpUserSchema>) {
  try {
    const validatedUser = signUpUserSchema.parse(data);

    await auth.api.signUpEmail({
      body: {
        name: validatedUser.name,
        email: validatedUser.email,
        password: validatedUser.password,
      },
    });

    return { success: true, message: "Account created successfully" };
  } catch (error) {
    if (error instanceof Error && error.message === "NEXT_REDIRECT") {
      throw error;
    }
    return { success: false, message: formatError(error) };
  }
}

export async function signInUser(data: z.infer<typeof signInUserSchema>) {
  try {
    const validatedUser = signInUserSchema.parse(data);
    await auth.api.signInEmail({
      body: {
        email: validatedUser.email,
        password: validatedUser.password,
      },
    });
    return { success: true, message: "Account created successfully" };
  } catch (error) {
    if (error instanceof Error && error.message === "NEXT_REDIRECT") {
      throw error;
    }
    return { success: false, message: formatError(error) };
  }
}

export async function signOutUser() {
  await auth.api.signOut({
    headers: await headers(),
  });
  redirect("/");
}
