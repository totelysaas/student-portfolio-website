"use client"

import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto text-center">
        <div className="inline-block mb-4 px-4 py-2 rounded-full bg-muted text-sm font-medium text-muted-foreground">
          Aspiring Aerospace Engineer
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold mb-6 text-balance">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Tanushri Rajesh</span>
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty leading-relaxed">
          I build iOS apps for robotics teams, compete with autonomous robots, lead award-winning journalism, and
          explore the world. Currently preparing for Aerospace Engineering in college.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="text-base" asChild>
            <a href="#projects">View My Work</a>
          </Button>
          <Button size="lg" variant="outline" className="text-base bg-transparent" asChild>
            <a href="#about">About Me</a>
          </Button>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  )
}
