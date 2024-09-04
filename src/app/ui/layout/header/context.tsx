"use client"
import { useState, useEffect, createContext, useContext } from "react";

type HeaderContext = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const HeaderContext = createContext<HeaderContext>({} as HeaderContext);

export default function HeaderProvider({children}: {children: React.ReactNode}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.removeProperty("overflow")
    } 
  }, [open])


  return (
    <HeaderContext.Provider value={{open, setOpen}}>
      {children}
    </HeaderContext.Provider>
  )
}

export function useHeaderContext() {
  return useContext(HeaderContext)
}