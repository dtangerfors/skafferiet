"use client"
import { useState } from "react";
import Link from "next/link";
import { Nav } from "./Nav";
import { Hamburger } from "./Hamburger";
import MegaMenu from "./MegaMenu";
import { MenuProps } from "@/app/layout";

export function Header({menuItems}: {menuItems: MenuProps}) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky z-50 top-0 w-full h-14 bg-tertiary-100 lg:bg-white px-6 md:h-16 lg:border-b lg:border-tertiary-100">
      <div className="flex items-center justify-between max-w-screen-lg mx-auto">
        <Link href="/">
          <span className="font-script text-primary text-xl">Daniels Skafferi</span>
        </Link>
        <div className="ml-auto hidden lg:block">
          <Nav />
        </div>
        <div className="h-full block">
        <Hamburger open={open} setOpen={setOpen} />
        </div>
      </div>
      <MegaMenu open={open} menuItems={menuItems} />
    </header>
  )
}