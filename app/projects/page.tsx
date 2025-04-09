import ProjectCard from "@/components/project-card"

export const metadata = {
  title: "Projects | Your Name",
  description: "Browse my portfolio of projects and case studies",
}

export default function ProjectsPage() {
  // This would typically come from a CMS or database
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A modern e-commerce platform built with Next.js and Stripe integration. Features include product listings, cart functionality, checkout process, and order management.",
      imageUrl: "/placeholder.svg?height=200&width=300",
      demoUrl: "https://demo-project.com",
      githubUrl: "https://github.com/yourusername/project",
      technologies: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
    },
    {
      title: "Dashboard Application",
      description:
        "An analytics dashboard with data visualization using chart.js. Provides insightful metrics and KPIs for business intelligence.",
      imageUrl: "/placeholder.svg?height=200&width=300",
      demoUrl: "https://demo-project.com",
      githubUrl: "https://github.com/yourusername/project",
      technologies: ["React", "TypeScript", "Chart.js", "Material UI"],
    },
    {
      title: "Social Media API",
      description:
        "RESTful API for a social media application with user authentication, post creation, commenting, and notifications.",
      imageUrl: "/placeholder.svg?height=200&width=300",
      demoUrl: "https://demo-project.com",
      githubUrl: "https://github.com/yourusername/project",
      technologies: ["Node.js", "Express", "MongoDB", "JWT"],
    },
    {
      title: "Task Management App",
      description:
        "A productivity application for managing tasks, projects, and deadlines with team collaboration features.",
      imageUrl: "/placeholder.svg?height=200&width=300",
      demoUrl: "https://demo-project.com",
      githubUrl: "https://github.com/yourusername/project",
      technologies: ["React", "Redux", "Firebase", "CSS Modules"],
    },
    {
      title: "Weather Application",
      description:
        "A weather forecast application that provides current and future weather conditions for any location using external APIs.",
      imageUrl: "/placeholder.svg?height=200&width=300",
      demoUrl: "https://demo-project.com",
      githubUrl: "https://github.com/yourusername/project",
      technologies: ["JavaScript", "React", "OpenWeather API", "Styled Components"],
    },
    {
      title: "Blogging Platform",
      description:
        "A content management system for creating and publishing blog posts with categories, tags, and user comments.",
      imageUrl: "/placeholder.svg?height=200&width=300",
      demoUrl: "https://demo-project.com",
      githubUrl: "https://github.com/yourusername/project",
      technologies: ["Next.js", "Sanity CMS", "TypeScript", "Tailwind CSS"],
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <h1 className="mb-6 text-3xl font-bold md:text-4xl">Projects</h1>
      <p className="mb-10 max-w-3xl text-muted-foreground">
        Browse my portfolio of projects. Each project represents a unique challenge and showcases different skills and
        technologies.
      </p>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            demoUrl={project.demoUrl}
            githubUrl={project.githubUrl}
            technologies={project.technologies}
          />
        ))}
      </div>
    </div>
  )
}
