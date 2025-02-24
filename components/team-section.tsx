import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Twitter } from "lucide-react"

export function TeamSection() {
  const team = [
    {
      name: "John Smith",
      role: "CEO & Founder",
      image: "/placeholder.svg?height=400&width=400",
      description: "Tech enthusiast with 10+ years of industry experience.",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      },
    },
    {
      name: "Sarah Johnson",
      role: "Lead Developer",
      image: "/placeholder.svg?height=400&width=400",
      description: "Full-stack developer specialized in React and Node.js.",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      },
    },
    {
      name: "Michael Chen",
      role: "UI/UX Designer",
      image: "/placeholder.svg?height=400&width=400",
      description: "Creative designer with a passion for user experience.",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      },
    },
    {
      name: "Emily Brown",
      role: "Project Manager",
      image: "/placeholder.svg?height=400&width=400",
      description: "Experienced in managing complex tech projects.",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      },
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 border-t">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Meet Our Team</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              The talented people behind our success
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-8 pt-12 sm:grid-cols-2 md:gap-12 lg:grid-cols-4">
          {team.map((member) => (
            <Card key={member.name} className="relative overflow-hidden group">
              <CardHeader className="p-0">
                <div className="relative h-60 w-full">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="object-cover"
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="text-lg">{member.name}</CardTitle>
                <CardDescription className="text-sm text-primary">{member.role}</CardDescription>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{member.description}</p>
                <div className="mt-4 flex space-x-4">
                  <a href={member.social.twitter} className="text-gray-500 hover:text-primary">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href={member.social.linkedin} className="text-gray-500 hover:text-primary">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href={member.social.github} className="text-gray-500 hover:text-primary">
                    <Github className="h-5 w-5" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

