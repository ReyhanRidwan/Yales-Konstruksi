/**
 * Types & Centralized Content for PT Yales Ultima Karya (Yales Konstruksi)
 */

export interface ServiceItem {
  id: string;
  title: string;
  category: "bangun" | "renovasi" | "interior" | "utilitas" | "pengawasan";
  description: string;
  features: string[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: "bangun" | "renovasi" | "interior";
  location: string;
  size: number; // m2
  year: string;
  image: string;
  highlights: string[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  title: string;
  location: string;
  projectType: string;
  review: string;
  rating: number;
  image: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

// Company Information
export const COMPANY_INFO = {
  name: "Yales Konstruksi",
  ptName: "PT YALES ULTIMA KARYA",
  tagline: "Bangun & Renovasi Rumah Profesional Bergaransi",
  description: "Yales Konstruksi adalah perusahaan kontraktor dan arsitek berpengalaman lebih dari 10 tahun yang melayani pembangunan rumah baru, renovasi rumah, desain arsitektur, interior, serta berbagai pekerjaan konstruksi dengan standar profesional, kualitas terjamin, harga transparan, dan pengerjaan tepat waktu.",
  address: "Jl. Peninggaran Barat III No.11, RW.11, Kebayoran Lama Utara, Jakarta Selatan, DKI Jakarta 12240",
  whatsapp: "0812-9879-6700",
  whatsappFormatted: "+6281298796700",
  email: "hallo@yaleskontruksi.com",
  workingHours: "Senin - Sabtu: 08.00 - 17.00 WIB (Minggu Libur)",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.1950853528807!2d106.7766861!3d-6.2379989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1165d791fff%3A0x6bba843ff42709e3!2sJl.%20Peninggaran%20Barat%20III%20No.11%2C%20RW.11%2C%20Kebayoran%20Lama%20Utara%2C%20Kec.%20Kebayoran%20Lama%2C%20Kota%20Jakarta%20Selatan%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2012240!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
};

// Services Data (10 items required by the prompt)
export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "bangun_baru",
    title: "Bangun Rumah Baru",
    category: "bangun",
    description: "Pembangunan rumah dari nol secara menyeluruh (Turnkey Project) dari penggalian fondasi, struktur beton, instalasi ME, hingga tahap finishing premium bergaransi.",
    features: ["Penyusunan RAB detail & transparan", "Laporan progres mingguan sistematis", "Garansi struktur hingga 12 bulan"]
  },
  {
    id: "renovasi_rumah",
    title: "Renovasi Rumah",
    category: "renovasi",
    description: "Layanan rekonstruksi dan penambahan ruangan, renovasi atap, renovasi fasad, hingga perbaikan menyeluruh untuk meningkatkan estetika dan nilai fungsional hunian Anda.",
    features: ["Tepat waktu & meminimalkan noise gangguan tetangga", "Bahan berkualitas berstandar SNI", "Pekerjaan rapi & bergaransi"]
  },
  {
    id: "renovasi_kantor",
    title: "Renovasi Kantor",
    category: "renovasi",
    description: "Optimalisasi ruang kerja komersial, ruko, dan kantor untuk menciptakan suasana lingkungan kerja yang produktif, representatif, modern, dan ergonomis.",
    features: ["Penjadwalan kerja fleksibel (minimalkan downtime)", "Instalasi jaringan & kelistrikan profesional", "Desain layout representatif"]
  },
  {
    id: "desain_arsitektur",
    title: "Desain Arsitektur",
    category: "bangun",
    description: "Perencanaan konsep hunian, pembuatan gambar teknis DED (Detailed Engineering Design), visualisasi 3D eksterior dan struktur bangunan yang aman serta fungsional.",
    features: ["Konsultasi arsitek berpengalaman", "Visualisasi 3D photorealistic eksterior", "Gambar IMB lengkap"]
  },
  {
    id: "interior_kitchen",
    title: "Interior & Kitchen Set",
    category: "interior",
    description: "Pembuatan furniture custom mewah, kitchen set fungsional, lemari pakaian built-in, serta wardrobe khusus dengan material multipleks tebal berlapis HPL berkualitas tinggi.",
    features: ["Sistem fiting soft-close premium", "Kustomisasi total sesuai luas ruangan", "Finishing presisi dan rapi"]
  },
  {
    id: "kanopi",
    title: "Kanopi",
    category: "utilitas",
    description: "Pemasangan kanopi carport dengan rangka besi hollow tebal, baja ringan, atau stainless steel bermedium atap polycarbonate, tempered glass, solartuff, maupun alderon.",
    features: ["Rangka anti-karat berpelindung ganda", "Pilihan atap kedap suara dan anti-UV", "Garansi kebocoran struktural"]
  },
  {
    id: "baja_ringan",
    title: "Baja Ringan",
    category: "utilitas",
    description: "Pemasangan rangka atap baja ringan berkualitas tinggi berkekuatan tarik tinggi (G550) bersertifikasi SNI untuk ketahanan kokoh jangka panjang.",
    features: ["Penghitungan software mekanis atap", "Anti-rayap dan tahan karat prima", "Pemasangan presisi oleh aplikator berlisensi"]
  },
  {
    id: "pagar",
    title: "Pagar",
    category: "utilitas",
    description: "Pembuatan pagar rumah custom modern dan gerbang geser bermaterial besi tempa, plat perforated, expanded metal, atau kayu sintetis WPC premium.",
    features: ["Cat anti-karat epoxy premium", "Sistem rel bantalan roda super lancar", "Mendukung integrasi automatic gate system"]
  },
  {
    id: "sumur_bor",
    title: "Sumur Bor",
    category: "utilitas",
    description: "Pembuatan sumur dalam (deep well) untuk menjamin pasokan air bersih yang melimpah dan layak konsumsi, bebas dari bau, besi, dan kontaminasi permukaan.",
    features: ["Pengeboran dengan mesin modern hidrolik", "Identifikasi geolistrik posisi air tanah terbaik", "Instalasi jet pump & tandon air optimal"]
  },
  {
    id: "konsultan_pengawas",
    title: "Konsultan Pengawas",
    category: "pengawasan",
    description: "Layanan supervisi konstruksi pihak ketiga untuk mengontrol kesesuaian material di lapangan, kualitas pengerjaan, ketepatan timeline, dan efisiensi pengeluaran anggaran.",
    features: ["Audit progress kerja independen", "Pengawasan kualitas besi & campuran beton", "Pencegahan pembengkakan pengeluaran material"]
  }
];

// Work Timeline (Alur Kerja) data
export const WORK_TIMELINE = [
  {
    step: 1,
    title: "Survey Lokasi",
    description: "Tim ahli kami datang langsung ke lokasi Anda untuk melakukan pengukuran presisi, analisis lahan, struktur bangunan lama, dan pengecekan aksesibilitas logistik."
  },
  {
    step: 2,
    title: "Konsultasi Arsitek",
    description: "Sesi diskusi interaktif dengan tim arsitek Yales Konstruksi untuk merencanakan konsep visual, sirkulasi udara, pencahayaan alami, dan pembagian ruangan."
  },
  {
    step: 3,
    title: "Penyusunan RAB",
    description: "Kami menyusun Rencana Anggaran Biaya yang sangat mendetail, transparan tanpa biaya siluman, merinci setiap kuantitas material, upah tukang, dan spesifikasi merek."
  },
  {
    step: 4,
    title: "Kontrak Kerja",
    description: "Penandatanganan SPK (Surat Perjanjian Kerja) berkekuatan hukum yang mengikat harga proyek, durasi penyelesaian, sistem termin, dan jaminan masa retensi/garansi."
  },
  {
    step: 5,
    title: "Pelaksanaan Proyek",
    description: "Konstruksi dimulai di bawah koordinasi Site Manager berpengalaman. Pekerja menggunakan APD lengkap dengan pengamanan keselamatan kerja (K3) ketat."
  },
  {
    step: 6,
    title: "Progress Monitoring",
    description: "Klien menerima laporan visual foto dan video berkala mingguan secara sistematis agar dapat memantau pengerjaan secara real-time kapan pun dan di mana pun."
  },
  {
    step: 7,
    title: "Serah Terima",
    description: "Pemeriksaan bersama (Checklist Opsional Akhir) sebelum serah terima kunci secara formal, disertai pemberian sertifikat garansi pemeliharaan tertulis selama masa retensi."
  }
];

// AI Generated Image Paths
export const IMAGES = {
  hero: "/images/hero_construction.jpg",
  hero2: "/images/hero_construction2.jpg",
  serviceRenovasi: "/images/service_renovasi.jpg",
  serviceBangun: "/images/service_bangun.jpg",
  serviceInterior: "/images/service_interior.jpg",
  portfolio: "/images/portfolio_finish.jpg",
  testimonial: "/images/client_testimonial.jpg"
};

// Premium Portfolio Grid data using our exquisite assets
export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: "port_1",
    title: "The Golden Horizon Villa",
    category: "bangun",
    location: "Kebayoran Baru, Jakarta Selatan",
    size: 240,
    year: "2025",
    image: "/images/portfolio_finish.jpg",
    highlights: ["Sistem Rumah Pintar", "Instalasi Panel Surya", "Finishing Lantai Marmer Slab"]
  },
  {
    id: "port_2",
    title: "Modern Elegance Luxury Interior",
    category: "interior",
    location: "Menteng, Jakarta Pusat",
    size: 180,
    year: "2025",
    image: "/images/service_interior.jpg",
    highlights: ["Custom Cabinetry", "Sistem Pencahayaan Ambient", "Granite Kitchen Island"]
  },
  {
    id: "port_3",
    title: "Split-Level House Transformation",
    category: "renovasi",
    location: "Pondok Indah, Jakarta Selatan",
    size: 310,
    year: "2024",
    image: "/images/service_renovasi.jpg",
    highlights: ["Penambahan Lantai 3", "Modern Fasad Minimalis", "Struktur Kolom Pre-Stressed"]
  },
  {
    id: "port_4",
    title: "Minimalist Dual-Floor Residence",
    category: "bangun",
    location: "Kebayoran Lama, Jakarta Selatan",
    size: 195,
    year: "2024",
    image: "/images/hero_construction.jpg",
    highlights: ["Fasad Beton Cetak", "Sirkulasi Silang Alami", "Kolam Renang Minimalis"]
  }
];

