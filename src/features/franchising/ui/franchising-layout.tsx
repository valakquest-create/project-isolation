"use client";

import { useState } from "react";
import { Franchising } from "@/entities/franchising";
import { FranchisingCard } from "./franchising-card";
import { UpdateFranchisingForm } from "./update-franchising-form";

export function FranchisingLayout({
  franchising,
  revalidatePagePath,
}: {
  franchising: Franchising;
  revalidatePagePath: string[];
}) {
  const [isUpdating, setIsUpdating] = useState(false);

  return isUpdating ? (
    <UpdateFranchisingForm
      franchising={franchising}
      revalidatePagePath={revalidatePagePath}
      changeState={setIsUpdating}
    />
  ) : (
    <FranchisingCard franchising={franchising} changeState={setIsUpdating} />
  );
}
