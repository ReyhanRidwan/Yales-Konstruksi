import React from "react";
import { SERVICES_DATA, IMAGES, ServiceItem } from "../types";
import { CheckCircle, Home, Wrench, Building, Edit3, BedDouble, HelpCircle, Layers, ShieldCheck, Sun, Target } from "lucide-react";

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  bangun_baru: <Home className="w-5 h-5 text-amber-500" />,
  renovasi_rumah: <Wrench className="w-5 h-5 text-amber-500" />,
  renovasi_kantor: <Building className="w-5 h-5 text-amber-500" />,
  desain_arsitektur: <Edit3 className="w-5 h-5 text-amber-500" />,
  interior_kitchen: <BedDouble className="w-5 h-5 text-amber-500" />,
  kanopi: <Sun className="w-5 h-5 text-amber-500" />,
  baja_ringan: <Layers className="w-5 h-5 text-amber-500" />,
  pagar: <ShieldCheck className="w-5 h-5 text-amber-500" />,
  sumur_bor: <Wrench className="w-5 h-5 text-amber-500" />,
  konsultan_pengawas: <Target className="w-5 h-5 text-amber-500" />
};

export default function Services() {
  // Main featured services have images
  const featuredServices = [
    {
      id: "bangun_baru",
      service: SERVICES_DATA[0],
      img: IMAGES.serviceBangun,
    },
    {
      id: "renovasi_rumah",
      service: SERVICES_DATA[1],
      img: IMAGES.serviceRenovasi,
    },
    {
      id: "interior_kitchen",
      service: SERVICES_DATA[4],
      img: IMAGES.serviceInterior,
    },
  ];

  // Secondary service listings
  const secondaryServices = SERVICES_DATA.filter(
    (item) => !["bangun_baru", "renovasi_rumah", "interior_kitchen"].includes(item.id)
  );

  return (
    <section id="layanan" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 md:mb-20">
          <span className="text-amber-550 font-mono text-xs uppercase tracking-widest font-extrabold block">
            LAYANAN PROFESIONAL KAMI
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-navy-900 tracking-tight leading-tight">
            Solusi Konstruksi Terintegrasi Dari Pondasi Hingga Komersial
          </h2>
          <div className="w-16 h-1 bg-navy-900 mx-auto rounded-full"></div>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Didukung oleh arsitek ahli, pengawas lapangan berdedikasi, dan jajaran tukang berpengalaman tinggi untuk menjamin hasil pengerjaan estetis yang presisi.
          </p>
        </div>

        {/* 1. Featured Services Grid (Visual Heavy Cards with generated images) */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {featuredServices.map(({ id, service, img }, idx) => (
            <div
              key={id}
              id={`featured-service-card-${id}`}
              className="bg-slate-50 rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:border-navy-900/10 hover:shadow-lg transition-all duration-300 flex flex-col group h-full"
            >
              {/* Image box with neat golden hour lighting, 4:3 aspect ratio */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={img}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-navy-900/95 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-white/10">
                  {CATEGORY_ICONS[id] || <Home className="w-4 h-4 text-amber-500" />}
                  <span className="text-[10px] text-white uppercase tracking-wider font-bold font-mono">
                    LAYANAN UTAMA
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <h3 className="font-display text-xl font-extrabold text-navy-900 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed min-h-[72px]">
                    {service.description}
                  </p>
                </div>

                {/* Scope features bullet points */}
                <ul className="space-y-2 border-t border-gray-200/60 pt-4 flex-1">
                  {service.features.map((feat, fidx) => (
                    <li key={fidx} className="flex items-start text-xs text-slate-700">
                      <CheckCircle className="w-4.5 h-4.5 text-navy-900 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="font-medium">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* 2. Secondary Services Listing (Compact high-aesthetic list layout) */}
        <div className="bg-slate-50 border border-gray-150 rounded-3xl p-6 md:p-10">
          <div className="mb-8 text-left md:text-center">
            <h4 className="font-display text-lg md:text-xl font-bold text-navy-900">
              Pekerjaan Spesifik &amp; Utilitas Lainnya
            </h4>
            <p className="text-xs md:text-sm text-gray-500 mt-1">
              Kami juga melayani pengerjaan sub-bab konstruksi lepas dengan standar profesional yang setara.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {secondaryServices.map((service, idx) => (
              <div
                key={service.id}
                id={`secondary-service-card-${service.id}`}
                className="bg-white p-5 rounded-xl shadow-xs border border-gray-150 hover:border-navy-900/20 hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2.5">
                  <div className="p-2 w-fit bg-amber-500/10 rounded-lg">
                    {CATEGORY_ICONS[service.id] || <Wrench className="w-5 h-5 text-navy-900" />}
                  </div>
                  <h5 className="font-display text-base font-bold text-navy-900">
                    {service.title}
                  </h5>
                  <p className="text-xs text-gray-600 leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                </div>

                <div className="border-t border-gray-100 pt-3">
                  <span className="text-[10px] text-navy-805 font-bold uppercase tracking-wider block">
                    SPEK STANDARD PT YALES
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
