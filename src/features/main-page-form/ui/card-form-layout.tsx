"use client";

import { useState } from "react";
import { EditMainPageForm } from "./edit-main-page-form";
import { PageCard } from "./page-card";

export function CardFormLayout({
  pageData,
  revalidatePagePath,
}: {
  pageData: MainPage;
  revalidatePagePath: string[];
}) {
  const [isEdit, setIsEdit] = useState(false);

  return isEdit ? (
    <EditMainPageForm
      revalidatePagePath={revalidatePagePath}
      page={pageData}
      changeState={setIsEdit}
    />
  ) : (
    <PageCard data={pageData} changeState={setIsEdit} />
  );
}
