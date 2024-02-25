import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { connectToDatabase } from "@utils/database";
import User from '@models/user';

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    async session({session}) {

    },
    async signIn ({profile}) 
    {
        try {
            await connectToDatabase();
            const userExists = await User.findOne({email: profile.email});
            if (!userExists) {
                await User.create({
                    email: profile.email,
                    username: profile.name.replace("","").toLowerCase(),
                    image: profile.picture
                });
            }

        } catch (error) {
            console.log(error);
            return false;
        }
    }
});

export {handler as GET, handler as POST};