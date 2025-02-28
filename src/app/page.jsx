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
    <main className="flex min-h-screen flex-col bg-black gap-2 md:gap-12">
      <Navbar />
      <div className="container mt-14 mx-auto px-4 lg:px-12 py-4">
        <div id="home" className="relative">
          <HeroSection />
          <Particles
            className="absolute inset-0 z-0"
            quantity={100}
            ease={80}
            color={"#ffffff"}
            refresh
          />
        </div>
        {/* <AchievementsSection /> */}
        <div id="about" className="relative">
          <AboutSection />
          <Particles
            className="absolute inset-0 z-0"
            quantity={100}
            ease={80}
            color={"#ffffff"}
            refresh
          />
        </div>
        <div id="experience" className="relative">
          <ExperienceSection />
          <Particles
            className="absolute inset-0 z-0"
            quantity={100}
            ease={80}
            color={"#ffffff"}
            refresh
          />
        </div>

        <div id="skills">
          <SkillSection />
        </div>
        <div id="projects">
          <ProjectsSection />
        </div>
        <div id="contact" className="relative">
          <ContactSection />
          <Particles
            className="absolute inset-0 z-0"
            quantity={100}
            ease={80}
            color={"#ffffff"}
            refresh
          />
        </div>
      </div>

      <Footer />
    </main>
  );
}
