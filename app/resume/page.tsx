import Link from "next/link"
import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { resumeData } from "@/lib/metadata"

export const metadata = {
  title: "Resume | William Yan",
  description: "Professional resume outlining my skills, experience, and education",
}

export default function ResumePage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
        <div>
          <h1 className="text-3xl font-bold md:text-4xl">Resume</h1>
          <p className="mt-2 text-muted-foreground">My professional experience, skills, and education</p>
        </div>
        <Button asChild>
          <Link href="/resume.pdf" target="_blank">
            <Download className="mr-2 h-4 w-4" /> Download PDF
          </Link>
        </Button>
      </div>

      <div className="mt-8 grid gap-8">
        {/* Experience */}
        <Card>
          <CardHeader>
            <CardTitle>Professional Experience</CardTitle>
            <CardDescription>My work history and professional achievements</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {resumeData.experience.map((job, index) => (
              <div key={index}>
                <div className="flex flex-col justify-between gap-1 md:flex-row md:items-center">
                  <h3 className="font-bold">{job.position}</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">{job.company}</span>
                    <span className="text-xs">|</span>
                    <span className="text-sm text-muted-foreground">{job.period}</span>
                  </div>
                </div>
                <div className="mt-1 text-sm text-muted-foreground">{job.location}</div>
                <ul className="mt-2 list-inside list-disc space-y-1 text-muted-foreground">
                  {job.responsibilities.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Education */}
        <Card>
          <CardHeader>
            <CardTitle>Education</CardTitle>
            <CardDescription>My academic background</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {resumeData.education.map((edu, index) => (
              <div key={index}>
                <div className="flex flex-col justify-between gap-1 md:flex-row md:items-center">
                  <h3 className="font-bold">{edu.degree}</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">{edu.institution}</span>
                    <span className="text-xs">|</span>
                    <span className="text-sm text-muted-foreground">{edu.years}</span>
                  </div>
                </div>
                <p className="mt-2 text-muted-foreground">
                  {edu.description}
                </p>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Skills */}
        <Card>
          <CardHeader>
            <CardTitle>Skills</CardTitle>
            <CardDescription>Technical and professional capabilities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {resumeData.skills.map((skill) => (
                <div key={skill} className="rounded-md bg-primary/10 px-3 py-1 text-sm text-primary">
                  {skill}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
