"use client"

import { useRef, useEffect, useState, type ReactNode } from "react"

interface ScrollRevealProps {
  children: ReactNode
  animation?: "fade-in-up" | "fade-in-left" | "fade-in-right"
  delay?: 100 | 200 | 300 | 400 | 500
  threshold?: number
}

const ScrollReveal = ({ children, animation = "fade-in-up", delay = 0, threshold = 0.1 }: ScrollRevealProps) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.disconnect()
      }
    }
  }, [threshold])

  return (
    <div
      ref={ref}
      className={`${isVisible ? `animate-${animation} animate-delay-${delay}` : "opacity-0"}`}
      style={{ willChange: "opacity, transform" }}
    >
      {children}
    </div>
  )
}

export default ScrollReveal

