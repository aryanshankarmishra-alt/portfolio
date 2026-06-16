import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const roles = [
  {
    company: "Proxilytics",
    role: "Founder",
    description: "Building tech solutions that optimize daily operations for local businesses.",
  },
  {
    company: "aivon.ai",
    role: "VP of Data Science",
    description: "Leading the data architecture and strategy for our core product.",
  },
  {
    company: "Mosaic Cakes",
    role: "Data Analytics Intern",
    description:
      "Optimized e-commerce data structures, reducing query latency and enabling seamless product migration.",
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="border-b border-border">
      <div className="mx-auto w-full max-w-3xl px-6 py-24">
        <h2 className="mb-8 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Experience
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {roles.map((item) => (
            <Card key={item.company} className="border-border bg-card">
              <CardHeader>
                <CardDescription className="font-mono text-xs uppercase tracking-wider">
                  {item.role}
                </CardDescription>
                <CardTitle className="text-lg text-foreground">{item.company}</CardTitle>
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
