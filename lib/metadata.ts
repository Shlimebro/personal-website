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
  name: "William Yan",
  title: "William Yan - Personal Portfolio",
  description: "NYU undergraduate student majoring in data science with experience in data analytics and business solutions.",
  url: "https://williamyan.vercel.app",
  ogImage: "https://williamyan.vercel.app/og.jpg",
  links: {
    linkedin: "https://www.linkedin.com/in/william-yan-4bb1a9274",
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
    title: "Resume",
    href: "/resume",
  },
  {
    title: "Contact",
    href: "/contact",
  },
]

export const resumeData = {
  education: [
    {
      degree: "Bachelor of Arts in Data Science",
      institution: "New York University, College of Arts and Science",
      years: "2023 - 2027 (Expected)",
      description: "Currently enrolled as an undergraduate sophomore",
    }
  ],
  experience: [
    {
      position: "Data Analyst",
      company: "Jiangjia Electronics",
      location: "Yangzhou, China",
      period: "Fall 2024 - Present",
      responsibilities: [
        "Designed employee surveys and identified poor employee satisfaction from 47% of total staff, which revealed communication gaps and operational inefficiencies.",
        "Designed and implemented an employee benefits program to improve retention and satisfaction, such as English language classes for 25 employees' children (ages 8-14).",
        "Developed and executed solutions to enhance operational efficiency, including a new email communication system and integration of AI tools into daily workflows.",
        "Post-adjustment employee survey results showed a 36% improvement in communication efficiency and a 21% boost in employee satisfaction.",
        "Optimized factories' weekly production plan and product mix, reduced production cost by 3.8%."
      ]
    },
    {
      position: "Summer Intern",
      company: "BMC Capital",
      location: "Shanghai, China",
      period: "Summer 2023",
      responsibilities: [
        "Conducted macroeconomic research and performed detailed analyses to assess investment opportunities.",
        "Prepared a 30-page market analysis and customer behavior report on flow battery technologies.",
        "Performed quantitative analysis on the application of advanced rubber materials in electric vehicle tires, identifying key investment prospects in the sector.",
        "Collaborated with senior team members to support investor relations, enhancing client engagement and relationship-building."
      ]
    },
    {
      position: "Basketball Camp Assistant Coach",
      company: "JLawBball",
      location: "Irvine, California",
      period: "Summer 2022",
      responsibilities: [
        "Assisted in the training and development of young basketball players, helping them enhance technical skills and teamwork.",
        "Supported training sessions for professional NBA players, gaining insights into elite-level coaching strategies and industry best practices."
      ]
    }
  ],
  skills: [
    "Excel",
    "PowerPoint",
    "Word",
    "Canva",
    "PL/SQL",
    "Python",
    "Optimization",
    "Chinese",
    "Data Analysis"
  ]
}

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
