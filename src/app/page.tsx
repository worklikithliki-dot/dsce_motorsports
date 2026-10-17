import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MouseGlow from "./components/MouseGlow";
import SmoothScroll from "./components/SmoothScroll";
import About from "./components/About";
import ContactSection from "./components/ContactSection";
import Loader from "./components/Loader";
import Footer from "./components/Footer";

export default function Home() {
  return (
<main className="relative bg-black text-white overflow-hidden">

  <Loader />

  <MouseGlow />

  <Navbar />

  {/* HOME */}
  <Hero />

  {/* ABOUT */}
  <About />

  {/* CONTACT */}
  <ContactSection />

  {/* FOOTER */}
  <Footer />
</main>
  );
}