"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

interface ProjectCardProps {
  title: string
  description: string
  imageUrl: string
  href: string
  category: string
}

export default function ProjectCard({ title, description, imageUrl, href, category }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="project-card"
    >
      <div className="relative h-64 overflow-hidden">
        <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.5 }} className="project-image">
          <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover" />
        </motion.div>
        <div className="absolute top-4 left-4 z-10">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-primary/90 text-white text-xs px-3 py-1 rounded-full"
          >
            {category}
          </motion.span>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileHover={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 hover:opacity-100"
        >
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-sm text-white/80 mb-4 line-clamp-2">{description}</p>
            <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
              <Link href={href} className="inline-flex items-center text-white font-medium hover:underline group">
                View Project
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
      </div>
      <div className="p-6 bg-white">
        <h3 className="text-xl font-bold text-gray-dark mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
          <Link href={href} className="inline-flex items-center text-primary font-medium hover:underline group">
            View Project
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

