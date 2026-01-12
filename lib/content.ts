import fs from "fs"
import path from "path"
import matter from "gray-matter"

const contentDirectory = path.join(process.cwd(), "public/content")

export interface BirthdayConfig {
  title: string
  subtitle: string
  description: string
  letter: string
  photos: {
    year: number
    image: string
    caption: string
  }[]
}

export async function getBirthdayConfig(): Promise<BirthdayConfig> {
  const fullPath = path.join(contentDirectory, "birthday", "config.json")
  const fileContents = await fs.promises.readFile(fullPath, "utf8")
  return JSON.parse(fileContents)
}

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  location: string
  date: string
  image: string
  readTime: string
  tags: string[]
  featured: boolean
  content: string
}

export async function getAllBlogs(): Promise<BlogPost[]> {
  const blogsDirectory = path.join(contentDirectory, "blogs")
  
  if (!fs.existsSync(blogsDirectory)) {
      return []
  }

  const folders = await fs.promises.readdir(blogsDirectory)

  const blogs = await Promise.all(
    folders.map(async (folder) => {
      const fullPath = path.join(blogsDirectory, folder, "index.md")
      
      try {
        if (!fs.existsSync(fullPath)) return null
        
        const fileContents = await fs.promises.readFile(fullPath, "utf8")
        const { data, content } = matter(fileContents)

        return {
          slug: folder,
          ...data,
          content,
        } as BlogPost
      } catch (error) {
        console.error(`Error reading blog ${folder}:`, error)
        return null
      }
    })
  )

  return blogs.filter((blog): blog is BlogPost => blog !== null)
}

export async function getBlogBySlug(slug: string): Promise<BlogPost | null> {
  const fullPath = path.join(contentDirectory, "blogs", slug, "index.md")
  
  if (!fs.existsSync(fullPath)) {
    return null
  }

  const fileContents = await fs.promises.readFile(fullPath, "utf8")
  const { data, content } = matter(fileContents)

  return {
    slug,
    ...data,
    content,
  } as BlogPost
}
