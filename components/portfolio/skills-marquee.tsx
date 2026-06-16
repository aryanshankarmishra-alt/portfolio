const skills = [
  "Python",
  "Java",
  "SQL",
  "PostgreSQL",
  "R",
  "React.js",
  "HTML / CSS",
  "Data Science",
  "Machine Learning",
  "Analytics",
]

export function SkillsMarquee() {
  const row = [...skills, ...skills]
  return (
    <section
      aria-label="Technologies"
      className="border-y border-border bg-secondary/40 py-6"
    >
      <div className="marquee-pause relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]">
        <div className="flex shrink-0 animate-marquee items-center gap-3 pr-3">
          {row.map((skill, i) => (
            <span
              key={`${skill}-${i}`}
              className="flex items-center gap-2 whitespace-nowrap rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground shadow-sm"
            >
              <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
              {skill}
            </span>
          ))}
        </div>
        <div
          aria-hidden="true"
          className="flex shrink-0 animate-marquee items-center gap-3 pr-3"
        >
          {row.map((skill, i) => (
            <span
              key={`dup-${skill}-${i}`}
              className="flex items-center gap-2 whitespace-nowrap rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground shadow-sm"
            >
              <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
