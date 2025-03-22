"use client"

import Image from "next/image"
import Link from "next/link"
import type { LucideIcon } from "lucide-react"
import { motion } from "framer-motion"

interface ServiceCardProps {
  title: string
  description: string
  icon: LucideIcon
  href: string
  imageUrl?: string
}

export default function ServiceCard({ title, description, icon: Icon, href, imageUrl }: ServiceCardProps) {
  return (
    <motion.div whileHover={{ y: -10 }} className="service-card h-full flex flex-col">
      {imageUrl && (
        <div className="relative h-48 overflow-hidden">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      )}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center mb-4">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="service-icon bg-primary/10 p-3 rounded-full mr-4"
          >
            <Icon className="h-6 w-6 text-primary" />
          </motion.div>
          <h3 className="text-xl font-bold text-gray-dark">{title}</h3>
        </div>
        <p className="text-gray-600 mb-6 flex-grow">{description}</p>
        <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }} className="mt-auto">
          <Link href={href} className="inline-flex items-center text-primary font-medium hover:underline group">
            Learn More
            <svg
              className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  )
}

