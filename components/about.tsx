import { Code2, Newspaper, Cpu, Plane } from "lucide-react"
import { Card } from "@/components/ui/card"

export function About() {
  const interests = [
    {
      icon: Code2,
      title: "iOS Development",
      description:
        "Created RoboTrack, the essential inventory app for VEX robotics teams with smart alerts and thousands of authentic VEX components",
    },
    {
      icon: Cpu,
      title: "Robotics",
      description:
        "6 years competing in FIRST Lego League (5th-7th grade) and VEX Robotics (8th-11th grade), mastering mechanical design, driving, and C++ programming",
    },
    {
      icon: Newspaper,
      title: "Journalism",
      description:
        "Co-Editor-in-Chief and teacher, led our yearbook to 7th place nationally at NSPA. Former Sports Editor covering 30+ teams",
    },
    {
      icon: Plane,
      title: "Travel",
      description: "Exploring cultures, landscapes, and human connections worldwide",
    },
  ]

  return (
    <section id="about" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            I'm Tanushri, a high school senior heading to college to study Aerospace Engineering. I love building things
            that solve real problems and telling stories that matter.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {interests.map((interest) => (
            <Card
              key={interest.title}
              className="p-6 sm:p-8 hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/50"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <interest.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{interest.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{interest.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-8 sm:p-12 bg-gradient-to-br from-primary/5 to-accent/5 border-2">
          <div className="max-w-3xl">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-balance">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              My robotics journey started in 5th grade with FIRST Lego League, where I fell in love with building and
              problem-solving. In 8th grade, I moved to VEX Robotics Competition, learning mechanical design, driving
              robots under pressure, and programming in both CAD and C++ for autonomous controls. Those years taught me
              to stay composed in competition and work as part of a team.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              As Sports Editor for our yearbook, I coordinated with nearly 30 sports teams to find stories beyond the
              scoreboard. I set up extra editorial meetings on my own time because I believed in the work. Our Poverello
              yearbook placed 7th nationally at NSPA Fall Best of Show. As a junior, I presented at the National High
              School Journalism Convention in Seattle, teaching small staffs how to manage large-school coverage. Now as
              Co-Editor-in-Chief, I design lessons to help students find their voice and place in our yearbook family.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not in the workshop or the newsroom, I'm planning my next adventure or building apps that solve
              real problems. RoboTrack came from seeing my own team struggle with inventory management. Now I'm excited
              to pursue Aerospace Engineering in college and keep creating, exploring, and learning.
            </p>
          </div>
        </Card>
      </div>
    </section>
  )
}
