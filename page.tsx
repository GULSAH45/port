import { HeroSection } from "./components/hero-section"
import { AboutSection } from "./components/about-section"
import { SkillsSection } from "./components/skills-section"
import { ProjectsSection } from "./components/projects-section"
import { ContactSection } from "./components/contact-section"
import { Navigation } from "./components/navigation"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  )
}

