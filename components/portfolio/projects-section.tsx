import { ArrowUpRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GithubIcon } from "@/components/portfolio/brand-icons"

const projects = [
  {
    title: "Proxilytics Web Platform",
    tag: "Founder",
    description:
      "A live business optimization platform that streamlines daily operations for local businesses through clean, reliable tooling.",
    href: "https://remote-spec-78909487.figma.site/",
    stack: ["React.js", "Data", "Operations"],
  },
  {
    title: "aivon.ai",
    tag: "VP of Data Science",
    description:
      "Core data strategy and architectural implementation behind aivon's product, from data modeling to delivery.",
    href: "https://aivon.us/",
    stack: ["Python", "SQL", "ML"],
  },
]

export function ProjectsSection() {
  return (
    <section id="work" className="scroll-mt-16">
      <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 md:py-28">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">My Work</p>
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            What have I made?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-pretty text-muted-foreground">
            A collection of things I have shipped. Check out more on{" "}
            <a
              href="https://github.com/aryanshankarmishra-alt"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              GitHub
            </a>
            .
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="flex flex-col overflow-hidden border-border bg-card transition-colors hover:border-primary/50"
            >
              <CardHeader>
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                  {project.tag}
                </p>
                <CardTitle className="mt-1 text-xl">{project.title}</CardTitle>
                <CardDescription className="mt-2 text-sm leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto flex flex-col gap-5">
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button
                    size="sm"
                    nativeButton={false}
                    render={<a href={project.href} target="_blank" rel="noreferrer" />}
                  >
                    Live Demo
                    <ArrowUpRight className="size-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    nativeButton={false}
                    render={
                      <a href="https://github.com/aryanshankarmishra-alt" target="_blank" rel="noreferrer" />
                    }
                  >
                    <GithubIcon className="size-4" />
                    GitHub
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
