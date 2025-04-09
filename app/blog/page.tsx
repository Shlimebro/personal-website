import ArticleCard from "@/components/article-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export const metadata = {
  title: "Blog | Your Name",
  description: "Articles, insights and thoughts on web development and technology",
}

export default function BlogPage() {
  // This would typically come from a CMS or database
  const articles = [
    {
      title: "The Future of Web Development",
      excerpt:
        "Exploring the latest trends and technologies shaping the future of web development. From new frameworks to innovative approaches, discover what's next in the world of web development.",
      date: "April 15, 2023",
      slug: "future-of-web-development",
    },
    {
      title: "Optimizing React Performance",
      excerpt:
        "Tips and techniques for improving the performance of your React applications. Learn about memo, useMemo, useCallback, and other optimization strategies.",
      date: "March 22, 2023",
      slug: "optimizing-react-performance",
    },
    {
      title: "Introduction to TypeScript",
      excerpt:
        "A beginner's guide to TypeScript and how it can improve your JavaScript development experience with static typing and enhanced tooling.",
      date: "February 10, 2023",
      slug: "introduction-to-typescript",
    },
    {
      title: "Building Accessible Web Applications",
      excerpt:
        "Learn how to create inclusive and accessible web applications that everyone can use, regardless of their abilities or disabilities.",
      date: "January 28, 2023",
      slug: "building-accessible-web-applications",
    },
    {
      title: "Getting Started with Next.js",
      excerpt:
        "A comprehensive guide to building modern web applications with Next.js, from setup to deployment and everything in between.",
      date: "December 15, 2022",
      slug: "getting-started-with-nextjs",
    },
    {
      title: "CSS Grid vs Flexbox",
      excerpt:
        "Understanding the differences between CSS Grid and Flexbox, and when to use each layout system for optimal results.",
      date: "November 5, 2022",
      slug: "css-grid-vs-flexbox",
    },
  ]

  const categories = [
    "All",
    "Web Development",
    "React",
    "JavaScript",
    "TypeScript",
    "CSS",
    "Performance",
    "Accessibility",
    "Next.js",
  ]

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <h1 className="mb-6 text-3xl font-bold md:text-4xl">Blog</h1>
      <p className="mb-10 max-w-3xl text-muted-foreground">
        Articles, insights, and thoughts on web development, programming, and technology.
      </p>

      <div className="mb-8 flex flex-col gap-4 sm:flex-row">
        <div className="relative flex-grow">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search articles..." className="w-full pl-8" />
        </div>
        <div className="flex overflow-x-auto pb-2 sm:pb-0">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={index === 0 ? "default" : "outline"}
              size="sm"
              className="mr-2 whitespace-nowrap"
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article, index) => (
          <ArticleCard
            key={index}
            title={article.title}
            excerpt={article.excerpt}
            date={article.date}
            slug={article.slug}
          />
        ))}
      </div>
    </div>
  )
}
