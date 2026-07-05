import * as React from "react";
import { motion } from "motion/react";
import { CheckCircle, ShieldCheck, HelpCircle, Landmark, Phone, ArrowRight, Zap, Star, LayoutGrid } from "lucide-react";
import { useRouter } from "../../lib/router";
import { SERVICE_DATA, PROJECT_GALLERY, COMPANY_INFO } from "../../lib/constants";
import { FAQAccordion } from "../ui/FAQAccordion";
import { Button } from "../ui/Button";

interface ServicePageTemplateProps {
  serviceKey: "residential" | "commercial" | "agricultural";
}

export function ServicePageTemplate({ serviceKey }: ServicePageTemplateProps) {
  const { navigate } = useRouter();
  const data = SERVICE_DATA[serviceKey];

  // Get related project images from our gallery matching this type
  const relatedProjects = React.useMemo(() => {
    return PROJECT_GALLERY.filter((p) => p.type === serviceKey || p.type === "all").slice(0, 3);
  }, [serviceKey]);

  return (
    <div className="bg-brand-surface text-brand-dark pt-20">
      
      {/* 1. Full-Width Hero Section */}
      <section className="relative w-full h-[50vh] md:h-[60vh] flex items-center justify-center bg-brand-dark overflow-hidden">
        <img
          src={data.heroImage}
          alt={data.title}
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent" />
        
        <div className="relative max-w-5xl mx-auto text-center px-4 z-10 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-accent text-brand-dark font-display text-xs font-black tracking-widest uppercase mb-4"
          >
            {data.subsidyBadge}
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white leading-tight tracking-tight"
          >
            {data.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-sans text-sm md:text-base text-gray-300 max-w-2xl mt-4 leading-relaxed"
          >
            {data.description}
          </motion.p>
        </div>
      </section>

      {/* 2. Service Overview */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase font-display font-extrabold tracking-widest text-brand-primary block">
              DETAILED SOLUTIONS OVERVIEW
            </span>
            <h2 className="font-display font-extrabold text-2xl md:text-4xl text-brand-dark tracking-tight leading-tight">
              Power Your Operations Responsibly
            </h2>
            <p className="font-sans text-sm md:text-base text-gray-600 leading-relaxed">
              {data.detailedDescription}
            </p>

            {/* Custom Discoms message on agricultural page */}
            {serviceKey === "agricultural" && (
              <div className="p-4 bg-brand-primary/5 rounded-xl border border-brand-primary/10">
                <h4 className="font-display font-bold text-sm text-brand-primary mb-1">
                  National Utility Distribution Compatibility
                </h4>
                <p className="font-sans text-xs text-gray-500 leading-relaxed">
                  Our systems are approved and compatible across all major regional utility feeder networks. We also integrate customized **drip irrigation + solar pump** combinations for progressive farming.
                </p>
              </div>
            )}

            <div className="pt-2">
              <Button
                variant="accent"
                onClick={() => {
                  const element = document.getElementById("contact-section-id");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  } else {
                    navigate("/contact");
                  }
                }}
              >
                Get Sizing Quotation
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5 bg-white border border-brand-primary/5 rounded-2xl p-6 md:p-8 shadow-md">
            <h3 className="font-display font-extrabold text-lg text-brand-dark mb-5 flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-brand-primary" />
              Core Performance Standards
            </h3>
            <ul className="space-y-3.5">
              {data.features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs md:text-sm text-gray-600 font-sans leading-relaxed">
                  <CheckCircle className="h-4.5 w-4.5 text-brand-light mt-0.5 flex-shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* 3. System Size Options Slabs */}
      <section className="py-20 px-4 bg-brand-dark text-white">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-display font-extrabold tracking-widest text-brand-light block mb-2">
              SYSTEM SIZINGS & ESTIMATED YIELDS
            </span>
            <h2 className="font-display font-extrabold text-2xl md:text-4xl text-white tracking-tight">
              Recommended Solar Capacity Slabs
            </h2>
            <p className="font-sans text-xs md:text-sm text-gray-400 mt-2">
              Select the optimal capacity according to your average monthly utility demand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.pricingOptions.map((opt, idx) => (
              <div
                key={idx}
                className="bg-brand-primary/5 rounded-2xl p-6 md:p-8 border border-brand-primary/15 flex flex-col justify-between hover:border-brand-light/35 transition-all group"
              >
                <div>
                  <h3 className="font-display font-black text-xl text-brand-accent mb-2">
                    {opt.size}
                  </h3>
                  <p className="font-sans text-xs text-gray-300 leading-normal mb-6">
                    {opt.description}
                  </p>

                  <div className="space-y-2 border-y border-brand-primary/10 py-4 mb-6">
                    <div className="flex justify-between text-xs md:text-sm font-sans text-gray-400">
                      <span>Government Subsidy:</span>
                      <span className="font-bold text-brand-light">{opt.subsidy}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="text-center bg-brand-primary/20 rounded-xl py-3 border border-brand-light/10">
                    <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block">
                      ESTIMATED MONTHLY BILL REDUCTION
                    </span>
                    <span className="font-display font-extrabold text-sm md:text-base text-brand-accent">
                      {opt.savings}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Technical Specs Table */}
      <section className="py-20 px-4 max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs uppercase font-display font-extrabold tracking-widest text-brand-primary block mb-2">
            TECHNICAL CAPABILITIES
          </span>
          <h2 className="font-display font-extrabold text-2xl md:text-3xl text-brand-dark tracking-tight">
            System Technical Specifications
          </h2>
        </div>

        <div className="bg-white border border-brand-primary/5 rounded-2xl overflow-hidden shadow-md">
          <table className="w-full text-left font-sans text-xs md:text-sm">
            <thead>
              <tr className="bg-brand-primary text-white font-display font-bold">
                <th className="p-4 md:p-5">Parameter Specifications</th>
                <th className="p-4 md:p-5">Value / Rating Standards</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-primary/5 text-gray-600">
              {data.specs.map((spec, idx) => (
                <tr key={idx} className="hover:bg-brand-surface/50 transition-colors">
                  <td className="p-4 md:p-5 font-semibold text-brand-dark">{spec.name}</td>
                  <td className="p-4 md:p-5 font-medium">{spec.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 5. Step-by-Step Installation Process */}
      <section className="py-20 px-4 bg-brand-dark text-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase font-display font-extrabold tracking-widest text-brand-light block mb-2">
              OPERATIONAL TIMELINES
            </span>
            <h2 className="font-display font-extrabold text-2xl md:text-4xl text-white tracking-tight">
              Installation Milestones
            </h2>
            <p className="font-sans text-xs md:text-sm text-gray-400 mt-2">
              Our engineering lifecycle has been optimized over 10+ years to minimize building disruption.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
            {data.steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                <div className="h-12 w-12 rounded-xl bg-brand-primary/20 border border-brand-light/20 flex items-center justify-center font-display font-black text-brand-accent text-sm md:text-base mb-4 relative z-10 shadow-lg">
                  {step.num}
                </div>
                
                {idx < data.steps.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-[calc(20%*idx+10%)] right-[calc(20%*(4-idx)+10%)] h-0.5 bg-brand-primary/20 -z-0" />
                )}

                <h3 className="font-display font-extrabold text-white text-sm md:text-base mb-1.5 group-hover:text-brand-accent transition-colors">
                  {step.title}
                </h3>
                <p className="font-sans text-xs text-gray-400 leading-relaxed max-w-xs">
                  {step.text}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. Related Project Photos */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs uppercase font-display font-extrabold tracking-widest text-brand-primary block mb-2">
            COMPLETED REALIZATIONS
          </span>
          <h2 className="font-display font-extrabold text-2xl md:text-3xl text-brand-dark tracking-tight">
            Related Project Portfolio
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedProjects.map((proj, idx) => (
            <div
              key={idx}
              className="relative rounded-2xl overflow-hidden group shadow-md h-72 border border-brand-primary/5 bg-white cursor-pointer"
              onClick={() => navigate("/projects")}
            >
              <img
                src={proj.image}
                alt={proj.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] text-brand-light font-bold font-sans tracking-wide block mb-1">
                  {proj.location}
                </span>
                <h4 className="font-display font-bold text-sm leading-tight text-white group-hover:text-brand-accent transition-colors">
                  {proj.caption}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. FAQ Accordion */}
      <section className="py-20 px-4 bg-white border-y border-brand-primary/5">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs uppercase font-display font-extrabold tracking-widest text-brand-primary block mb-2">
              KNOWLEDGE REPOSITORY
            </span>
            <h2 className="font-display font-extrabold text-2xl md:text-3xl text-brand-dark tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <FAQAccordion items={data.faqs} />
        </div>
      </section>

      {/* 8. Quick CTA Banner */}
      <section className="py-16 px-4 bg-gradient-to-br from-brand-primary to-brand-dark text-white text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <Zap className="h-10 w-10 text-brand-accent mb-4 animate-pulse" />
          <h2 className="font-display font-extrabold text-2xl md:text-3xl text-white tracking-tight mb-4">
            Ready to Cut Your Bills?
          </h2>
          <p className="font-sans text-xs md:text-sm text-gray-300 leading-relaxed max-w-xl mb-8">
            Consultations are 100% free with no commercial obligations. Contact owner Dr. Krushik Sheladiya today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
            <Button
              variant="accent"
              size="lg"
              className="w-full sm:w-auto py-3.5 shadow-xl"
              onClick={() => navigate("/contact")}
            >
              Get Sizing Quote
            </Button>
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-8 py-3.5 bg-white/10 hover:bg-white/15 border border-white/20 rounded-full font-display font-bold text-sm transition-all shadow-md text-white"
            >
              <Phone className="h-4.5 w-4.5 text-brand-accent animate-bounce" />
              Call: {COMPANY_INFO.phone}
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
