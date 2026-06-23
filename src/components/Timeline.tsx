import { WORK_TIMELINE } from "../types";
import { Eye, Coffee, FileSpreadsheet, FileWarning, KeyRound, Radio, Compass } from "lucide-react";

// Associating step indicators with custom iconography styles
const TIMELINE_ICONS = [
  <Compass key="1" className="w-5 h-5" />,
  <Coffee key="2" className="w-5 h-5" />,
  <FileSpreadsheet key="3" className="w-5 h-5" />,
  <FileWarning key="4" className="w-5 h-5" />,
  <Eye key="5" className="w-5 h-5" />,
  <Radio key="6" className="w-5 h-5" />,
  <KeyRound key="7" className="w-5 h-5" />
];

export default function Timeline() {
  return (
    <section id="tentang" className="py-20 md:py-28 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <span className="text-amber-550 font-mono text-xs uppercase tracking-widest font-extrabold block">
            PROSES KERJA TRANSPARAN
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-navy-900 tracking-tight leading-none">
            Alur Kerja Yales Konstruksi
          </h2>
          <div className="w-16 h-1 bg-navy-900 mx-auto rounded-full"></div>
          <p className="text-gray-650 text-sm md:text-base leading-relaxed">
            Kepercayaan Anda adalah amanah tertinggi kami. Untuk memastikan keselarasan hasil akhir, kami mengadopsi alur pengerjaan berstandar baku dari rancangan awal hingga penyerahan kunci fisik.
          </p>
        </div>

        {/* Timeline Path representation */}
        <div className="relative border-l-2 border-navy-900/10 md:border-l-0 md:before:absolute md:before:top-12 md:before:left-0 md:before:right-0 md:before:h-0.5 md:before:bg-navy-900/10 ml-4 md:ml-0">
          <div className="grid md:grid-cols-7 gap-y-12 gap-x-6 relative">
            {WORK_TIMELINE.map((item, index) => (
              <div
                key={item.step}
                id={`timeline-step-${item.step}`}
                className="relative pl-8 md:pl-0 md:text-center flex flex-col items-start md:items-center group"
              >
                {/* Numeric badge node representation */}
                <div className="absolute left-0 md:left-50% md:-translate-x-1/2 top-0 md:-top-6 z-20 flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-navy-900 text-white font-display font-extrabold text-base flex items-center justify-center border-4 border-white group-hover:bg-amber-500 group-hover:text-navy-900 transition-colors duration-300 shadow-md">
                    {item.step}
                  </div>
                  {/* Subtle step node icon label */}
                  <div className="hidden md:flex mt-4 p-1.5 bg-white border border-gray-150 rounded-lg text-navy-900 shadow-xs group-hover:-translate-y-1 transition-transform duration-350">
                    {TIMELINE_ICONS[index] || <Compass className="w-4 h-4 text-navy-900" />}
                  </div>
                </div>

                {/* Text Content */}
                <div className="md:pt-16 space-y-2">
                  <h3 className="font-display text-base font-extrabold text-navy-900 tracking-tight group-hover:text-navy-800">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed md:max-w-[190px] mx-auto">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dynamic Certification Callout badge bottom */}
        <div className="mt-16 bg-white border border-gray-150 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-center gap-6 max-w-4xl mx-auto">
          <div>
            <h4 className="font-display text-base md:text-lg font-bold text-navy-900">
              Sistem Pengawasan Terpadu (Site Supervision)
            </h4>
            <p className="text-xs text-gray-500 mt-1 max-w-xl">
              Setiap langkah pelaksanaan proyek dikontrol oleh Quality Control (QC) dan dilaporkan secara berkala kepada Anda dalam bentuk berkas dokumentasi fisik dan folder Google Drive bersama.
            </p>
          </div>
          <span className="bg-navy-900/5 text-navy-900 font-mono text-xs font-bold px-4 py-2 rounded-xl border border-navy-900/10">
            ✓ BERLISENSI RESMI &amp; LEGAL
          </span>
        </div>

      </div>
    </section>
  );
}
