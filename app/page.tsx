import About from '@/components/About'
import Intro from '@/components/Intro'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import SectionHeader from '@/components/section-divider'
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
       <Intro />
       <SectionHeader />
       <About />
       <Projects />
       <Skills />
       <Experience />
       <Achievements />
       <Contact />

    </main>
  )
}
