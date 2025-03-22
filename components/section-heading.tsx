"use client"

import { motion } from "framer-motion"

interface SectionHeadingProps {
  title: string
  subtitle?: string
  centered?: boolean
  light?: boolean
  gradient?: boolean
}

export default function SectionHeading({
  title,
  subtitle,
  centered = false,
  light = false,
  gradient = false,
}: SectionHeadingProps) {
  return (
    <div className={`space-y-4 mb-12 ${centered ? "text-center" : ""}`}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`text-3xl md:text-4xl font-bold ${
          light ? "text-white" : gradient ? "gradient-text" : "text-gray-dark"
        }`}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className={`text-lg ${light ? "text-white/80" : "text-gray-600"} max-w-3xl ${centered ? "mx-auto" : ""}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}

