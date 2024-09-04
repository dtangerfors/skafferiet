"use client"
import { AnimatePresence } from "framer-motion";
import HeaderProvider from "./ui/layout/header/context";

export function AnimationPresence({ children }: { children: React.ReactNode }) {
  return (
    <HeaderProvider>
      {children}
    </HeaderProvider>
  )
}