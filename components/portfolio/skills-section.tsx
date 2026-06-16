import { Trophy, Award } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const skills = ["Python", "Java", "SQL (ANSI & PostgreSQL)", "R", "HTML/CSS", "React.js"]

const achievements = [
  {
    icon: Trophy,
    title: "FBLA National Competitor",
    detail: "2nd in state for Data Analysis.",
  },
  {
    icon: Award,
    title: "FinTech Certificate",
    detail: "Middle Georgia State University.",
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-16 bg-secondary/30">
      <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 md:py-28">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">Skills</p>
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Tools &amp; validation
          </h2>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="text-lg">Technical Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="px-3 py-1 text-sm font-normal">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="text-lg">Achievements</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {achievements.map((a) => (
                  <li key={a.title} className="flex gap-3">
                    <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                      <a.icon className="size-4" />
                    </span>
                    <span>
                      <span className="block text-sm font-medium text-foreground">{a.title}</span>
                      <span className="block text-sm text-muted-foreground">{a.detail}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
