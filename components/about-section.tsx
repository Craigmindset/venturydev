import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about" className="relative w-full py-12 md:py-24 lg:py-32 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage:
            "url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9.jpg-BmcyXFw6Pfu1ZPDg5hY01IAreUFXQN.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 dark:from-black/90 via-black/50 dark:via-black/80 to-black/40 dark:to-black/70 backdrop-blur-sm" />
      </div>

      <div className="container relative z-10">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">Let's Get It Done</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We're a team of passionate designers, developers, and digital strategists dedicated to creating
                exceptional digital experiences. With years of experience and a commitment to excellence, we transform
                ideas into powerful digital solutions that drive results.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary text-2xl font-bold">2+</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary">Years of Experience</h3>
                  <p className="text-muted-foreground">Delivering excellence in digital solutions</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary text-2xl font-bold">90+</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary">Projects Completed</h3>
                  <p className="text-muted-foreground">Across various industries worldwide</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary text-2xl font-bold">Sure</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary">Client Satisfaction</h3>
                  <p className="text-muted-foreground">Based on client feedback and reviews</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-[500px] aspect-square">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl rotate-6 opacity-20 blur-2xl animate-pulse" />
              <Image
                alt="Our team collaborating on a project"
                className="relative rounded-2xl object-cover w-full h-full border border-border"
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8983.jpg-jYXnVXKK1gofEfGnX2WumImyQbnitz.jpeg"
                width={600}
                height={600}
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

