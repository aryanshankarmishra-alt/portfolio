import { Button } from "@/components/ui/button"

export function ContactSection() {
  return (
    <section id="contact">
      <div className="mx-auto w-full max-w-3xl px-6 py-24">
        <h2 className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Contact
        </h2>
        <p className="text-balance text-2xl font-semibold leading-tight tracking-tight text-foreground sm:text-3xl">
          Let us build something that actually works.
        </p>
        <div className="mt-8">
          <Button size="lg" nativeButton={false} render={<a href="mailto:hello@proxilytics.com" />}>
            Contact Me
          </Button>
        </div>
        <p className="mt-16 font-mono text-xs text-muted-foreground">
          Humane, reliable technology that is completely invisible to the user.
        </p>
      </div>
    </section>
  )
}
