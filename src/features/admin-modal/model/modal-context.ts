"use client";

import { createCustomContext } from "@/shared/lib/create-custom-context";

const { ContextProvider, useCustomContext } = createCustomContext(false);

export const ModalContextProvider = ContextProvider;
export const useModalContext = useCustomContext;
