'use client'

import { useState, useEffect } from 'react'

export default function Nav() {
  const [overDark, setOverDark] = useState(false)

  useEffect(() => {
    const checkScroll = () => {
      const process = document.getElementById('process')
      if (!process) return
      const processTop = process.offsetTop
      const processBottom = processTop + process.offsetHeight
      const navHeight = 72
      const scrollPos = window.scrollY + navHeight
      setOverDark(scrollPos > processTop && scrollPos < processBottom)
    }

    checkScroll()
    window.addEventListener('scroll', checkScroll, { passive: true })
    return () => window.removeEventListener('scroll', checkScroll)
  }, [])

  return (
    <nav
      className={`sticky top-0 z-50 flex justify-between items-center w-full px-margin-desktop py-4 max-w-container-max mx-auto transition-colors duration-300 ${
        overDark
          ? 'bg-primary/90 backdrop-blur-sm text-on-primary border-b border-on-primary-container/20'
          : 'bg-surface/90 backdrop-blur-sm text-on-surface border-b border-outline-variant'
      }`}
    >
      <div className="flex items-center gap-4">
        <div
          className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-[#1a6b50] flex items-center justify-center text-on-primary font-headline-md text-sm font-bold"
          aria-label="NovaForge Logo"
        >
          NF
        </div>
        <span className={`font-headline-md font-bold ${overDark ? 'text-white' : 'text-primary'}`}>
          NovaForge
        </span>
      </div>
      <div className="hidden md:flex items-center gap-8 font-body-md text-body-md">
        <a
          className={overDark ? 'text-white/90 font-semibold border-b-2 border-white pb-1' : 'text-primary font-semibold border-b-2 border-primary pb-1'}
          href="#home"
        >
          Home
        </a>
        <a
          className={overDark ? 'text-white/70 hover:text-white transition-colors' : 'text-on-surface-variant hover:text-primary transition-colors'}
          href="#services"
        >
          Services
        </a>
        <a
          className={overDark ? 'text-white/70 hover:text-white transition-colors' : 'text-on-surface-variant hover:text-primary transition-colors'}
          href="#process"
        >
          Process
        </a>
        <a
          className={overDark ? 'text-white/70 hover:text-white transition-colors' : 'text-on-surface-variant hover:text-primary transition-colors'}
          href="#about"
        >
          About
        </a>
        <a
          className={overDark ? 'text-white/70 hover:text-white transition-colors' : 'text-on-surface-variant hover:text-primary transition-colors'}
          href="#contact"
        >
          Contact
        </a>
      </div>
      <button
        className={`px-6 py-2.5 rounded-lg font-body-md transition-all active:opacity-80 ${
          overDark
            ? 'bg-white text-primary hover:bg-white/90'
            : 'bg-primary text-on-primary hover:bg-opacity-90'
        }`}
      >
        Book a Discovery Call
      </button>
    </nav>
  )
}
