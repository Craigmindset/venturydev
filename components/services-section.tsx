import { Globe, ShoppingCart, FileCode, Search, BarChart3, Shield, Settings, Database } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function ServicesSection() {
  const services = [
    {
      title: "Custom Web Development",
      description: "Tailored websites built with cutting-edge technologies",
      icon: <FileCode className="h-8 w-8" />,
    },
    {
      title: "eCommerce Development",
      description: "Scalable online stores and shopping platforms",
      icon: <ShoppingCart className="h-8 w-8" />,
    },
    {
      title: "CMS Development",
      description: "Custom content management systems",
      icon: <Database className="h-8 w-8" />,
    },
    {
      title: "Search Engine Optimization",
      description: "Improve your visibility and organic traffic",
      icon: <Search className="h-8 w-8" />,
    },
    {
      title: "Web Application Development",
      description: "Powerful and scalable web applications",
      icon: <Globe className="h-8 w-8" />,
    },
    {
      title: "Website Maintenance",
      description: "Keep your website running smoothly",
      icon: <Settings className="h-8 w-8" />,
    },
    {
      title: "Data Analytics & UI/UX",
      description: "Data-driven design and user experience",
      icon: <BarChart3 className="h-8 w-8" />,
    },
    {
      title: "Web Security",
      description: "Protect your web applications and data",
      icon: <Shield className="h-8 w-8" />,
    },
  ]

  return (
    <section id="services" className="relative w-full py-12 md:py-24 lg:py-32 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage:
            "url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-23%20at%2014.18.09_69a9e249.jpg-7AIEYD3nnBxG4HBJJ7Zr4TPFeNYqhW.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 dark:bg-black/80" />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">Our Services</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We offer a comprehensive range of digital services to help your business succeed
            </p>
          </div>
        </div>
        <div className="mx-auto grid gap-8 pt-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Card
              key={service.title}
              className="relative overflow-hidden bg-background/40 dark:bg-black/40 backdrop-blur-sm border-border 
                hover:bg-background/60 dark:hover:bg-black/60 transition-all duration-300 ease-in-out transform hover:scale-105 
                hover:shadow-2xl hover:shadow-blue-500/20 group"
            >
              <CardHeader>
                <div className="mb-2 text-primary transition-transform duration-300 ease-in-out transform group-hover:scale-110 group-hover:text-primary/80">
                  {service.icon}
                </div>
                <CardTitle className="text-primary transition-colors duration-300 group-hover:text-primary/90">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground transition-colors duration-300 group-hover:text-muted-foreground/80">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

