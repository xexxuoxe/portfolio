
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const handler = NextAuth ({
    providers: [
        GithubProvider({
            clientId: process.env.NEXTAUTH_ID as string,
            clientSecret: process.env.NEXTAUTH_SECRET_KEY as string,
        }),
    ],
    secret : process.env.NEXTAUTH_JWT
});

export {handler as GET, handler as POST}; 