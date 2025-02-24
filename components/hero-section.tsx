"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function HeroSection() {
  const images = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1.jpg-ouyDLPTad3AhekLeCL8tCk8IfK0Lio.jpeg",
      alt: "Professional in tech environment with modern lighting",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.jpg-wh9J9O8gRReF1VikYwQ9zrDIANx4sU.jpeg",
      alt: "Tech professional in server room environment",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3.jpg-70EnckxvD6VFw55GISr3h321qKrkbF.jpeg",
      alt: "Developer working with multiple code screens",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4.jpg-Aakz7r8OGV11rcRBp5351zLPhyubTL.jpeg",
      alt: "Tech professional working on hardware components",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5.jpg-n5HGIiCmMzGApJ6ivyonUtt19zemgA.jpeg",
      alt: "Developer working in modern office environment",
    },
  ]

  const [currentImage, setCurrentImage] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [index, setIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const toRotate = ["Digital Presence", "Web Experience"]
  const typingDelay = 200
  const erasingDelay = 100
  const newTextDelay = 2000

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    let timeout: NodeJS.Timeout

    const tick = () => {
      const i = index % toRotate.length
      const fullText = toRotate[i]

      if (isDeleting) {
        setDisplayText(fullText.substring(0, displayText.length - 1))
      } else {
        setDisplayText(fullText.substring(0, displayText.length + 1))
      }

      let delta = isDeleting ? erasingDelay : typingDelay

      if (!isDeleting && displayText === fullText) {
        delta = newTextDelay
        setIsDeleting(true)
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false)
        setIndex((prev) => prev + 1)
        delta = 500
      }

      timeout = setTimeout(tick, delta)
    }

    timeout = setTimeout(tick, typingDelay)

    return () => clearTimeout(timeout)
  }, [displayText, index, isDeleting])

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const previousImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage:
            "url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2740.jpg-CqW6mXytLHQSA7Sz6qnmwKrs7DmulE.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 dark:from-black/80 via-black/70 dark:via-black/70 to-transparent backdrop-blur-sm" />
      </div>

      <div className="container relative z-10">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center min-h-[calc(100vh-4rem)]">
          <div className="flex flex-col space-y-4 text-left py-12 md:py-16 lg:py-20">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-primary">
                Transform Your <br />{" "}
                <span className="inline-block min-h-[1.5em]">
                  <span className="border-r-4 border-blue-400 pr-1 animate-pulse">{displayText}</span>
                </span>
              </h1>
              <p className="text-muted-foreground md:text-xl">
                We create stunning websites and mobile applications that help businesses grow and succeed in the digital
                world.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-black hover:bg-white/90 dark:bg-white dark:text-black dark:hover:bg-white/90 rounded-full border-2 border-white/20 backdrop-blur-sm"
              >
                <Link href="#contact">Start Your Project</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-white/20 text-white hover:bg-white/10 backdrop-blur-sm"
              >
                <Link href="#services">Learn More</Link>
              </Button>
            </div>
          </div>
          <div className="flex items-stretch justify-center lg:justify-end h-full">
            <div className="relative w-full overflow-hidden group rounded-3xl bg-black/20 backdrop-blur-sm">
              {/* Image Slider */}
              <div className="relative w-full h-[600px] transition-transform duration-500 ease-in-out">
                {images.map((image, index) => (
                  <Image
                    key={index}
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    className={`object-cover absolute inset-0 transition-opacity duration-500 rounded-3xl ${
                      currentImage === index ? "opacity-100" : "opacity-0"
                    }`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={index === 0}
                  />
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={previousImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                aria-label="Next image"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Dots Navigation */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      currentImage === index ? "bg-white w-4" : "bg-white/50"
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

