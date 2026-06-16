import { Briefcase, Award, BookOpen, Users } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const leadershipItems = [
  {
    icon: Briefcase,
    title: "President, FinTech Club",
    detail: "Leading club operations and initiatives, backed by a formal FinTech Certification.",
  },
  {
    icon: Award,
    title: "Senior Council Chair, FBLA",
    detail: "Directing chapter strategy and competitive preparation.",
  },
  {
    icon: BookOpen,
    title: "Researcher, The Institute of New Frontiers",
    detail: "Engaged in independent research and analysis during the 2026 cycle.",
  },
  {
    icon: Users,
    title: "Community Engagement",
    detail: "Active volunteer supporting initiatives with Vibha, as well as separate dedicated involvement with Spanda Dance.",
  },
]

export function LeadershipSection() {
  return (
    <section id="leadership" className="scroll-mt-16 bg-secondary/30">
      <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 md:py-28">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">Leadership & Impact</p>
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Leading & Contributing
          </h2>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-6">
          {leadershipItems.map((item) => (
            <Card key={item.title} className="border-border bg-card">
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                    <item.icon className="size-6" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{item.detail}</p>
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
