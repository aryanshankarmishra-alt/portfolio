import { FileText, Zap, Eye } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"

const researchProjects = [
  {
    icon: FileText,
    title: "NYC Air Quality Data Analysis",
    period: "Sept 2024 – Mar 2025",
    description: "Comprehensive evaluation of New York City air quality trends following the Canadian wildfires for FBLA competition.",
    skills: ["Data Analysis", "Environmental Science", "Statistics"],
  },
  {
    icon: FileText,
    title: "Analyzing the Efficacy of Information Collection Under the Affordable Housing Act",
    period: "Dec 2025 – Jan 2026",
    description: "Analytical policy brief submitted to the Federal Housing Finance Agency (FHFA). Evaluated operational information collection frameworks and pinpointed systemic reporting inefficiencies. Led critical data sections (3.2, 5.2) during urgent mid-deadline turnaround.",
    skills: ["Data Analytics", "System Monitoring", "Policy Analysis"],
  },
  {
    icon: Zap,
    title: "Blueprints for a New Industrial Age: Advanced Manufacturing Strategy",
    period: "Jul 2025 – Aug 2025",
    description: "Co-authored research brief for NIST on nationwide advanced manufacturing strategy. Spearheaded quantitative analysis of supply chain vulnerabilities and manufacturing scaling across federal policy infrastructure.",
    skills: ["Policy Analysis", "Data Analysis", "Supply Chain Analytics"],
  },
  {
    icon: Eye,
    title: "The Aesthetics of Space: Image Processing and Public Perception",
    period: "Jun 2025 – Jul 2025",
    description: "Analytical research on how image processing choices (colorization, contrast, compositing) shape public understanding of the universe. Analyzed raw telemetry translation from Hubble & JWST into accessible visual formats.",
    skills: ["Data Visualization", "Scientific Communications", "Psychology"],
  },
]

export function ResearchSection() {
  return (
    <section id="research" className="scroll-mt-16">
      <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 md:py-28">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">Research & Analysis</p>
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Projects I&apos;ve researched
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-4xl space-y-4">
          {researchProjects.map((project) => (
            <Card key={project.title} className="border-border bg-card transition-all hover:border-primary/50 hover:shadow-sm">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                    <project.icon className="size-6" />
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between sm:gap-2">
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground text-sm sm:text-base">{project.title}</h3>
                        <p className="text-xs text-muted-foreground mt-0.5">{project.period}</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {project.skills.map((skill) => (
                        <span key={skill} className="inline-block text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
