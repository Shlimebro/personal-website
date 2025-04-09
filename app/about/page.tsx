import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

export const metadata = {
  title: "About Me | Your Name",
  description: "Learn more about my background, skills, and experience",
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <h1 className="mb-4 text-3xl font-bold md:text-4xl">About Me</h1>
          <p className="mb-6 text-muted-foreground">
            I'm a passionate software developer with expertise in building modern, responsive web applications. With a
            background in [your background], I bring a unique perspective to every project I work on.
          </p>

          <h2 className="mb-3 mt-8 text-2xl font-bold">My Journey</h2>
          <p className="mb-6 text-muted-foreground">
            I started my career in [year] as a [position] at [company]. Since then, I've worked on numerous projects
            across different industries, helping businesses solve complex problems through technology.
          </p>

          <h2 className="mb-3 mt-8 text-2xl font-bold">Education</h2>
          <ul className="mb-6 space-y-2">
            <li className="flex items-start">
              <CheckCircle2 className="mr-2 mt-1 h-5 w-5 text-primary" />
              <div>
                <p className="font-medium">Bachelor's in Computer Science</p>
                <p className="text-sm text-muted-foreground">University Name, 2018-2022</p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="mr-2 mt-1 h-5 w-5 text-primary" />
              <div>
                <p className="font-medium">Web Development Certification</p>
                <p className="text-sm text-muted-foreground">Online Course Provider, 2020</p>
              </div>
            </li>
          </ul>

          <Button asChild>
            <Link href="/resume">View Full Resume</Link>
          </Button>
        </div>

        <div className="flex flex-col gap-6">
          <div className="relative aspect-video overflow-hidden rounded-lg">
            <Image src="/placeholder.svg?height=400&width=600" alt="Profile Image" fill className="object-cover" />
          </div>

          <div>
            <h2 className="mb-3 text-2xl font-bold">Skills & Expertise</h2>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {[
                "JavaScript",
                "TypeScript",
                "React",
                "Next.js",
                "Node.js",
                "CSS/Tailwind",
                "Git",
                "Responsive Design",
                "Testing",
              ].map((skill) => (
                <div key={skill} className="rounded-md border border-border bg-background px-3 py-1 text-sm">
                  {skill}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="mb-3 text-2xl font-bold">Personal Interests</h2>
            <p className="text-muted-foreground">
              When I'm not coding, you can find me [your interests, e.g., hiking, reading, playing music, etc.]. I
              believe that maintaining a well-rounded lifestyle fuels creativity and problem-solving abilities.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
