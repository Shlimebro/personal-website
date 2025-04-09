import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  // In a real application, you would fetch the article based on the slug
  // This is just a placeholder
  const article = {
    title: "The Future of Web Development",
    date: "April 15, 2023",
    author: "Your Name",
    content: `
      <p>Web development has come a long way since the early days of the internet. From static HTML pages to dynamic, interactive applications, the evolution has been remarkable. As we look to the future, several trends and technologies are poised to shape the landscape of web development in the coming years.</p>
      
      <h2>The Rise of AI-Powered Development</h2>
      <p>Artificial Intelligence is increasingly becoming integrated into web development workflows. From code completion to automated testing, AI tools are enhancing developer productivity. In the near future, we might see AI systems capable of generating entire components or applications based on natural language descriptions.</p>
      
      <h2>WebAssembly: Performance at the Forefront</h2>
      <p>WebAssembly (Wasm) allows code written in languages like C, C++, and Rust to run in the browser at near-native speed. This technology is opening doors for complex applications, like video editing and 3D rendering, to run efficiently on the web.</p>
      
      <h2>Progressive Web Apps: Native-Like Experiences</h2>
      <p>Progressive Web Apps (PWAs) continue to gain traction, offering users native-like experiences through web applications. With features like offline access, push notifications, and device hardware access, PWAs are bridging the gap between web and native apps.</p>
      
      <h2>Jamstack and Headless Architecture</h2>
      <p>The Jamstack (JavaScript, APIs, and Markup) approach is revolutionizing how websites are built and delivered. By pre-rendering pages and serving them from CDNs, Jamstack sites offer improved performance, security, and developer experience. Coupled with headless CMSs, this architecture provides flexibility while maintaining content management capabilities.</p>
      
      <h2>Serverless Computing: Scale Without the Hassle</h2>
      <p>Serverless architectures allow developers to focus on writing code without worrying about server management. As this paradigm evolves, we'll see more sophisticated serverless functions and integrations, making it easier to build and scale web applications.</p>
      
      <h2>Conclusion</h2>
      <p>The future of web development is bright and full of innovations. As developers, staying informed and adaptable is key to leveraging these emerging technologies. By embracing these trends, we can create more powerful, efficient, and user-friendly web experiences.</p>
    `,
  }

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <Button variant="ghost" asChild className="mb-6">
        <Link href="/blog" className="inline-flex items-center">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
        </Link>
      </Button>

      <article className="prose prose-gray mx-auto max-w-3xl dark:prose-invert">
        <h1 className="mb-2 text-3xl font-bold md:text-4xl">{article.title}</h1>
        <div className="mb-8 flex items-center text-muted-foreground">
          <span>{article.date}</span>
          <span className="mx-2">•</span>
          <span>{article.author}</span>
        </div>

        <div dangerouslySetInnerHTML={{ __html: article.content }} />
      </article>
    </div>
  )
}
