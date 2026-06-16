export function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden border-b border-border">
      {/* Subtle modern grid background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--foreground) 1px, transparent 1px), linear-gradient(to bottom, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 0%, transparent 0%, var(--background) 75%)",
        }}
      />
      <div className="relative mx-auto w-full max-w-3xl px-6 py-24">
        <h2 className="mb-8 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          About
        </h2>
        <div className="space-y-5 text-lg leading-relaxed text-foreground/90">
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
          <p className="text-foreground">
            I am not here to pad a resume with busywork. I am here to build things that matter.
          </p>
        </div>
      </div>
    </section>
  )
}
