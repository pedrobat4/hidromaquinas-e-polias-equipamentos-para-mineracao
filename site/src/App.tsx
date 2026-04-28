import Header from "./components/Header";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Services from "./components/Services";
import Processo from "./components/Processo";
import About from "./components/About";
import Galeria from "./components/Galeria";
import Testimonials from "./components/Testimonials";
import Areas from "./components/Areas";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

export default function App() {
  return (
    <div className="overflow-x-hidden max-w-[100vw]">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Processo />
        <About />
        <Galeria />
        <Testimonials />
        <Areas />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
