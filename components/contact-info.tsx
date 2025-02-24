import { MapPin, Youtube, Instagram, Linkedin, Facebook, Phone } from "lucide-react"
import Link from "next/link"

export function ContactInfo() {
  const socialLinks = [
    {
      name: "Youtube",
      icon: Youtube,
      href: "#",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "#",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "#",
    },
    {
      name: "Facebook",
      icon: Facebook,
      href: "https://www.facebook.com/people/Ventury-Dev/61573428066432/",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-background/80">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <div className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm">
                <MapPin className="mr-2 h-4 w-4" />
                Our Location
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Visit Our Office</h2>
              <p className="text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Come by and say hello at our office headquarters.
              </p>
            </div>
            <div className="flex items-start space-x-4 text-gray-500 dark:text-gray-400">
              <MapPin className="mt-1 h-5 w-5 shrink-0" />
              <p className="text-xl">7, Rukpakwulushi round about, Eligbolo, Port Harcourt, Rivers, state</p>
            </div>
            <div className="flex items-start space-x-4 text-gray-500 dark:text-gray-400">
              <Phone className="mt-1 h-5 w-5 shrink-0" />
              <div className="flex flex-col">
                <p className="text-xl">+2348068169899</p>
                <p className="text-xl">+244945764382</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Connect With Us</h2>
              <p className="text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Follow us on social media and stay updated with our latest projects and announcements.
              </p>
            </div>
            <div className="flex space-x-6">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="text-gray-500 hover:text-primary transition-colors"
                >
                  <social.icon className="h-8 w-8" />
                  <span className="sr-only">{social.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

