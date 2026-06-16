import { Badge } from "@/components/ui/badge"

const skills = ["Python", "Java", "SQL (ANSI & PostgreSQL)", "R", "HTML/CSS", "React.js"]

const achievements = [
  "FBLA National Competitor (2nd in state for Data Analysis)",
  "FinTech Certificate (Middle Georgia State University)",
]

export function SkillsSection() {
  return (
    <section id="skills" className="border-b border-border">
      <div className="mx-auto grid w-full max-w-3xl gap-12 px-6 py-24 sm:grid-cols-2">
        <div>
          <h2 className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Skills
          </h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge key={skill} variant="secondary" className="font-normal">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
        <div>
          <h2 className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Validation
          </h2>
          <ul className="space-y-3">
            {achievements.map((achievement) => (
              <li key={achievement} className="flex gap-3 text-sm leading-relaxed text-foreground/90">
                <span aria-hidden="true" className="mt-2 size-1 shrink-0 rounded-full bg-muted-foreground" />
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
