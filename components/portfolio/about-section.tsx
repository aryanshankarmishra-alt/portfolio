export function AboutSection() {
  return (
    <section id="about" className="relative scroll-mt-16 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-grid bg-grid-fade opacity-40" aria-hidden="true" />
      <div className="relative mx-auto w-full max-w-3xl px-4 py-20 sm:px-6 md:py-28">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">About Me</p>
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Who am I?
          </h2>
        </div>
        <div className="mt-10 space-y-5 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          <p>
            I used to think the best engineers built the most complicated systems. I was wrong. The
            best engineers build systems that actually work.
          </p>
          <p>
            My philosophy is simple: technology should be humane, reliable, and completely invisible
            to the user. Balancing dual enrollment coursework with launching startups requires
            serious discipline. Spending years earning a 3rd Degree Black Belt in Taekwondo gave me
            plenty of that.
          </p>
          <p className="font-medium text-foreground">
            I am not here to pad a resume with busywork. I am here to build things that matter.
          </p>
        </div>
      </div>
    </section>
  )
}
