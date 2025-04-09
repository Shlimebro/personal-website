import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://yourdomain.com"

  // These would typically be dynamically generated based on your content
  const routes = [
    "",
    "/about",
    "/resume",
    "/projects",
    "/blog",
    "/contact",
    "/blog/future-of-web-development",
    "/blog/optimizing-react-performance",
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }))
}
