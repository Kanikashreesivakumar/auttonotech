"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white"
        >
          <div className="relative w-full h-full flex flex-col items-center justify-center">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-white to-blue-50 animate-gradient-move"></div>

            {/* Logo animation */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative w-32 h-32 mb-6 z-10"
            >
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotateZ: [0, 5, 0, -5, 0],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 2,
                  ease: "easeInOut",
                }}
              >
                <Image src="Auttono.png" alt="Auttonotech Logo" fill className="object-contain" />
              </motion.div>
            </motion.div>

            {/* Text animation */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-xl md:text-2xl font-semibold text-primary z-10"
            >
              <motion.span
                animate={{
                  opacity: [1, 0.7, 1],
                  scale: [1, 1.02, 1],
                }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
                className="gradient-text"
              >
                Empowering Engineering Excellence...
              </motion.span>
            </motion.h2>

            {/* Loading dots */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mt-8 flex space-x-3 z-10"
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 0.8,
                    delay: i * 0.2,
                    ease: "easeInOut",
                  }}
                  className="w-3 h-3 rounded-full bg-primary"
                ></motion.div>
              ))}
            </motion.div>

            {/* Circular animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.7, 0] }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 2,
                ease: "easeInOut",
              }}
              className="absolute w-64 h-64 rounded-full border-2 border-primary/20 z-0"
            ></motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: [0, 0.5, 0],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 3,
                ease: "easeInOut",
              }}
              className="absolute w-96 h-96 rounded-full border-2 border-primary/10 z-0"
            ></motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

