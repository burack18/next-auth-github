import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import TwitterProvider from "next-auth/providers/twitter"
import { getServerSession } from "next-auth"


const authOptions = {
    // Configure one or more authentication providers
    providers: [
        GithubProvider({
            clientId: process.env.NEXTAUTH_GITHUB_CLIENTID!,
            clientSecret: process.env.NEXTAUTH_GITHUB_CLIENTSECRET!,
        }),
        GoogleProvider({
            clientId: process.env.NEXTAUTH_GOOGLE_CLIENT_ID!,
            clientSecret: process.env.NEXTAUTH_GOOGLE_CLIENT_SECRET!
        }),
        TwitterProvider({
            clientId: process.env.NEXTAUTH_TWITTER_CLIENT_ID!,
            clientSecret: process.env.NEXTAUTH_TWITTER_CLIENT_SECRET!
          })
        // ...add more providers here

    ],

    callbacks: {
        async signIn({ user, account, profile, email, credentials }: any) {
            console.log("User", user);
            console.log("account", account);
            return true
        },
        async redirect({ url, baseUrl }: any) {
            return baseUrl
        },
        async session({ session, user, token }: any) {
            console.log("Session Callback - Session:", session);
            console.log("Session Callback - Token:", token);
            return session
        },
        async jwt({ token, user, account, profile, isNewUser }: any) {
            return token
        }
    }
}


const getSession = () => getServerSession({
    secret: process.env.NEXTAUTH_SECRET,
    ...authOptions,
})
const handler = NextAuth({
    secret: process.env.NEXTAUTH_SECRET,
    ...authOptions,
})

export { handler as GET, handler as POST, getSession }