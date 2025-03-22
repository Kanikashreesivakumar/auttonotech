"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import SectionHeading from "@/components/section-heading"
import ScrollReveal from "@/components/scroll-reveal"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "John Smith",
      position: "CEO & Founder",
      bio: "With over 20 years of experience in outsourcing and business operations, John leads Auttonotech with a vision for innovation and excellence.",
      imageUrl: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Sarah Johnson",
      position: "COO",
      bio: "Sarah brings extensive expertise in operations management, driving our service delivery and ensuring the highest standards of quality.",
      imageUrl: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Michael Chen",
      position: "CTO",
      bio: "Michael oversees our technology infrastructure, ensuring we leverage the latest tools and technologies to deliver exceptional services.",
      imageUrl: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Emily Rodriguez",
      position: "Director of HR",
      bio: "Emily leads our HR operations, bringing her expertise to both our internal team and our HRO service offerings.",
      imageUrl: "/placeholder.svg?height=400&width=400",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-dark">
        <div className="absolute inset-0 z-0 opacity-60">
          <Image src="/about.jpeg?height=600&width=1920" alt="About AUTTONO TECH" fill className="object-cover" />
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
              About AUTTONO TECH
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-xl text-white/90"
            >
              Your trusted partner in BPO, KPO, and HRO services since 2020. We help businesses streamline operations, reduce costs, and achieve their goals through innovative outsourcing solutions.
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* Company Overview */}
      <ScrollReveal>
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <SectionHeading title="Our Company" subtitle="A legacy of excellence in outsourcing services" />

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-gray-600 mb-6"
                >
                  Founded in 2008, Auttonotech has grown from a small outsourcing consultancy to a leading provider of
                  comprehensive BPO, KPO, and HRO solutions across multiple industries. Our journey has been defined by
                  a commitment to excellence, innovation, and client satisfaction.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="text-gray-600 mb-6"
                >
                  With a global presence and a team of skilled professionals, we serve clients worldwide, bringing
                  together the best talent and the latest technologies to solve complex business challenges and drive
                  growth.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="text-gray-600"
                >
                  Our multidisciplinary team includes experienced professionals across various domains who work
                  collaboratively to deliver integrated solutions that meet the unique needs of each client and industry
                  we serve.
                </motion.p>
              </div>

              <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.5 }}>
                  <Image
                    src="/company.jpeg?height=800px&width=800px"
                    alt="Auttonotech Headquarters"
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Vision, Mission, Values */}
      <ScrollReveal>
        <section className="py-20 bg-gray-light">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading title="Vision, Mission & Values" subtitle="The principles that guide our work" centered />

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-lg shadow-md transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
                <p className="text-gray-600">
                  To be the global leader in innovative outsourcing solutions that transform businesses and improve
                  operational efficiency.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-lg shadow-md transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
                <p className="text-gray-600">
                  To deliver exceptional value to our clients through innovative BPO, KPO, and HRO solutions that
                  address their most complex challenges and drive sustainable growth.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-lg shadow-md transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-primary mb-4">Our Values</h3>
                <ul className="text-gray-600 space-y-2">
                  {[
                    "Excellence in everything we do",
                    "Innovation that drives progress",
                    "Integrity in all our relationships",
                    "Client-centric approach",
                  ].map((value, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start"
                    >
                      <svg
                        className="h-6 w-6 text-primary mr-2 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{value}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Our Approach */}
      <ScrollReveal>
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.5 }}>
                  <Image src="/design.png?height=600&width=800" alt="Our Approach" fill className="object-cover" />
                </motion.div>
              </div>

              <div>
                <SectionHeading title="Our Approach" subtitle="How we deliver value to our clients" />

                <div className="space-y-6">
                  {[
                    {
                      title: "1. Understand",
                      description:
                        "We begin by deeply understanding your business, challenges, and objectives to ensure our solutions are aligned with your needs.",
                    },
                    {
                      title: "2. Design",
                      description:
                        "We design customized solutions that leverage our expertise and the latest technologies to address your specific challenges.",
                    },
                    {
                      title: "3. Implement",
                      description:
                        "We execute with precision, ensuring seamless integration and minimal disruption to your operations.",
                    },
                    {
                      title: "4. Optimize",
                      description:
                        "We continuously monitor and refine our solutions to ensure optimal performance and long-term value.",
                    },
                  ].map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <h3 className="text-xl font-bold text-gray-dark mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Leadership Team */}
      <ScrollReveal>
        <section className="py-20 bg-gray-light">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Our Leadership Team"
              subtitle="The experts driving our vision and success"
              centered
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <div className="relative h-64 overflow-hidden">
                    <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.5 }}>
                      <Image
                        src={member.imageUrl || "/placeholder.svg"}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-dark mb-1">{member.name}</h3>
                    <p className="text-primary font-medium mb-3">{member.position}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* CTA Section */}
      <ScrollReveal>
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <SectionHeading
              title="Join Our Team"
              subtitle="We're always looking for talented individuals to join our growing team"
              centered
            />

            <p className="text-gray-600 max-w-3xl mx-auto mb-8">
              At Auttonotech, we offer a dynamic and collaborative work environment where you can grow your career while
              working on exciting projects across multiple industries.
            </p>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="bg-primary text-white px-8 py-3 rounded-md hover:bg-primary/90 transition-colors duration-200 inline-block btn-hover-effect"
              >
                View Career Opportunities
              </Link>
            </motion.div>
          </div>
        </section>
      </ScrollReveal>
    </>
  )
}

