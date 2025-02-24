"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactForm() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Contact Us</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Ready to start your project? Get in touch with us today.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-[800px] space-y-4 pt-12">
          <form className="space-y-6">
            <Input placeholder="Name" />
            <Input placeholder="Email" type="email" />
            <Input placeholder="Subject" />
            <Textarea className="min-h-[150px]" placeholder="Message" />
            <Button className="w-full" size="lg">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

