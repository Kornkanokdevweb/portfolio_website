import Image from 'next/image'
import ProflieSction from './components/ProfileSection'
import Navbar from './components/Navbar'
import AboutSection from './components/AboutSection'
import ProjectSection from './components/ProjectSection'
import ExperienceSection from './components/ExperienceSection'
import SkillSection from './components/SkillSection'
import ContactSection from './components/ContactSection'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar/>
      <div className="container mt-24 mx-auto px-12 py-4">
        <ProflieSction/>
      </div>
      <div className="container mt-24 mx-auto px-12 py-4">
        <AboutSection/>
      </div>
      <div className="container mt-24 mx-auto px-12 py-4">
        <ProjectSection/>
      </div>
      <div className="container mt-24 mx-auto px-12 py-4">
        <ExperienceSection/>
      </div>
      <div className="container mt-24 mx-auto px-12 py-4">
        <SkillSection/>
      </div>
      <div className="container mt-24 mx-auto px-12 py-4">
        <ContactSection/>
      </div>
    </main>
  )
}
