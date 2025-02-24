import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

export function GalleryHighlights() {
  const highlights = [
    {
      image: "/placeholder.svg?height=400&width=600",
      title: "Web Development Excellence",
    },
    {
      image: "/placeholder.svg?height=400&width=600",
      title: "Mobile App Innovation",
    },
    {
      image: "/placeholder.svg?height=400&width=600",
      title: "UI/UX Design Mastery",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-background/80">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Highlights</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Featured projects showcasing our expertise and innovation
            </p>
          </div>
        </div>
        <div className="mx-auto grid gap-8 pt-12 grid-cols-1 md:grid-cols-3 max-w-5xl">
          {highlights.map((highlight, index) => (
            <Card
              key={index}
              className="overflow-hidden bg-card border-gray-800 
                transform transition-all duration-300 hover:scale-105 
                hover:shadow-2xl hover:shadow-blue-500/20 group"
            >
              <CardContent className="p-0">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={highlight.image || "/placeholder.svg"}
                    alt={highlight.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              </CardContent>
              <CardFooter className="p-4 flex flex-col items-center gap-2">
                <h3 className="font-semibold text-lg text-center">{highlight.title}</h3>
                <Button
                  variant="outline"
                  className="w-full border-gray-700 hover:bg-primary/10 
                    hover:text-primary hover:border-primary transition-all duration-300"
                >
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

