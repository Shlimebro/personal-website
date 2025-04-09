import type { Metadata } from "next"

// Default metadata to be used across the site
export const defaultMetadata: Metadata = {
  metadataBase: new URL("https://yourdomain.com"),
  title: {
    default: "Your Name - Professional Portfolio",
    template: "%s | Your Name",
  },
  description:
    "Professional portfolio and personal website showcasing my skills, projects, and professional background.",
  keywords: ["your name", "web developer", "frontend developer", "portfolio", "react developer", "nextjs developer"],
  authors: [{ name: "Your Name" }],
  creator: "Your Name",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourdomain.com",
    title: "Your Name - Professional Portfolio",
    description:
      "Professional portfolio and personal website showcasing my skills, projects, and professional background.",
    siteName: "Your Name - Professional Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Your Name - Professional Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Name - Professional Portfolio",
    description:
      "Professional portfolio and personal website showcasing my skills, projects, and professional background.",
    images: ["/og-image.jpg"],
    creator: "@yourtwitterhandle",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const siteConfig = {
  name: "Your Name",
  title: "Your Name - Personal Portfolio",
  description: "Professional portfolio showcasing skills, projects, and experiences",
  url: "https://yourname.com",
  ogImage: "https://yourname.com/og.jpg",
  links: {
    github: "https://github.com/yourusername",
    twitter: "https://twitter.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
  },
}

export const navLinks = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Projects",
    href: "/projects",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Resume",
    href: "/resume",
  },
  {
    title: "Contact",
    href: "/contact",
  },
]

export const projectsData = [
  {
    title: "E-Commerce Platform",
    description: "A modern e-commerce platform built with Next.js and Stripe.",
    imageUrl: "/placeholder.svg?height=200&width=300",
    demoUrl: "https://demo-project.com",
    githubUrl: "https://github.com/yourusername/project",
    technologies: ["Next.js", "TypeScript", "Stripe"],
  },
  {
    title: "Dashboard App",
    description: "An analytics dashboard with data visualization using chart.js.",
    imageUrl: "/placeholder.svg?height=200&width=300",
    demoUrl: "https://demo-project.com",
    githubUrl: "https://github.com/yourusername/project",
    technologies: ["React", "TypeScript", "Chart.js"],
  },
  {
    title: "Social Media API",
    description: "RESTful API for a social media application with authentication.",
    imageUrl: "/placeholder.svg?height=200&width=300",
    demoUrl: "https://demo-project.com",
    githubUrl: "https://github.com/yourusername/project",
    technologies: ["Node.js", "Express", "MongoDB"],
  },
]
