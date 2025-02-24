import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { AboutHero } from "@/components/about-hero"
import { MissionSection } from "@/components/mission-section"
import { CompanyStats } from "@/components/company-stats"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <AboutHero />
        <MissionSection />
        <CompanyStats />
      </main>
      <SiteFooter />
    </div>
  )
}

