import "./App.css";
import { FooterSection } from "./ui/footer/FooterSection";
import Navbar from "./ui/header/Navbar/Navbar";
import BlogSection from "./ui/section/BlogSection";
import { CapmaignSection } from "./ui/section/CapmaignSection";
import { ClientSection } from "./ui/section/ClientSection";
import { ExperienceSection } from "./ui/section/ExperienceSection";
import { HeroSection } from "./ui/section/HeroSection";

function App() {
  return (
    <>
      <div className="min-h-screen bg-blue-900 text-white font-sans max-w-screen overflow-x-hidden">
        <Navbar />
        <HeroSection />
        <ExperienceSection />
        <BlogSection />
        <CapmaignSection />
        <ClientSection />
        <FooterSection />
      </div>
    </>
  );
}

export default App;

