import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, FileCheck2, Send, MapPin, Ruler, Wallet, CalendarRange, Upload, UserCheck, Sparkles, Building2, Hammer } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { COMPANY_INFO } from "../types";

interface SurveyFormProps {
  prefillData: any;
}

export default function SurveyForm({ prefillData }: SurveyFormProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 7;

  // Form states initialized with prefilled calculator data if existing
  const [formData, setFormData] = useState({
    jenisProyek: "bangun",
    lokasiProyek: "Jakarta Selatan",
    luasBangunan: 100,
    budget: "300-500 juta",
    targetWaktu: "1-3 Bulan",
    kontakNama: "",
    kontakWhatsApp: "",
    kontakEmail: "",
  });

  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);
  const [isDragActive, setIsDragActive] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Sync calculations from RAB Calculator prefill
  useEffect(() => {
    if (prefillData) {
      setFormData((prev) => ({
        ...prev,
        jenisProyek: prefillData.projectType || prev.jenisProyek,
        lokasiProyek: prefillData.lokasiProyek || prev.lokasiProyek,
        luasBangunan: prefillData.luasBangunan || prev.luasBangunan,
      }));

      // Map prefill ranges to appropriate budget categories
      if (prefillData.estimatedCostLabel) {
        if (prefillData.luasBangunan < 50) {
          setFormData((prev) => ({ ...prev, budget: "<100 juta" }));
        } else if (prefillData.luasBangunan >= 50 && prefillData.luasBangunan < 100) {
          setFormData((prev) => ({ ...prev, budget: "100-300 juta" }));
        } else if (prefillData.luasBangunan >= 100 && prefillData.luasBangunan < 180) {
          setFormData((prev) => ({ ...prev, budget: "300-500 juta" }));
        } else if (prefillData.luasBangunan >= 180 && prefillData.luasBangunan < 350) {
          setFormData((prev) => ({ ...prev, budget: "500 juta-1 M" }));
        } else {
          setFormData((prev) => ({ ...prev, budget: "> 1 M" }));
        }
      }
    }
  }, [prefillData]);

  // Handler steps navigation
  const nextStep = () => {
    // Basic step validation
    if (currentStep === 7) {
      if (!formData.kontakNama.trim()) {
        alert("Mohon masukkan nama Anda.");
        return;
      }
      if (!formData.kontakWhatsApp.trim()) {
        alert("Mohon masukkan nomor WhatsApp aktif Anda.");
        return;
      }
      if (!formData.kontakEmail.trim()) {
        alert("Mohon masukkan alamat email Anda.");
        return;
      }
      setIsSubmitted(true);
      return;
    }
    setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  // Drag and drop photo upload
  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setIsDragActive(true);
    } else if (e.type === "dragleave") {
      setIsDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setUploadedFileName(e.dataTransfer.files[0].name);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFileName(e.target.files[0].name);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  // WhatsApp formatted string summary routing
  const handleSendToWhatsApp = () => {
    const formattedMessage = `Halo Yales Konstruksi (PT YALES ULTIMA KARYA),

Saya telah melengkapi data kualifikasi survey kebutuhan pembangunan di landing page. Berikut adalah rincian kebutuhan proyek saya:

*PROFIL CALON KLIEN*
• Nama: ${formData.kontakNama}
• WhatsApp: ${formData.kontakWhatsApp}
• Email: ${formData.kontakEmail}

*REKAP KEBUTUHAN SURVEY*
• Jenis Proyek: ${formData.jenisProyek === "bangun" ? "Bangun Baru" : "Renovasi Rumah"}
• Lokasi Proyek: ${formData.lokasiProyek}
• Luas Bangunan: ${formData.luasBangunan} m²
• Tier Anggaran: ${formData.budget}
• Target Waktu: ${formData.targetWaktu}
• File Foto Terlampir: ${uploadedFileName ? `Ya (${uploadedFileName})` : "Tidak ada"}

${
  prefillData?.estimatedCostLabel
    ? `*ESTIMASI AWAL KALKULATOR*
• Kisaran Estimasi: ${prefillData.estimatedCostLabel}
`
    : ""
}
Mohon tim Yales Konstruksi berdiskusi internal untuk menjadwalkan survey fisik lokasi gratis. Terima kasih!`;

    const encodedMessage = encodeURIComponent(formattedMessage);
    const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappFormatted}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="survey" className="py-20 bg-white relative">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-slate-50 to-transparent"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-12">
          <span className="text-amber-550 font-mono text-xs uppercase tracking-widest font-extrabold block">
            KUALIFIKASI SURVEY
          </span>
          <h2 className="font-display text-3xl font-extrabold text-navy-900 tracking-tight leading-none">
            Sistem Pengajuan Survey &amp; Kebutuhan
          </h2>
          <div className="w-16 h-1 bg-navy-900 mx-auto rounded-full"></div>
          <p className="text-gray-500 text-sm leading-relaxed">
            Harap isi kuisioner singkat di bawah ini sebelum menjadwalkan survey lokasi bersama Arsitek &amp; Site Manager kami, guna menjamin persiapan data RAB yang lebih akurat dan terfokus.
          </p>
        </div>

        {/* Outer Form Container Sheet */}
        <div className="bg-slate-55 border border-gray-150 rounded-3xl p-6 sm:p-10 shadow-sm relative overflow-hidden min-h-[480px] flex flex-col justify-between">
          
          {!isSubmitted ? (
            <>
              {/* Top Banner Indicator progress block */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-bold text-navy-800 uppercase tracking-widest font-mono">
                    Langkah {currentStep} dari {totalSteps}
                  </span>
                  <span className="text-xs font-bold text-gray-500">
                    {Math.round((currentStep / totalSteps) * 100)}% Selesai
                  </span>
                </div>
                {/* Horizontal Progress Bar */}
                <div className="w-full h-2.5 bg-gray-200 rounded-full mb-8 overflow-hidden">
                  <div
                    className="h-full bg-navy-900 rounded-full transition-all duration-300"
                    style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Dynamic steps wrapper */}
              <div className="flex-1 flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-6"
                  >
                    {/* STEP 1: Jenis Proyek */}
                    {currentStep === 1 && (
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="p-2.5 bg-navy-900/10 text-navy-900 rounded-xl">
                            <Sparkles className="w-5 h-5" />
                          </div>
                          <h3 className="font-display text-lg font-extrabold text-navy-900">
                            Apa jenis kebutuhan proyek Anda?
                          </h3>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4 pt-2">
                          <button
                            type="button"
                            onClick={() => setFormData({ ...formData, jenisProyek: "bangun" })}
                            className={`p-6 rounded-2xl border-2 cursor-pointer flex flex-col items-center justify-center gap-3 text-center transition-all ${
                              formData.jenisProyek === "bangun"
                                ? "border-navy-900 bg-navy-900/5 text-navy-900 shadow-sm"
                                : "border-gray-200 bg-white hover:border-gray-300"
                            }`}
                          >
                            <Building2 className="w-8 h-8 text-navy-900" />
                            <div>
                              <p className="font-extrabold text-sm uppercase">Bangun Baru</p>
                              <p className="text-[11px] text-gray-500 mt-1">Konstruksi menyeluruh dari nol hingga selesai siap huni</p>
                            </div>
                          </button>
                          
                          <button
                            type="button"
                            onClick={() => setFormData({ ...formData, jenisProyek: "renovasi" })}
                            className={`p-6 rounded-2xl border-2 cursor-pointer flex flex-col items-center justify-center gap-3 text-center transition-all ${
                              formData.jenisProyek === "renovasi"
                                ? "border-navy-900 bg-navy-900/5 text-navy-900 shadow-sm"
                                : "border-gray-200 bg-white hover:border-gray-300"
                            }`}
                          >
                            <Hammer className="w-8 h-8 text-navy-900" />
                            <div>
                              <p className="font-extrabold text-sm uppercase">Renovasi Rumah</p>
                              <p className="text-[11px] text-gray-500 mt-1">Perubahan sebagian besar, sengketa struktur, interior atau atap</p>
                            </div>
                          </button>
                        </div>
                      </div>
                    )}

                    {/* STEP 2: Lokasi Proyek */}
                    {currentStep === 2 && (
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="p-2.5 bg-navy-900/10 text-navy-900 rounded-xl">
                            <MapPin className="w-5 h-5" />
                          </div>
                          <h3 className="font-display text-lg font-extrabold text-navy-900">
                            Di mana lokasi geografis proyek Anda terletak?
                          </h3>
                        </div>
                        <div className="pt-2">
                          <label htmlFor="survey-lokasi-select" className="sr-only">Lokasi Proyek</label>
                          <select
                            id="survey-lokasi-select"
                            value={formData.lokasiProyek}
                            onChange={(e) => setFormData({ ...formData, lokasiProyek: e.target.value })}
                            className="w-full border-2 border-gray-200 bg-white rounded-xl py-3.5 px-4 text-base font-semibold text-gray-750 focus:border-navy-900 transition-colors"
                          >
                            <option value="Jakarta Selatan">Jakarta Selatan (Kebayoran Lama/Barat/Cilandak, dll)</option>
                            <option value="Jakarta Barat">Jakarta Barat (Kebon Jeruk/Meruya, dll)</option>
                            <option value="Jakarta Utara">Jakarta Utara (PIK/Kelapa Gading, dll)</option>
                            <option value="Jakarta Pusat">Jakarta Pusat (Menteng/Tanah Abang, dll)</option>
                            <option value="Jakarta Timur">Jakarta Timur (Rawamangun/Cibubur, dll)</option>
                            <option value="Tangerang">Kota/Kabupaten Tangerang</option>
                            <option value="Tangerang Selatan">Tangerang Selatan (Bumi Serpong Damai, Bintaro, dll)</option>
                            <option value="Depok">Kota Depok</option>
                            <option value="Bekasi">Kota/Kabupaten Bekasi</option>
                            <option value="Bogor">Kota/Kabupaten Bogor</option>
                          </select>
                          <p className="text-xs text-gray-400 mt-2 font-mono">
                            *Catatan: Saat ini kami melayani pengerjaan optimal di seluruh wilayah Jabodetabek.
                          </p>
                        </div>
                      </div>
                    )}

                    {/* STEP 3: Luas Bangunan */}
                    {currentStep === 3 && (
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="p-2.5 bg-navy-900/10 text-navy-900 rounded-xl">
                            <Ruler className="w-5 h-5" />
                          </div>
                          <h3 className="font-display text-lg font-extrabold text-navy-900">
                            Berapa kisaran Luas Bangunan total yang direncanakan?
                          </h3>
                        </div>
                        <div className="pt-2 space-y-4">
                          <div className="flex justify-between items-center bg-white border border-gray-200 p-4 rounded-xl">
                            <span className="text-sm font-semibold text-gray-600">Luas Bangunan:</span>
                            <div className="flex items-center space-x-2">
                              <input
                                id="survey-luas-input"
                                type="number"
                                value={formData.luasBangunan || ""}
                                onChange={(e) => setFormData({ ...formData, luasBangunan: Math.max(0, parseInt(e.target.value) || 0) })}
                                className="w-24 px-3 py-1.5 font-bold text-center border border-gray-300 rounded-xl outline-none focus:ring-1 focus:ring-navy-900"
                              />
                              <span className="text-sm font-bold text-gray-550 font-mono">m²</span>
                            </div>
                          </div>
                          <input
                            id="survey-luas-range"
                            type="range"
                            min="20"
                            max="600"
                            value={formData.luasBangunan}
                            onChange={(e) => setFormData({ ...formData, luasBangunan: parseInt(e.target.value) })}
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-navy-900"
                          />
                          <div className="flex justify-between text-xs text-gray-400 font-mono">
                            <span>20 m² (Kecil/Sebagian)</span>
                            <span>600 m² (Besar/Mewah)</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* STEP 4: Budget */}
                    {currentStep === 4 && (
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="p-2.5 bg-navy-900/10 text-navy-900 rounded-xl">
                            <Wallet className="w-5 h-5" />
                          </div>
                          <h3 className="font-display text-lg font-extrabold text-navy-900">
                            Berapa alokasi budget/anggaran yang dipersiapkan?
                          </h3>
                        </div>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-2">
                          {[
                            "<100 juta",
                            "100-300 juta",
                            "300-500 juta",
                            "500 juta-1 M",
                            "> 1 M",
                          ].map((bgt) => (
                            <button
                              key={bgt}
                              type="button"
                              onClick={() => setFormData({ ...formData, budget: bgt })}
                              className={`p-4 rounded-xl border-2 font-bold text-sm cursor-pointer text-center transition-all ${
                                formData.budget === bgt
                                  ? "border-navy-900 bg-navy-900/5 text-navy-900 shadow-xs"
                                  : "border-gray-200 bg-white hover:border-gray-300"
                              }`}
                            >
                              {bgt}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* STEP 5: Target Waktu Pengerjaan */}
                    {currentStep === 5 && (
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="p-2.5 bg-navy-900/10 text-navy-900 rounded-xl">
                            <CalendarRange className="w-5 h-5" />
                          </div>
                          <h3 className="font-display text-lg font-extrabold text-navy-900">
                            Kapan perkiraan target proyek konstruksi harus dimulai?
                          </h3>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-3 pt-2">
                          {[
                            "Secepatnya (Bulan ini)",
                            "1-3 Bulan ke depan",
                            "3-6 Bulan ke depan",
                            "Lebih dari 6 Bulan",
                          ].map((wkt) => (
                            <button
                              key={wkt}
                              type="button"
                              onClick={() => setFormData({ ...formData, targetWaktu: wkt })}
                              className={`p-5 rounded-xl border-2 font-bold text-sm cursor-pointer text-left transition-all flex items-center justify-between ${
                                formData.targetWaktu === wkt
                                  ? "border-navy-900 bg-navy-900/5 text-navy-900 shadow-xs"
                                  : "border-gray-200 bg-white hover:border-gray-300"
                              }`}
                            >
                              <span>{wkt}</span>
                              <span
                                className={`w-3.5 h-3.5 rounded-full border ${
                                  formData.targetWaktu === wkt ? "bg-navy-900 border-navy-900" : "border-gray-300"
                                }`}
                              ></span>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* STEP 6: Upload Foto Lokasi (Opsional) */}
                    {currentStep === 6 && (
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="p-2.5 bg-navy-900/10 text-navy-900 rounded-xl">
                            <Upload className="w-5 h-5" />
                          </div>
                          <h3 className="font-display text-lg font-extrabold text-navy-900">
                            Upload foto lokasi / denah gambar (Opsional)
                          </h3>
                        </div>
                        
                        <div
                          onDragEnter={handleDrag}
                          onDragOver={handleDrag}
                          onDragLeave={handleDrag}
                          onDrop={handleDrop}
                          onClick={triggerFileInput}
                          className={`border-3 border-dashed rounded-2xl p-8 flex flex-col items-center justify-center cursor-pointer select-none transition-colors ${
                            isDragActive
                              ? "border-navy-950 bg-navy-900/10"
                              : uploadedFileName
                              ? "border-emerald-500 bg-emerald-500/5"
                              : "border-gray-200 bg-white hover:bg-gray-50 hover:border-gray-300"
                          }`}
                        >
                          <input
                            ref={fileInputRef}
                            type="file"
                            onChange={handleFileChange}
                            accept="image/*,.pdf"
                            className="hidden"
                          />
                          
                          <div className="p-3 bg-slate-100 rounded-full mb-3 text-gray-500">
                            {uploadedFileName ? (
                              <FileCheck2 className="w-8 h-8 text-emerald-600 animate-bounce" />
                            ) : (
                              <Upload className="w-8 h-8 text-navy-900" />
                            )}
                          </div>

                          {uploadedFileName ? (
                            <div className="text-center space-y-1">
                              <p className="text-xs font-bold text-emerald-700 font-mono">{uploadedFileName}</p>
                              <p className="text-[10px] text-gray-400">File siap dikirim bersama ringkasan survey</p>
                              <p className="text-xs text-navy-900 underline mt-2">Ganti file</p>
                            </div>
                          ) : (
                            <div className="text-center space-y-1">
                              <p className="text-sm font-bold text-navy-900">Tarik berkas ke sini atau klik untuk mencari</p>
                              <p className="text-xs text-gray-400">Format gambar JPEG, PNG, atau PDF (Maks. 10MB)</p>
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    {/* STEP 7: Data Kontak */}
                    {currentStep === 7 && (
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="p-2.5 bg-navy-900/10 text-navy-900 rounded-xl">
                            <UserCheck className="w-5 h-5" />
                          </div>
                          <h3 className="font-display text-lg font-extrabold text-navy-900">
                            Isi detail informasi diri untuk pengiriman berkas
                          </h3>
                        </div>
                        
                        <div className="grid md:grid-cols-3 gap-4 pt-2">
                          <div className="space-y-1.5 md:col-span-1">
                            <label htmlFor="survey-nama" className="text-xs font-bold text-navy-900 uppercase">Nama Lengkap</label>
                            <input
                              id="survey-nama"
                              type="text"
                              value={formData.kontakNama}
                              onChange={(e) => setFormData({ ...formData, kontakNama: e.target.value })}
                              placeholder="Contoh: Hendrawan"
                              className="w-full border-2 border-gray-200 bg-white rounded-xl py-2.5 px-3.5 text-sm font-semibold outline-none focus:border-navy-900 transition-colors"
                            />
                          </div>

                          <div className="space-y-1.5 md:col-span-1">
                            <label htmlFor="survey-whatsapp" className="text-xs font-bold text-navy-900 uppercase">No. WhatsApp</label>
                            <input
                              id="survey-whatsapp"
                              type="tel"
                              value={formData.kontakWhatsApp}
                              onChange={(e) => setFormData({ ...formData, kontakWhatsApp: e.target.value })}
                              placeholder="Contoh: 0812XXXXXXXX"
                              className="w-full border-2 border-gray-200 bg-white rounded-xl py-2.5 px-3.5 text-sm font-semibold outline-none focus:border-navy-900 transition-colors"
                            />
                          </div>

                          <div className="space-y-1.5 md:col-span-1">
                            <label htmlFor="survey-email" className="text-xs font-bold text-navy-900 uppercase">Alamat Email</label>
                            <input
                              id="survey-email"
                              type="email"
                              value={formData.kontakEmail}
                              onChange={(e) => setFormData({ ...formData, kontakEmail: e.target.value })}
                              placeholder="Contoh: hendra@mail.com"
                              className="w-full border-2 border-gray-200 bg-white rounded-xl py-2.5 px-3.5 text-sm font-semibold outline-none focus:border-navy-900 transition-colors"
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Bottom steps navigation controls */}
              <div className="flex justify-between items-center pt-8 border-t border-gray-200/60 mt-6 bg-transparent">
                <button
                  type="button"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className={`flex items-center gap-1.5 px-4 py-2.5 rounded-lg border-2 font-bold text-xs cursor-pointer transition-colors ${
                    currentStep === 1
                      ? "opacity-40 border-gray-200 text-gray-400 cursor-not-allowed"
                      : "border-navy-900 text-navy-900 hover:bg-slate-50"
                  }`}
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>KEMBALI</span>
                </button>

                <button
                  type="button"
                  onClick={nextStep}
                  className="flex items-center gap-1.5 px-6 py-2.5 bg-navy-900 text-white hover:bg-navy-800 transition-colors rounded-lg font-bold text-xs cursor-pointer shadow-xs"
                >
                  <span>{currentStep === 7 ? "SUBMIT DATA" : "BERIKUTNYA"}</span>
                  <ChevronRight className="w-4 h-4 text-amber-500 animate-pulse" />
                </button>
              </div>
            </>
          ) : (
            /* QUALIFICATION LOGIC SUMMARY */
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="space-y-8 py-4 flex flex-col justify-between h-full"
            >
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600 border border-emerald-200">
                  <FileCheck2 className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-extrabold text-navy-900">
                  Data Terkualifikasi Berhasil Disusun!
                </h3>
                <p className="text-xs text-gray-400">
                  Ringkasan kebutuhan survey lapangan Anda telah direkap secara otomatis di bawah ini.
                </p>
              </div>

              {/* Document Summary (Required) */}
              <div className="bg-white border-2 border-dashed border-gray-300 rounded-2xl p-5 sm:p-6 space-y-4 shadow-inner max-w-xl mx-auto w-full relative">
                <div className="absolute top-2 right-3">
                  <span className="text-[9px] uppercase font-mono bg-navy-900 text-white font-bold px-2 py-0.5 rounded">
                    FORM SUR-YLS
                  </span>
                </div>
                <div className="border-b border-gray-150 pb-3 text-left">
                  <p className="text-[10px] text-gray-400 uppercase font-mono">CALON PELANGGAN</p>
                  <p className="text-base font-extrabold text-navy-900 leading-none mt-1">
                    {formData.kontakNama}
                  </p>
                  <p className="text-xs text-gray-500 mt-1 font-mono">
                    WA: {formData.kontakWhatsApp} | Email: {formData.kontakEmail}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-y-3.5 gap-x-4 text-left text-xs text-gray-700">
                  <div>
                    <span className="block text-[10px] text-gray-400 uppercase font-mono">Jenis Proyek</span>
                    <strong className="text-navy-900">{formData.jenisProyek === "bangun" ? "Bangun Baru" : "Renovasi Rumah"}</strong>
                  </div>
                  <div>
                    <span className="block text-[10px] text-gray-400 uppercase font-mono">Lokasi Proyek</span>
                    <strong className="text-navy-900">{formData.lokasiProyek}</strong>
                  </div>
                  <div>
                    <span className="block text-[10px] text-gray-400 uppercase font-mono">Luas m² Tapak</span>
                    <strong className="text-navy-900">{formData.luasBangunan} m²</strong>
                  </div>
                  <div>
                    <span className="block text-[10px] text-gray-400 uppercase font-mono">Pilihan Budget</span>
                    <strong className="text-navy-900">{formData.budget}</strong>
                  </div>
                  <div className="col-span-2">
                    <span className="block text-[10px] text-gray-400 uppercase font-mono">Target Waktu Pengerjaan</span>
                    <strong className="text-navy-900">{formData.targetWaktu}</strong>
                  </div>
                  {uploadedFileName && (
                    <div className="col-span-2">
                      <span className="block text-[10px] text-gray-400 uppercase font-mono">Lampiran Berkas Gambar</span>
                      <strong className="text-emerald-700 font-mono text-[11px]">{uploadedFileName}</strong>
                    </div>
                  )}
                </div>
              </div>

              {/* Complete routing to WhatsApp */}
              <div className="text-center pt-4 border-t border-gray-150 space-y-4">
                <p className="text-xs text-gray-500 max-w-md mx-auto">
                  Silakan kirimkan data di atas kepada kami melalui WhatsApp dengan menekan tombol hijau resmi di bawah. Kami akan memverifikasi dalam maksimum 1x24 jam kerja.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setCurrentStep(1);
                    }}
                    className="px-5 py-3 border-2 border-gray-300 text-gray-700 font-bold rounded-xl text-sm hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    Ulangi Formulir
                  </button>
                  <button
                    id="survey-submit-whatsapp"
                    type="button"
                    onClick={handleSendToWhatsApp}
                    className="bg-emerald-550 hover:bg-emerald-600 text-white font-extrabold text-base px-8 py-3.5 rounded-xl shadow-md transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer inline-flex self-center"
                    style={{ backgroundColor: "#10b981" }}
                  >
                    <Send className="w-5 h-5 text-white" />
                    <span>Kirim Data ke WhatsApp</span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}

        </div>

      </div>
    </section>
  );
}
