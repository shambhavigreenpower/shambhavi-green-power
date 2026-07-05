import * as React from "react";
import { motion } from "motion/react";
import { Landmark, ArrowRight, Phone, CheckCircle } from "lucide-react";
import { useRouter } from "../../lib/router";
import { Button } from "../ui/Button";
import { COMPANY_INFO } from "../../lib/constants";

export function SubsidyBanner() {
  const { navigate } = useRouter();

  const subsidyCards = [
    {
      capacity: "Up to 2 kW",
      rate: "₹30,000 per kW",
      max: "Max ₹60,000 Subsidy",
      badge: "Best for Small Homes",
      bg: "bg-white/80 border border-yellow-200",
    },
    {
      capacity: "2 kW to 3 kW",
      rate: "₹18,000 per kW (Addl.)",
      max: "Max ₹18,000 Additional",
      badge: "Popular Selection",
      bg: "bg-brand-primary text-white border border-brand-light/30 shadow-xl scale-105 relative z-10",
    },
    {
      capacity: "Above 3 kW",
      rate: "Flat Cap Amount",
      max: "₹78,000 Max Total Cap",
      badge: "Maximum Govt Support",
      bg: "bg-white/80 border border-yellow-200",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-amber-400 via-amber-500 to-yellow-600 relative overflow-hidden">
      {/* Decorative sunburst pattern */}
      <div className="absolute inset-0 opacity-15 mix-blend-overlay bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Banner header info */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-brand-dark/90 text-brand-accent px-4 py-1.5 rounded-full text-xs font-display font-extrabold shadow-lg border border-brand-primary/10 tracking-widest mb-4"
          >
            <Landmark className="h-4 w-4" />
            PM SURYA GHAR MUFT BIJLI YOJANA
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-black text-3xl md:text-5xl text-brand-dark tracking-tight leading-tight"
          >
            Get Up to ₹78,000 in Government Subsidy!
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-sans text-sm md:text-base text-brand-dark/85 font-semibold mt-4 max-w-2xl leading-relaxed"
          >
            Install high-performance solar panels on your rooftop and get FREE electricity for 25+ years. Your initial investment pays for itself in just 3-4 years!
          </motion.p>
        </div>

        {/* Subsidy breakdown table cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {subsidyCards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`rounded-2xl p-6 flex flex-col justify-between text-center ${card.bg}`}
            >
              <div>
                <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold font-display tracking-widest uppercase mb-4 ${
                  card.bg.includes("brand-primary") ? "bg-brand-accent text-brand-dark" : "bg-brand-primary/10 text-brand-primary"
                }`}>
                  {card.badge}
                </span>
                <h3 className="font-display font-extrabold text-lg md:text-xl leading-tight mb-2">
                  {card.capacity}
                </h3>
                <p className={`font-sans text-xs md:text-sm ${
                  card.bg.includes("brand-primary") ? "text-brand-light" : "text-gray-500"
                }`}>
                  {card.rate}
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-black/10">
                <span className={`font-display font-black text-xl md:text-2xl ${
                  card.bg.includes("brand-primary") ? "text-brand-accent" : "text-brand-primary"
                }`}>
                  {card.max}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTAs and bottom notice */}
        <div className="flex flex-col items-center gap-6 mt-12 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-xl">
            <Button
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto font-display font-bold py-3.5 shadow-xl hover:shadow-brand-dark/20 text-sm md:text-base"
              onClick={() => navigate("/subsidy")}
            >
              Check Your Eligibility
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
            
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-brand-dark text-white font-display font-bold text-sm md:text-base hover:bg-brand-dark/90 transition-all duration-300 shadow-xl"
            >
              <Phone className="h-4.5 w-4.5 text-brand-accent" />
              Call: {COMPANY_INFO.phone}
            </a>
          </div>

          <p className="font-sans text-xs font-semibold text-brand-dark/80 flex items-center justify-center gap-1.5 mt-2">
            <CheckCircle className="h-4 w-4 text-brand-dark flex-shrink-0" />
            Shambhavi Green Power is a registered solar installer on the National Portal for Rooftop Solar under PGVCL/DGVCL.
          </p>
        </div>

      </div>
    </section>
  );
}
