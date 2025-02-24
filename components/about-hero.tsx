import Image from "next/image"

export function AboutHero() {
  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage:
            "url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7.jpg-vy9DEW33r3ZmSeJop2njMS56lc9Rcp.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
      </div>

      <div className="container px-4 md:px-6 relative">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-start">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Story</h1>
              <p className="max-w-[600px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Founded in 2022, Venturydev emerged from a vision to bridge the gap between innovative ideas and
                technological solutions. Our journey began with a small team of passionate developers and has grown into
                a dynamic digital agency.
              </p>
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">Why Choose Us?</h2>
              <ul className="grid gap-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-blue-500" />
                  Expert team with diverse technical expertise
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-blue-500" />
                  Commitment to delivering high-quality solutions
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-blue-500" />
                  Focus on client success and satisfaction
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-blue-500" />
                  Innovative approach to problem-solving
                </li>
              </ul>
            </div>
          </div>
          <div className="relative h-[400px] lg:h-[500px]">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-3xl rotate-2 opacity-20 blur-2xl animate-pulse" />
            <Image
              alt="Team collaboration"
              className="relative rounded-2xl object-cover w-full h-full border border-gray-800"
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8983.jpg-jYXnVXKK1gofEfGnX2WumImyQbnitz.jpeg"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

