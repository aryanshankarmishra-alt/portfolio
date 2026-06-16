import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    title: "Proxilytics Web Platform",
    description: "Live business optimization platform.",
    href: "https://remote-spec-78909487.figma.site/",
  },
  {
    title: "aivon.ai",
    description: "Core data strategy and architectural implementation.",
    href: "https://aivon.us/",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="border-b border-border">
      <div className="mx-auto w-full max-w-3xl px-6 py-24">
        <h2 className="mb-8 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Featured Projects
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {projects.map((project) => (
            <Card key={project.title} className="flex flex-col border-border bg-card">
              <CardHeader>
                <CardTitle className="text-lg text-foreground">{project.title}</CardTitle>
                <CardDescription className="text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <Button
                  variant="outline"
                  size="sm"
                  nativeButton={false}
                  render={<a href={project.href} target="_blank" rel="noreferrer" />}
                >
                  View Live Site
                  <ArrowUpRight className="size-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
