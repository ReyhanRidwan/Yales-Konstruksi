import { Calendar, Building2, Smile, ReceiptText } from "lucide-react";

export default function Stats() {
  const stats = [
    {
      value: "10+",
      label: "Tahun Pengalaman",
      description: "Konsisten membangun karya berkualitas",
      icon: <Calendar className="w-8 h-8 text-amber-500" />,
    },
    {
      value: "100+",
      label: "Proyek Selesai",
      description: "Dari rumah mewah hingga renovasi ruko",
      icon: <Building2 className="w-8 h-8 text-amber-500" />,
    },
    {
      value: "95%",
      label: "Klien Puas",
      description: "Berkomitmen tinggi pada kualitas pengerjaan",
      icon: <Smile className="w-8 h-8 text-amber-550" />,
    },
    {
      value: "100%",
      label: "Transparansi Biaya",
      description: "RAB detail tanpa pengeluaran tak terduga",
      icon: <ReceiptText className="w-8 h-8 text-amber-500" />,
    },
  ];

  return (
    <section id="stats" className="bg-navy-900 py-12 md:py-16 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-[-50%] left-[-20%] w-[60%] h-[60%] bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <div
              key={i}
              id={`stat-card-${i}`}
              className="flex flex-col items-center text-center space-y-3 group border-r border-white/10 last:border-0 last:pr-0"
            >
              <div className="p-3 bg-white/5 rounded-2xl group-hover:bg-white/10 transition-colors duration-300">
                {stat.icon}
              </div>
              <div className="space-y-1">
                <span className="block font-display text-4xl md:text-5xl font-extrabold text-amber-500 select-none">
                  {stat.value}
                </span>
                <span className="block text-sm md:text-base font-bold text-gray-100 tracking-wide">
                  {stat.label}
                </span>
                <span className="block text-xs text-slate-400 max-w-[200px] mx-auto leading-normal">
                  {stat.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
