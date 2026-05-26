"use client"

import { useState, useEffect } from "react"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Navbar() {
  const [mounted, setMounted] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
      suppressHydrationWarning
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">

          <img
            src="/logo.png"
            alt="Icon"
            className="h-8 w-8 mr-2 rounded-full object-cover"
          />
          <div className="text-xl font-bold">Parth Dhengle</div>
        </div>
        <div className="hidden md:flex space-x-6">
          <button
            onClick={() => scrollToSection("about")}
            className="text-foreground hover:text-primary transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className="text-foreground hover:text-primary transition-colors"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="text-foreground hover:text-primary transition-colors"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("resume")}
            className="text-foreground hover:text-primary transition-colors"
          >
            Experience
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-foreground hover:text-primary transition-colors"
          >
            Contact
          </button>
        </div>
        {mounted && <ThemeToggle />}
      </div>
    </nav>
  )
}
