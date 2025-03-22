"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"

interface DynamicHeroProps {
  title: string
  subtitle: string
  primaryButtonText: string
  primaryButtonLink: string
  secondaryButtonText?: string
  secondaryButtonLink?: string
  backgroundImage: string
}

const DynamicHero = ({
  title,
  subtitle,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  backgroundImage,
}: DynamicHeroProps) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    setIsLoaded(true)

    const handleScroll = () => {
      setScrollPosition(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const parallaxOffset = scrollPosition * 0.4

  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 transition-transform duration-300"
          style={{
            transform: `translateY(${parallaxOffset}px)`,
          }}
        >
          <Image
            src={backgroundImage || "/placeholder.svg"}
            alt="Hero Background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <h1
            className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 transition-all duration-1000 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {title}
          </h1>
          <p
            className={`text-xl text-white/90 mb-8 transition-all duration-1000 delay-300 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {subtitle}
          </p>
          <div
            className={`flex flex-wrap gap-4 transition-all duration-1000 delay-500 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <Link
              href={primaryButtonLink}
              className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              {primaryButtonText}
            </Link>
            {secondaryButtonText && secondaryButtonLink && (
              <Link
                href={secondaryButtonLink}
                className="bg-white text-primary px-6 py-3 rounded-md hover:bg-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                {secondaryButtonText}
              </Link>
            )}
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-8 h-12 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse-slow"></div>
        </div>
      </div>
    </section>
  )
}

export default DynamicHero

