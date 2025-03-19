import Image from "next/image"
import Link from "next/link"

export default function AboutSection() {
  return (
    <section className="section-padding bg-white" id="about">
      <div className="container mx-auto container-padding">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Auttonotech</h2>
            <p className="text-lg text-gray-700 mb-6">
              Auttonotech is a leading engineering, consulting, and technology company that provides innovative
              solutions to complex challenges across multiple industries.
            </p>
            <p className="text-gray-700 mb-6">
              With a team of experienced engineers and consultants, we deliver cutting-edge solutions that help our
              clients optimize their operations, improve efficiency, and drive growth.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link href="/about" className="btn-primary">
                Learn More
              </Link>
            </div>
          </div>
          <div className="order-1 md:order-2 relative">
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="About Auttonotech"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary rounded-lg hidden md:block"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

