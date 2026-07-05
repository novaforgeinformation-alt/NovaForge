'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

type Ctx = {
  open: boolean
  setOpen: (v: boolean) => void
}

const ContactCtx = createContext<Ctx>({ open: false, setOpen: () => {} })

export function ContactProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)
  return <ContactCtx.Provider value={{ open, setOpen }}>{children}</ContactCtx.Provider>
}

export function useContact() {
  return useContext(ContactCtx)
}
