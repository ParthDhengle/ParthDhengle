
"use client"

import { motion } from "framer-motion"
import {
  Code2,
  Cpu,
  Database,
  Server,
  Activity,
  Cloud,
  Terminal,
} from "lucide-react"

type Skill = {
  title: string
  icon: string
  content: string[]
}

type SkillsSectionProps = {
  skills: Skill[]
}

const iconMap: Record<string, React.ElementType> = {
  code: Code2,
  cpu: Cpu,
  database: Database,
  server: Server,
  activity: Activity,
  cloud: Cloud,
  terminal: Terminal,
}

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export default function SkillsSection({
  skills,
}: SkillsSectionProps) {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#f8f8fa] px-5 py-20 text-[#17171b] sm:px-10 lg:px-16"
    >
      {/* Background texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, #777 0px, #777 1px, transparent 1px, transparent 4px)",
        }}
      />

      <div className="container relative z-10 mx-auto max-w-[1440px]">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="mb-3 text-xs font-bold uppercase tracking-[3px] text-gray-500">
            <span className="mr-2 text-black">//</span>
            Expertise
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Skills & Technologies
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
            Technologies and engineering practices I use to build
            intelligent applications and scalable systems.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          {skills.map((category, index) => {
            const Icon = iconMap[category.icon] || Code2

            return (
              <motion.article
                key={category.title}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 25,
                }}
                className="group relative overflow-hidden rounded-[26px] border border-black/[0.09] bg-white/45 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-black/20 hover:bg-white/75 hover:shadow-[0_12px_35px_rgba(0,0,0,0.08)] sm:p-8"
              >
                {/* Subtle hover gradient */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/70 via-transparent to-black/[0.035] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative z-10">

                  {/* Category Header */}
                  <div className="mb-6 flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 bg-black/[0.035] text-black transition-all duration-300 group-hover:border-black group-hover:bg-black group-hover:text-white">
                      <Icon size={21} strokeWidth={2} />
                    </div>

                    <h3 className="text-lg font-bold tracking-tight sm:text-xl">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skill Tags */}
                  <div className="flex flex-wrap gap-2.5">
                    {category.content.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex min-h-10 items-center rounded-full border border-black/[0.09] bg-white/55 px-4 py-2 text-xs font-semibold text-black/65 transition-all duration-300 hover:border-black hover:bg-[#17171b] hover:text-white sm:text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                </div>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
