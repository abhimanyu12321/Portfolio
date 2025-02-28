import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import SkillSection from "./components/SkillSection";
import ExperienceSection from "./components/ExperienceSection";
import { Particles } from "@/components/magicui/particles";
// import AchievementsSection from "./components/AchievementsSection";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black gap-2 md:gap-12 relative">
      <Navbar />
      <div className="container mt-14 mx-auto px-4 lg:px-12 py-4">
        <div id="home">
          <HeroSection />
        </div>
        {/* <AchievementsSection /> */}
        <div id="about">
          <AboutSection />
        </div>
        <div id="experience">
          <ExperienceSection />
        </div>

        <div id="skills">
          <SkillSection />
        </div>
        <div id="projects">
          <ProjectsSection />
        </div>
        <div id="contact">
          <ContactSection />
        </div>
      </div>
      <Particles
        className="absolute inset-0 z-0"
        quantity={200}
        ease={80}
        color={"#ffffff"}
        refresh
      />
      <Footer />
    </main>
  );
}
