import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Projects } from "@/components/projects"
import { TravelBlogs } from "@/components/travel-blogs"
import { Footer } from "@/components/footer"
import { getAllBlogs } from "@/lib/content"

export default async function Home() {
  const blogs = await getAllBlogs()

  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Projects />
      <TravelBlogs blogs={blogs} />
      <Footer />
    </main>
  )
}