// Testimonials using the real generated asset
export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "t_1",
    name: "Pak Hendra & Ibu Siska",
    title: "Pemilik Rumah 'The Golden Horizon Villa'",
    location: "Kebayoran Baru, Jakarta",
    projectType: "Bangun Rumah Baru Premium",
    review: "Yales Konstruksi sangat profesional! RAB yang diajukan di awal sangat detail dan tidak ada biaya tambahan siluman sepanjang proses konstruksi. Hasil pengerjaannya sangat presisi, rapi, dan serah terima dilakukan tepat waktu. Garansi pemeliharaannya pun benar-benar direspon dengan cepat.",
    rating: 5,
    image: "/images/client_testimonial.jpg"
  },
  {
    id: "t_2",
    name: "Ibu Amanda Kartika",
    title: "Pemilik Rumah Tinggal",
    location: "Pondok Indah, Jakarta",
    projectType: "Renovasi Rumah & Interior Kitchen Set",
    review: "Tim arsitek mereka sangat sabar dalam mendengarkan keinginan kami pada saat konsultasi. Dari pengerjaan struktur baja ringan hingga finishing furniture custom di dapur, semuanya selesai dengan kualitas yang memukau. Sangat direkomendasikan untuk siapa saja yang ingin rumah berkualitas tanpa pusing.",
    rating: 5,
    image: "/images/service_interior.jpg"
  }
];

