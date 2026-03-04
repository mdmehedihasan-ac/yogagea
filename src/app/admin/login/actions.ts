"use server";

import { signIn } from "@/auth";
import { AuthError } from "next-auth";

export async function loginAction(
  username: string,
  password: string
): Promise<{ success: boolean; error?: string }> {
  try {
    await signIn("credentials", {
      username,
      password,
      redirect: false,
    });
    return { success: true };
  } catch (error) {
    if (error instanceof AuthError) {
      return { success: false, error: "Username o password non corretti." };
    }
    throw error;
  }
}
