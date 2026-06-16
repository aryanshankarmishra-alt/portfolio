import { SiteNav } from "@/components/portfolio/site-nav"
import { HeroSection } from "@/components/portfolio/hero-section"
import { SkillsMarquee } from "@/components/portfolio/skills-marquee"
import { AboutSection } from "@/components/portfolio/about-section"
import { ExperienceSection } from "@/components/portfolio/experience-section"
import { ProjectsSection } from "@/components/portfolio/projects-section"
import { SkillsSection } from "@/components/portfolio/skills-section"
import { ContactSection } from "@/components/portfolio/contact-section"
import { SiteFooter } from "@/components/portfolio/site-footer"

export default function Page() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <SiteNav />
      <main>
        <HeroSection />
        <SkillsMarquee />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  )
}
