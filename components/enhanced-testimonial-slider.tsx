"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

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
      "Auttonotech has been instrumental in helping us optimize our manufacturing processes. Their engineering expertise and innovative solutions have significantly improved our operational efficiency.",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    position: "Director of Operations",
    company: "Aerospace Dynamics",
    content:
      "Working with Auttonotech has been a game-changer for our aerospace projects. Their attention to detail and commitment to excellence is unmatched in the industry.",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 3,
    name: "Michael Chen",
    position: "VP of Engineering",
    company: "Global Motors",
    content:
      "The team at Auttonotech provided us with cutting-edge solutions that helped us stay ahead of the competition. Their deep understanding of automotive engineering is truly impressive.",
    avatar: "/placeholder.svg?height=80&width=80",
  },
]

const EnhancedTestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isAnimating, setIsAnimating] = useState(false)
  const sliderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (isAutoPlaying) {
      interval = setInterval(() => {
        handleNext()
      }, 5000)
    }

    return () => clearInterval(interval)
  }, [isAutoPlaying, currentIndex])

  const handlePrev = () => {
    if (isAnimating) return

    setIsAutoPlaying(false)
    setIsAnimating(true)

    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex - 1 + testimonials.length) % testimonials.length
      return newIndex
    })

    setTimeout(() => {
      setIsAnimating(false)
    }, 500)
  }

  const handleNext = () => {
    if (isAnimating) return

    setIsAnimating(true)

    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % testimonials.length
      return newIndex
    })

    setTimeout(() => {
      setIsAnimating(false)
    }, 500)
  }

  const handleDotClick = (index: number) => {
    if (isAnimating || index === currentIndex) return

    setIsAutoPlaying(false)
    setIsAnimating(true)

    setCurrentIndex(index)

    setTimeout(() => {
      setIsAnimating(false)
    }, 500)
  }

  return (
    <div className="relative overflow-hidden bg-white rounded-lg shadow-md p-6 md:p-10">
      <div ref={sliderRef} className="relative h-full">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`transition-all duration-500 absolute w-full ${
              index === currentIndex
                ? "opacity-100 translate-x-0"
                : index < currentIndex
                  ? "opacity-0 -translate-x-full"
                  : "opacity-0 translate-x-full"
            }`}
            style={{ zIndex: index === currentIndex ? 1 : 0 }}
          >
            <div className="flex flex-col md:flex-row items-center">
              <div className="mb-6 md:mb-0 md:mr-8">
                <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-primary/20">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div>
                <div className="mb-4">
                  <svg className="h-8 w-8 text-primary/30" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                </div>
                <p className="text-gray-600 italic mb-6">{testimonial.content}</p>
                <div>
                  <h4 className="font-bold text-secondary">{testimonial.name}</h4>
                  <p className="text-gray-500">
                    {testimonial.position}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center mt-8">
        <div className="flex space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-primary w-6" : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        <div className="flex space-x-2">
          <button
            onClick={handlePrev}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200 disabled:opacity-50"
            aria-label="Previous testimonial"
            disabled={isAnimating}
          >
            <ChevronLeft className="h-5 w-5 text-secondary" />
          </button>
          <button
            onClick={handleNext}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200 disabled:opacity-50"
            aria-label="Next testimonial"
            disabled={isAnimating}
          >
            <ChevronRight className="h-5 w-5 text-secondary" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default EnhancedTestimonialSlider

