import { Mail, ArrowUpRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { GithubIcon, LinkedinIcon } from "@/components/portfolio/brand-icons"

const socials = [
  { label: "GitHub", href: "https://github.com/aryanshankarmishra-alt", icon: GithubIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/aryan-a-mishra/", icon: LinkedinIcon },
  { label: "Email", href: "mailto:aryanshankarmishra@gmail.com", icon: Mail },
]

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-16">
      <div className="mx-auto w-full max-w-3xl px-4 py-20 text-center sm:px-6 md:py-28">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">Contact</p>
        <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Let&apos;s build something that actually works.
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-pretty text-muted-foreground">
          Humane, reliable technology that is completely invisible to the user. Reach out and let
          us get started.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            size="lg"
            nativeButton={false}
            render={<a href="mailto:aryanshankarmishra@gmail.com" />}
            className="w-full sm:w-auto"
          >
            <Mail className="size-4" />
            Contact Me
          </Button>
          <Button
            size="lg"
            variant="outline"
            nativeButton={false}
            render={
              <a
                href="https://drive.google.com/file/d/1xc1uXkPDqKgV8Ef3Uv2bSnPTo2vi2Ubg/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              />
            }
            className="w-full sm:w-auto"
          >
            View Resume
            <ArrowUpRight className="size-4" />
          </Button>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel={s.href.startsWith("http") ? "noreferrer" : undefined}
              aria-label={s.label}
              className="flex size-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <s.icon className="size-4" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
