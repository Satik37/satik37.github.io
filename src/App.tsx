import { HashRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Navbar } from "@/layout/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Projects } from "@/sections/Projects";
import { Experience } from "@/sections/Experience";
import { Interests } from "@/sections/Interests";
import { Contact } from "@/sections/Contact";
import { Footer } from "@/layout/Footer";
import { NetSalaryCalculatorPage } from "@/pages/NetSalaryCalculatorPage";

function HomePage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Interests />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/salary-calculator" element={<NetSalaryCalculatorPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
