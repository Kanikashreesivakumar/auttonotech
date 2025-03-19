import { CheckCircle, Clock, Users, Lightbulb } from "lucide-react"

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      description: "We adhere to the highest quality standards and ensure excellence in every project we undertake.",
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "We understand the importance of deadlines and ensure timely delivery of all our projects.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Our team consists of highly skilled engineers and consultants with extensive industry experience.",
    },
    {
      icon: Lightbulb,
      title: "Innovative Solutions",
      description: "We leverage cutting-edge technologies to provide innovative solutions to complex challenges.",
    },
  ]

  return (
    <section className="section-padding bg-white" id="why-choose-us">
      <div className="container mx-auto container-padding">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Us</h2>
          <p className="text-lg text-gray-700">
            At Auttonotech, we are committed to delivering exceptional value to our clients through our expertise,
            innovation, and dedication.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover-card text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

