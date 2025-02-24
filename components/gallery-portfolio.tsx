import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function GalleryPortfolio() {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A modern e-commerce solution with AI-powered recommendations and real-time analytics",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Mobile Banking App",
      description: "Secure and user-friendly banking platform with blockchain integration",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Healthcare Portal",
      description: "Digital healthcare management system with telemedicine capabilities",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Social Media Dashboard",
      description: "Advanced analytics and management platform with AI insights",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Learning Management System",
      description: "Educational platform with AI-driven personalized learning paths",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Real Estate Platform",
      description: "Property listing and management system with VR tours",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage:
            "url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7.jpg-eYzEOh67QQ9TXBL9xEKcSVsHgBY1Iw.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">Our Portfolio</h2>
            <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Explore our successful projects and digital transformations
            </p>
          </div>
        </div>
        <div className="mx-auto grid gap-8 pt-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="overflow-hidden bg-black/40 border-gray-800 backdrop-blur-sm 
                transform transition-all duration-300 hover:scale-105 hover:shadow-2xl 
                hover:shadow-blue-500/20 group"
            >
              <CardHeader className="p-0">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-white mb-2 transition-colors duration-300 group-hover:text-blue-300">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-gray-300 transition-colors duration-300 group-hover:text-gray-200">
                  {project.description}
                </CardDescription>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button
                  variant="outline"
                  className="w-full border-gray-700 text-gray-300 hover:bg-blue-500/10 
                    hover:text-white hover:border-blue-500 transition-all duration-300"
                >
                  View Project
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

