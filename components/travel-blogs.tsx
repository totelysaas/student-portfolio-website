import Link from "next/link"
import { MapPin, Calendar, ArrowRight, Plane } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import type { BlogPost } from "@/lib/content"

interface TravelBlogsProps {
  blogs: BlogPost[]
}

export function TravelBlogs({ blogs }: TravelBlogsProps) {
  const featuredBlogs = blogs.filter((b) => b.featured)
  const otherBlogs = blogs.filter((b) => !b.featured)

  return (
    <section id="travel" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <Plane className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">Travel Stories</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Adventures from around the world, captured through words and images. Each journey teaches something new.
          </p>
        </div>

        {featuredBlogs.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {featuredBlogs.map((blog) => (
              <Link
                key={blog.slug}
                href={`/blog/${blog.slug}`}
                className="group relative block overflow-hidden rounded-2xl bg-muted aspect-[16/10]"
              >
                <img
                  src={blog.image || "/placeholder.svg"}
                  alt={blog.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {blog.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-white/20 text-white border-0 backdrop-blur-sm text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 text-balance group-hover:underline underline-offset-4">
                    {blog.title}
                  </h3>
                  <p className="text-sm text-white/80 line-clamp-2 mb-3">{blog.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-white/70">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {blog.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {blog.date}
                    </span>
                    <span>{blog.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        <div className="space-y-4">
          {otherBlogs.map((blog) => (
            <Link
              key={blog.slug}
              href={`/blog/${blog.slug}`}
              className="group flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 rounded-xl border bg-card hover:bg-muted/50 transition-colors"
            >
              <div className="relative w-full sm:w-48 h-40 sm:h-32 shrink-0 overflow-hidden rounded-lg bg-muted">
                <img
                  src={blog.image || "/placeholder.svg"}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {blog.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs px-2 py-0">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors text-balance">
                  {blog.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-2">{blog.excerpt}</p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {blog.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {blog.date}
                  </span>
                  <span>{blog.readTime}</span>
                  <span className="ml-auto flex items-center gap-1 text-primary font-medium group-hover:gap-2 transition-all">
                    Read
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
