"use client"

import { useState } from "react"
import Image from "next/image"
import SectionHeading from "@/components/section-heading"
import BlogCard from "@/components/blog-card"
import ScrollReveal from "@/components/scroll-reveal"

export default function BlogPage() {
  const allPosts = [
    {
      title: "The Future of Business Process Outsourcing",
      excerpt:
        "Explore the emerging trends and technologies shaping the future of BPO and how businesses can stay ahead of the curve.",
      imageUrl: "/bpo.png?height=400&width=600",
      date: "June 15, 2023",
      author: "John Smith",
      category: "BPO",
      href: "/blog/future-of-bpo",
    },
    {
      title: "Leveraging Data Analytics in KPO Services",
      excerpt:
        "Learn how advanced data analytics is transforming knowledge process outsourcing and delivering unprecedented insights for businesses.",
      imageUrl: "/kpo.png?height=400&width=600",
      date: "May 22, 2023",
      author: "Sarah Johnson",
      category: "KPO",
      href: "/blog/data-analytics-kpo",
    },
    {
      title: "HR Outsourcing: Benefits and Challenges",
      excerpt:
        "A comprehensive look at the benefits and challenges of human resource outsourcing and how to maximize its value for your organization.",
      imageUrl: "/hpo.png?height=400&width=600",
      date: "April 10, 2023",
      author: "Michael Chen",
      category: "HRO",
      href: "/blog/hro-benefits-challenges",
    },
    {
      title: "Improving Customer Experience through BPO",
      excerpt:
        "Discover how business process outsourcing can enhance customer experience and drive customer loyalty for your business.",
      imageUrl: "/placeholder.svg?height=400&width=600",
      date: "March 5, 2023",
      author: "Emily Rodriguez",
      category: "BPO",
      href: "/blog/customer-experience-bpo",
    },
    {
      title: "The Role of AI in Modern KPO Services",
      excerpt:
        "Explore how artificial intelligence is revolutionizing knowledge process outsourcing and creating new opportunities for businesses.",
      imageUrl: "/placeholder.svg?height=400&width=600",
      date: "February 18, 2023",
      author: "David Kim",
      category: "KPO",
      href: "/blog/ai-in-kpo",
    },
    {
      title: "Building a Talent Pipeline through HRO",
      excerpt:
        "Learn how human resource outsourcing can help you build a robust talent pipeline and secure the best talent for your organization.",
      imageUrl: "/placeholder.svg?height=400&width=600",
      date: "January 30, 2023",
      author: "Lisa Wang",
      category: "HRO",
      href: "/blog/talent-pipeline-hro",
    },
    {
      title: "Cost Optimization Strategies in BPO",
      excerpt:
        "Effective strategies for optimizing costs through business process outsourcing without compromising on quality or performance.",
      imageUrl: "/placeholder.svg?height=400&width=600",
      date: "December 12, 2022",
      author: "Robert Johnson",
      category: "BPO",
      href: "/blog/cost-optimization-bpo",
    },
    {
      title: "Market Research Excellence through KPO",
      excerpt:
        "How knowledge process outsourcing is transforming market research and delivering deeper insights for strategic decision-making.",
      imageUrl: "/placeholder.svg?height=400&width=600",
      date: "November 5, 2022",
      author: "Jennifer Lee",
      category: "KPO",
      href: "/blog/market-research-kpo",
    },
  ]

  const [visiblePosts, setVisiblePosts] = useState(6)
  const [filter, setFilter] = useState("All")

  const filteredPosts = filter === "All" ? allPosts : allPosts.filter((post) => post.category === filter)

  const loadMore = () => {
    setVisiblePosts((prev) => Math.min(prev + 3, filteredPosts.length))
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-dark">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image src="/blog.jpeg?height=600&width=1920" alt="Blog" fill className="object-cover" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Blog</h1>
            <p className="text-xl text-white/90">Insights, trends, and best practices in BPO, KPO, and HRO</p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center mb-12">
            <div className="flex space-x-2 bg-gray-100 p-1 rounded-lg">
              {["All", "BPO", "KPO", "HRO"].map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setFilter(category)
                    setVisiblePosts(6)
                  }}
                  className={`px-4 py-2 rounded-md transition-all duration-200 ${
                    filter === category ? "bg-primary text-white" : "hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(0, visiblePosts).map((post, index) => (
              <div key={index} className="grid-item" style={{ minHeight: "100%" }}>
                <ScrollReveal 
                  
                  initiallyVisible={true}
                >
                  <BlogCard
                    title={post.title}
                    excerpt={post.excerpt}
                    imageUrl={post.imageUrl}
                    date={post.date}
                    author={post.author}
                    category={post.category}
                    href={post.href}
                  />
                </ScrollReveal>
              </div>
            ))}
          </div>

          {visiblePosts < filteredPosts.length && (
            <div className="mt-12 text-center">
              <button
                onClick={loadMore}
                className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors duration-200"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            title="Subscribe to Our Newsletter"
            subtitle="Stay updated with the latest insights and trends in BPO, KPO, and HRO"
            centered
            light
          />

          <div className="max-w-md mx-auto"></div>
          <div className="max-w-md mx-auto">
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-md focus:outline-none"
                required
              />
              <button
                type="submit"
                className="bg-white text-primary px-6 py-3 rounded-md hover:bg-gray-100 transition-colors duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

