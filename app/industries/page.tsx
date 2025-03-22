import Image from "next/image"
import Link from "next/link"
import { Car, Plane, Shield, Cpu, Zap } from "lucide-react"
import SectionHeading from "@/components/section-heading"
import ScrollReveal from "@/components/scroll-reveal"

export default function IndustriesPage() {
  const industries = [
    {
      id: "automotive",
      title: "Automotive",
      description:
        "We provide comprehensive engineering and technology solutions for the automotive industry, from concept design to manufacturing optimization. Our expertise includes vehicle systems integration, powertrain development, and autonomous driving technologies.",
      icon: Car,
      imageUrl: "/placeholder.svg?height=600&width=800",
      services: [
        "Vehicle Systems Engineering",
        "Powertrain Development",
        "Autonomous Driving Technologies",
        "Manufacturing Process Optimization",
        "Quality Control Systems",
      ],
    },
    {
      id: "aerospace",
      title: "Aerospace",
      description:
        "Our aerospace solutions combine cutting-edge technology with rigorous engineering practices to meet the demanding requirements of the industry. We specialize in aircraft systems design, avionics integration, and structural analysis.",
      icon: Plane,
      imageUrl: "/placeholder.svg?height=600&width=800",
      services: [
        "Aircraft Systems Design",
        "Avionics Integration",
        "Structural Analysis",
        "Flight Control Systems",
        "Certification Support",
      ],
    },
    {
      id: "defense",
      title: "Defense",
      description:
        "We deliver advanced defense systems and security solutions that meet the highest standards of reliability and performance. Our expertise includes command and control systems, secure communications, and tactical equipment design.",
      icon: Shield,
      imageUrl: "/placeholder.svg?height=600&width=800",
      services: [
        "Command and Control Systems",
        "Secure Communications",
        "Tactical Equipment Design",
        "Cybersecurity Solutions",
        "Logistics and Supply Chain Optimization",
      ],
    },
    {
      id: "heavy-engineering",
      title: "Heavy Engineering",
      description:
        "We provide robust engineering solutions for heavy machinery and equipment, focusing on durability, efficiency, and safety. Our services include structural design, hydraulic systems, and automation integration.",
      icon: Cpu,
      imageUrl: "/placeholder.svg?height=600&width=800",
      services: [
        "Structural Design",
        "Hydraulic Systems",
        "Automation Integration",
        "Equipment Reliability Analysis",
        "Safety Systems Design",
      ],
    },
    {
      id: "energy",
      title: "Energy",
      description:
        "Our energy solutions focus on sustainability, efficiency, and reliability. We work with conventional and renewable energy sources to optimize production, distribution, and consumption systems.",
      icon: Zap,
      imageUrl: "/placeholder.svg?height=600&width=800",
      services: [
        "Renewable Energy Systems",
        "Power Generation Optimization",
        "Energy Distribution Networks",
        "Energy Storage Solutions",
        "Efficiency Improvement Programs",
      ],
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image src="/placeholder.svg?height=600&width=1920" alt="Industries" fill className="object-cover" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Industries We Serve</h1>
            <p className="text-xl text-white/90">Specialized expertise and innovative solutions across key sectors</p>
          </div>
        </div>
      </section>

      {/* Industries Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {industries.map((industry, index) => (
              <ScrollReveal animation={index % 2 === 0 ? "fade-in-left" : "fade-in-right"} key={index}>
                <div
                  id={industry.id}
                  className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "md:grid-flow-dense" : ""}`}
                >
                  <div className={index % 2 === 1 ? "md:col-start-2" : ""}>
                    <div className="flex items-center mb-4">
                      <div className="bg-primary/10 p-3 rounded-full mr-4">
                        <industry.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h2 className="text-3xl font-bold text-secondary">{industry.title}</h2>
                    </div>

                    <p className="text-gray-600 mb-6">{industry.description}</p>

                    <h3 className="text-xl font-semibold text-secondary mb-4">Our Services</h3>
                    <ul className="space-y-2 mb-8">
                      {industry.services.map((service, serviceIndex) => (
                        <li key={serviceIndex} className="flex items-start">
                          <svg
                            className="h-6 w-6 text-primary mr-2 flex-shrink-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{service}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/contact"
                      className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors duration-200 inline-block"
                    >
                      Discuss Your Project
                    </Link>
                  </div>

                  <div
                    className={`relative h-96 rounded-lg overflow-hidden shadow-xl ${
                      index % 2 === 1 ? "md:col-start-1" : ""
                    }`}
                  >
                    <Image
                      src={industry.imageUrl || "/placeholder.svg"}
                      alt={industry.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            title="Need a Custom Solution?"
            subtitle="Our team of experts is ready to help you with your specific requirements"
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

