import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ProjectForm } from "@/components/project-form"

export default function ProjectPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <ProjectForm />
      </main>
      <SiteFooter />
    </div>
  )
}

