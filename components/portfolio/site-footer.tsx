import { Mail } from "lucide-react"

import { GithubIcon, LinkedinIcon } from "@/components/portfolio/brand-icons"

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "My Work", href: "#work" },
]

const socials = [
  { label: "GitHub", href: "https://github.com/aryanshankarmishra-alt", icon: GithubIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/aryan-a-mishra/", icon: LinkedinIcon },
  { label: "Email", href: "mailto:aryanshankarmishra@gmail.com", icon: Mail },
]

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-lg font-semibold">Aryanshankar Mishra</p>
            <p className="mt-1 text-sm text-primary-foreground/70">
              Humane, reliable, invisible technology.
            </p>
          </div>

          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-primary-foreground/80 transition-colors hover:text-primary-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={s.label}
                className="flex size-9 items-center justify-center rounded-full bg-primary-foreground/10 text-primary-foreground transition-colors hover:bg-primary-foreground/20"
              >
                <s.icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 border-t border-primary-foreground/15 pt-6 text-center text-xs text-primary-foreground/60 sm:text-left">
          Created by Aryanshankar Mishra, {new Date().getFullYear()}.
        </div>
      </div>
    </footer>
  )
}
