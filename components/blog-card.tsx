"use client"

import Image from "next/image"
import Link from "next/link"
import { Calendar, User } from "lucide-react"
import { motion } from "framer-motion"

interface BlogCardProps {
  title: string
  excerpt: string
  imageUrl: string
  href: string
  date: string
  author: string
  category: string
}

export default function BlogCard({ title, excerpt, imageUrl, href, date, author, category }: BlogCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="blog-card h-full flex flex-col"
    >
      <div className="blog-image relative h-48 overflow-hidden">
        <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover" />
        <div className="absolute top-4 left-4">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-primary/90 text-white text-xs px-3 py-1 rounded-full"
          >
            {category}
          </motion.span>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex items-center text-sm text-gray-500 mb-2 space-x-4"
        >
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{date}</span>
          </div>
          <div className="flex items-center">
            <User className="h-4 w-4 mr-1" />
            <span>{author}</span>
          </div>
        </motion.div>
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl font-bold text-gray-dark mb-2"
        >
          {title}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-gray-600 mb-4 line-clamp-3 flex-grow"
        >
          {excerpt}
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          whileHover={{ x: 5 }}
          className="mt-auto"
        >
          <Link href={href} className="inline-flex items-center text-primary font-medium hover:underline group">
            Read More
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

