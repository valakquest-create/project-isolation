import { PrismaAdapter } from "@auth/prisma-adapter";
import { NextAuthConfig } from "next-auth";
import Google from "next-auth/providers/google";
import { dbClient } from "@/shared/lib/db";

export const nextAuthConfig: NextAuthConfig = {
  adapter: PrismaAdapter(dbClient),
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ profile }) {
      const adminEmails = process.env.ADMIN_EMAILS?.split(",");

      return adminEmails?.includes(profile?.email ?? "") as boolean;
    },
  },
  secret: process.env.AUTH_SECRET,
};
