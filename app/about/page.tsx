import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

export const metadata = {
  title: "About Me | William Yan",
  description: "Learn more about my background, skills, and experience in data analytics",
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <h1 className="mb-4 text-3xl font-bold md:text-4xl">About Me</h1>
          <p className="mb-6 text-muted-foreground">
            I am a passionate and results-driven Sport Management student at New York University, with an interest in data analytics, tech, AI, and telecom industries. I thrive in roles where I can apply analytical thinking and innovative solutions to drive operational improvements and business growth.
          </p>

          <p className="mb-6 text-muted-foreground">
            With experience in macroeconomic research, employee satisfaction, and process optimization, I have helped organizations streamline operations and achieve measurable results. At Jiangjia Electronics, I led a project that improved communication efficiency by 36% and employee satisfaction by 21% while also launching initiatives like language programs for employees' families.
          </p>
          
          <p className="mb-6 text-muted-foreground">
            I am also proud to have helped reduce production costs by 4% by developing decision models and optimizing production schedules. Additionally, I have contributed to investment research at BMC Capital, analyzing macroeconomic trends and assessing investment opportunities in emerging sectors like electric vehicle technology.
          </p>

          <h2 className="mb-3 mt-8 text-2xl font-bold">Education</h2>
          <ul className="mb-6 space-y-2">
            <li className="flex items-start">
              <CheckCircle2 className="mr-2 mt-1 h-5 w-5 text-primary" />
              <div>
                <p className="font-medium">Bachelor of Arts in Data Science</p>
                <p className="text-sm text-muted-foreground">New York University, College of Arts and Science, 2023-2027 (Expected)</p>
              </div>
            </li>
          </ul>

          <Button asChild>
            <Link href="/resume">View Full Resume</Link>
          </Button>
        </div>

        <div className="flex flex-col gap-6">
          <div className="relative aspect-video overflow-hidden rounded-lg">
            <Image src="/placeholder-user.jpg" alt="William Yan" fill className="object-cover" />
          </div>

          <div>
            <h2 className="mb-3 text-2xl font-bold">Skills & Expertise</h2>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {[
                "Excel",
                "PowerPoint",
                "Word",
                "Canva",
                "PL/SQL",
                "Python",
                "Data Analysis",
                "Optimization",
                "Chinese",
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
              I am deeply passionate about basketball and skiing, which fuel my commitment to teamwork, perseverance, and continuous learning. These activities have taught me valuable life lessons about discipline, focus, and achieving goals through consistent effort.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
