import Link from "next/link"
import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface ProjectCardProps {
  title: string
  description: string
  imageUrl: string
  demoUrl?: string
  githubUrl?: string
  technologies: string[]
}

export default function ProjectCard({
  title,
  description,
  imageUrl,
  demoUrl,
  githubUrl,
  technologies,
}: ProjectCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          style={{ objectFit: "cover" }}
          className="transition-transform duration-500 ease-in-out hover:scale-105"
        />
      </div>
      <CardHeader className="p-4">
        <CardTitle className="line-clamp-1">{title}</CardTitle>
        <div className="flex flex-wrap gap-1 py-1">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
        <CardDescription className="line-clamp-2">{description}</CardDescription>
      </CardHeader>
      <CardFooter className="flex gap-2 p-4 pt-0">
        {demoUrl && (
          <Button asChild size="sm" variant="default">
            <Link href={demoUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-3.5 w-3.5" />
              Demo
            </Link>
          </Button>
        )}
        {githubUrl && (
          <Button asChild size="sm" variant="outline">
            <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-3.5 w-3.5" />
              Code
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
