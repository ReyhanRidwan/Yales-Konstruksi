import { useState, useMemo } from "react";
import { Calculator, ShieldAlert, ArrowRight, Check, Hammer } from "lucide-react";

interface RabCalculatorProps {
  onProceedToSurvey: (prefillData?: any) => void;
}

export default function RabCalculator({ onProceedToSurvey }: RabCalculatorProps) {
  // Input states
  const [projectType, setProjectType] = useState<"bangun" | "renovasi">("bangun");
  const [luasBangunan, setLuasBangunan] = useState<number>(100);
  const [jumlahLantai, setJumlahLantai] = useState<number>(2);
  const [lokasiProyek, setLokasiProyek] = useState<string>("Jakarta Selatan");
  const [finishingLevel, setFinishingLevel] = useState<"standard" | "menengah" | "premium">("menengah");

  const locations = [
    "Jakarta Selatan",
    "Jakarta Barat",
    "Jakarta Utara",
    "Jakarta Pusat",
    "Jakarta Timur",
    "Tangerang",
    "Tangerang Selatan",
    "Depok",
    "Bekasi",
    "Bogor"
  ];

  // Logic Calculations
  const calculatedEstimate = useMemo(() => {
    if (!luasBangunan || luasBangunan <= 0) {
      return { min: 0, max: 0 };
    }

    let pricePerSqMin = 0;
    let pricePerSqMax = 0;

    if (projectType === "bangun") {
      switch (finishingLevel) {
        case "standard":
          pricePerSqMin = 4000000;
          pricePerSqMax = 4800000;
          break;
        case "menengah":
          pricePerSqMin = 5000000;
          pricePerSqMax = 6200000;
          break;
        case "premium":
          pricePerSqMin = 7000000;
          pricePerSqMax = 9500000;
          break;
      }
    } else {
      // Renovasi
      switch (finishingLevel) {
        case "standard":
          pricePerSqMin = 2200000;
          pricePerSqMax = 2800000;
          break;
        case "menengah":
          pricePerSqMin = 3000050;
          pricePerSqMax = 4000000;
          break;
        case "premium":
          pricePerSqMin = 4800000;
          pricePerSqMax = 6500000;
          break;
      }
    }

    // Floor structure multipliers
    let floorMultiplier = 1.0;
    if (jumlahLantai === 2) {
      floorMultiplier = projectType === "bangun" ? 1.06 : 1.03;
    } else if (jumlahLantai >= 3) {
      floorMultiplier = projectType === "bangun" ? 1.15 : 1.08;
    }

    const minAmount = luasBangunan * pricePerSqMin * floorMultiplier;
    const maxAmount = luasBangunan * pricePerSqMax * floorMultiplier;

    return {
      min: Math.round(minAmount),
      max: Math.round(maxAmount)
    };
  }, [projectType, luasBangunan, jumlahLantai, finishingLevel]);

  // Format dynamic currency helper
  const formatRupiah = (val: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0
    }).format(val);
  };

  const handleProceed = () => {
    onProceedToSurvey({
      projectType,
      luasBangunan,
      jumlahLantai,
      lokasiProyek,
      finishingLevel,
      estimatedCostLabel: `${formatRupiah(calculatedEstimate.min)} - ${formatRupiah(calculatedEstimate.max)}`
    });
  };

  return (
    <section id="rab" className="py-20 md:py-28 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-amber-550 font-mono text-xs uppercase tracking-widest font-extrabold block">
            ESTIMATOR DIGITAL
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-navy-900 tracking-tight leading-none">
            Kalkulator RAB Interaktif
          </h2>
          <div className="w-16 h-1 bg-navy-900 mx-auto rounded-full"></div>
          <p className="text-gray-650 text-sm md:text-base leading-relaxed">
            Dapatkan taksiran awal rencana pembangunan atau renovasi rumah Anda secara instan berdasarkan luas tapak dan standar finishing yang diinginkan.
          </p>
        </div>

        {/* Dynamic Calculator Container Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left panel Inputs Form (7 Cols) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 border border-gray-150 rounded-3xl shadow-sm flex flex-col justify-between">
            <div className="space-y-6">
              
              {/* project type pills */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-navy-900 uppercase tracking-widest block">
                  1. Pilih Jenis Proyek
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setProjectType("bangun")}
                    className={`py-3.5 px-4 rounded-xl font-bold flex items-center justify-center gap-2 cursor-pointer transition-all duration-200 border-2 ${
                      projectType === "bangun"
                        ? "bg-navy-900 border-navy-900 text-white shadow-md"
                        : "bg-white border-gray-200 text-gray-700 hover:border-gray-300"
                    }`}
                  >
                    <Hammer className="w-4 h-4" />
                    <span>Bangun Rumah Baru</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setProjectType("renovasi")}
                    className={`py-3.5 px-4 rounded-xl font-bold flex items-center justify-center gap-2 cursor-pointer transition-all duration-200 border-2 ${
                      projectType === "renovasi"
                        ? "bg-navy-900 border-navy-900 text-white shadow-md"
                        : "bg-white border-gray-200 text-gray-700 hover:border-gray-300"
                    }`}
                  >
                    <Calculator className="w-4 h-4" />
                    <span>Renovasi Rumah</span>
                  </button>
                </div>
              </div>

              {/* Luas Bangunan Slider & Input */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label htmlFor="luas-kalkulator-input" className="text-xs font-bold text-navy-900 uppercase tracking-widest block">
                    2. Luas Bangunan (m²)
                  </label>
                  <div className="flex items-center space-x-2">
                    <input
                      id="luas-kalkulator-input"
                      type="number"
                      min="10"
                      max="1000"
                      value={luasBangunan || ""}
                      onChange={(e) => setLuasBangunan(Math.max(0, parseInt(e.target.value) || 0))}
                      className="w-20 px-2 py-1 text-center font-bold text-navy-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy-900 text-sm"
                    />
                    <span className="text-xs font-bold text-gray-500">m²</span>
                  </div>
                </div>
                <input
                  id="luas-kalkulator"
                  type="range"
                  min="20"
                  max="500"
                  value={luasBangunan}
                  onChange={(e) => setLuasBangunan(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-navy-900"
                />
                <div className="flex justify-between text-[11px] text-gray-400 font-mono">
                  <span>Min: 20 m²</span>
                  <span>Maks: 500 m²</span>
                </div>
              </div>

              {/* Lantai & Lokasi row */}
              <div className="grid sm:grid-cols-2 gap-6">
                
                {/* Jumlah Lantai Selector */}
                <div className="space-y-2">
                  <label htmlFor="lantai-kalkulator" className="text-xs font-bold text-navy-900 uppercase tracking-widest block">
                    3. Jumlah Lantai
                  </label>
                  <select
                    id="lantai-kalkulator"
                    value={jumlahLantai}
                    onChange={(e) => setJumlahLantai(parseInt(e.target.value))}
                    className="w-full border-2 border-gray-200 hover:border-gray-300 bg-white rounded-xl py-3 px-4 text-sm font-semibold text-gray-700 outline-none focus:border-navy-900 transition-colors"
                  >
                    <option value={1}>1 Lantai (Sederhana)</option>
                    <option value={2}>2 Lantai (Modern / Standard)</option>
                    <option value={3}>3 Lantai (Satu Tapak Kokoh)</option>
                    <option value={4}>4 Lantai (Struktur Komersial)</option>
                  </select>
                </div>

                {/* Lokasi select box */}
                <div className="space-y-2">
                  <label htmlFor="lokasi-proyek" className="text-xs font-bold text-navy-900 uppercase tracking-widest block">
                    4. Wilayah Lokasi
                  </label>
                  <select
                    id="lokasi-proyek"
                    value={lokasiProyek}
                    onChange={(e) => setLokasiProyek(e.target.value)}
                    className="w-full border-2 border-gray-200 hover:border-gray-300 bg-white rounded-xl py-3 px-4 text-sm font-semibold text-gray-700 outline-none focus:border-navy-900 transition-colors"
                  >
                    {locations.map((loc) => (
                      <option key={loc} value={loc}>
                        {loc}
                      </option>
                    ))}
                  </select>
                </div>

              </div>

              {/* Finishing Level selections */}
              <div className="space-y-3">
                <label className="text-xs font-bold text-navy-900 uppercase tracking-widest block">
                  5. Kualitas Finishing Material
                </label>
                <div className="grid sm:grid-cols-3 gap-3">
                  {[
                    {
                      id: "standard",
                      title: "Standard",
                      desc: "Lantai keramik biasa, cat umum, kelistrikan standar SNI. Ekonomis namun tetap kokoh.",
                    },
                    {
                      id: "menengah",
                      title: "Menengah",
                      desc: "Granit tile 60x60, sanitari Toto, cat Dulux/merek setara, kusen aluminium rapi.",
                    },
                    {
                      id: "premium",
                      title: "Premium",
                      desc: "Marmer slab slab besar, kayu jati solid/WPC, sanitasi Kohler, smart lock, cat premium weathercoat.",
                    },
                  ].map((lvl) => (
                    <div
                      key={lvl.id}
                      onClick={() => setFinishingLevel(lvl.id as any)}
                      className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 select-none flex flex-col justify-between ${
                        finishingLevel === lvl.id
                          ? "border-navy-900 bg-navy-900/5 shadow-xs"
                          : "border-gray-200 hover:border-gray-300 bg-white"
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between">
                          <p className="font-bold text-sm text-navy-900">{lvl.title}</p>
                          {finishingLevel === lvl.id && (
                            <span className="w-4 h-4 bg-navy-900 rounded-full flex items-center justify-center">
                              <Check className="w-2.5 h-2.5 text-white" />
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] text-gray-500 mt-1 leading-normal">
                          {lvl.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Right panel Outputs displaying calculations (5 Cols) */}
          <div className="lg:col-span-5 bg-navy-900 text-white p-6 sm:p-10 border border-white/10 rounded-3xl shadow-lg flex flex-col justify-between">
            <div className="space-y-6">
              
              <div className="space-y-1">
                <span className="text-[10px] text-amber-500 uppercase font-mono tracking-widest font-extrabold">
                  HASIL ESTIMASI SEMENTARA
                </span>
                <h3 className="font-display text-2xl font-extrabold tracking-wide">
                  Rencana Anggaran Bangun (RAB)
                </h3>
              </div>

              {/* Interactive Info Sheet */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-4">
                <div className="flex justify-between items-center border-b border-white/10 pb-3">
                  <span className="text-xs text-slate-300">Jenis Proyek</span>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-500">
                    {projectType === "bangun" ? "Bangun Baru" : "Renovasi Rumah"}
                  </span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-3">
                  <span className="text-xs text-slate-300">Ukuran Tapak</span>
                  <span className="text-xs font-bold text-white font-mono">{luasBangunan} m²</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-3">
                  <span className="text-xs text-slate-300">Jumlah Lantai</span>
                  <span className="text-xs font-bold text-white font-mono">{jumlahLantai} Lantai</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-3">
                  <span className="text-xs text-slate-300">Finishing Material</span>
                  <span className="text-xs font-bold text-white uppercase tracking-wider">
                    {finishingLevel}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-slate-300">Lokasi Survey</span>
                  <span className="text-xs font-bold text-white">{lokasiProyek}</span>
                </div>
              </div>

              {/* Large Cost Display */}
              <div className="space-y-2 py-4 bg-gradient-to-r from-amber-500/10 to-transparent p-5 border-l-4 border-amber-500 rounded-r-2xl">
                <span className="text-[11px] font-bold text-amber-500 uppercase tracking-widest block font-mono">
                  Kisaran Estimasi Biaya (IDR):
                </span>
                <span
                  id="estimated-cost-range"
                  className="block font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight"
                >
                  {calculatedEstimate.min > 0
                    ? `${formatRupiah(calculatedEstimate.min)} - ${formatRupiah(
                        calculatedEstimate.max
                      )}`
                    : "Lengkapi data Luas m²"}
                </span>
              </div>

              {/* Warning Disclaimer (Mandatory) */}
              <div className="flex items-start gap-2.5 bg-amber-500/10 text-amber-500/90 text-xs p-4 rounded-xl border border-amber-500/20 leading-relaxed">
                <ShieldAlert className="w-5 h-5 flex-shrink-0 text-amber-500" />
                <span className="text-[11px]">
                  <strong>Disclaimer:</strong> Estimasi di atas merupakan perhitungan matematis awal bukan harga final kontrak mutlak. Angka riil akan diverifikasi melalui analisis gambar dan survey fisik lapangan langsung.
                </span>
              </div>

            </div>

            {/* CTA to scroll to survey form */}
            <div className="pt-8">
              <button
                id="kalkulator-proceed-survey"
                type="button"
                onClick={handleProceed}
                className="w-full bg-amber-500 text-navy-900 font-extrabold text-base py-4 rounded-xl shadow-md cursor-pointer hover:bg-amber-400 hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2"
              >
                <span>Lanjutkan Survey Kebutuhan</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
