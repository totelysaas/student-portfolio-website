import { ExternalLink, Smartphone, Bot, Newspaper, Blocks } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function Projects() {
  const projects = [
    {
      title: "RoboTrack",
      subtitle: "VEX Inventory App",
      description:
        "The essential inventory app for VEX robotics teams. Track parts, manage orders, get smart low-stock alerts, and browse thousands of authentic VEX components with pricing and specs.",
      icon: Smartphone,
      tags: ["Swift", "SwiftUI", "iOS"],
      link: "https://apps.apple.com",
      linkText: "App Store",
      color: "from-blue-500/20 to-cyan-500/20",
      iconColor: "text-blue-600",
    },
    {
      title: "VEX Competition Robot",
      subtitle: "Autonomous Systems",
      description:
        "Competition robot with autonomous programming in C++. Built mechanical systems, programmed controls, and competed in high-pressure VEX tournaments from 8th-11th grade.",
      icon: Bot,
      tags: ["C++", "CAD", "VEX"],
      link: "#",
      linkText: "Learn More",
      color: "from-orange-500/20 to-red-500/20",
      iconColor: "text-orange-600",
    },
    {
      title: "Poverello Yearbook",
      subtitle: "7th Place Nationally - NSPA",
      description:
        "Co-Editor-in-Chief of award-winning yearbook. Led coverage of 30+ sports teams and presented at National High School Journalism Convention in Seattle.",
      icon: Newspaper,
      tags: ["Leadership", "Design", "Journalism"],
      link: "#",
      linkText: "View Work",
      color: "from-purple-500/20 to-pink-500/20",
      iconColor: "text-purple-600",
    },
    {
      title: "FIRST Lego League",
      subtitle: "5th-7th Grade Robotics",
      description:
        "Three years of competitive robotics building and programming robots to solve real-world challenges. Foundation for engineering thinking and teamwork.",
      icon: Blocks,
      tags: ["Mindstorms", "Teamwork", "Engineering"],
      link: "#",
      linkText: "See Journey",
      color: "from-emerald-500/20 to-teal-500/20",
      iconColor: "text-emerald-600",
    },
  ]

  return (
    <section id="projects" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            From iOS apps to competition robots - a collection of work spanning engineering and leadership.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="p-6">
                <div className="flex items-start gap-4">
                  {/* Icon with gradient background */}
                  <div
                    className={`shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center`}
                  >
                    <project.icon className={`w-7 h-7 ${project.iconColor}`} />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold leading-tight">{project.title}</h3>
                    <p className="text-sm text-muted-foreground">{project.subtitle}</p>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mt-4 mb-4">{project.description}</p>

                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs px-2 py-0.5">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Button size="sm" variant="ghost" className="h-8 text-xs group/btn" asChild>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      {project.linkText}
                      <ExternalLink className="w-3 h-3 ml-1.5 group-hover/btn:translate-x-0.5 transition-transform" />
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
