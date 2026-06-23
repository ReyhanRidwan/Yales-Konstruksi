/**
 * Yales Konstruksi - Official Web Landing Page
 * PT YALES ULTIMA KARYA
 */

import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Services from "./components/Services";
import RabCalculator from "./components/RabCalculator";
import SurveyForm from "./components/SurveyForm";
import Timeline from "./components/Timeline";
import Portfolio from "./components/Portfolio";
import Testimonial from "./components/Testimonial";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import { ArrowUp, Hammer, Sparkles, CheckCircle } from "lucide-react";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [rabPrefill, setRabPrefill] = useState<any>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Monitor scroll height to show Back To Top button and update active sections on scroll
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);

      const sections = ["home", "layanan", "portfolio", "rab", "tentang", "faq", "survey"];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll helper
  const handleScrollToSection = (sectionId: string) => {
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth"
      });
      setActiveSection(sectionId);
    }
  };

  // Callback to link RAB Calculator output to Survey Qualification prefills
  const handleProceedFromRab = (prefillData: any) => {
    setRabPrefill(prefillData);
    handleScrollToSection("survey");
  };

  return (
    <div className="relative min-h-screen font-sans bg-slate-50 text-slate-800 antialiased selection:bg-navy-900 selection:text-white">
      
      {/* 1. STICKY NAVBAR */}
      <Navbar onScrollToSection={handleScrollToSection} activeSection={activeSection} />

      {/* 2. HERO SECTION */}
      <Hero onScrollToSection={handleScrollToSection} />

      {/* 3. TRUST STATS SECTION */}
      <Stats />

      {/* 4. LAYANAN */}
      <Services />

      {/* 5. FITUR KALKULATOR RAB */}
      <RabCalculator onProceedToSurvey={handleProceedFromRab} />

      {/* 6. SURVEY QUALIFICATION SYSTEM */}
      <SurveyForm prefillData={rabPrefill} />

      {/* 7. ALUR KERJA LINE TIMELINE */}
      <Timeline />

      {/* 8. PORTFOLIO SHOWCASE */}
      <Portfolio />

      {/* 9. TESTIMONI SUCCESS SLIDER */}
      <Testimonial />

      {/* 10. FAQ DROPDOWNS */}
      <Faq />

      {/* 11. CTA PENUTUP */}
      <section id="cta-penutup" className="py-20 md:py-24 bg-navy-900 text-white relative overflow-hidden text-center">
        {/* Abstract geometrical visual aids */}
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
        </div>
        <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-amber-500/15 rounded-full blur-3xl z-0"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 px-4 py-1.5 rounded-full">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span className="text-xs font-bold tracking-wider uppercase font-mono text-amber-500">
              KONSULTASI GRATIS JABODETABEK
            </span>
          </div>

          <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Siap Mewujudkan Rumah Impian Anda?
          </h2>

          <p className="text-sm md:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Hitung estimasi biaya terlebih dahulu menggunakan kalkulator digital kami dan lakukan survey kebutuhan untuk mendapatkan konsultasi yang lebih akurat dengan arsitek handal PT Yales Ultima Karya.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
            <button
              id="cta-penutup-calc"
              type="button"
              onClick={() => handleScrollToSection("rab")}
              className="px-8 py-4 bg-amber-500 text-navy-900 hover:bg-amber-400 rounded-xl font-extrabold text-base transition-all duration-200 shadow-md hover:-translate-y-0.5 cursor-pointer flex items-center gap-2"
            >
              <Hammer className="w-5 h-5 text-navy-900" />
              <span>Hitung Estimasi RAB</span>
            </button>
            
            <button
              id="cta-penutup-survey"
              type="button"
              onClick={() => handleScrollToSection("survey")}
              className="px-8 py-4 bg-transparent border-2 border-white hover:bg-white/10 rounded-xl font-extrabold text-base transition-all duration-200 cursor-pointer text-white flex items-center gap-2"
            >
              <span>Isi Survey Kebutuhan</span>
            </button>
          </div>
        </div>
      </section>

      {/* 12. FOOTER SECTION WITH MAPS */}
      <Footer onScrollToSection={handleScrollToSection} />

      {/* Back To Top Float button */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-40 bg-navy-900 text-white p-3.5 rounded-xl shadow-lg border border-white/10 hover:bg-navy-800 transition-all duration-200 cursor-pointer animate-fade-in"
          aria-label="Kembali ke atas"
        >
          <ArrowUp className="w-5 h-5 text-amber-500" />
        </button>
      )}

    </div>
  );
}
