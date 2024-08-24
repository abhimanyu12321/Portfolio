import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import SkillSection from "./components/SkillSection";
import ExperienceSection from "./components/ExperienceSection";
// import AchievementsSection from "./components/AchievementsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] gap-24">
      <Navbar />
      <div className="container mt-24 mx-auto px-4 lg:px-12 py-4">
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
      <Footer />
    </main>
  );
}
