import NextAuth, { AuthOptions } from "next-auth"
import SpotifyProvider from "next-auth/providers/spotify"

export const authOptions: AuthOptions = {
    // Configure one or more authentication providers
    providers: [
        SpotifyProvider({
            clientId: process.env.SpotifyClientID as string,
            clientSecret: process.env.SpotifyClientSecret as string,
            authorization:
                `https://accounts.spotify.com/authorize?scope=${encodeURIComponent('user-read-private user-read-email user-top-read')}`
        }),
        // ...add more providers here
    ],
    callbacks: {
        async jwt({ token, account, profile }) {
            // Persist the OAuth access_token and or the user id to the token right after signin
            if (account) {
                token.accessToken = account.access_token
            }
            console.log("--- TOKEN ----", token)
            return token
        },
        async session({ session, token, user }) {
            // Send properties to the client, like an access_token and user id from a provider.
            session.accessToken = token.accessToken

            console.log("--- SESSION ----", session)
            return session
        }
    }
}
const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
