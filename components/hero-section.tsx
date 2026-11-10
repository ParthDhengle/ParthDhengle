
"use client"

import { motion } from "framer-motion"
import {
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  Mail,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { techStackSection } from "@/data/tech_stack"


type HeroSectionProps = {
  headline: string
  subHeadline: string
}

const technologies = [
  "Python",
  "FastAPI",
  "LangGraph",
  "RAG",
  "Qdrant",
  "PostgreSQL",
]

export default function HeroSection({
  headline,
  subHeadline,
}: HeroSectionProps) {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    })
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f8f8fa] text-[#17171b] pt-20 ">

      {/* Background texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, #777 0px, #777 1px, transparent 1px, transparent 4px)",
        }}
      />
      {/* Hero Content */}
      <main
        id="home"
        className="relative z-10 mx-auto max-w-[1440px] px-5 pb-8 pt-8 sm:px-10 lg:px-16"
      >
        
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative isolate min-h-[570px]
          rounded-[32px]
          bg-gradient-to-br from-[#f0f0f3] via-[#e9e9ed] to-[#d2d3d9]
          sm:min-h-[590px] lg:min-h-[610px]"
      >
          {/* Content */}
          <div className="relative z-20 flex h-full min-h-[570px] flex-col justify-center px-7 py-12 sm:px-12 lg:min-h-[610px] lg:w-[58%] lg:px-20">

            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <p className="mb-3 text-lg font-medium tracking-tight text-gray-600 sm:text-xl">
                Hi, I'm Parth.
              </p>

              <h1 className="max-w-[650px] text-[42px] font-bold leading-[1.08] tracking-[-2px] sm:text-5xl md:text-6xl lg:text-[68px]">
                {headline}
              </h1>

              <p className="mt-3 text-[32px] font-semibold leading-tight tracking-[-1.5px] text-[#99999f] sm:text-4xl lg:text-[48px]">
                Building What Matters.
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-6 max-w-[460px] text-sm leading-7 text-gray-600 sm:text-base"
            >
              {subHeadline}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-7 flex flex-wrap gap-3"
            >
              <Button
                onClick={() => scrollTo("projects")}
                className="h-11 rounded-xl bg-[#17171b] px-6 text-white shadow-lg hover:bg-black"
              >
                View Projects
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>

              <Button
                variant="outline"
                onClick={() => scrollTo("contact")}
                className="h-11 rounded-xl border-black/15 bg-white/30 px-6 text-[#17171b] hover:bg-white/80"
              >
                Get in touch
              </Button>
            </motion.div>

            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-10 grid max-w-[510px] grid-cols-3 gap-4 border-t border-black/10 pt-7"
            >
              <div>
                <h3 className="text-xl font-bold tracking-tight sm:text-2xl">
                  AI
                </h3>
                <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                  GenAI & RAG
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold tracking-tight sm:text-2xl">
                  Backend
                </h3>
                <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                  Python & APIs
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold tracking-tight sm:text-2xl">
                  Agents
                </h3>
                <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                  Multi-agent AI
                </p>
              </div>
            </motion.div>
          </div>
          
          {/* Profile Image - Pop Out Effect */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[390px] sm:h-[460px]
              lg:inset-x-auto lg:right-0 lg:top-[-8%] lg:bottom-0 lg:h-auto lg:w-[53%]"
          >
            <Image
              src="/profile_pic/hero.png"
              alt="Parth - AI and Backend Engineer"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 55vw"
              className="object-contain object-bottom -scale-x-100"
            />
          </motion.div>

          
          {/* Floating Glass Availability Card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="absolute bottom-6 right-5 z-30 flex w-[calc(100%-40px)] max-w-[340px] items-center justify-between gap-4
              rounded-2xl
              border border-white/50
              bg-white/25
              p-5 text-white
              shadow-[0_8px_40px_rgba(0,0,0,0.12)]
              backdrop-blur-2xl
              backdrop-saturate-125
              ring-1 ring-white/10
              sm:bottom-8 sm:right-8
              lg:bottom-10 lg:right-10"
          >
            <div>
              <p className="text-xs font-medium text-black/55">
                Open to opportunities
              </p>

              <h3 className="mt-2 text-sm font-semibold text-black sm:text-base">
                Available for new projects
              </h3>

              <p className="mt-1 max-w-[220px] text-xs leading-5 text-black/75">
                Interested in AI engineering, backend systems and impactful products.
              </p>
            </div>

            <button
              onClick={() => scrollTo("contact")}
              aria-label="Contact Parth"
              className="flex h-11 w-11 shrink-0 items-center justify-center
                rounded-xl bg-white/95 text-black
                shadow-lg transition-all duration-300
                hover:rotate-45 hover:bg-white"
            >
              <ArrowUpRight className="h-6 w-6" />
            </button>
          </motion.div>

        </motion.div>

        {/* Technology Strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-10 overflow-hidden pb-8"
        >

          {/* Marquee */}
          <div className="relative overflow-hidden">

            {/* Left and right fade */}
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#f8f8fa] to-transparent sm:w-28" />

            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#f8f8fa] to-transparent sm:w-28" />

            {/* Scrolling track */}
            <div className="tech-marquee flex w-max">

              {[0, 1].map((group) => (
                <div
                  key={group}
                  aria-hidden={group === 1}
                  className="flex shrink-0 items-center gap-12 pr-12 sm:gap-16 sm:pr-16"
                >
                  {techStackSection.technologies.map((tech) => (
                    <div
                      key={`${group}-${tech.name}`}
                      className="group flex shrink-0 items-center gap-2.5"
                    >
                      <div className="relative h-7 w-7 shrink-0">
                        <Image
                          src={tech.logo}
                          alt={group === 0 ? tech.name : ""}
                          fill
                          sizes="28px"
                          className="object-contain grayscale opacity-70 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
                        />
                      </div>

                      <span className="whitespace-nowrap text-sm font-semibold tracking-tight text-gray-600 transition-colors duration-300 group-hover:text-black sm:text-base">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              ))}

            </div>
          </div>
        </motion.div>
      </main>

      {/* Social links */}
      <div className="fixed bottom-6 left-6 z-40 hidden flex-col gap-4 text-gray-500 lg:flex">
        <a
          href="https://github.com/ParthDhengle"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="transition-colors hover:text-black"
        >
          <Github size={19} />
        </a>

        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="transition-colors hover:text-black"
        >
          <Linkedin size={19} />
        </a>

        <button
          onClick={() => scrollTo("contact")}
          aria-label="Email"
          className="transition-colors hover:text-black"
        >
          <Mail size={19} />
        </button>
      </div>
    </section>
  )
}
