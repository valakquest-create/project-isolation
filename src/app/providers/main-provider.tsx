"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { NextAuthSessionProvider } from "@/entities/session";
import { queryClient } from "@/shared/api/query-client";

export function MainProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <NextAuthSessionProvider>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </NextAuthSessionProvider>
  );
}
