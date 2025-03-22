"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface Testimonial {
  id: number
  name: string
  position: string
  company: string
  content: string
  avatar: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "John Smith",
    position: "CTO",
    company: "TechCorp Inc.",
    content:
      "Auttonotech has been instrumental in helping us optimize our business processes. Their BPO services have significantly improved our operational efficiency and reduced costs by over 30%.",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    position: "HR Director",
    company: "Global Enterprises",
    content:
      "The HRO services provided by Auttonotech have transformed our human resources operations. Their team's expertise and dedication to excellence is unmatched in the industry. We've seen a 40% improvement in recruitment efficiency.",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 3,
    name: "Michael Chen",
    position: "CEO",
    company: "Innovate Solutions",
    content:
      "We've been working with Auttonotech for our KPO needs, and they've consistently delivered high-quality results. Their analytical capabilities and industry knowledge have been invaluable to our business growth strategy.",
    avatar: "/placeholder.svg?height=80&width=80",
  },
]

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [direction, setDirection] = useState(0) // -1 for left, 1 for right

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (isAutoPlaying) {
      interval = setInterval(() => {
        setDirection(1)
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
      }, 5000)
    }

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const handlePrev = () => {
    setIsAutoPlaying(false)
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setIsAutoPlaying(false)
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const handleDotClick = (index: number) => {
    if (index === currentIndex) return

    setIsAutoPlaying(false)
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
  }

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  return (
    <div className="relative overflow-hidden bg-white rounded-lg shadow-lg p-6 md:p-10">
      <div className="absolute top-6 left-6 text-primary/20">
        <Quote size={60} />
      </div>

      <AnimatePresence custom={direction} mode="wait">
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.5 }}
          className="w-full relative z-10"
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="mb-6 md:mb-0 md:mr-8">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-primary/20"
              >
                <Image
                  src={testimonials[currentIndex].avatar || "/placeholder.svg"}
                  alt={testimonials[currentIndex].name}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
            <div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-gray-600 italic mb-6 text-lg"
              >
                "{testimonials[currentIndex].content}"
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <h4 className="font-bold text-xl text-gray-dark">{testimonials[currentIndex].name}</h4>
                <p className="text-primary font-medium">
                  {testimonials[currentIndex].position}, {testimonials[currentIndex].company}
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="flex justify-between items-center mt-8">
        <div className="flex space-x-2">
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => handleDotClick(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-primary w-6" : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        <div className="flex space-x-2">
          <motion.button
            onClick={handlePrev}
            whileHover={{ scale: 1.1, backgroundColor: "#0D47A1", color: "#FFFFFF" }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5 text-gray-dark" />
          </motion.button>
          <motion.button
            onClick={handleNext}
            whileHover={{ scale: 1.1, backgroundColor: "#0D47A1", color: "#FFFFFF" }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5 text-gray-dark" />
          </motion.button>
        </div>
      </div>
    </div>
  )
}

