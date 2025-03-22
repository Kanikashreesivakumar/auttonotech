import Image from "next/image"
import Link from "next/link"
import SectionHeading from "@/components/section-heading"
import ProjectCard from "@/components/project-card"
import ScrollReveal from "@/components/scroll-reveal"

interface Project {
  id: string
  title: string
  description: string
  imageUrl: string
  category: string
  href: string
}

interface ProjectsResponse {
  projects: Project[]
  total: number
  limit: number
  offset: number
}

async function getProjects(): Promise<ProjectsResponse> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
    
    const res = await fetch(`${baseUrl}/api/projects`, {
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json',
      }
    })

    if (!res.ok) {
      console.error(`API error: ${res.status} ${res.statusText}`)
      return {
        projects: [],
        total: 0,
        limit: 6,
        offset: 0
      }
    }

    const data = await res.json()
    return {
      projects: data.projects || [],
      total: data.total || 0,
      limit: data.limit || 6,
      offset: data.offset || 0
    }
  } catch (error) {
    console.error('Error fetching projects:', error)
    return {
      projects: [],
      total: 0,
      limit: 6,
      offset: 0
    }
  }
}

export const dynamic = 'force-dynamic'

export default async function ProjectsPage() {
  const { projects, total } = await getProjects()

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-dark">
        <div className="absolute inset-0 z-0 opacity-40">
          <Image src="/project.jpg?height=700&width=1920" alt="Projects" fill className="object-cover" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Projects</h1>
            <p className="text-xl text-white/90">Innovative solutions that drive results across industries</p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Case Studies"
            subtitle="Explore our successful projects across various industries"
            centered
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {projects.map((project: Project) => (
              <ScrollReveal key={project.id}>
                <ProjectCard {...project} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            title="Ready to Start Your Project?"
            subtitle="Let's discuss how we can help you achieve your goals"
            centered
          />

          <Link
            href="/contact"
            className="bg-primary text-white px-8 py-3 rounded-md hover:bg-primary/90 transition-colors duration-200 inline-block"
          >
            Contact Our Team
          </Link>
        </div>
      </section>
    </>
  )
}

