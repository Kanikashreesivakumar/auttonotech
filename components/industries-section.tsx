import { Car, Plane, Shield, HardHat, Zap } from "lucide-react"
import IndustryCard from "./industry-card"

export default function IndustriesSection() {
  const industries = [
    {
      title: "Automotive",
      description: "Innovative solutions for the automotive industry, from design to manufacturing and testing.",
      icon: Car,
      href: "/industries#automotive",
      imageSrc: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Aerospace",
      description: "Cutting-edge aerospace engineering services for commercial and defense applications.",
      icon: Plane,
      href: "/industries#aerospace",
      imageSrc: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Defense",
      description: "Advanced defense technologies and systems for national security and defense applications.",
      icon: Shield,
      href: "/industries#defense",
      imageSrc: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Heavy Engineering",
      description: "Comprehensive engineering solutions for heavy machinery and industrial equipment.",
      icon: HardHat,
      href: "/industries#heavy-engineering",
      imageSrc: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Energy",
      description: "Sustainable energy solutions for conventional and renewable energy sectors.",
      icon: Zap,
      href: "/industries#energy",
      imageSrc: "/placeholder.svg?height=400&width=600",
    },
  ]

  return (
    <section className="section-padding bg-gray-50" id="industries">
      <div className="container mx-auto container-padding">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Industries We Serve</h2>
          <p className="text-lg text-gray-700">
            We provide specialized engineering and consulting services across a diverse range of industries, delivering
            tailored solutions to meet specific challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <IndustryCard
              key={index}
              title={industry.title}
              description={industry.description}
              icon={industry.icon}
              href={industry.href}
              imageSrc={industry.imageSrc}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

