import Image from "next/image"
import { ArrowRight, ArrowUpRight, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { GithubIcon, LinkedinIcon } from "@/components/portfolio/brand-icons"

const socials = [
  { label: "GitHub", href: "https://github.com/aryanshankarmishra-alt", icon: GithubIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/aryan-a-mishra/", icon: LinkedinIcon },
  { label: "Email", href: "mailto:aryanshankarmishra@gmail.com", icon: Mail },
]

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-grid bg-grid-fade opacity-60" aria-hidden="true" />
      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center gap-10 px-4 pb-16 pt-28 sm:px-6 md:flex-row md:justify-between md:pb-24 md:pt-36">
        <div className="max-w-xl text-center md:text-left">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Founder & Data Scientist
          </p>
          <h1 className="mt-3 text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Hey, I&apos;m Aryanshankar.
          </h1>
          <p className="mt-5 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            I build humane, reliable technology that is completely invisible to the user. Founder
            at Proxilytics and VP of Data Science at aivon.ai, focused on systems that actually
            work.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row md:items-start">
            <Button size="lg" nativeButton={false} render={<a href="#about" />} className="w-full sm:w-auto">
              About me
              <ArrowRight className="size-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              nativeButton={false}
              render={<a href="#work" />}
              className="w-full sm:w-auto"
            >
              View my work
              <ArrowUpRight className="size-4" />
            </Button>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2 md:justify-start">
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

        <div className="relative shrink-0">
          <div className="absolute -inset-4 rounded-full bg-primary/10 blur-2xl" aria-hidden="true" />
          <div className="relative size-52 overflow-hidden rounded-full border border-border bg-card shadow-sm sm:size-64 lg:size-72">
            <Image
              src="/profile.png"
              alt="Portrait of Aryanshankar Mishra"
              fill
              priority
              sizes="(max-width: 640px) 13rem, 18rem"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
