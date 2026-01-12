import Link from "next/link"
import { Github, Linkedin, Mail, Instagram, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Mail, href: "mailto:hello@example.com", label: "Email" },
  ]

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Let's Connect</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Always excited to collaborate on projects, share travel stories, or discuss the latest in tech and
              journalism.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <Button key={link.label} variant="outline" size="icon" asChild>
                  <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
                    <link.icon className="w-5 h-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <nav className="space-y-2">
              <Link href="#about" className="block text-muted-foreground hover:text-foreground transition-colors">
                About Me
              </Link>
              <Link href="#projects" className="block text-muted-foreground hover:text-foreground transition-colors">
                Projects
              </Link>
              <Link href="#travel" className="block text-muted-foreground hover:text-foreground transition-colors">
                Travel Blog
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Have a project idea or just want to say hi? I'd love to hear from you!
            </p>
            <Button asChild className="w-full sm:w-auto">
              <a href="mailto:hello@example.com">
                <Mail className="w-4 h-4 mr-2" />
                Send a Message
              </a>
            </Button>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Portfolio. Built with Next.js and passion. 🚀</p>
          <Link href="/birthday" className="inline-block mt-2 opacity-30 hover:opacity-100 transition-opacity text-xs">
            Family
          </Link>
        </div>
      </div>
    </footer>
  )
}
