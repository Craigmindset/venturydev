import { SiteHeader } from "@/components/site-header"
import { ServicesSection } from "@/components/services-section"
import { SiteFooter } from "@/components/site-footer"

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <ServicesSection />
        <section className="relative w-full py-12 md:py-24 lg:py-32 overflow-hidden">
          {/* Background with gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black to-background" />

          <div className="container relative z-10">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
                    Why Choose Our Services?
                  </h2>
                  <p className="max-w-[600px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    We combine technical expertise with creative innovation to deliver exceptional digital solutions.
                    Our team of experienced professionals is dedicated to helping your business succeed in the digital
                    landscape.
                  </p>
                  <ul className="space-y-2 text-gray-300 mt-6">
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-blue-500" />
                      Expert team with years of industry experience
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-blue-500" />
                      Custom solutions tailored to your business needs
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-blue-500" />
                      Cutting-edge technologies and best practices
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-blue-500" />
                      Dedicated support and maintenance
                    </li>
                  </ul>
                </div>
              </div>
              <div className="relative lg:ml-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl rotate-6 opacity-20 blur-2xl animate-pulse" />
                <div className="relative aspect-square max-w-[500px] mx-auto">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5.jpg-6YuRlF2GeaOqN2NLJ5RHarWXO8xOIs.jpeg"
                    alt="Developer working on multiple screens in an atmospheric environment"
                    className="rounded-2xl object-cover w-full h-full border border-gray-800"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

