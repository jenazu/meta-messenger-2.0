import NextAuth from "next-auth"
import FacebookProvider from "next-auth/providers/facebook"
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID!,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
    }),
    // ...add more providers here
  ],
  secret: process.env.NEXTAUTH_SECRET!,
  pages: {
    signIn: "/auth/signin"
  }
}
export default NextAuth(authOptions)

// FACEBOOK_CLIENT_ID=699907141751657
// FACEBOOK_CLIENT_SECRET=d78f5ba99cb03bff226df4f0a48149a8