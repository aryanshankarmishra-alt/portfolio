import { Button } from "@/components/ui/button"
import { Mail, FileText } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/portfolio/brand-icons"

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/aryan-a-mishra/",
    icon: LinkedinIcon,
  },
  {
    label: "GitHub",
    href: "https://github.com/aryanshankarmishra-alt",
    icon: GithubIcon,
  },
  {
    label: "Email",
    href: "mailto:aryanshankarmishra@gmail.com",
    icon: Mail,
  },
]

export function HeroSection() {
  return (
    <section className="relative flex min-h-[85vh] items-center border-b border-border">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 [background-image:linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] [background-size:64px_64px] opacity-[0.18] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
      />
      <div className="relative mx-auto w-full max-w-3xl px-6 py-24">
        <p className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Humane, reliable, invisible
        </p>
        <h1 className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-7xl">
          Aryanshankar Mishra
        </h1>
        <p className="mt-6 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          Founder @ Proxilytics. VP of Data Science @ aivon.ai. Building humane, reliable tech.
        </p>
        <p className="mt-3 text-pretty text-lg font-medium leading-relaxed text-foreground sm:text-xl">
          I build systems that actually work.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button size="lg" nativeButton={false} render={<a href="#projects" />}>
            View Projects
          </Button>
          <Button size="lg" variant="outline" nativeButton={false} render={<a href="#contact" />}>
            Contact Me
          </Button>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-2">
          {socials.map((social) => {
            const Icon = social.icon
            return (
              <Button
                key={social.label}
                variant="ghost"
                size="icon"
                nativeButton={false}
                aria-label={social.label}
                render={<a href={social.href} target="_blank" rel="noreferrer" />}
              >
                <Icon className="size-5" />
              </Button>
            )
          })}
          <Button
            variant="outline"
            size="sm"
            nativeButton={false}
            className="ml-1"
            render={
              <a
                href="https://drive.google.com/file/d/1xc1uXkPDqKgV8Ef3Uv2bSnPTo2vi2Ubg/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              />
            }
          >
            <FileText className="size-4" />
            Resume
          </Button>
        </div>
      </div>
    </section>
  )
}
