import Link from "next/link"
import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = {
  title: "Resume | Your Name",
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
            <div>
              <div className="flex flex-col justify-between gap-1 md:flex-row md:items-center">
                <h3 className="font-bold">Senior Frontend Developer</h3>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Company Name</span>
                  <span className="text-xs">|</span>
                  <span className="text-sm text-muted-foreground">2020 - Present</span>
                </div>
              </div>
              <ul className="mt-2 list-inside list-disc space-y-1 text-muted-foreground">
                <li>Led the development of a major client portal that improved user engagement by 40%</li>
                <li>Implemented modern frontend architecture using React and TypeScript</li>
                <li>Mentored junior developers and conducted code reviews to ensure quality standards</li>
                <li>Collaborated with design and product teams to create intuitive user experiences</li>
              </ul>
            </div>

            <div>
              <div className="flex flex-col justify-between gap-1 md:flex-row md:items-center">
                <h3 className="font-bold">Frontend Developer</h3>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Previous Company</span>
                  <span className="text-xs">|</span>
                  <span className="text-sm text-muted-foreground">2018 - 2020</span>
                </div>
              </div>
              <ul className="mt-2 list-inside list-disc space-y-1 text-muted-foreground">
                <li>Developed responsive web applications using HTML, CSS, and JavaScript</li>
                <li>Worked with backend developers to integrate API services</li>
                <li>Optimized application performance and load times</li>
                <li>Participated in agile development processes including daily stand-ups and sprint planning</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Education */}
        <Card>
          <CardHeader>
            <CardTitle>Education</CardTitle>
            <CardDescription>My academic background and certifications</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <div className="flex flex-col justify-between gap-1 md:flex-row md:items-center">
                <h3 className="font-bold">Bachelor of Science in Computer Science</h3>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">University Name</span>
                  <span className="text-xs">|</span>
                  <span className="text-sm text-muted-foreground">2014 - 2018</span>
                </div>
              </div>
              <p className="mt-2 text-muted-foreground">
                Graduated with honors. Relevant coursework included Web Development, Data Structures & Algorithms, and
                Software Engineering.
              </p>
            </div>

            <div>
              <div className="flex flex-col justify-between gap-1 md:flex-row md:items-center">
                <h3 className="font-bold">Web Development Certification</h3>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Online Course Provider</span>
                  <span className="text-xs">|</span>
                  <span className="text-sm text-muted-foreground">2020</span>
                </div>
              </div>
              <p className="mt-2 text-muted-foreground">
                Advanced training in modern web development technologies and best practices.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Skills */}
        <Card>
          <CardHeader>
            <CardTitle>Skills</CardTitle>
            <CardDescription>Technical and professional capabilities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <h3 className="mb-2 font-bold">Technical Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "JavaScript",
                    "TypeScript",
                    "React",
                    "Next.js",
                    "HTML5",
                    "CSS3/Sass",
                    "Tailwind CSS",
                    "Node.js",
                    "Express",
                    "REST APIs",
                    "GraphQL",
                    "Git",
                    "CI/CD",
                  ].map((skill) => (
                    <div key={skill} className="rounded-md bg-primary/10 px-3 py-1 text-sm text-primary">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="mb-2 font-bold">Professional Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Project Management",
                    "Agile/Scrum",
                    "Team Leadership",
                    "Problem Solving",
                    "Technical Writing",
                    "Communication",
                    "UI/UX Design",
                  ].map((skill) => (
                    <div key={skill} className="rounded-md bg-secondary/30 px-3 py-1 text-sm text-secondary-foreground">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
