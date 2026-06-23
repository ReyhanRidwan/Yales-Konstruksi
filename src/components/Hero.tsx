import { useState, useEffect } from "react";
import { Award, ShieldAlert, HeartHandshake, FileText, ChevronRight, CalendarCheck, HelpCircle } from "lucide-react";
import { IMAGES } from "../types";

interface HeroProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function Hero({ onScrollToSection }: HeroProps) {
  const bgImages = [IMAGES.hero, IMAGES.hero2];
  const [currentSlide, setCurrentSlide] = useState(0);

  // Background slider captions for context
  const captions = [
    { title: "Kebayoran Baru Executive Villa", progress: "85% SELESAI", desc: "Tahap finishing & dekorasi interior" },
    { title: "Proyek Pembangunan Struktur", progress: "STRUKTUR UTAMA", desc: "Pemasangan besi kolom & atap baja ringan" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
    }, 5000); // Changes background every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative pt-28 md:pt-36 pb-20 md:pb-28 lg:pb-36 min-h-screen flex items-center overflow-hidden bg-navy-950"
    >
      {/* 1. Immersive Rotating Background Slider */}
      <div className="absolute inset-0 z-0 select-none overflow-hidden">
        {bgImages.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Konstruksi Pekerja PT Yales Ultima Karya Slide ${idx + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${
              idx === currentSlide ? "opacity-35 scale-100" : "opacity-0 scale-105"
            }`}
            style={{ transitionProperty: "opacity, transform" }}
            referrerPolicy="no-referrer"
            loading="eager"
          />
        ))}

        {/* Deep premium gradient overlays for impeccable text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-900/60"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Copy */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Trust Badge Indicator */}
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 px-4 py-1.5 rounded-full">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              <span className="text-xs font-bold text-amber-500 tracking-wider font-mono uppercase">
                KONTRAKTOR JABODETABEK UTAMA
              </span>
            </div>

            {/* Main Premium Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
              Bangun &amp; Renovasi Rumah Profesional dengan{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-500 underline decoration-amber-500/80 decoration-4 underline-offset-4">
                Estimasi Transparan
              </span>
            </h1>

            {/* Subtitle text */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Lebih dari 10 tahun membantu pemilik rumah mewujudkan hunian impian dengan kualitas konstruksi prima, pengerjaan rapi tepat waktu, dan garansi resmi berbadan hukum PT Yales Ultima Karya.
            </p>

            {/* Grid of 4 Trust Badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-2">
              <div className="flex items-center gap-2.5 bg-navy-900/65 backdrop-blur-md border border-white/10 p-3 rounded-xl shadow-xs hover:border-amber-500/30 transition-all duration-300">
                <div className="p-2 bg-amber-500/15 text-amber-400 rounded-lg">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-slate-400 font-mono">Pengalaman</p>
                  <p className="text-xs font-bold text-white">10+ Tahun</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 bg-navy-900/65 backdrop-blur-md border border-white/10 p-3 rounded-xl shadow-xs hover:border-amber-500/30 transition-all duration-300">
                <div className="p-2 bg-amber-500/15 text-amber-400 rounded-lg">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-slate-400 font-mono">Standar</p>
                  <p className="text-xs font-bold text-white">Bergaransi Sah</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 bg-navy-900/65 backdrop-blur-md border border-white/10 p-3 rounded-xl shadow-xs hover:border-amber-500/30 transition-all duration-300">
                <div className="p-2 bg-amber-500/15 text-amber-400 rounded-lg">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-slate-400 font-mono">Pelaksana</p>
                  <p className="text-xs font-bold text-white">Tim Ahli PT</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 bg-navy-900/65 backdrop-blur-md border border-white/10 p-3 rounded-xl shadow-xs hover:border-amber-500/30 transition-all duration-300">
                <div className="p-2 bg-amber-500/15 text-amber-400 rounded-lg">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-slate-400 font-mono">Kejujuran</p>
                  <p className="text-xs font-bold text-white">Harga Transparan</p>
                </div>
              </div>
            </div>

            {/* CTA Option Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                id="hero-cta-primary"
                onClick={() => onScrollToSection("rab")}
                className="bg-amber-500 text-navy-950 hover:bg-amber-400 font-extrabold text-base px-8 py-4 rounded-xl shadow-lg cursor-pointer hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <span>Hitung Estimasi RAB</span>
                <ChevronRight className="w-5 h-5 text-navy-950" />
              </button>

              <button
                id="hero-cta-secondary"
                onClick={() => onScrollToSection("survey")}
                className="bg-white/10 border-2 border-white/30 text-white hover:bg-white/20 hover:border-white/50 font-bold text-base px-8 py-4 rounded-xl shadow-sm cursor-pointer hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <CalendarCheck className="w-5 h-5 text-amber-500" />
                <span>Jadwalkan Survey</span>
              </button>
            </div>
          </div>

          {/* Right Hero Interactive Indicator Grid (Highlights alternating works) */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none space-y-4">
              
              {/* Overlapping Slide indicator box */}
              <div className="bg-navy-900/80 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-2xl relative">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] text-amber-500 uppercase tracking-widest font-mono font-bold">
                    PROYEK TERKINI &amp; AKTIVITAS FISIK
                  </span>
                  <div className="flex items-center gap-1.5">
                    {bgImages.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`h-2.5 rounded-full transition-all duration-300 ${
                          idx === currentSlide ? "w-6 bg-amber-500" : "w-2.5 bg-white/30 hover:bg-white/50"
                        }`}
                        aria-label={`Lihat slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>

                {/* Animated content card */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-display font-bold text-white">
                      {captions[currentSlide].title}
                    </h3>
                    <span className="bg-amber-500 text-navy-950 text-[10px] font-extrabold px-2.5 py-1 rounded">
                      {captions[currentSlide].progress}
                    </span>
                  </div>
                  <p className="text-xs text-slate-350 leading-relaxed">
                    {captions[currentSlide].desc}
                  </p>
                  
                  <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
                    <span>Pelaksana: PT Yales Ultima Karya</span>
                    <span className="text-amber-500 font-mono font-bold">Slide {currentSlide + 1} / 2</span>
                  </div>
                </div>
              </div>

              {/* Extra micro trust indicators */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-navy-900/60 backdrop-blur-sm p-4 rounded-xl border border-white/5 text-center">
                  <span className="block text-xl font-bold text-amber-500 font-mono">100% RIIL</span>
                  <span className="block text-[10px] text-slate-400 mt-1 uppercase font-semibold">Tukang Sendiri No Sub</span>
                </div>
                <div className="bg-navy-900/60 backdrop-blur-sm p-4 rounded-xl border border-white/5 text-center">
                  <span className="block text-xl font-bold text-amber-500 font-mono">JAMINAN</span>
                  <span className="block text-[10px] text-slate-400 mt-1 uppercase font-semibold">Bebas Kebocoran &amp; Retak</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
