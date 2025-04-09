"use client"

import Link from "next/link"
import { Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-6 md:py-8 border-t">
      <div className="container flex flex-col items-center gap-4 px-4 md:px-6">
        <div className="flex flex-col gap-2 text-center">
          <h3 className="text-sm font-medium">
            &copy; {new Date().getFullYear()} William Yan. All rights reserved.
          </h3>
          <p className="text-xs text-muted-foreground">
            Built with Next.js and Tailwind CSS
          </p>
        </div>
        <nav className="flex gap-4 text-sm text-muted-foreground">
          <Link className="hover:underline" href="/">
            Home
          </Link>
          <Link className="hover:underline" href="/about">
            About
          </Link>
          <Link className="hover:underline" href="/resume">
            Resume
          </Link>
          <Link className="hover:underline" href="/contact">
            Contact
          </Link>
        </nav>
        <div className="flex gap-4">
          <Link href="https://www.linkedin.com/in/william-yan-4bb1a9274" className="text-muted-foreground hover:text-foreground">
            <Linkedin className="h-4 w-4" />
            <span className="sr-only">LinkedIn</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}
