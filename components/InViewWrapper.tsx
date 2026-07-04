'use client'

import { useRef, useEffect } from 'react'

type Props = {
  children: React.ReactNode
  threshold?: number
  rootMargin?: string
  staggerDelay?: number
  animation?: 'fade-up' | 'reveal-card'
  className?: string
}

export default function InViewWrapper({
  children,
  threshold = 0.1,
  rootMargin = '0px 0px -50px 0px',
  staggerDelay = 0,
  animation = 'fade-up',
  className = '',
}: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('is-visible')
            }, staggerDelay * i)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold, rootMargin }
    )

    if (animation === 'reveal-card' && staggerDelay > 0) {
      Array.from(el.children).forEach((child) => observer.observe(child))
    } else {
      observer.observe(el)
    }

    return () => observer.disconnect()
  }, [threshold, rootMargin, staggerDelay, animation])

  const baseClass = animation === 'reveal-card' ? 'reveal-card' : 'fade-up'

  return (
    <div
      ref={ref}
      className={`${animation === 'reveal-card' ? '' : baseClass} ${className}`}
    >
      {children}
    </div>
  )
}
