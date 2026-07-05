import * as React from "react";
import { motion } from "motion/react";
import { Sparkles, MessageSquare, HeartHandshake, Phone, ArrowRight } from "lucide-react";
import { ProjectGallery } from "../home/ProjectGallery";
import { Button } from "../ui/Button";
import { COMPANY_INFO } from "../../lib/constants";
import { useRouter } from "../../lib/router";

export function ProjectsPage() {
  const { navigate } = useRouter();

  return (
    <div className="bg-brand-surface text-brand-dark pt-20">
      
      {/* Hero Header Banner */}
      <section className="relative py-20 bg-brand-dark text-white text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-primary/20 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="text-xs uppercase font-display font-extrabold tracking-widest text-brand-light block mb-3 animate-pulse">
            REAL-WORLD CASE PORTFOLIO
          </span>
          <h1 className="font-display font-black text-3xl md:text-5xl text-white tracking-tight leading-tight">
            Our Completed Projects
          </h1>
          <p className="font-sans text-xs md:text-sm text-gray-400 max-w-xl mx-auto mt-4 leading-relaxed">
            Pristine solar arrays engineered nationwide. We pride ourselves on mechanical wind durability, thick copper earthing circuits, and maximum power outputs.
          </p>
        </div>
      </section>

      {/* Main Filterable Gallery Module */}
      <ProjectGallery limit={100} hideHeader />

      {/* "Submit Your Solar Story" CTA Banner */}
      <section className="py-20 px-4 bg-white border-t border-brand-primary/5">
        <div className="max-w-4xl mx-auto rounded-3xl bg-brand-primary/5 border border-brand-primary/10 p-8 md:p-12 text-center flex flex-col items-center">
          <div className="p-4 bg-brand-primary/10 border border-brand-light/10 text-brand-primary rounded-full mb-6">
            <HeartHandshake className="h-7 w-7" />
          </div>
          
          <h2 className="font-display font-extrabold text-2xl md:text-3xl text-brand-dark tracking-tight leading-tight mb-3">
            Submit Your Solar Story!
          </h2>
          <p className="font-sans text-xs md:text-sm text-gray-500 max-w-xl mb-8 leading-relaxed">
            Are you an existing Shambhavi Green Power customer? Send us your latest electricity bill, a photograph of your rooftop, and your feedback. We would love to feature your savings on our platform!
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center max-w-md">
            <a
              href={COMPANY_INFO.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-white font-display font-bold text-sm hover:opacity-90 transition-all shadow-md"
            >
              <MessageSquare className="h-4.5 w-4.5" /> Submit Story on WhatsApp
            </a>
            
            <Button
              variant="secondary"
              className="w-full sm:w-auto text-brand-dark"
              onClick={() => navigate("/contact")}
            >
              Contact Support
              <ArrowRight className="h-4.5 w-4.5 ml-1.5" />
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
