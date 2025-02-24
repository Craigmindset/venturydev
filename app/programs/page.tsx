import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ProgramsHero } from "@/components/programs-hero"
import { EnrollmentForm } from "@/components/enrollment-form"

export default function ProgramsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <ProgramsHero />
        <EnrollmentForm />
      </main>
      <SiteFooter />
    </div>
  )
}

