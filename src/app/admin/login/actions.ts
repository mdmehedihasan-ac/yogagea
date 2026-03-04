"use server";

import { signIn } from "@/auth";
import { AuthError } from "next-auth";

export async function authenticate(
  _prevState: string | undefined,
  formData: FormData
): Promise<string | undefined> {
  try {
    await signIn("credentials", formData);
  } catch (error) {
    if (error instanceof AuthError) {
      return "Username o password non corretti.";
    }
    // IMPORTANT: signIn throws a NEXT_REDIRECT on success — must re-throw it
    throw error;
  }
}
