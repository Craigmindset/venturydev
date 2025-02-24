import { RocketIcon, HeartIcon, BrainIcon } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function MissionSection() {
  const values = [
    {
      icon: RocketIcon,
      title: "Innovation",
      description:
        "We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions for our clients.",
    },
    {
      icon: HeartIcon,
      title: "Client-Centric",
      description:
        "Our success is measured by our clients' success. We prioritize understanding and meeting their unique needs.",
    },
    {
      icon: BrainIcon,
      title: "Excellence",
      description:
        "We maintain the highest standards in our work, from code quality to project management and client communication.",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background/80 to-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Mission & Values</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              We're on a mission to empower businesses through innovative digital solutions and create lasting impact in
              the digital world.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-8 pt-12 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
          {values.map((value) => (
            <Card key={value.title} className="relative overflow-hidden">
              <CardHeader>
                <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{value.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

