import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Mail } from "lucide-react"
import { resumeData } from "@/lib/metadata"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero section */}
      <section className="py-20 md:py-28">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_450px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Hello, I'm <span className="text-primary">William Yan</span>
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Undergrad Student at NYU College of Arts and Science majoring in data science
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild>
                  <Link href="/contact">
                    Contact Me <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/resume">
                    <Download className="mr-2 h-4 w-4" /> View Resume
                  </Link>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative aspect-square overflow-hidden rounded-full border-4 border-primary/20 w-[280px] h-[280px] md:w-[320px] md:h-[320px]">
                <Image
                  src="/placeholder-user.jpg"
                  alt="William Yan"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About section */}
      <section className="py-12 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">About Me</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl dark:text-gray-400">
                I am a passionate and results-driven Sport Management student at New York University, with an interest in data analytics, tech, AI, and telecom industries. I thrive in roles where I can apply analytical thinking and innovative solutions to drive operational improvements and business growth.
              </p>
            </div>
            <div className="w-full max-w-3xl space-y-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <div className="flex flex-col items-center space-y-2 rounded-lg border p-4">
                  <div className="rounded-full border border-primary/20 p-2">
                    <div className="rounded-full bg-primary/10 p-2">
                      <svg
                        className="h-6 w-6 text-primary"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold">Experience</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Data analysis and business optimization experience at Jiangjia Electronics
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2 rounded-lg border p-4">
                  <div className="rounded-full border border-primary/20 p-2">
                    <div className="rounded-full bg-primary/10 p-2">
                      <svg
                        className="h-6 w-6 text-primary"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                        <path d="M6 12v5c3 3 9 3 12 0v-5" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold">Education</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    NYU College of Arts and Science, Data Science major
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2 rounded-lg border p-4">
                  <div className="rounded-full border border-primary/20 p-2">
                    <div className="rounded-full bg-primary/10 p-2">
                      <svg
                        className="h-6 w-6 text-primary"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="m12 16 4-4-4-4" />
                        <path d="M8 12h8" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold">Skills</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Excel, PowerPoint, PL/SQL, Python, Optimization
                  </p>
                </div>
              </div>
            </div>
            <Button variant="secondary" asChild>
              <Link href="/about">Learn More About Me</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Projects section */}
      <section className="py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Featured Projects</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl dark:text-gray-400">
                Here are some of my recent projects that showcase my skills and expertise.
              </p>
            </div>
            <div className="grid w-full max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              <ProjectCard
                title="E-Commerce Platform"
                description="A modern e-commerce platform built with Next.js and Stripe."
                imageUrl="/placeholder.svg?height=200&width=300"
                demoUrl="https://demo-project.com"
                githubUrl="https://github.com/yourusername/project"
                technologies={["Next.js", "TypeScript", "Stripe"]}
              />
              <ProjectCard
                title="Dashboard App"
                description="An analytics dashboard with data visualization using chart.js."
                imageUrl="/placeholder.svg?height=200&width=300"
                demoUrl="https://demo-project.com"
                githubUrl="https://github.com/yourusername/project"
                technologies={["React", "TypeScript", "Chart.js"]}
              />
              <ProjectCard
                title="Social Media API"
                description="RESTful API for a social media application with authentication."
                imageUrl="/placeholder.svg?height=200&width=300"
                demoUrl="https://demo-project.com"
                githubUrl="https://github.com/yourusername/project"
                technologies={["Node.js", "Express", "MongoDB"]}
              />
            </div>
            <Button variant="outline" asChild>
              <Link href="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact CTA section */}
      <section className="py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Get In Touch</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl dark:text-gray-400">
                Interested in connecting or discussing opportunities? Feel free to reach out!
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <Button asChild className="w-full">
                <Link href="/contact">
                  <Mail className="mr-2 h-4 w-4" /> Contact Me
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
