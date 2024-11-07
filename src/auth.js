import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import credentials from "next-auth/providers/credentials"
import User from "@/models/user"
import bcrypt from "bcryptjs"
 
export const { auth, handlers: { GET, POST }, signIn, signOut } = NextAuth({
    session: {
        strategy: 'jwt'
    },
  providers: [
    credentials({
        credentials: {
            email: {},
            password: {},
        },
        async authorize(credentials, req) {
            if( credentials === null ) return null;

            try {
                const user = await User.findOne({
                    email: credentials?.email
                })
                console.log(user);
                if (user) {
                    const isMatch = await bcrypt.compare(
                        credentials.password,
                        user.password
                    );

                    if (isMatch) {
                        return user;
                    } else {
                        throw new Error("Email or Password is not correct");
                    }
                } else {
                    throw new Error("User not found");
                }
            } catch (error) {
                throw new Error(error);
            }
        }
    }),
    Google({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,

        authorization: {
            params: {
                prompt: "consent",
                access_type: "offline",
                response_type: "code",
            }
        }
    })
],
})