import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ContactInfo } from "@/components/contact-info"
import { ContactFormExtended } from "@/components/contact-form-extended"

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <ContactInfo />
        <ContactFormExtended />
      </main>
      <SiteFooter />
    </div>
  )
}

