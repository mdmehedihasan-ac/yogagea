"use server";

import { signIn } from "@/auth";
import { AuthError } from "next-auth";

export async function loginAction(
  username: string,
  password: string,
  callbackUrl: string
): Promise<{ error: string } | void> {
  try {
    await signIn("credentials", { username, password, redirectTo: callbackUrl });
  } catch (error) {
    if (error instanceof AuthError) {
      return { error: "Username o password non corretti." };
    }
    // signIn lancia un redirect quando va a buon fine — lo ri-throwsiamo
    throw error;
  }
}
