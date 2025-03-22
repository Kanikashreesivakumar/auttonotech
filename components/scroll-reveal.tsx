"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface ScrollRevealProps {
  children: ReactNode
  direction?: "up" | "down" | "left" | "right" | "none"
  delay?: number
  duration?: number
  className?: string
  once?: boolean
  initiallyVisible?: boolean
}

export default function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.5,
  className = "",
  once = true,
  initiallyVisible = false,
}: ScrollRevealProps) {
  const getInitialDirection = () => {
    switch (direction) {
      case "up":
        return { opacity: initiallyVisible ? 1 : 0, y: 50 }
      case "down":
        return { opacity: initiallyVisible ? 1 : 0, y: -50 }
      case "left":
        return { opacity: initiallyVisible ? 1 : 0, x: -50 }
      case "right":
        return { opacity: initiallyVisible ? 1 : 0, x: 50 }
      case "none":
        return { opacity: initiallyVisible ? 1 : 0 }
      default:
        return { opacity: initiallyVisible ? 1 : 0, y: 50 }
    }
  }

  const getFinalDirection = () => {
    switch (direction) {
      case "up":
      case "down":
        return { opacity: 1, y: 0 }
      case "left":
      case "right":
        return { opacity: 1, x: 0 }
      case "none":
        return { opacity: 1 }
      default:
        return { opacity: 1, y: 0 }
    }
  }

  return (
    <motion.div
      initial={getInitialDirection()}
      whileInView={getFinalDirection()}
      viewport={{ once, margin: "-100px" }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

