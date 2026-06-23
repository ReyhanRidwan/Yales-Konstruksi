import { useState } from "react";
import { TESTIMONIALS_DATA } from "../types";
import { Star, MessageSquareQuote, ChevronLeft, ChevronRight, Check } from "lucide-react";

export default function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS_DATA[activeIndex];

  return (
    <section id="testimoni" className="py-20 md:py-28 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 md:mb-20">
          <span className="text-amber-550 font-mono text-xs uppercase tracking-widest font-extrabold block">
            KEPUASAN PELANGGAN UTAMA
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-navy-900 tracking-tight leading-none">
            Testimoni &amp; Serah Terima Proyek
          </h2>
          <div className="w-16 h-1 bg-navy-900 mx-auto rounded-full"></div>
          <p className="text-gray-650 text-sm md:text-base leading-relaxed">
            Keberhasilan kami diukur dari senyum kepuasan para pemilik rumah setelah meninjau hasil rapi pengerjaan fisik kami. Berikut adalah suara riil dari mereka.
          </p>
        </div>

        {/* Testimonial Core Card (Side by Side Handshake Image & Review Text) */}
        <div className="max-w-5xl mx-auto bg-white rounded-3xl border border-gray-150 overflow-hidden shadow-lg">
          <div className="grid md:grid-cols-12 items-stretch">
            
            {/* Left Col: Handshake image (5 Cols) */}
            <div className="md:col-span-5 relative min-h-[280px] md:min-h-0 bg-slate-150">
              <img
                src={current.image}
                alt="Client Handover Handshake PT Yales Ultima Karya"
                className="w-full h-full object-cover select-none"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              {/* Overlapping small certificate tag */}
              <div className="absolute top-4 left-4 bg-emerald-500/90 backdrop-blur-md text-white text-[9px] font-mono font-bold tracking-wider uppercase px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5" />
                <span>SERAH TERIMA SAH</span>
              </div>
            </div>

            {/* Right Col: Quote Text & client profiles (7 Cols) */}
            <div className="md:col-span-7 p-6 sm:p-10 md:p-12 flex flex-col justify-between space-y-8 text-left relative">
              <MessageSquareQuote className="absolute right-8 top-8 w-24 h-24 text-gray-150 -z-0 opacity-40" />

              <div className="space-y-6 relative z-10">
                {/* Rating Stars row */}
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4.5 h-4.5 text-amber-500 fill-amber-500" />
                  ))}
                </div>

                {/* Review Paragraph */}
                <p className="text-gray-700 text-sm sm:text-base italic leading-relaxed font-sans">
                  &ldquo;{current.review}&rdquo;
                </p>

                {/* Scope line item helper */}
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-navy-900/5 text-navy-900 rounded-full text-xs font-bold font-sans">
                  Proyek: {current.projectType}
                </span>
              </div>

              {/* Profile details */}
              <div className="flex justify-between items-end border-t border-gray-100 pt-6 relative z-10">
                <div>
                  <h4 className="font-display font-extrabold text-base text-navy-900">
                    {current.name}
                  </h4>
                  <p className="text-xs text-gray-500 font-medium">
                    {current.title} &mdash; {current.location}
                  </p>
                </div>

                {/* Slider nav controls */}
                <div className="flex space-x-2">
                  <button
                    type="button"
                    onClick={prevSlide}
                    className="p-2 border border-gray-200 text-gray-600 rounded-lg hover:bg-slate-50 hover:text-navy-900 transition-colors cursor-pointer"
                    aria-label="Testimonial Sebelumnya"
                  >
                    <ChevronLeft className="w-4.5 h-4.5" />
                  </button>
                  <button
                    type="button"
                    onClick={nextSlide}
                    className="p-2 border border-gray-200 text-gray-600 rounded-lg hover:bg-slate-50 hover:text-navy-900 transition-colors cursor-pointer"
                    aria-label="Testimonial Berikutnya"
                  >
                    <ChevronRight className="w-4.5 h-4.5 text-amber-500" />
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
