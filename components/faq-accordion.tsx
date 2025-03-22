"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface FAQItem {
  question: string
  answer: string
}

interface FAQAccordionProps {
  faqs: FAQItem[]
}

const FAQAccordion = ({ faqs }: FAQAccordionProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md"
        >
          <button
            className="flex justify-between items-center w-full p-4 text-left bg-white hover:bg-gray-50 transition-colors duration-200"
            onClick={() => toggleAccordion(index)}
            aria-expanded={activeIndex === index}
          >
            <span className="text-lg font-semibold text-secondary">{faq.question}</span>
            <ChevronDown
              className={`h-5 w-5 text-primary transition-transform duration-300 ${
                activeIndex === index ? "transform rotate-180" : ""
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              activeIndex === index ? "max-h-96 p-4" : "max-h-0"
            }`}
          >
            <p className="text-gray-600">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default FAQAccordion

