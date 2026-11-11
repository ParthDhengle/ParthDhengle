import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import SkillsSection from "@/components/skills-section"
import ProjectsSection from "@/components/projects-section"
import ExperienceSection from "@/components/experience-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import AnimatedBackground from "@/components/animated-background"
import data from "@/data/info.json"

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative">
      <AnimatedBackground />
      <Navbar />
      <HeroSection headline={data.Professional_headline} subHeadline={data.Sub_heading} />
      <AboutSection about_me={data.Who_I_Am}/>
      <SkillsSection skills={data.skills}/>
      <ProjectsSection projects={data.projects}/>
      <ExperienceSection experiences={data.experience}/>
      <ContactSection />
      <Footer />
    </main>
  )
}
