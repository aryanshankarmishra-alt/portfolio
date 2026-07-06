import { TrendingUp, Award, BookOpen, Heart, Medal, Zap } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"

const leadershipItems = [
  {
    icon: TrendingUp,
    title: "President, FinTech Club",
    detail: "Elected President — scaled membership 10x and established an Executive Board focused on finance and product demos.",
  },
  {
    icon: BookOpen,
    title: "4x FBLA National Qualifier",
    detail: "Four-time national qualifier; State 2nd place in Data Analysis.",
  },
  {
    icon: Award,
    title: "Senior Council Chair, FBLA",
    detail: "Directed competition strategy and operations across chapter initiatives.",
  },
  {
    icon: Medal,
    title: "Vice President, National Honor Society",
    detail: "Managed chapter initiatives and fostered academic leadership culture.",
  },
  {
    icon: Zap,
    title: "Research & Analysis",
    detail: "NYC Air Quality Data Analysis (Sept 2024–Mar 2025) — evaluated air quality trends following Canadian wildfires.",
  },
  {
    icon: Heart,
    title: "Community Engagement",
    detail: "Active volunteer with Vibha & Spanda Dance; committed to meaningful community impact.",
  },
]

export function LeadershipSection() {
  return (
    <section id="leadership" className="scroll-mt-16">
      <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 md:py-28">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">Leadership & Impact</p>
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            What I lead & create
          </h2>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2">
          {leadershipItems.map((item) => (
            <Card key={item.title} className="border-border bg-card transition-all hover:border-primary/50 hover:shadow-sm">
              <CardContent className="p-5">
                <div className="flex gap-3">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                    <item.icon className="size-5" aria-hidden="true" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-foreground text-sm">{item.title}</h3>
                    <p className="mt-0.5 text-xs text-muted-foreground leading-relaxed">{item.detail}</p>
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
