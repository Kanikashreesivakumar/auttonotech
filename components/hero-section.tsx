import Link from "next/link"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Engineering Excellence"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-dark/70"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight animate-slide-up">
            Engineering Excellence Across Industries
          </h1>
          <p className="text-xl text-gray-200 mt-6 md:pr-12 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            Auttonotech delivers innovative engineering solutions and consulting services to transform your business
            challenges into opportunities.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <Link href="/contact" className="btn-primary">
              Get in Touch
            </Link>
            <Link href="/industries" className="btn-outline text-white border-white hover:bg-white/10">
              Explore Industries
            </Link>
          </div>
        </div>
      </div>

      {/* Wave shape divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          ></path>
        </svg>
      </div>
    </section>
  )
}

