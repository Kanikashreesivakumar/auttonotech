import Image from "next/image"
import Link from "next/link"
import SectionHeading from "@/components/section-heading"
import ProjectCard from "@/components/project-card"
import ScrollReveal from "@/components/scroll-reveal"

export default function ProjectsPage() {
  const projects = [
    {
      title: "Autonomous Vehicle Sensor Integration",
      description:
        "Development of an integrated sensor system for autonomous vehicles, combining LiDAR, radar, and camera technologies for enhanced perception and safety.",
      imageUrl: "/placeholder.svg?height=400&width=600",
      category: "Automotive",
      href: "/projects/autonomous-vehicle-sensor-integration",
    },
    {
      title: "Aircraft Structural Analysis System",
      description:
        "Creation of an advanced structural analysis system for aircraft design, enabling more efficient and safer aircraft structures through computational modeling.",
      imageUrl: "/placeholder.svg?height=400&width=600",
      category: "Aerospace",
      href: "/projects/aircraft-structural-analysis-system",
    },
    {
      title: "Secure Communications Network",
      description:
        "Implementation of a highly secure communications network for defense applications, featuring advanced encryption and anti-jamming capabilities.",
      imageUrl: "/placeholder.svg?height=400&width=600",
      category: "Defense",
      href: "/projects/secure-communications-network",
    },
    {
      title: "Heavy Machinery Automation",
      description:
        "Automation of heavy machinery operations in mining and construction, improving safety, efficiency, and precision through advanced control systems.",
      imageUrl: "/placeholder.svg?height=400&width=600",
      category: "Heavy Engineering",
      href: "/projects/heavy-machinery-automation",
    },
    {
      title: "Renewable Energy Integration Platform",
      description:
        "Development of a platform for integrating multiple renewable energy sources into existing power grids, optimizing energy distribution and storage.",
      imageUrl: "/placeholder.svg?height=400&width=600",
      category: "Energy",
      href: "/projects/renewable-energy-integration-platform",
    },
    {
      title: "Manufacturing Process Optimization",
      description:
        "Optimization of manufacturing processes for a major automotive manufacturer, resulting in 30% increased efficiency and 25% reduced waste.",
      imageUrl: "/placeholder.svg?height=400&width=600",
      category: "Automotive",
      href: "/projects/manufacturing-process-optimization",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image src="/placeholder.svg?height=600&width=1920" alt="Projects" fill className="object-cover" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Projects</h1>
            <p className="text-xl text-white/90">Innovative solutions that drive results across industries</p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Case Studies"
            subtitle="Explore our successful projects across various industries"
            centered
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {projects.map((project, index) => (
              <ScrollReveal key={index} delay={(((index % 3) + 1) * 100) as 100 | 200 | 300}>
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  imageUrl={project.imageUrl}
                  category={project.category}
                  href={project.href}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            title="Ready to Start Your Project?"
            subtitle="Let's discuss how we can help you achieve your goals"
            centered
          />

          <Link
            href="/contact"
            className="bg-primary text-white px-8 py-3 rounded-md hover:bg-primary/90 transition-colors duration-200 inline-block"
          >
            Contact Our Team
          </Link>
        </div>
      </section>
    </>
  )
}

