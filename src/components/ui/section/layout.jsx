import { Navbar } from "../../layouts/header/Navbar/Navbar";
import { HeroSection } from "./hero-section";
import { WorkExperience } from "./work-experience";
import { BlogSection } from "./blog-section";
import { CapmaignSection } from "./campain-section";
import { ClientSection } from "./clients-served";
import { FooterSection } from "../../layouts/footer/FooterSection";
export const Layout = () => {
  return (
    <>
      <div className="min-h-screen bg-blue-900 text-white font-sans max-w-screen overflow-x-hidden scroll-smooth">
        <Navbar />
        <HeroSection />
        <WorkExperience />
        <BlogSection />
        <CapmaignSection />
        <ClientSection />
        <FooterSection />
      </div>
    </>
  );
};
