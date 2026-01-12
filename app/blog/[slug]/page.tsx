import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, MapPin, Calendar, Clock, Share2, Bookmark } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { getAllBlogs, getBlogBySlug } from "@/lib/content"
import ReactMarkdown from "react-markdown"

export async function generateStaticParams() {
  const blogs = await getAllBlogs()
  return blogs.map((blog) => ({
    slug: blog.slug,
  }))
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const blog = await getBlogBySlug(slug)

  if (!blog) {
    notFound()
  }

  const blogs = await getAllBlogs()
  const currentIndex = blogs.findIndex((b) => b.slug === slug)
  const prevBlog = currentIndex > 0 ? blogs[currentIndex - 1] : null
  const nextBlog = currentIndex < blogs.length - 1 ? blogs[currentIndex + 1] : null

  return (
    <main className="min-h-screen bg-background">
      <div className="relative h-[50vh] sm:h-[60vh] w-full overflow-hidden">
        <img src={blog.image || "/placeholder.svg"} alt={blog.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

        {/* Back button overlay */}
        <div className="absolute top-6 left-6">
          <Link href="/#travel">
            <Button variant="secondary" size="sm" className="backdrop-blur-sm bg-background/80 hover:bg-background">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
          </Link>
        </div>
      </div>

      <article className="relative -mt-32 px-4 sm:px-6 lg:px-8 pb-20">
        <div className="container mx-auto max-w-3xl">
          <div className="bg-card rounded-2xl shadow-xl p-6 sm:p-10 mb-12 border">
            <div className="flex flex-wrap gap-2 mb-4">
              {blog.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance leading-tight">{blog.title}</h1>

            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-6">{blog.excerpt}</p>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t">
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-primary" />
                  {blog.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-primary" />
                  {blog.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-primary" />
                  {blog.readTime}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="h-9 w-9">
                  <Share2 className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-9 w-9">
                  <Bookmark className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="prose prose-lg prose-neutral dark:prose-invert max-w-none">
            <ReactMarkdown>{blog.content}</ReactMarkdown>
          </div>

          <div className="mt-16 pt-8 border-t">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {prevBlog ? (
                <Link
                  href={`/blog/${prevBlog.slug}`}
                  className="group p-4 rounded-xl border hover:bg-muted/50 transition-colors"
                >
                  <span className="text-xs text-muted-foreground uppercase tracking-wide">Previous</span>
                  <p className="font-medium mt-1 group-hover:text-primary transition-colors line-clamp-1">
                    {prevBlog.title}
                  </p>
                </Link>
              ) : (
                <div />
              )}
              {nextBlog && (
                <Link
                  href={`/blog/${nextBlog.slug}`}
                  className="group p-4 rounded-xl border hover:bg-muted/50 transition-colors sm:text-right"
                >
                  <span className="text-xs text-muted-foreground uppercase tracking-wide">Next</span>
                  <p className="font-medium mt-1 group-hover:text-primary transition-colors line-clamp-1">
                    {nextBlog.title}
                  </p>
                </Link>
              )}
            </div>

            <div className="mt-8 text-center">
              <Link href="/#travel">
                <Button variant="outline">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  All Travel Stories
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </main>
  )
}
