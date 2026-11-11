"use client"

import { motion } from "framer-motion"
import { Download, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface Experience {
  role: string
  organization: string
  duration: string
  details: string[]
}

type ExperienceSectionProps = {
  experiences: Experience[]
}

export default function ExperienceSection({ experiences }: ExperienceSectionProps) {
  return (
    <section id="experiences" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-70" />

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold">Experience</h2>
          <div className="mt-2 h-1 w-20 bg-primary mx-auto" />
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            My professional journey so far.
          </p>

        </motion.div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto relative"> {/* Widened for larger, responsive cards */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-primary/20 hidden md:block" />

          {experiences.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-10 md:flex items-center relative"
            >
              {/* Card */}
              <div
                className={`md:w-1/2 ${
                  index % 2 === 0
                    ? "md:pr-12"
                    : "md:pl-12 md:ml-auto"
                }`}
              >
                <Card className="bg-background/80 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2">
                      <Briefcase className="h-4 w-4 text-primary" />
                      {item.role}
                    </CardTitle>
                    <CardDescription>
                      {item.organization} • {item.duration}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                      {item.details.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Timeline dot */}
              <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}