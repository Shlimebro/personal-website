import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface ArticleCardProps {
  title: string
  excerpt: string
  date: string
  slug: string
}

export default function ArticleCard({ title, excerpt, date, slug }: ArticleCardProps) {
  return (
    <Card className="flex h-full flex-col">
      <CardHeader className="p-4">
        <CardTitle className="line-clamp-2 text-xl font-bold">{title}</CardTitle>
        <CardDescription className="text-sm text-muted-foreground">{date}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 p-4 pt-0">
        <p className="line-clamp-3 text-sm text-muted-foreground">{excerpt}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Link 
          href={`/blog/${slug}`} 
          className="inline-flex items-center text-sm font-medium text-primary"
        >
          Read more <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </CardFooter>
    </Card>
  )
}
