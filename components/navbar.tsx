"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ThemeToggle } from "@/components/theme-toggle"

const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Interests", id: "interests" },
  { label: "Contact", id: "contact" },
]

export default function Navbar() {
  const [mounted, setMounted] = useState(false)
  const [activeItem, setActiveItem] = useState("home")
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      // Pick the last section that has crossed the navigation offset.
      let currentSection = "home"

      for (const item of navItems) {
        const section = document.getElementById(item.id)

        if (section && section.getBoundingClientRect().top <= 150) {
          currentSection = item.id
        }
      }

      setActiveItem(currentSection)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    setActiveItem(id)
    setHoveredItem(null)

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }

  const highlightedItem = hoveredItem ?? activeItem

  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-transparent">
      <div className="container mx-auto flex items-center justify-between px-5 py-3 sm:px-8  bg-white/60 backdrop-blur-md">
        {/* Brand */}
        <button
          type="button"
          onClick={() => scrollToSection("home")}
          className="flex shrink-0 items-center gap-2"
          aria-label="Go to home section"
        >
          <img
            src="/logo.png"
            alt=""
            className="h-8 w-8 rounded-full object-cover"
          />
          <span className="text-lg font-bold tracking-tight text-black">
            Parth Dhengle
          </span>
        </button>

        {/* Sliding navigation */}
        <div
          className="hidden items-center gap-1 md:flex"
          onMouseLeave={() => setHoveredItem(null)}
        >
          {navItems.map((item) => {
            const isHighlighted = highlightedItem === item.id
            const isCurrent = activeItem === item.id

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                onMouseEnter={() => setHoveredItem(item.id)}
                aria-current={isCurrent ? "page" : undefined}
                className={`relative isolate rounded-full px-5 py-2.5 text-sm font-semibold uppercase tracking-wide transition-colors duration-200 ${
                  isHighlighted
                    ? "text-black"
                    : "text-black/75 hover:text-black"
                }`}
              >
                {isHighlighted && (
                  <motion.span
                    layoutId="navbar-pill"
                    aria-hidden="true"
                    className="absolute inset-0 -z-10 rounded-full border border-black/15 bg-[linear-gradient(135deg,rgba(0,0,0,0.10)_0%,rgba(0,0,0,0.045)_48%,rgba(255,255,255,0.38)_100%)] shadow-[0_5px_22px_rgba(0,0,0,0.09),inset_0_1px_0_rgba(255,255,255,0.8)]"
                    transition={{
                      type: "spring",
                      stiffness: 360,
                      damping: 30,
                      mass: 0.7,
                    }}
                  />
                )}

                <span className="relative z-10">{item.label}</span>
              </button>
            )
          })}
        </div>

        {/* Theme toggle */}
        <div className="flex shrink-0 items-center">
        </div>
      </div>
    </nav>
  )
}
