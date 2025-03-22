"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { FileText, Users, Award, BarChart3 } from "lucide-react"
import { motion } from "framer-motion"
import SectionHeading from "@/components/section-heading"
import ServiceCard from "@/components/service-card"
import TestimonialSlider from "@/components/testimonial-slider"
import AnimatedCounter from "@/components/animated-counter"
import ScrollReveal from "@/components/scroll-reveal"

export default function Home() {
  useEffect(() => {
    
  }, [])

  const services = [
    {
      title: "Business Process Outsourcing (BPO)",
      description:
        "Streamline your operations and reduce costs with our comprehensive BPO services, including customer support, data entry, and back-office operations.",
      icon: FileText,
      href: "/services#bpo",
      imageUrl: "/bpo.png?height=300&width=400",
    },
    {
      title: "Knowledge Process Outsourcing (KPO)",
      description:
        "Leverage our expertise in research, analytics, and specialized knowledge services to gain competitive insights and make data-driven decisions.",
      icon: BarChart3,
      href: "/services#kpo",
      imageUrl: "/kpo.png?height=300&width=400",
    },
    {
      title: "Human Resource Outsourcing (HRO)",
      description:
        "Optimize your HR functions with our comprehensive HRO services, including recruitment, payroll management, and employee benefits administration.",
      icon: Users,
      href: "/services#hro",
      imageUrl: "/hpo.png?height=300&width=400",
    },
  ]

  const whyChooseUs = [
    {
      title: "Expertise & Experience",
      description: "Our team brings decades of combined experience across multiple industries and specialized domains.",
      icon: Award,
    },
    {
      title: "Customized Solutions",
      description: "We tailor our services to meet your specific needs, ensuring optimal results for your business.",
      icon: FileText,
    },
    {
      title: "Dedicated Support",
      description: "Our dedicated team provides round-the-clock support to ensure your operations run smoothly.",
      icon: Users,
    },    {
      title: "Data-Driven Approach",
      description: "We leverage advanced analytics and insights to drive continuous improvement and innovation.",
      icon: BarChart3,
    },
  ]

  const heroVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-hero-gradient animate-gradient-move opacity-60"></div>
          <Image
            src="auto main.png?height=1080&width=1920"
            alt="Auttono tech Hero"
            fill
            className="object-cover mix-blend-overlay opacity-20"
            priority
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={heroVariants} className="max-w-3xl">
            <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Scale your business with Auttono Tech </motion.h1>
            <motion.h1 variants={itemVariants} className="text-2xl md:text-3xl lg:text-4xl text-white mb-6">Grow your business and build in-demand teams with our tailored outsourcing solutions
            </motion.h1 >
            <motion.p variants={itemVariants} className="text-xl text-white/90 mb-8">
              Auttonotech delivers innovative outsourcing solutions to help your business thrive in today's competitive
              landscape.
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-white text-primary px-6 py-3 rounded-md hover:bg-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 btn-hover-effect"
              >
                Get in Touch
              </Link>
              <Link
                href="/services"
                className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 btn-hover-effect"
              >
                Our Services
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute text-white bottom-10 left-1/2 transform -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
            className="w-8 h-12 border-2 text-white border-white rounded-full flex justify-center"
          >
            <motion.div
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
              className="w-1 h-3 bg-white text-white rounded-full mt-2"
            ></motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div>
                <SectionHeading
                  title="About Auttonotech"
                  subtitle="Empowering businesses through innovative outsourcing solutions"
                  gradient={true}
                />
                <p className="text-gray-600 mb-6">
                  Auttonotech is a leading provider of Business Process Outsourcing (BPO), Knowledge Process Outsourcing
                  (KPO), and Human Resource Outsourcing (HRO) services. We help businesses of all sizes optimize their
                  operations, reduce costs, and focus on their core competencies.
                </p>
                <p className="text-gray-600 mb-8">
                  With a team of experienced professionals and a commitment to excellence, we deliver tailored solutions
                  that address your specific challenges and drive sustainable growth.
                </p>
                <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                  <Link
                    href="/about"
                    className="inline-flex items-center text-primary font-medium hover:underline group"
                  >
                    Learn More About Us
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
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary rounded-lg z-10"></div>
                <div className="absolute -top-6 -right-6 w-16 h-16 bg-primary/20 rounded-lg z-10"></div>
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 5, ease: "easeInOut" }}
                  className="relative h-full w-full"
                >
                  <Image
                    src="/company.png?height=600&width=800"
                    alt="About Auttono tech"
                    fill
                    className="object-cover rounded-lg"
                  />
                </motion.div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              title="Our Services"
              subtitle="Comprehensive outsourcing solutions tailored to your business needs"
              centered
              gradient={true}
            />
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ScrollReveal key={index} delay={index * 0.1} direction="up">
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  href={service.href}
                  imageUrl={service.imageUrl}
                />
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.4}>
            <div className="mt-12 text-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/services"
                  className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-all duration-300 hover:shadow-lg btn-hover-effect"
                >
                  Explore All Services
                </Link>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-cta-gradient text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <AnimatedCounter end={500} suffix="+" />
              <p className="mt-2 color-white font-medium">Clients Served</p>
            </div>
            <div className="p-6">
              <AnimatedCounter end={15} suffix="+" />
              <p className="mt-2 text-white font-medium">Years of Experience</p>
            </div>
            <div className="p-6">
              <AnimatedCounter end={1000} suffix="+" />
              <p className="mt-2 text-white font-medium">Projects Completed</p>
            </div>
            <div className="p-6">
              <AnimatedCounter end={250} suffix="+" />
              <p className="mt-2 text-white font-medium">Team Members</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              title="Why Choose Us"
              subtitle="What sets Auttonotech apart from the competition"
              centered
              gradient={true}
            />
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.1} direction="up">
                <motion.div
                  whileHover={{ y: -10 }}
                  className="bg-card-gradient p-6 rounded-lg shadow-md transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="mb-4 flex justify-center"
                  >
                    <div className="bg-primary/10 p-4 rounded-full">
                      <item.icon className="h-8 w-8 text-primary" />
                    </div>
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-dark mb-2 text-center">{item.title}</h3>
                  <p className="text-gray-600 text-center">{item.description}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              title="What Our Clients Say"
              subtitle="Hear from the businesses we've helped succeed"
              centered
              gradient={true}
            />
          </ScrollReveal>

          <div className="max-w-4xl mx-auto">
            <TestimonialSlider />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-cta-gradient text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Ready to Transform Your Business?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
            >
              Partner with Auttonotech to optimize your operations, reduce costs, and drive sustainable growth.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact"
                className="bg-white text-primary px-8 py-3 rounded-md hover:bg-gray-100 transition-all duration-300 hover:shadow-lg inline-block btn-hover-effect"
              >
                Get in Touch
              </Link>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}

