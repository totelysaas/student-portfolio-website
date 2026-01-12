"use client"

import { Cake, Sparkles } from "lucide-react"
import { Card } from "@/components/ui/card"

export function Timeline() {
  const timelinePhotos = [
    { year: 18, image: "/18-year-old-high-school-senior-portrait.jpg" },
    { year: 17, image: "/17-year-old-teenager-happy-moment.jpg" },
    { year: 16, image: "/16-year-old-teenager-smiling.jpg" },
    { year: 15, image: "/15-year-old-teenager-portrait.jpg" },
    { year: 14, image: "/14-year-old-teenager.jpg" },
    { year: 13, image: "/placeholder-f7s7o.png" },
    { year: 12, image: "/12-year-old-preteen.jpg" },
    { year: 11, image: "/11-year-old-child.jpg" },
    { year: 10, image: "/10-year-old-child-smiling.jpg" },
    { year: 9, image: "/9-year-old-child.jpg" },
    { year: 8, image: "/8-year-old-child.jpg" },
    { year: 7, image: "/7-year-old-child.jpg" },
    { year: 6, image: "/6-year-old-child.jpg" },
    { year: 5, image: "/5-year-old-child-kindergarten.jpg" },
    { year: 4, image: "/4-year-old-preschooler.jpg" },
    { year: 3, image: "/placeholder.svg?height=400&width=400" },
    { year: 2, image: "/placeholder.svg?height=400&width=400" },
    { year: 1, image: "/placeholder.svg?height=400&width=400" },
  ]

  return (
    <section id="timeline" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-accent/10 text-accent">
            <Cake className="w-5 h-5" />
            <span className="font-medium">Birthday Special - For Family</span>
            <Sparkles className="w-5 h-5" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">18 Years of Memories</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            A photo journey through the years. Each picture captures a moment in time, a memory that shaped who I've
            become.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {timelinePhotos.map((item) => (
            <Card
              key={item.year}
              className="overflow-hidden group hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="relative aspect-square">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={`Year ${item.year}`}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold text-sm shadow-lg mx-auto">
                    {item.year}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground italic">
            Replace placeholder images with your actual photos by updating the image URLs
          </p>
        </div>
      </div>
    </section>
  )
}
