import Link from "next/link"
import Image from "next/image"
import { Car, Plane, Shield, Cpu, Zap, Users, Award, Clock, BarChart } from "lucide-react"
import SectionHeading from "@/components/section-heading"
import IndustryCard from "@/components/industry-card"
import ScrollReveal from "@/components/scroll-reveal"
import AnimatedCounter from "@/components/animated-counter"
import DynamicHero from "@/components/dynamic-hero"
import EnhancedTestimonialSlider from "@/components/enhanced-testimonial-slider"
import FAQAccordion from "@/components/faq-accordion"

export default function Home() {
  const industries = [
    {
      title: "Automotive",
      description: "Innovative solutions for the automotive industry, from design to manufacturing.",
      icon: Car,
      href: "/industries#automotive",
      imageUrl: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Aerospace",
      description: "Cutting-edge aerospace engineering and technology solutions.",
      icon: Plane,
      href: "/industries#aerospace",
      imageUrl: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Defense",
      description: "Advanced defense systems and security solutions.",
      icon: Shield,
      href: "/industries#defense",
      imageUrl: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Heavy Engineering",
      description: "Robust engineering solutions for heavy machinery and equipment.",
      icon: Cpu,
      href: "/industries#heavy-engineering",
      imageUrl: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Energy",
      description: "Sustainable and efficient energy solutions for a greener future.",
      icon: Zap,
      href: "/industries#energy",
      imageUrl: "/placeholder.svg?height=300&width=400",
    },
  ]

  const whyChooseUs = [
    {
      title: "Expertise & Experience",
      description: "Our team of experts brings decades of combined experience across multiple industries.",
      icon: Users,
    },
    {
      title: "Innovative Solutions",
      description: "We leverage cutting-edge technology to deliver innovative solutions to complex problems.",
      icon: Award,
    },
    {
      title: "Quality Assurance",
      description: "Rigorous quality control processes ensure the highest standards in all our deliverables.",
      icon: Clock,
    },
    {
      title: "Client-Centric Approach",
      description: "We prioritize our clients' needs and work collaboratively to achieve their goals.",
      icon: BarChart,
    },
  ]

  const faqs = [
    {
      question: "What industries does Auttonotech serve?",
      answer:
        "Auttonotech serves a wide range of industries including Automotive, Aerospace, Defense, Heavy Engineering, and Energy. Our expertise spans across these sectors, allowing us to provide specialized solutions tailored to each industry's unique challenges and requirements.",
    },
    {
      question: "How does Auttonotech approach new projects?",
      answer:
        "We follow a systematic approach that begins with understanding your specific needs and challenges. Our team then develops a customized solution, leveraging our industry expertise and technological capabilities. Throughout the project, we maintain close communication with our clients to ensure alignment and satisfaction.",
    },
    {
      question: "What sets Auttonotech apart from competitors?",
      answer:
        "Auttonotech distinguishes itself through our deep industry expertise, innovative approach to problem-solving, commitment to quality, and client-centric focus. We combine technical excellence with a thorough understanding of industry-specific challenges to deliver solutions that drive real business value.",
    },
    {
      question: "How can I request a consultation with Auttonotech?",
      answer:
        "Requesting a consultation is simple. You can reach out to us through our contact form on the website, email us directly at info@auttonotech.com, or call our team. We'll promptly schedule a meeting to discuss your needs and how we can help.",
    },
  ]

  return (
    <>
      {/* Dynamic Hero Section */}
      <DynamicHero
        title="Engineering Excellence Across Industries"
        subtitle="Auttonotech delivers innovative engineering, consulting, and technology solutions to drive your business forward."
        primaryButtonText="Get in Touch"
        primaryButtonLink="/contact"
        secondaryButtonText="Learn More"
        secondaryButtonLink="/about"
        backgroundImage="/placeholder.svg?height=1080&width=1920"
      />

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <AnimatedCounter end={250} suffix="+" />
              <p className="mt-2 text-gray-600 font-medium">Projects Completed</p>
            </div>
            <div className="p-6">
              <AnimatedCounter end={15} suffix="+" />
              <p className="mt-2 text-gray-600 font-medium">Years of Experience</p>
            </div>
            <div className="p-6">
              <AnimatedCounter end={50} suffix="+" />
              <p className="mt-2 text-gray-600 font-medium">Expert Engineers</p>
            </div>
            <div className="p-6">
              <AnimatedCounter end={100} suffix="%" />
              <p className="mt-2 text-gray-600 font-medium">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal animation="fade-in-left">
              <div>
                <SectionHeading
                  title="About Auttonotech"
                  subtitle="Driving innovation through engineering excellence"
                />
                <p className="text-gray-600 mb-6">
                  Auttonotech is a leading engineering, consulting, and technology company that provides innovative
                  solutions to complex challenges across multiple industries. With a team of experienced professionals
                  and a commitment to excellence, we help our clients achieve their goals and stay ahead of the
                  competition.
                </p>
                <p className="text-gray-600 mb-8">
                  Our comprehensive range of services includes design engineering, process optimization, technology
                  implementation, and strategic consulting. We work closely with our clients to understand their unique
                  needs and deliver tailored solutions that drive growth and efficiency.
                </p>
                <Link href="/about" className="inline-flex items-center text-primary font-medium hover:underline group">
                  Discover Our Story
                  <svg
                    className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-in-right" delay={200}>
              <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary rounded-lg z-10"></div>
                <div className="absolute -top-6 -right-6 w-16 h-16 bg-primary/20 rounded-lg z-10"></div>
                <div className="relative h-full w-full animate-float">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="About Auttonotech"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading title="Industries We Serve" subtitle="Specialized expertise across key sectors" centered />
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.slice(0, 3).map((industry, index) => (
              <ScrollReveal key={index} delay={((index + 1) * 100) as 100 | 200 | 300}>
                <IndustryCard
                  title={industry.title}
                  description={industry.description}
                  icon={industry.icon}
                  href={industry.href}
                  imageUrl={industry.imageUrl}
                />
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-8 md:w-2/3 mx-auto">
            {industries.slice(3, 5).map((industry, index) => (
              <ScrollReveal key={index} delay={((index + 4) * 100) as 400 | 500}>
                <IndustryCard
                  title={industry.title}
                  description={industry.description}
                  icon={industry.icon}
                  href={industry.href}
                  imageUrl={industry.imageUrl}
                />
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={500}>
            <div className="mt-12 text-center">
              <Link
                href="/industries"
                className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                Explore All Industries
              </Link>
            </div>
          </ScrollReveal>
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
            />
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <ScrollReveal key={index} delay={((index + 1) * 100) as 100 | 200 | 300 | 400}>
                <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                  <div className="mb-4 flex justify-center">
                    <div className="bg-primary/10 p-4 rounded-full">
                      <item.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-2 text-center">{item.title}</h3>
                  <p className="text-gray-600 text-center">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              title="What Our Clients Say"
              subtitle="Hear from the companies we've helped succeed"
              centered
            />
          </ScrollReveal>

          <div className="max-w-4xl mx-auto">
            <EnhancedTestimonialSlider />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              title="Frequently Asked Questions"
              subtitle="Find answers to common questions about our services"
              centered
            />
          </ScrollReveal>

          <div className="max-w-3xl mx-auto mt-12">
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Partner with Auttonotech to leverage our expertise and innovative solutions for your engineering and
              technology needs.
            </p>
            <Link
              href="/contact"
              className="bg-white text-primary px-8 py-3 rounded-md hover:bg-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 inline-block"
            >
              Contact Us
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}

