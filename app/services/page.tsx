"use client"

import Image from "next/image"
import Link from "next/link"
import { FileText, Users, BarChart3, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"
import SectionHeading from "@/components/section-heading"
import ScrollReveal from "@/components/scroll-reveal"

export default function ServicesPage() {
  const services = [
    {
      id: "bpo",
      title: "Business Process Outsourcing (BPO)",
      description:
        "Our BPO services help businesses streamline their operations, reduce costs, and improve efficiency by outsourcing non-core business processes. We provide end-to-end solutions tailored to your specific needs.",
      icon: FileText,
      imageUrl: "/servicebpo.jpeg?height=600&width=800",
      features: [
        "Customer Support Services",
        "Data Entry and Processing",
        "Back-Office Operations",
        "Technical Support",
        "Order Processing and Fulfillment",
      ],
    },
    {
      id: "kpo",
      title: "Knowledge Process Outsourcing (KPO)",
      description:
        "Our KPO services provide high-value, knowledge-based services that require specialized domain expertise. We help businesses leverage advanced analytics, research, and industry insights to make informed decisions.",
      icon: BarChart3,
      imageUrl: "/servicekpo.jpeg?height=600&width=800",
      features: [
        "Market Research and Analysis",
        "Business Intelligence",
        "Financial Research and Analysis",
        "Legal Process Outsourcing",
        "Healthcare Analytics",
      ],
    },
    {
      id: "hro",
      title: "Human Resource Outsourcing (HRO)",
      description:
        "Our HRO services help businesses optimize their human resources functions, allowing them to focus on strategic initiatives while we handle the administrative aspects of HR management.",
      icon: Users,
      imageUrl: "/servicehro.jpeg?height=600&width=800",
      features: [
        "Recruitment and Talent Acquisition",
        "Payroll Management",
        "Employee Benefits Administration",
        "Performance Management",
        "Training and Development",
      ],
    },


    {
      id: "Mortgage",
      title: "Mortgage Processing Services",
      description:
        " Our Mortgage Processing Services help lenders streamline their loan operations, ensuring accuracy, compliance, and faster turnaround times while we handle the complex administrative tasks of mortgage management.",
      icon: Users,
      imageUrl: "/mortgage.jpg?height=600&width=800",
      features: [
        " Underwriting Support",
        "Title & Escrow Management",
        "Compliance & Regulatory Adherence",
        " Initial Disclosures & Closing Disclosure Preparation",
        " Lien & Property Tax Research",
        " 24/7 Global Delivery Model",
        "Scalable & Cost-Effective Solutions",
      ],
    },


    {
      id: "IT",
      title: "IT and cloud services",
      description:
        " Our IT & Cloud Management Services help businesses strengthen their technology infrastructure, ensuring secure, efficient, and scalable operations while we manage the complexities of IT systems and cloud environments.",
      icon: Users,
      imageUrl: "/it.jpg?height=600&width=800",
      features: [
        "Remote IT Support",
        "Application & System Support ",
        " Network & Server Management",
        " Cloud Hosting & Management ",
        "Hardware & Software Management",
        " Cybersecurity & Compliance",
        " 24/7 Help Desk Support ",
      ],
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-cta-gradient">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image src="services.jpeg?height=600&width=1920" alt="Services" fill className="object-cover" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        >
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Our Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-xl text-white/90"
            >
              Comprehensive outsourcing solutions tailored to your business needs
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* Services Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <ScrollReveal key={index} direction={index % 2 === 0 ? "left" : "right"} delay={0.2} initiallyVisible={index === 0}>
                <div
                  id={service.id}
                  className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "md:grid-flow-dense" : ""}`}
                >
                  <div className={index % 2 === 1 ? "md:col-start-2" : ""}>
                    <div className="flex items-center mb-4">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="bg-primary/10 p-3 rounded-full mr-4"
                      >
                        <service.icon className="h-6 w-6 text-primary" />
                      </motion.div>
                      <h2 className="text-3xl font-bold gradient-text">{service.title}</h2>
                    </div>

                    <p className="text-gray-600 mb-6">{service.description}</p>

                    <h3 className="text-xl font-semibold text-gray-dark mb-4">Key Features</h3>
                    <ul className="space-y-2 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: featureIndex * 0.1 }}
                          className="flex items-start"
                        >
                          <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </motion.li>
                      ))}
                    </ul>

                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Link
                        href="/contact"
                        className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors duration-200 inline-block btn-hover-effect"
                      >
                        Request a Consultation
                      </Link>
                    </motion.div>
                  </div>

                  <motion.div
                    className={`relative h-96 rounded-lg overflow-hidden shadow-xl ${
                      index % 2 === 1 ? "md:col-start-1" : ""
                    }`}
                  >
                    <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.5 }} className="w-full h-full overflow-hidden">
                      <Image
                        src={service.imageUrl || "/servicebpo.jpeg"}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                  </motion.div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            title="Need a Custom Solution?"
            subtitle="Our team of experts is ready to help you with your specific requirements"
            centered
            gradient={true}
          />

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/contact"
              className="bg-primary text-white px-8 py-3 rounded-md hover:bg-primary/90 transition-colors duration-200 inline-block btn-hover-effect"
            >
              Contact Our Team
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}

