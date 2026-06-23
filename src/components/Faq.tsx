import { useState } from "react";
import { FAQS_DATA } from "../types";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Faq() {
  const [openId, setOpenId] = useState<string | null>("survey_gratis");

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="text-amber-550 font-mono text-xs uppercase tracking-widest font-extrabold block">
            KANTOR ADMINISTRASI FAQ
          </span>
          <h2 className="font-display text-3xl font-extrabold text-navy-900 tracking-tight leading-none">
            Pertanyaan yang Sering Diajukan
          </h2>
          <div className="w-16 h-1 bg-navy-900 mx-auto rounded-full"></div>
          <p className="text-gray-500 text-sm leading-relaxed">
            Dapatkan informasi lengkap mengenai mekanisme kerja, perlindungan jaminan hukum, serta fleksibilitas tata cara pembayaran PT Yales Ultima Karya.
          </p>
        </div>

        {/* Accordions container */}
        <div className="space-y-4 max-w-3xl mx-auto">
          {FAQS_DATA.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                id={`faq-item-${faq.id}`}
                className={`border rounded-2xl overflow-hidden transition-all duration-350 ${
                  isOpen ? "bg-slate-50 border-navy-900/20 shadow-sm" : "bg-white border-gray-150"
                }`}
              >
                {/* Trigger head */}
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex justify-between items-center px-6 py-5 cursor-pointer text-left focus:outline-none"
                >
                  <div className="flex items-start gap-3">
                    <HelpCircle className={`w-5 h-5 mt-0.5 flex-shrink-0 ${isOpen ? "text-navy-900 animate-pulse" : "text-gray-400"}`} />
                    <span className="font-display font-extrabold text-sm sm:text-base text-navy-900 leading-snug">
                      {faq.question}
                    </span>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className={`ml-2 p-1 rounded-full ${isOpen ? "bg-navy-900 text-white" : "text-gray-500 bg-slate-100"}`}
                  >
                    <ChevronDown className="w-4 h-4 cursor-pointer" />
                  </motion.div>
                </button>

                {/* Collapsible Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                    >
                      <div className="px-6 pb-6 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-200/50 pt-4 bg-transparent text-left pl-14">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
