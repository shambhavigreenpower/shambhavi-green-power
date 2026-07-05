import * as React from "react";
import { motion } from "motion/react";
import { Trees, CloudSnow, Zap, Home, Leaf } from "lucide-react";
import { AnimatedCounter } from "../ui/AnimatedCounter";

export function EnvironmentalImpact() {
  const impacts = [
    {
      icon: Trees,
      value: 20000,
      suffix: "+",
      label: "Trees Equivalent Planted",
      desc: "Simulating massive reforestation across the region.",
    },
    {
      icon: CloudSnow,
      value: 10000,
      suffix: "+ Tons",
      label: "CO₂ Tons Offset",
      desc: "Preventing severe carbon emissions from coal grids.",
    },
    {
      icon: Zap,
      value: 40,
      suffix: " Lakh+ kWh",
      label: "Clean Electricity Generated",
      desc: "Generating power purely from clean, natural solar energy.",
    },
    {
      icon: Home,
      value: 800,
      suffix: "+",
      label: "Homes Powered",
      desc: "Supplying stable renewable energy to households.",
    },
  ];

  return (
    <section className="py-24 px-4 bg-[#051409] text-white relative overflow-hidden">
      
      {/* Sun Ray Glowing Background Sweep Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-yellow-500/10 via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-brand-primary/10 via-transparent to-transparent pointer-events-none" />

      {/* Floating Leaves CSS Particle Simulator */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              y: "100%",
              x: `${Math.random() * 100}%`,
              rotate: 0,
              opacity: 0.1,
            }}
            animate={{
              y: "-10%",
              x: `${Math.random() * 100}%`,
              rotate: 360,
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            }}
            className="absolute text-brand-light"
          >
            <Leaf className="h-5 w-5 fill-brand-primary" />
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Text details */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-primary/20 border border-brand-light/20 text-brand-light font-display text-xs font-bold tracking-widest mb-3"
          >
            <Leaf className="h-4 w-4 text-brand-light animate-pulse" />
            ECOLOGICAL CONTRIBUTIONS
          </motion.div>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl tracking-tight leading-tight">
            Our Environmental Impact
          </h2>
          <p className="font-sans text-sm md:text-base text-gray-400 mt-4 leading-relaxed">
            By shifting homes, factories, and water systems to solar power, we represent sustainable development for a healthier, greener future.
          </p>
        </div>

        {/* 4 Counter Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {impacts.map((imp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-brand-dark/50 border border-brand-primary/10 rounded-2xl p-6 md:p-8 text-center flex flex-col items-center justify-between shadow-lg relative group hover:border-brand-light/20 transition-colors"
            >
              <div className="p-4 bg-brand-primary/10 border border-brand-light/10 text-brand-accent rounded-full mb-6 group-hover:bg-brand-primary/20 transition-all">
                <imp.icon className="h-7 w-7" />
              </div>

              <div>
                <div className="font-display font-black text-3xl md:text-4xl text-brand-accent mb-2 tracking-tight">
                  <AnimatedCounter value={imp.value} suffix={imp.suffix} />
                </div>
                
                <h3 className="font-display font-extrabold text-sm md:text-base text-white mb-2">
                  {imp.label}
                </h3>
                
                <p className="font-sans text-xs text-gray-400 leading-relaxed">
                  {imp.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
