import { COMPANY_INFO, SERVICES_DATA } from "../types";
import { Phone, Mail, Clock, MapPin, Hammer, MessageSquareCode } from "lucide-react";

interface FooterProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function Footer({ onScrollToSection }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (id: string) => {
    onScrollToSection(id);
  };

  return (
    <footer className="bg-navy-900 text-white relative z-10 pt-16 md:pt-20 border-t border-white/10 overflow-hidden">
      
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-blue-600/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 pb-12 border-b border-white/15">
          
          {/* Col 1: Brand & Desc (4 Cols) */}
          <div className="lg:col-span-4 space-y-6 text-left">
            <div className="flex items-center space-x-2">
              <div className="p-2.5 bg-white/5 border border-white/10 text-amber-500 rounded-lg">
                <Hammer className="w-5 h-5 text-amber-500" />
              </div>
              <div>
                <span className="font-display text-lg font-bold tracking-wide uppercase block">
                  Yales Konstruksi
                </span>
                <span className="text-[9px] text-slate-400 font-mono tracking-wider block uppercase mt-0.5">
                  PT Yales Ultima Karya
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-350 leading-relaxed max-w-sm">
              Kami berkomitmen menghadirkan jasa konstruksi bangunan terbaik di Jabodetabek dengan jaminan keterbukaan RAB, kemudahan pemantauan progress mingguan secara online, serta garansi struktur tertulis yang berlandaskan hukum.
            </p>

            <div className="space-y-3 font-sans text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">{COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span>{COMPANY_INFO.workingHours}</span>
              </div>
            </div>
          </div>

          {/* Col 2: Services Quick Links (2.5 Cols) */}
          <div className="lg:col-span-2.5 space-y-5 text-left lg:pl-4">
            <h4 className="font-display text-sm font-bold tracking-wider uppercase text-amber-500">
              Layanan Utama
            </h4>
            <div className="flex flex-col space-y-2.5 text-xs text-slate-300">
              {SERVICES_DATA.slice(0, 5).map((srv) => (
                <button
                  key={srv.id}
                  onClick={() => handleLinkClick("layanan")}
                  className="hover:text-amber-500 transition-colors text-left font-medium cursor-pointer"
                >
                  {srv.title}
                </button>
              ))}
            </div>
          </div>

          {/* Col 3: Contact & Action Links (2.5 Cols) */}
          <div className="lg:col-span-2.5 space-y-5 text-left">
            <h4 className="font-display text-sm font-bold tracking-wider uppercase text-amber-500">
              Hubungi Kami
            </h4>
            <div className="space-y-4 text-xs text-slate-300">
              
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappFormatted}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-amber-505 transition-colors group"
              >
                <div className="p-1.5 bg-white/5 rounded text-amber-500 group-hover:bg-white/10 transition-colors">
                  <Phone className="w-4 h-4 text-amber-500" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 uppercase font-mono">WhatsApp Call/Chat</p>
                  <p className="font-bold">{COMPANY_INFO.whatsapp}</p>
                </div>
              </a>

              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-center gap-2.5 hover:text-amber-500 transition-colors group"
              >
                <div className="p-1.5 bg-white/5 rounded text-amber-500 group-hover:bg-white/10 transition-colors">
                  <Mail className="w-4 h-4 text-amber-500" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 uppercase font-mono">Surat Elektronik</p>
                  <p className="font-bold text-slate-300">{COMPANY_INFO.email}</p>
                </div>
              </a>

            </div>

            {/* General verification note */}
            <div className="bg-white/5 border border-white/10 p-3 rounded-lg text-[10px] text-slate-400">
              <p className="font-semibold text-white">★ Kualifikasi Terverifikasi</p>
              <p className="mt-1">PT Yales Ultima Karya terdaftar di LPJK (Lembaga Pengembangan Jasa Konstruksi).</p>
            </div>
          </div>

          {/* Col 4: Responsive Google Maps Embed (3 Cols) */}
          <div className="lg:col-span-3 space-y-4 text-left">
            <h4 className="font-display text-sm font-bold tracking-wider uppercase text-amber-500">
              Kantor Operasional
            </h4>
            
            {/* Google Maps iframe wrap */}
            <div className="border border-white/10 rounded-xl overflow-hidden shadow-md h-36 relative bg-slate-800">
              <iframe
                src={COMPANY_INFO.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer"
                title="Lokasi Kantor PT Yales Ultima Karya"
              ></iframe>
            </div>
            
            <span className="block text-[10px] text-slate-400 font-mono text-center">
              *Tamu dihimbau menjadwalkan pertemuan H-1 sebelum kunjungan kantor.
            </span>
          </div>

        </div>

        {/* Footer legalities Bottom Row */}
        <div className="py-6 flex flex-col md:flex-row justify-between items-center text-[11px] text-slate-400 font-sans gap-4">
          <p className="text-left">
            &copy; {currentYear} <strong>PT Yales Ultima Karya</strong>. Seluruh hak cipta dilindungi undang-undang.
          </p>
          <div className="flex space-x-6">
            <button onClick={() => handleLinkClick("home")} className="hover:text-amber-500 cursor-pointer">
              Beranda
            </button>
            <button onClick={() => handleLinkClick("rab")} className="hover:text-amber-500 cursor-pointer">
              Hitung RAB
            </button>
            <button onClick={() => handleLinkClick("survey")} className="hover:text-amber-500 cursor-pointer">
              Kualifikasi Survey
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
