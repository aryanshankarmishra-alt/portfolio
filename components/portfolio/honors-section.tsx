import { Award, Medal, Star, Trophy } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"

const honors = [
  {
    icon: Trophy,
    title: "FBLA National Competitor",
    issuer: "Future Business Leaders of America",
    date: "Mar 2025",
    description: "2nd Place in Georgia for Data Analysis",
  },
  {
    icon: Star,
    title: "AP Scholar with Distinction",
    issuer: "College Board",
    date: "Jul 2025",
    description: "Avg. score ≥ 3.5 on all AP Exams",
  },
  {
    icon: Award,
    title: "Business Achievement Award",
    issuer: "FBLA",
    date: "Mar 2026",
    description: "Leadership & Business Acumen Recognition",
  },
  {
    icon: Medal,
    title: "Mu Alpha Theta",
    issuer: "National Mathematics Honor Society",
    date: "Aug 2025",
  },
  {
    icon: Medal,
    title: "NSHS",
    issuer: "National Spanish Honors Society",
    date: "Aug 2025",
  },
  {
    icon: Medal,
    title: "NTHS",
    issuer: "National Technical Honors Society",
    date: "Aug 2025",
  },
  {
    icon: Star,
    title: "AP Scholar with Honors",
    issuer: "College Board",
    date: "Jul 2025",
    description: "Avg. score ≥ 3.25 on all AP Exams",
  },
  {
    icon: Medal,
    title: "National Beta Club",
    issuer: "National Beta Club",
    date: "Sep 2024",
  },
  {
    icon: Trophy,
    title: "3rd Degree Black Belt",
    issuer: "American Taekwondo Association",
    date: "May 2022",
    description: "Decade of discipline, mastery & mentorship",
  },
]

export function HonorsSection() {
  return (
    <section id="honors" className="scroll-mt-16 bg-secondary/30">
      <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 md:py-28">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">Recognition</p>
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Honors & Awards
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-5xl grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {honors.map((honor) => (
            <Card key={honor.title} className="border-border bg-card transition-all hover:border-primary/50">
              <CardContent className="p-4">
                <div className="flex gap-3">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground flex-shrink-0">
                    <honor.icon className="size-4" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-foreground text-xs leading-tight">{honor.title}</p>
                    <p className="text-xs text-muted-foreground mt-1">{honor.issuer}</p>
                    <p className="text-xs text-muted-foreground">{honor.date}</p>
                    {honor.description && (
                      <p className="text-xs text-muted-foreground mt-1.5">{honor.description}</p>
                    )}
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
