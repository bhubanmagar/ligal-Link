import "./App.css";
import Navbar from "./ui/header/Navbar/Navbar";
import BlogSection from "./ui/section/BlogSection";
import { CapmaignSection } from "./ui/section/CapmaignSection";
import { ClientSection } from "./ui/section/ClientSection";
import { HeroSection } from "./ui/section/HeroSection";
import { ClientDetails } from "./ui/section/ClientDetails";
import { FooterSection } from "./ui/footer/FooterSection";

function App() {
  return (
    <>
      <div className="min-h-screen bg-blue-900 text-white font-sans max-w-screen overflow-x-hidden">
        <Navbar />
        <HeroSection />
        <ClientDetails />
        <BlogSection />
        <CapmaignSection />
        <ClientSection />
        <FooterSection />
      </div>
    </>
  );
}

export default App;

