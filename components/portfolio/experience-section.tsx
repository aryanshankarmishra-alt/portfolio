import { Briefcase, LineChart, Database } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const roles = [
  {
    company: "Proxilytics",
    role: "Founder",
    icon: Briefcase,
    description:
      "Architecting a custom full-stack web platform using React and Tailwind to optimize daily operations and marketing ROI for local businesses.",
  },
  {
    company: "aivon.ai",
    role: "VP of Data Science",
    icon: LineChart,
    description: "Leading the data architecture and strategy for our core product.",
  },
  {
    company: "Mosaic Cakes",
    role: "Data Analytics Intern",
    icon: Database,
    description:
      "Optimized e-commerce data structures, reducing query latency and enabling seamless product migration.",
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-16 bg-secondary/30">
      <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 md:py-28">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">Experience</p>
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            What can I do?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-pretty text-muted-foreground">
            A brief, non-technical summary of the roles where I have shipped real work.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {roles.map((item) => (
            <Card
              key={item.company}
              className="group border-border bg-card transition-colors hover:border-primary/50"
            >
              <CardHeader>
                <div className="flex size-11 items-center justify-center rounded-xl bg-accent text-accent-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <item.icon className="size-5" aria-hidden="true" />
                </div>
                <CardTitle className="mt-4 text-lg">{item.company}</CardTitle>
                <CardDescription className="font-medium text-primary">
                  {item.role}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
