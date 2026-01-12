import Link from "next/link"
import { ArrowLeft, Heart, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getBirthdayConfig } from "@/lib/content"
import { BirthdayGallery } from "@/components/birthday-gallery"

export default async function BirthdayPage() {
  const config = await getBirthdayConfig()

  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <Link href="/">
            <Button variant="ghost" size="sm" className="mb-8 group">
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Button>
          </Link>

          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10">
              <Heart className="w-5 h-5 text-primary fill-primary" />
              <span className="font-medium">{config.subtitle}</span>
              <Sparkles className="w-5 h-5 text-accent" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              {config.title}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              {config.description}
            </p>
            <div className="mt-8 p-6 bg-muted/50 rounded-lg max-w-3xl mx-auto">
              <p className="text-base leading-relaxed italic">
                "{config.letter}"
              </p>
            </div>
          </div>

          <BirthdayGallery photos={config.photos} />
        </div>
      </div>
    </main>
  )
}
