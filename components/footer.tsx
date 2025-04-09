"use client"

import Link from "next/link"
import { Github, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="py-6 md:py-8 border-t">
      <div className="container flex flex-col items-center gap-4 px-4 md:px-6">
        <div className="flex flex-col gap-2 text-center">
          <h3 className="text-sm font-medium">
            &copy; {new Date().getFullYear()} Your Name. All rights reserved.
          </h3>
          <p className="text-xs text-muted-foreground">
            Built with Next.js, Tailwind CSS, and shadcn/ui
          </p>
        </div>
        <nav className="flex gap-4 text-sm text-muted-foreground">
          <Link className="hover:underline" href="/">
            Home
          </Link>
          <Link className="hover:underline" href="/about">
            About
          </Link>
          <Link className="hover:underline" href="/projects">
            Projects
          </Link>
          <Link className="hover:underline" href="/blog">
            Blog
          </Link>
          <Link className="hover:underline" href="/contact">
            Contact
          </Link>
        </nav>
        <div className="flex gap-4">
          <Link href="https://twitter.com/yourusername" className="text-muted-foreground hover:text-foreground">
            <Twitter className="h-4 w-4" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link href="https://github.com/yourusername" className="text-muted-foreground hover:text-foreground">
            <Github className="h-4 w-4" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link href="https://linkedin.com/in/yourusername" className="text-muted-foreground hover:text-foreground">
            <Linkedin className="h-4 w-4" />
            <span className="sr-only">LinkedIn</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}
