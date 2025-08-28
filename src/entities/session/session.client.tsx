"use client";

import { SessionProvider, useSession } from "next-auth/react";

export const useAppSession = useSession;

export function NextAuthSessionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SessionProvider>{children}</SessionProvider>;
}
