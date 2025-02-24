"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"
import { X } from "lucide-react"

export function ProjectForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    projectTitle: "",
    projectType: "contract",
    projectDefinition: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
    // Handle form submission
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32">
      <Link
        href="/"
        className="absolute right-4 top-4 p-2 rounded-full hover:bg-accent transition-colors"
        aria-label="Close form"
      >
        <X className="h-6 w-6" />
      </Link>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Start Your Project</h1>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Tell us about your project and let's create something amazing together.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-[700px] space-y-4 pt-12">
          <form className="grid gap-6" onSubmit={handleSubmit}>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  name="firstName"
                  placeholder="Enter your first name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  name="lastName"
                  placeholder="Enter your last name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="projectTitle">Project Title</Label>
              <Input
                id="projectTitle"
                name="projectTitle"
                placeholder="Enter your project title"
                value={formData.projectTitle}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label>Project Type</Label>
              <RadioGroup
                defaultValue="contract"
                onValueChange={(value) => setFormData((prev) => ({ ...prev, projectType: value }))}
                className="grid gap-4 pt-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="contract" id="contract" />
                  <Label htmlFor="contract">Contract Based</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="fixed" id="fixed" />
                  <Label htmlFor="fixed">Fixed Price</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="collaboration" id="collaboration" />
                  <Label htmlFor="collaboration">Collaboration</Label>
                </div>
              </RadioGroup>
            </div>
            <div className="space-y-2">
              <Label htmlFor="projectDefinition">Project Definition</Label>
              <Textarea
                id="projectDefinition"
                name="projectDefinition"
                placeholder="Describe your project in detail..."
                value={formData.projectDefinition}
                onChange={handleChange}
                className="min-h-[200px]"
                required
              />
            </div>
            <Button size="lg" type="submit">
              Submit Project
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

