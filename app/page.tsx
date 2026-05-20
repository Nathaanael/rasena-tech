import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Comparison from "@/components/Comparison";
import Testimonials from "@/components/Testimonials";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingWA from "@/components/FloatingWA";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <TechStack />
      <Projects />
      <About />
      <Comparison />
      <Testimonials />
      <Team />
      <Contact />
      <Footer />
      <FloatingWA />
    </>
  );
}
