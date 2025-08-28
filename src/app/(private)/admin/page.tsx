import NextAuth from "next-auth";
import { SignOutButton } from "@/features/auth";
import { nextAuthConfig } from "@/entities/session";

export default async function Page() {
  const { auth } = NextAuth(nextAuthConfig);
  const session = await auth();

  return (
    <>
      <h1 className="mb-5">Welcome, {session?.user?.name}</h1>
      <SignOutButton />
    </>
  );
}
