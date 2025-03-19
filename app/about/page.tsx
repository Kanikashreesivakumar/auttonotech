import Image from "next/image"
import Link from "next/link"
import SectionHeading from "@/components/section-heading"
import ScrollReveal from "@/components/scroll-reveal"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "John Smith",
      position: "CEO & Founder",
      bio: "With over 20 years of experience in engineering and technology, John leads Auttonotech with a vision for innovation and excellence.",
      imageUrl: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Sarah Johnson",
      position: "CTO",
      bio: "Sarah brings extensive expertise in aerospace and defense technologies, driving our technical strategy and innovation initiatives.",
      imageUrl: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Michael Chen",
      position: "Director of Engineering",
      bio: "Michael oversees our engineering teams, ensuring the highest standards of quality and performance in all our projects.",
      imageUrl: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Emily Rodriguez",
      position: "Head of Operations",
      bio: "Emily manages our day-to-day operations, optimizing processes and ensuring efficient delivery of our services.",
      imageUrl: "/placeholder.svg?height=400&width=400",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image src="/placeholder.svg?height=600&width=1920" alt="About Auttonotech" fill className="object-cover" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About Auttonotech</h1>
            <p className="text-xl text-white/90">Driving innovation through engineering excellence since 2005</p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <ScrollReveal animation="fade-in-left">
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <SectionHeading title="Our Company" subtitle="A legacy of engineering excellence and innovation" />

                <p className="text-gray-600 mb-6">
                  Founded in 2005, Auttonotech has grown from a small engineering consultancy to a leading provider of
                  comprehensive engineering, consulting, and technology solutions across multiple industries. Our
                  journey has been defined by a commitment to excellence, innovation, and client satisfaction.
                </p>

                <p className="text-gray-600 mb-6">
                  With headquarters in Silicon Valley and offices around the world, we serve clients globally, bringing
                  together the best talent and the latest technologies to solve complex challenges and drive business
                  growth.
                </p>

                <p className="text-gray-600">
                  Our multidisciplinary team includes experienced engineers, technologists, and consultants who work
                  collaboratively to deliver integrated solutions that meet the unique needs of each client and industry
                  we serve.
                </p>
              </div>

              <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Auttonotech Headquarters"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Vision, Mission, Values */}
      <ScrollReveal animation="fade-in-right">
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading title="Vision, Mission & Values" subtitle="The principles that guide our work" centered />

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl">
                <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
                <p className="text-gray-600">
                  To be the global leader in innovative engineering and technology solutions that transform industries
                  and improve lives.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl">
                <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
                <p className="text-gray-600">
                  To deliver exceptional value to our clients through innovative engineering, consulting, and technology
                  solutions that address their most complex challenges and drive sustainable growth.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl">
                <h3 className="text-2xl font-bold text-primary mb-4">Our Values</h3>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 text-primary mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Excellence in everything we do</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 text-primary mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Innovation that drives progress</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 text-primary mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Integrity in all our relationships</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 text-primary mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Collaboration that amplifies impact</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Our Approach */}
      <ScrollReveal animation="fade-in-left">
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                <Image src="/placeholder.svg?height=600&width=800" alt="Our Approach" fill className="object-cover" />
              </div>

              <div>
                <SectionHeading title="Our Approach" subtitle="How we deliver value to our clients" />

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-secondary mb-2">1. Understand</h3>
                    <p className="text-gray-600">
                      We begin by deeply understanding your business, challenges, and objectives to ensure our solutions
                      are aligned with your needs.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-secondary mb-2">2. Innovate</h3>
                    <p className="text-gray-600">
                      We leverage our expertise and the latest technologies to develop innovative solutions that address
                      your specific challenges.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-secondary mb-2">3. Implement</h3>
                    <p className="text-gray-600">
                      We execute with precision, ensuring seamless integration and minimal disruption to your
                      operations.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-secondary mb-2">4. Optimize</h3>
                    <p className="text-gray-600">
                      We continuously monitor and refine our solutions to ensure optimal performance and long-term
                      value.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Leadership Team */}
      <ScrollReveal animation="fade-in-right">
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Our Leadership Team"
              subtitle="The experts driving our vision and success"
              centered
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={member.imageUrl || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-secondary mb-1">{member.name}</h3>
                    <p className="text-primary font-medium mb-3">{member.position}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* CTA Section */}
      <ScrollReveal animation="fade-in-left">
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

            <Link
              href="/contact"
              className="bg-primary text-white px-8 py-3 rounded-md hover:bg-primary/90 transition-colors duration-200 inline-block"
            >
              View Career Opportunities
            </Link>
          </div>
        </section>
      </ScrollReveal>
    </>
  )
}

