import NextAuth from "next-auth";
import { nextAuthConfig } from "@/entities/session";

const { handlers } = NextAuth(nextAuthConfig);

export const { GET, POST } = handlers;
