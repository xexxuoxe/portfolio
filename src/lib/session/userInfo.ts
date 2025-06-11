// lib/authOptions.ts
import type { AuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions: AuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.AUTH_GITHUB_ID as string,
      clientSecret: process.env.NEXTAUTH_SECRET as string,
    }),
  ],
  secret: process.env.NEXTAUTH_JWT,
};