// FAQs Data (5 items requested by the prompt)
export const FAQS_DATA: FaqItem[] = [
  {
    id: "survey_gratis",
    question: "Apakah survey lokasi dan konsultasi awal dikenakan biaya?",
    answer: "Sama sekali GRATIS untuk area Jabodetabek. Tim Yales Konstruksi akan berkunjung ke lokasi, melakukan survei pengukuran, serta memberikan konsultasi tata ruang tanpa biaya komitmen apapun di awal."
  },
  {
    id: "durasi_kerja",
    question: "Berapa lama pengerjaan pembangunan atau renovasi biasanya memakan waktu?",
    answer: "Durasi sangat bergantung pada luasan dan kompleksitas desain proyek Anda. Sebagai gambaran umumnya, renovasi skala menengah membutuhkan waktu sekitar 1 s.d. 3 bulan, sedangkan bangun rumah baru dari nol (2 lantai luas 150-200m²) memakan waktu berkisar 5 s.d. 8 bulan."
  },
  {
    id: "garansi_pekerjaan",
    question: "Apakah Yales Konstruksi menyediakan garansi setelah proyek selesai?",
    answer: "Ya, kami memberikan garansi pemeliharaan tertulis resmi selama 3 bulan untuk kebocoran dan kelistrikan (ME), serta garansi struktur hingga 12 bulan yang dituangkan di dalam kontrak SPK sah di awal."
  },
  {
    id: "desain_dan_bangun",
    question: "Apakah bisa melakukan jasa desain arsitektur sekaligus konstruksi fisiknya?",
    answer: "Bisa dan sangat kami sarankan. Dengan sistem satu pintu (Design & Build), komunikasi antara arsitek perencana dan tim tukang di lapangan menjadi linear dan harmonis, mengeliminasi risiko kesalahan interpretasi gambar kerja, serta menghemat cost Anda."
  },
  {
    id: "sistem_pembayaran",
    question: "Bagaimana sistem pembayaran termin pengerjaan proyek konstruksi?",
    answer: "Kami menggunakan skema pembayaran termin transparan berdasarkan progress fisik pengerjaan di lapangan (biasanya terbagi menjadi Down Payment (DP) 30%, Termin 2 (progres 60%), Termin 3 (progres 90%), dan Retensi Garansi 5-10% setelah serah terima selesai penuh)."
  }
];
