import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users2, Briefcase, Award, Globe2 } from "lucide-react"

export function CompanyStats() {
  const stats = [
    {
      icon: Users2,
      title: "Always",
      description: "Satisfied Clients",
    },
    {
      icon: Briefcase,
      title: "22+",
      description: "Projects Completed",
    },
    {
      icon: Award,
      title: "2+",
      description: "Awards Won",
    },
    {
      icon: Globe2,
      title: "2+",
      description: "Countries Reached",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-background/80 border-t">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Achievements</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Numbers that speak for themselves
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-8 pt-12 sm:grid-cols-2 md:gap-12 lg:grid-cols-4">
          {stats.map((stat) => (
            <Card key={stat.title} className="text-center">
              <CardHeader>
                <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-3xl font-bold">{stat.title}</CardTitle>
                <CardDescription className="mt-2">{stat.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

