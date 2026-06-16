import { BookOpen } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function EducationSection() {
  return (
    <section id="education" className="scroll-mt-16">
      <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 md:py-28">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">Education</p>
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            My Academic Journey
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-3xl">
          <Card className="border-border bg-card">
            <CardHeader>
              <div className="flex items-start gap-4">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                  <BookOpen className="size-6" />
                </span>
                <div>
                  <CardTitle className="text-xl">Alliance Academy for Innovation</CardTitle>
                  <p className="mt-1 text-sm text-muted-foreground">Class of 2027</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <p className="font-medium text-foreground">Extensive Dual Enrollment Curriculum</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Managing a rigorous college-level academic schedule concurrently with leading two startup ventures.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
