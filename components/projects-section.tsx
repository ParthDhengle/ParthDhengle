"use client"

import { useMemo, useRef } from "react"
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion"
import Image from "next/image"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { ArrowUpRight, Github, ExternalLink } from "lucide-react"

interface Project {
  name: string
  tagline: string
  description: string
  image?: string
  tech: string[]
  status: string
  github?: string
  live_link?: string
}

type ProjectsSectionProps = {
  projects: Project[]
}

const PROJECTS_PER_PAGE = 2

export default function ProjectsSection({
  projects,
}: ProjectsSectionProps) {
  const sectionRef = useRef<HTMLElement>(null)

  // Each horizontal panel contains exactly two projects.
  const pages = Math.max(1, Math.ceil(projects.length / PROJECTS_PER_PAGE))

  const projectPages = useMemo(
    () =>
      Array.from({ length: pages }, (_, pageIndex) =>
        projects.slice(
          pageIndex * PROJECTS_PER_PAGE,
          (pageIndex + 1) * PROJECTS_PER_PAGE
        )
      ),
    [projects, pages]
  )

  // The section's scroll progress drives the horizontal track.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  })

  const horizontalProgress = useTransform(
    scrollYProgress,
    [0, 1],
    [0, pages-1]
  )

  const smoothProgress = useSpring(horizontalProgress, {
    stiffness: 100,
    damping: 30,
    mass: 0.25,
  })

  const x = useTransform(
    smoothProgress,
    (value) => `${-value * 100}vw`
  )

  const progressWidth = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "100%"]
  )

  return (
    <TooltipProvider>
      <section
        id="projects"
        ref={sectionRef}
        className="relative bg-[#f8f8fa] text-[#17171b]"
        style={{ height: `${pages * 100}vh` }}
      >
        {/* Same subtle background texture as Hero and About */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, #777 0px, #777 1px, transparent 1px, transparent 4px)",
          }}
        />

        {/* Pinned viewport */}
        <div className="sticky top-0 z-10 flex h-screen flex-col overflow-hidden pt-20">
          {/* Section heading */}
          <div className="mx-auto w-full max-w-[1440px] shrink-0 px-5 pb-6 sm:px-10 lg:px-16 lg:pb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="mb-3 text-xs font-bold uppercase tracking-[3px] text-gray-500">
                <span className="mr-2 text-black">//</span>
                Selected Work
              </p>

              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <h2 className="text-3xl font-bold tracking-[-1.5px] sm:text-4xl lg:text-5xl">
                    Projects & Experiments
                  </h2>
                  <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-500 sm:text-base">
                    A selection of systems, applications, and ideas I've
                    worked on. Scroll to explore.
                  </p>
                </div>

                <span className="hidden text-xs font-medium text-gray-400 sm:block">
                  {String(projects.length).padStart(2, "0")} PROJECTS
                </span>
              </div>
            </motion.div>
          </div>

          {/* Horizontal project panels */}
          <div className="min-h-0 flex-1 overflow-hidden">
            <motion.div
              style={{ x }}
              className="flex h-full w-max"
            >
              {projectPages.map((pageProjects, pageIndex) => (
                <div
                  key={pageIndex}
                  className="h-full w-screen shrink-0 px-5 pb-10 sm:px-10 lg:px-16"
                >
                  <div className="mx-auto grid h-full max-w-[1440px] grid-cols-2 gap-3 sm:gap-6">
                    {pageProjects.map((project) => (
                      <motion.div
                        key={project.name}
                        whileHover={{ y: -5 }}
                        transition={{
                          type: "spring",
                          stiffness: 280,
                          damping: 24,
                        }}
                        className="min-h-0"
                      >
                        <Card className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-black/[0.09] bg-white/55 shadow-[0_4px_20px_rgba(0,0,0,0.025)] backdrop-blur-sm transition-all duration-300 hover:border-black/20 hover:bg-white/80 hover:shadow-[0_14px_38px_rgba(0,0,0,0.08)]">

                          {/* Project image */}
                          <div className="relative h-28 shrink-0 overflow-hidden bg-[#e9e9ed] sm:h-40 lg:h-[220px]">
                            <Image
                              src={project.image || "/placeholder.svg"}
                              alt={project.name}
                              fill
                              sizes="(max-width: 768px) 50vw, 45vw"
                              className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-60" />

                            <span className="absolute right-3 top-3 rounded-full border border-white/40 bg-white/65 px-3 py-1 text-[10px] font-semibold text-black backdrop-blur-xl sm:text-xs">
                              {project.status}
                            </span>
                          </div>

                          {/* Project details */}
                          <CardHeader className="space-y-1 p-3 sm:p-5">
                            <CardTitle className="line-clamp-1 text-sm font-bold tracking-tight sm:text-xl">
                              {project.name}
                            </CardTitle>
                            <CardDescription className="line-clamp-2 text-[11px] leading-4 text-gray-500 sm:text-sm sm:leading-5">
                              {project.tagline}
                            </CardDescription>
                          </CardHeader>

                          <CardContent className="min-h-0 flex-1 px-3 pb-2 sm:px-5">
                            <div className="flex flex-wrap gap-1.5 sm:gap-2">
                              {project.tech.map((tag) => (
                                <span
                                  key={tag}
                                  className="rounded-full border border-black/[0.08] bg-white/60 px-2 py-1 text-[9px] font-medium text-black/65 sm:px-3 sm:text-xs"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </CardContent>

                          {/* Actions */}
                          <CardFooter className="flex items-center justify-between gap-2 p-3 pt-2 sm:p-5 sm:pt-3">
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="h-8 rounded-lg border-black/15 bg-white/50 px-2.5 text-[10px] text-black hover:bg-black hover:text-white sm:h-9 sm:px-4 sm:text-xs"
                                >
                                  View Details
                                  <ArrowUpRight className="ml-1.5 h-3 w-3 sm:h-4 sm:w-4" />
                                </Button>
                              </DialogTrigger>

                              <DialogContent className="max-h-[90vh] w-[95vw] overflow-y-auto rounded-2xl border-black/10 bg-[#f8f8fa] sm:max-w-[850px]">
                                <DialogHeader>
                                  <DialogTitle className="text-xl font-bold">
                                    {project.name}
                                  </DialogTitle>
                                  <DialogDescription>
                                    {project.tagline}
                                  </DialogDescription>
                                </DialogHeader>

                                <div className="relative my-3 h-[200px] overflow-hidden rounded-xl bg-[#e9e9ed] sm:h-[320px]">
                                  <Image
                                    src={project.image || "/placeholder.svg"}
                                    alt={project.name}
                                    fill
                                    sizes="90vw"
                                    className="object-cover"
                                  />
                                </div>

                                <p className="text-sm leading-7 text-gray-600">
                                  {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                  {project.tech.map((tag) => (
                                    <span
                                      key={tag}
                                      className="rounded-full border border-black/10 bg-white px-3 py-1.5 text-xs font-medium text-gray-700"
                                    >
                                      {tag}
                                    </span>
                                  ))}
                                </div>

                                <div className="mt-3 flex flex-wrap justify-end gap-2">
                                  {project.github && (
                                    <Button
                                      variant="outline"
                                      size="sm"
                                      asChild
                                    >
                                      <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        <Github className="mr-2 h-4 w-4" />
                                        GitHub
                                      </a>
                                    </Button>
                                  )}

                                  {project.live_link && (
                                    <Button size="sm" asChild>
                                      <a
                                        href={project.live_link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        <ExternalLink className="mr-2 h-4 w-4" />
                                        Live Demo
                                      </a>
                                    </Button>
                                  )}
                                </div>
                              </DialogContent>
                            </Dialog>

                            <div className="flex items-center gap-1">
                              {project.github && (
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <Button
                                      variant="ghost"
                                      size="icon"
                                      className="h-8 w-8"
                                      asChild
                                    >
                                      <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`${project.name} GitHub repository`}
                                      >
                                        <Github className="h-4 w-4" />
                                      </a>
                                    </Button>
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    GitHub Repository
                                  </TooltipContent>
                                </Tooltip>
                              )}

                              {project.live_link && (
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <Button
                                      variant="ghost"
                                      size="icon"
                                      className="h-8 w-8"
                                      asChild
                                    >
                                      <a
                                        href={project.live_link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`${project.name} live demo`}
                                      >
                                        <ExternalLink className="h-4 w-4" />
                                      </a>
                                    </Button>
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    Live Demo
                                  </TooltipContent>
                                </Tooltip>
                              )}
                            </div>
                          </CardFooter>
                        </Card>
                      </motion.div>
                    ))}

                    {/* Keep the two-column layout for an odd final project */}
                    {pageProjects.length === 1 && (
                      <div
                        aria-hidden="true"
                        className="hidden rounded-[24px] border border-dashed border-black/10 bg-white/15 md:block"
                      />
                    )}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </TooltipProvider>
  )
}
