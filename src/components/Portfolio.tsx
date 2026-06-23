import { useState, useMemo } from "react";
import { PORTFOLIO_DATA, PortfolioItem } from "../types";
import { MapPin, Ruler, Calendar, ArrowUpRight } from "lucide-react";

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState<"semua" | "bangun" | "renovasi" | "interior">("semua");

  const filteredItems = useMemo(() => {
    if (activeTab === "semua") {
      return PORTFOLIO_DATA;
    }
    return PORTFOLIO_DATA.filter((item) => item.category === activeTab);
  }, [activeTab]);

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <span className="text-amber-550 font-mono text-xs uppercase tracking-widest font-extrabold block">
            BUKTI NYATA KARYA KAMI
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-navy-900 tracking-tight leading-none">
            Portfolio Proyek Pilihan
          </h2>
          <div className="w-16 h-1 bg-navy-900 mx-auto rounded-full"></div>
          <p className="text-gray-650 text-sm md:text-base leading-relaxed">
            Eksplorasi mahakarya hunian premium yang telah selesai kami bangun dan renovasi dengan ketelitian finishing tingkat tinggi di penjuru Jakarta Selatan dan sekitarnya.
          </p>
        </div>

        {/* Tab Filter Button Row */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {[
            { tag: "semua", label: "Semua Proyek" },
            { tag: "bangun", label: "Bangun Baru" },
            { tag: "renovasi", label: "Renovasi Rumah" },
            { tag: "interior", label: "Desain Interior" },
          ].map((tab) => (
            <button
              key={tab.tag}
              id={`portfolio-tab-${tab.tag}`}
              onClick={() => setActiveTab(tab.tag as any)}
              className={`px-5 py-2.5 rounded-lg font-bold text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                activeTab === tab.tag
                  ? "bg-navy-900 text-white shadow-md scale-[1.02]"
                  : "bg-slate-100 text-gray-600 hover:bg-slate-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Dynamic Filtered Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredItems.map((project) => (
            <div
              key={project.id}
              id={`portfolio-card-${project.id}`}
              className="bg-slate-50 rounded-2xl overflow-hidden border border-gray-150 shadow-xs hover:shadow-lg transition-all duration-350 flex flex-col justify-between group"
            >
              {/* Image Box */}
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-200">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                
                {/* Hover overlay effects */}
                <div className="absolute inset-0 bg-navy-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="p-3 bg-white text-navy-900 rounded-full shadow">
                    <ArrowUpRight className="w-5 h-5 text-navy-900" />
                  </span>
                </div>

                {/* Badge Category Tag */}
                <span className="absolute top-4 left-4 bg-navy-900 text-white text-[9px] font-mono font-bold tracking-wider uppercase px-2.5 py-1 rounded">
                  {project.category === "bangun" ? "BANGUN BARU" : project.category === "renovasi" ? "RENOVASI" : "INTERIOR"}
                </span>
              </div>

              {/* Card Bottom Copy */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-1.5 text-left">
                  <h3 className="font-display text-base font-extrabold text-navy-900 tracking-tight leading-snug">
                    {project.title}
                  </h3>
                  <div className="flex items-center text-xs text-gray-500 gap-1.5 font-sans">
                    <MapPin className="w-3.5 h-3.5 text-gray-400" />
                    <span>{project.location}</span>
                  </div>
                </div>

                {/* Grid Technical Specifications indicators */}
                <div className="grid grid-cols-2 gap-2 border-t border-gray-200/60 pt-3 text-[11px] font-mono text-gray-500 text-left">
                  <div className="flex items-center gap-1">
                    <Ruler className="w-3.5 h-3.5 text-gray-400" />
                    <span>{project.size} m² Luas</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-gray-400" />
                    <span>Selesai: {project.year}</span>
                  </div>
                </div>

                {/* Bullet highlights tags */}
                <div className="pt-2 flex flex-wrap gap-1">
                  {project.highlights.map((high, hidx) => (
                    <span key={hidx} className="bg-navy-900/5 text-navy-900 text-[9px] font-bold px-2 py-0.5 rounded font-sans">
                      {high}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
