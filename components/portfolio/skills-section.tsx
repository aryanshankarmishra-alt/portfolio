import { Code2, Brain, Database, Zap, BookOpen, Medal } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const technicalSkills = [
  { category: "Languages", skills: ["Python", "Java", "SQL", "R", "JavaScript"] },
  { category: "Frontend", skills: ["React.js", "HTML/CSS", "Tailwind"] },
  { category: "Data & Backend", skills: ["PostgreSQL", "Data Architecture", "Analytics"] },
]

const domainExpertise = [
  "Data Architecture",
  "Financial Technology",
  "E-commerce Optimization",
  "Algorithmic Bias Mitigation",
]

const softSkills = [
  "High-level Project Execution",
  "Cross-functional Leadership",
  "Disciplined Time Management",
]

const achievements = [
  {
    icon: Medal,
    title: "FBLA National Competitor",
    detail: "4x National Leadership Conference qualifier. State 2nd place in Data Analysis.",
  },
  {
    icon: Zap,
    title: "FinTech Certified",
    detail: "Dual enrollment at Middle Georgia State University.",
  },
  {
    icon: Brain,
    title: "SAT: 1530",
    detail: "800 Math, 730 Evidence-Based Reading & Writing.",
  },
  {
    icon: BookOpen,
    title: "3rd Degree Black Belt",
    detail: "American Taekwondo Association. Discipline & excellence.",
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-16 bg-secondary/30">
      <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 md:py-28">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">Expertise & Validation</p>
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Skills that matter
          </h2>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 lg:grid-cols-2">
          {/* Technical Skills */}
          <Card className="border-border bg-card">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Code2 className="size-5 text-primary" />
                <CardTitle className="text-lg">Technical Skills</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {technicalSkills.map((group) => (
                <div key={group.category}>
                  <p className="text-xs font-semibold uppercase text-muted-foreground mb-2">{group.category}</p>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Domain Expertise */}
          <Card className="border-border bg-card">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Database className="size-5 text-primary" />
                <CardTitle className="text-lg">Domain Expertise</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {domainExpertise.map((expertise) => (
                  <div key={expertise} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="inline-block size-1.5 rounded-full bg-primary" />
                    {expertise}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Soft Skills */}
          <Card className="border-border bg-card">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Zap className="size-5 text-primary" />
                <CardTitle className="text-lg">Soft Skills</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {softSkills.map((skill) => (
                  <div key={skill} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="inline-block size-1.5 rounded-full bg-primary" />
                    {skill}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Achievements Grid */}
          <div className="space-y-4 lg:col-span-2 lg:grid lg:grid-cols-2 lg:gap-4 lg:space-y-0">
            {achievements.map((a) => (
              <Card key={a.title} className="border-border bg-card">
                <CardContent className="pt-6">
                  <div className="flex gap-3">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                      <a.icon className="size-5" />
                    </span>
                    <div>
                      <p className="font-medium text-foreground text-sm">{a.title}</p>
                      <p className="text-xs text-muted-foreground mt-1">{a.detail}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
