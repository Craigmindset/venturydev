import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { GalleryPortfolio } from "@/components/gallery-portfolio"
import { GalleryHighlights } from "@/components/gallery-highlights"

export default function GalleryPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <GalleryPortfolio />
        <GalleryHighlights />
      </main>
      <SiteFooter />
    </div>
  )
}

