import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from "../components/ui/pages/aboutPage";
import { Layout } from "../components/ui/section/layout";
import { BlogPage } from "../components/ui/pages/blogPage";
import { ContactPage } from "../components/ui/pages/contactpage";

export const MyRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
