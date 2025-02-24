import Image from "next/image"

export function ProgramsHero() {
  const programs = [
    {
      title: "Full Stack Web Development",
      description:
        "Master both frontend and backend development using modern technologies like React, Node.js, and databases.",
      duration: "6 months",
      level: "Beginner to Advanced",
    },
    {
      title: "Mobile App Development",
      description: "Learn to build native and cross-platform mobile applications using React Native and Flutter.",
      duration: "4 months",
      level: "Intermediate",
    },
    {
      title: "UI/UX Design & Development",
      description: "Combine design principles with frontend development to create beautiful, functional interfaces.",
      duration: "3 months",
      level: "Beginner Friendly",
    },
    {
      title: "Backend Development Specialization",
      description: "Deep dive into server-side programming, APIs, databases, and cloud infrastructure.",
      duration: "4 months",
      level: "Intermediate to Advanced",
    },
    {
      title: "DevOps & Cloud Engineering",
      description: "Learn modern deployment practices, CI/CD, and cloud platforms like AWS and Azure.",
      duration: "5 months",
      level: "Advanced",
    },
  ]

  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-background/80">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-start">
          <div className="relative h-[400px] lg:h-[500px]">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-3xl rotate-2 opacity-20 blur-2xl animate-pulse" />
            <Image
              alt="Students collaborating on code"
              className="relative rounded-2xl object-cover w-full h-full border border-gray-800"
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5.jpg-6YuRlF2GeaOqN2NLJ5RHarWXO8xOIs.jpeg"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Software Development Programs</h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Transform your career with our comprehensive software development programs. Learn from industry experts
                and gain practical experience.
              </p>
            </div>
            <div className="space-y-4">
              {programs.map((program) => (
                <div
                  key={program.title}
                  className="p-4 rounded-lg border bg-card hover:bg-accent transition-colors group"
                >
                  <h3 className="font-semibold text-lg group-hover:text-accent-foreground">{program.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{program.description}</p>
                  <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                    <span className="inline-flex items-center">🕒 {program.duration}</span>
                    <span className="inline-flex items-center">📚 {program.level}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

