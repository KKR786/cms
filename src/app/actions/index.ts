'use server'

import { signIn, signOut } from "@/auth";

export async function socialLogin ( formData: any ) {
    const action = formData.get('action');
    await signIn(action, { redirectTo: '/' });
}

export async function credentialLogin ( formData: any ) {
    try {
        const response = await signIn("credentials", {
          email: formData.get("email"),
          password: formData.get("password"),
          redirect: false,
        });
        return response;
      } catch (err) {
        throw err;
      }
}

export async function logout () {
    await signOut({ redirectTo: '/login' });
}