import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative flex min-h-[80vh] items-center border-b border-border">
      <div className="mx-auto w-full max-w-3xl px-6 py-24">
        <p className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Humane, reliable, invisible
        </p>
        <h1 className="text-balance text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
          Founder @ Proxilytics. VP of Data Science @ aivon.ai. Building humane, reliable tech.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          I build systems that actually work.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button size="lg" nativeButton={false} render={<a href="#experience" />}>
            View Projects
          </Button>
          <Button size="lg" variant="outline" nativeButton={false} render={<a href="#contact" />}>
            Contact Me
          </Button>
        </div>
      </div>
    </section>
  )
}
