"use client"
import HeaderProvider from "./ui/layout/header/context";

export function HeaderPresence({ children }: { children: React.ReactNode }) {
  return (
    <HeaderProvider>
      {children}
    </HeaderProvider>
  )
}