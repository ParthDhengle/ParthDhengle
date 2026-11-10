
"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, Download } from "lucide-react"
import Image from "next/image"

type AboutSectionProps = {
  about_me: string[]
  intrest: string[]
}

const expertise = [
  { value: "10+", label: "Projects Delivered" },
  { value: "1+", label: "Year of Experience" },
  { value: "5+", label: "AI Systems Built" },
]

export default function AboutSection({
  about_me,
  intrest,
}: AboutSectionProps) {
  return (
    <section
      id="about"
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

      <div className="relative z-10 mx-auto max-w-[1250px]">

        {/* About Layout */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="grid overflow-hidden p-4 sm:p-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12 lg:p-10"
        >

          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative min-h-[380px] overflow-hidden rounded-[24px] border border-white/60 bg-[#dedee4] sm:min-h-[480px] lg:min-h-[540px]"
          >
            <Image
              src="/profile_pic/about_me.png"
              alt="Parth Dhengle"
              fill
              priority={false}
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-top"
            />

            {/* Portrait label */}
            <div className="absolute bottom-5 left-5 rounded-full border border-white/40 bg-white/50 px-4 py-2 text-xs font-semibold text-black shadow-lg backdrop-blur-xl">
              AI & Backend Engineer
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="flex flex-col justify-center py-9 sm:px-5 lg:py-10 lg:pr-8"
          >

            {/* Eyebrow */}
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-black" />
              <span className="text-xs font-bold uppercase tracking-[3px] text-gray-500">
                About Me
              </span>
            </div>

            {/* Heading */}
            <h2 className="max-w-[600px] text-3xl font-bold leading-[1.15] tracking-[-1.5px] sm:text-4xl lg:text-[46px]">
              Engineering
              <span className="text-[#99999f]"> Intelligent </span>
              Systems That Matter.
            </h2>

            {/* Description */}
            <div className="mt-6 max-w-[570px] space-y-4">
              {about_me.map((item, index) => (
                <p
                  key={index}
                  className="text-sm leading-7 text-gray-600 sm:text-[15px]"
                >
                  {item}
                </p>
              ))}
            </div>
            {/* Professional Highlights */}
            <div className="mt-8 grid grid-cols-3 gap-2 sm:gap-4">
              {expertise.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-black/[0.06] bg-white/35 px-3 py-4 transition-all duration-300 hover:bg-white/70 hover:-translate-y-1 sm:px-4"
                >
                  <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
                    {item.value}
                  </h3>
                  <p className="mt-1 text-[10px] leading-4 text-gray-500 sm:text-xs">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8">
              <a
                href="/resume.pdf"
                download
                className="group inline-flex h-11 items-center gap-3 rounded-xl bg-[#17171b] px-5 text-sm font-medium text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-black hover:shadow-lg"
              >
                <Download className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                Download Resume
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </div>

          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
