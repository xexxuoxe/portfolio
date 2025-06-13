import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

const authOptions = {
    providers: [
        GithubProvider({
            clientId: process.env.AUTH_GITHUB_ID as string,
            clientSecret: process.env.NEXTAUTH_SECRET as string,
        }),
    ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };