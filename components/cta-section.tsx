import Link from "next/link"

export default function CTASection() {
  return (
    <section className="section-padding bg-primary text-white">
      <div className="container mx-auto container-padding">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-white/90 mb-8">
            Contact us today to discuss how Auttonotech can help you overcome your engineering challenges and drive
            innovation in your organization.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-primary px-8 py-4 rounded-md font-semibold text-lg transition-all hover:bg-white/90 hover:shadow-lg"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  )
}

