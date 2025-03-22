import Image from "next/image"
import Link from "next/link"
import type { LucideIcon } from "lucide-react"

interface IndustryCardProps {
  title: string
  description: string
  icon: LucideIcon
  href: string
  imageUrl?: string
}

const IndustryCard = ({ title, description, icon: Icon, href, imageUrl }: IndustryCardProps) => {
  return (
    <div className="parallax-card bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
      {imageUrl && (
        <div className="relative h-48 overflow-hidden">
          <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover" />
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="bg-primary/10 p-3 rounded-full mr-4">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-xl font-bold text-secondary">{title}</h3>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link href={href} className="inline-flex items-center text-primary font-medium hover:underline">
          Learn More
          <svg
            className="ml-2 w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </div>
  )
}

export default IndustryCard

