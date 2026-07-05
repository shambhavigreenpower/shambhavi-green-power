import * as React from "react";
import { motion } from "motion/react";
import { PhoneCall, Search, ClipboardList, Wrench, ShieldCheck, Check } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      num: 1,
      title: "Free Consultation",
      subtitle: "Call or WhatsApp Us",
      desc: "Connect with Dr. Krushik Sheladiya and share your current monthly electricity bill for sizing.",
      icon: PhoneCall,
      color: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    },
    {
      num: 2,
      title: "Site Survey",
      subtitle: "Expert Site Assessment",
      desc: "Our solar engineer visits your house or land to inspect shadow-free rooftop space and structures.",
      icon: Search,
      color: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
    },
    {
      num: 3,
      title: "Custom Design",
      subtitle: "Engineered System Quote",
      desc: "We formulate customized 3D structures, select panels, and generate a competitive quotation.",
      icon: ClipboardList,
      color: "bg-purple-500/10 text-purple-500 border-purple-500/20",
    },
    {
      num: 4,
      title: "Installation",
      subtitle: "Rapid 1-3 Day Setup",
      desc: "Our structural safety technicians complete secure structural assembly, robust wiring, and earthing.",
      icon: Wrench,
      color: "bg-orange-500/10 text-orange-500 border-orange-500/20",
    },
    {
      num: 5,
      title: "Activation",
      subtitle: "Go Live + Subsidy Credited",
      desc: "We handle Discom inspections and net meters setup, activate the solar feed, and transfer the subsidy.",
      icon: ShieldCheck,
      color: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
    },
  ];

  return (
    <section className="py-24 px-4 bg-brand-dark text-white relative overflow-hidden">
      {/* Background grids */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-brand-primary/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Title Text */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase font-display font-extrabold tracking-widest text-brand-light mb-3"
          >
            OUR SEAMLESS PROCESS
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-extrabold text-3xl md:text-5xl text-white tracking-tight leading-tight"
          >
            Get Solar in 5 Simple Steps
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-sans text-sm md:text-base text-gray-400 mt-4 leading-relaxed"
          >
            From the initial introductory call to net-meter connection, we handle everything under one roof.
          </motion.p>
        </div>

        {/* Staggered timeline grid rows */}
        <div className="relative">
          
          {/* Horizontal connecting line (hidden on mobile) */}
          <div className="hidden lg:block absolute top-1/2 left-4 right-4 h-0.5 bg-brand-primary/20 -translate-y-1/2 z-0 overflow-hidden">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              className="h-full bg-brand-accent origin-left"
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-6 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="flex flex-col items-center text-center group"
              >
                
                {/* Step circle container */}
                <div className="relative mb-6">
                  <div className={`h-16 w-16 md:h-18 md:w-18 rounded-2xl flex items-center justify-center border ${step.color} transition-all duration-300 group-hover:scale-110 group-hover:border-brand-accent group-hover:text-brand-accent relative z-10 bg-brand-dark shadow-xl`}>
                    <step.icon className="h-6 w-6 md:h-7 md:w-7" />
                  </div>
                  
                  {/* Floating Number circle Badge */}
                  <div className="absolute -top-2.5 -right-2.5 h-6 w-6 rounded-full bg-brand-accent text-brand-dark font-display font-black text-xs flex items-center justify-center border border-yellow-300 shadow-md">
                    {step.num}
                  </div>
                </div>

                {/* Vertical connecting line on Mobile */}
                {idx < steps.length - 1 && (
                  <div className="lg:hidden w-0.5 h-10 bg-brand-primary/20 my-2" />
                )}

                {/* Text Context */}
                <div className="flex flex-col items-center">
                  <h3 className="font-display font-extrabold text-white text-base md:text-lg mb-1 group-hover:text-brand-accent transition-colors">
                    {step.title}
                  </h3>
                  <span className="font-sans text-[11px] font-bold text-brand-light tracking-wide mb-3">
                    {step.subtitle}
                  </span>
                  <p className="font-sans text-xs md:text-sm text-gray-400 max-w-xs leading-relaxed">
                    {step.desc}
                  </p>
                </div>

              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
