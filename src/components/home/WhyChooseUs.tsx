import * as React from "react";
import { motion } from "motion/react";
import { DollarSign, Landmark, Wrench, Award, ShieldCheck, PhoneCall, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { COMPANY_INFO } from "../../lib/constants";

export function WhyChooseUs() {
  return (
    <section className="py-24 px-4 bg-[#051007] text-white relative overflow-hidden">
      
      {/* Decorative vector background meshes */}
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-brand-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase font-display font-extrabold tracking-widest text-brand-light mb-3"
          >
            OUR VALUE PROPOSITION
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-black text-3xl md:text-5xl text-white tracking-tight leading-tight"
          >
            Why Thousands Trust Shambhavi
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-sans text-sm md:text-base text-gray-400 mt-4 leading-relaxed"
          >
            We don't just install solar panels — we engineer durable power stations with seamless government paper approvals and lifetime customer care.
          </motion.p>
        </div>

        {/* HIGH-END BENTO GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* BENTO CARD 1: PM Surya Ghar Subsidy (Large - 8 Cols on MD+) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-8 bg-gradient-to-br from-[#0c2613] to-[#051409] border border-brand-light/20 rounded-3xl p-8 shadow-2xl relative overflow-hidden group hover:border-brand-light/40 transition-all flex flex-col justify-between"
          >
            {/* Visual glow spots */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-brand-primary/20 rounded-full blur-3xl group-hover:bg-brand-primary/30 transition-all" />
            
            <div className="space-y-4 relative z-10">
              <div className="inline-flex p-3 bg-brand-primary/30 border border-brand-light/25 text-brand-accent rounded-2xl">
                <Landmark className="h-6 w-6" />
              </div>
              
              <div className="space-y-2">
                <h3 className="font-display font-black text-2xl md:text-3xl text-white tracking-tight">
                  100% Managed Government Subsidy
                </h3>
                <p className="font-sans text-sm text-gray-300 leading-relaxed max-w-xl">
                  Navigating the central national rooftop portal can be confusing. Shambhavi Green Power coordinates directly with utility inspectors to fast-track your <strong>₹78,000 Direct Benefit Transfer (DBT)</strong>. We upload geo-tagged photos, register documents, and manage net-meter commissioning for zero friction.
                </p>
              </div>

              {/* Checkmarks bullet row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                <div className="flex items-center gap-2 text-xs font-mono text-brand-light">
                  <CheckCircle2 className="h-4 w-4 text-brand-accent flex-shrink-0" />
                  <span>National Portal Registration</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-brand-light">
                  <CheckCircle2 className="h-4 w-4 text-brand-accent flex-shrink-0" />
                  <span>Utility Net-Meter Approvals</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-brand-light">
                  <CheckCircle2 className="h-4 w-4 text-brand-accent flex-shrink-0" />
                  <span>Direct Bank Refund (DBT) Sync</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-brand-light">
                  <CheckCircle2 className="h-4 w-4 text-brand-accent flex-shrink-0" />
                  <span>No Brokerage Fees</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-brand-primary/20 flex items-center justify-between text-brand-accent font-display font-bold text-xs">
              <span>FACILITATED BY OFFICIAL PORTAL INTEGRATORS</span>
              <ArrowUpRight className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </motion.div>

          {/* BENTO CARD 2: 90% Bill Savings (Medium - 4 Cols on MD+) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-4 bg-[#091a0f]/80 backdrop-blur-md border border-brand-light/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden group hover:border-brand-light/30 transition-all flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="inline-flex p-3 bg-brand-primary/20 border border-brand-light/10 text-brand-light rounded-2xl">
                <DollarSign className="h-6 w-6 text-brand-accent" />
              </div>
              
              <div>
                <h3 className="font-display font-black text-xl text-white tracking-tight leading-tight">
                  Slash Your Utility Bills by Up to 95%
                </h3>
                <p className="font-sans text-xs text-gray-400 mt-2 leading-relaxed">
                  Start generating your own electricity during daylight. Under net metering rules, excess power is exported back to the grid, saving thousands of rupees from your very first billing cycle.
                </p>
              </div>
            </div>

            <div className="mt-6 font-display font-extrabold text-2xl text-brand-accent">
              ₹0 Electricity Bills
            </div>
          </motion.div>

          {/* BENTO CARD 3: Premium Tier-1 Brands (Medium - 4 Cols on MD+) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-4 bg-[#091a0f]/80 backdrop-blur-md border border-brand-light/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden group hover:border-brand-light/30 transition-all flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="inline-flex p-3 bg-brand-primary/20 border border-brand-light/10 text-brand-light rounded-2xl">
                <Award className="h-6 w-6 text-brand-accent" />
              </div>
              
              <div>
                <h3 className="font-display font-black text-xl text-white tracking-tight leading-tight">
                  Authorised Brand Installer
                </h3>
                <p className="font-sans text-xs text-gray-400 mt-2 leading-relaxed">
                  We install only India's most trusted solar products. As official partners for Waaree Energies, Adani, Goldi, and Vikram Solar, you receive genuine DCR-certified equipment with real-time serial tracking.
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-1.5 pt-3 border-t border-brand-primary/10">
              <span className="text-[9px] font-mono font-bold bg-brand-dark/80 text-brand-light px-2 py-1 rounded-md border border-brand-primary/15">WAAREE</span>
              <span className="text-[9px] font-mono font-bold bg-brand-dark/80 text-brand-light px-2 py-1 rounded-md border border-brand-primary/15">ADANI</span>
              <span className="text-[9px] font-mono font-bold bg-brand-dark/80 text-brand-light px-2 py-1 rounded-md border border-brand-primary/15">GOLDI</span>
              <span className="text-[9px] font-mono font-bold bg-brand-dark/80 text-brand-light px-2 py-1 rounded-md border border-brand-primary/15">VIKRAM</span>
            </div>
          </motion.div>

          {/* BENTO CARD 4: 25+ Year System Warranty & Direct Support from Dr. Krushik (Large - 8 Cols on MD+) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-8 bg-gradient-to-br from-[#0c2613] to-[#051409] border border-brand-light/20 rounded-3xl p-8 shadow-2xl relative overflow-hidden group hover:border-brand-light/40 transition-all flex flex-col justify-between"
          >
            {/* Visual glow spots */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-yellow-500/5 rounded-full blur-3xl group-hover:bg-yellow-500/10 transition-all" />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center relative z-10">
              <div className="space-y-4">
                <div className="inline-flex p-3 bg-brand-primary/30 border border-brand-light/25 text-brand-accent rounded-2xl">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                
                <div className="space-y-1">
                  <h3 className="font-display font-black text-xl text-white tracking-tight">
                    25-Year Generational Warranty
                  </h3>
                  <p className="font-sans text-xs text-gray-300 leading-relaxed">
                    Solar panels are a multi-decade asset. Our systems come armed with a 10-year product build warranty and a 25-year linear generation warranty guaranteeing a minimum of 80% output at Year 25.
                  </p>
                </div>
              </div>

              <div className="space-y-4 border-t sm:border-t-0 sm:border-l border-brand-primary/20 pt-6 sm:pt-0 sm:pl-8">
                <div className="inline-flex p-3 bg-yellow-500/10 border border-yellow-500/20 text-brand-accent rounded-2xl">
                  <PhoneCall className="h-6 w-6" />
                </div>
                
                <div className="space-y-1">
                  <h3 className="font-display font-black text-xl text-white tracking-tight">
                    Direct Owner Access
                  </h3>
                  <p className="font-sans text-xs text-gray-300 leading-relaxed">
                    No automated call-center bots or long delays. For any maintenance request or emergency, you have direct mobile access to the founder of Shambhavi, <strong>Dr. Krushik Sheladiya</strong>.
                  </p>
                  <div className="pt-2 text-brand-accent font-mono text-xs font-bold">
                    CALL: {COMPANY_INFO.phone}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-brand-primary/20 flex items-center justify-between text-brand-accent font-display font-bold text-xs">
              <span>ENGINEERED FOR EXCELLENCE AND HIGH PERFORMANCE NATIONWIDE</span>
              <ArrowUpRight className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
