"use client";

import "../globals.css";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex justify-center items-center min-h-[100vh]">
      {children}
    </main>
  );
}
