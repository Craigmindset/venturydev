"use client"

import { MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

export function WhatsAppFloat() {
  const [isVisible, setIsVisible] = useState(false)

  // Show button after scrolling down 100px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 100) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)

    return () => {
      window.removeEventListener("scroll", toggleVisibility)
    }
  }, [])

  const handleClick = () => {
    window.open("https://wa.me/2349132305673", "_blank")
  }

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 transform ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
      }`}
    >
      <Button
        size="lg"
        className="flex items-center gap-2 px-6 h-14 rounded-full bg-[#25D366] hover:bg-[#128C7E] shadow-lg hover:shadow-xl transition-all duration-300 border-none"
        onClick={handleClick}
        aria-label="Chat on WhatsApp"
      >
        <MessageSquare className="h-6 w-6 text-white" />
        <span className="text-white font-medium">Chat with us</span>
      </Button>
      <span className="absolute -top-10 right-0 bg-black/75 text-white text-sm py-1 px-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        Available 24/7
      </span>
    </div>
  )
}

