import * as React from "react";
import { motion } from "motion/react";
import { Sparkles, Trophy, Award, Target, Eye, ShieldCheck, Heart, ArrowUpRight, Phone, Milestone, Briefcase } from "lucide-react";
import { COMPANY_INFO, PARTNER_BRANDS } from "../../lib/constants";
import { Button } from "../ui/Button";
import { useRouter } from "../../lib/router";

export function AboutPage() {
  const { navigate } = useRouter();

  const values = [
    { title: "Quality Sourcing", desc: "We only source DCR-certified high-efficiency Tier-1 cells from India's premium solar manufacturers.", icon: Award },
    { title: "Absolute Affordability", desc: "We design optimized, lean structures and pass on maximum government subsidies directly to families.", icon: Heart },
    { title: "Lifetime Reliability", desc: "Our 25-year panel performance standard is supported by rapid preventative maintenance diagnostic audits.", icon: ShieldCheck },
    { title: "Green Future Mission", desc: "We are passionately committed to helping establish absolute carbon neutrality by 2030.", icon: Target },
  ];

  return (
    <div className="bg-brand-surface text-brand-dark pt-20">
      
      {/* 1. Hero Section */}
      <section className="relative py-24 bg-brand-dark text-white text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brand-primary/20 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="text-xs uppercase font-display font-extrabold tracking-widest text-brand-light block mb-3 animate-pulse">
            SHAMBHAVI SOLAR HERITAGE
          </span>
          <h1 className="font-display font-black text-3xl md:text-5xl text-white tracking-tight leading-tight">
            Pioneering Solar Energy Since 2014
          </h1>
          <p className="font-sans text-xs md:text-sm text-gray-400 max-w-xl mx-auto mt-4 leading-relaxed">
            Delivering clean, dependable energy options with structural integrity and seamless paper subsidy processing nationwide.
          </p>
        </div>
      </section>

      {/* 2. Our Story / Founder Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Founder Executive Card */}
          <div className="lg:col-span-5 bg-brand-dark text-white rounded-3xl p-8 border border-brand-primary/10 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/10 rounded-full blur-2xl pointer-events-none" />
            
            {/* Owner Details */}
            <div className="flex items-center gap-4 mb-6">
              {/* Profile Avatar icon placeholder */}
              <div className="h-16 w-16 rounded-2xl bg-brand-primary border-2 border-brand-light flex items-center justify-center font-display font-black text-2xl text-brand-accent shadow-md">
                KS
              </div>
              <div>
                <h3 className="font-display font-extrabold text-lg text-white">
                  {COMPANY_INFO.owner}
                </h3>
                <span className="font-sans text-xs text-brand-light font-bold">
                  Founder & Managing Director
                </span>
              </div>
            </div>

            {/* Owner Quote statement */}
            <blockquote className="font-sans text-sm italic text-gray-300 leading-relaxed border-l-2 border-brand-accent pl-4 mb-6">
              "Our goal is to make every household energy independent with clean solar power. Solar is no longer an expense — it is the highest return investment a family or farmer can make."
            </blockquote>

            <div className="pt-4 border-t border-brand-primary/20 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="font-sans text-xs text-gray-400">
                Direct Contact Helpline:
              </span>
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-brand-primary text-white font-display text-xs font-bold hover:bg-brand-light transition-all"
              >
                <Phone className="h-3.5 w-3.5 text-brand-accent animate-bounce" />
                {COMPANY_INFO.phone}
              </a>
            </div>
          </div>

          {/* About Text Content */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase font-display font-extrabold tracking-widest text-brand-primary block">
              OUR JOURNEY & VALUES
            </span>
            <h2 className="font-display font-extrabold text-2xl md:text-4xl text-brand-dark tracking-tight leading-tight">
              A Mission To Power Every Home, Farm, And Business
            </h2>
            <p className="font-sans text-sm md:text-base text-gray-600 leading-relaxed">
              Founded in 2014 by Dr. Krushik Sheladiya, **Shambhavi Green Power Private Limited** was born out of a simple, powerful vision: to make clean solar energy fully accessible, highly affordable, and structurally reliable for every citizen. 
            </p>
            <p className="font-sans text-sm md:text-base text-gray-600 leading-relaxed">
              We have spent over a decade refining our solar designs. We reject off-the-shelf, cheap metallic brackets; our structural team engineers bespoke, galvanized structures optimized to withstand coastal wind speeds. We coordinate 100% of the Net Meter liaisoning with Utility Companies so that our customers can enjoy stress-free, cost-free electricity from the moment of activation.
            </p>
          </div>

        </div>
      </section>

      {/* 3. Core Mission & Vision Cards */}
      <section className="py-20 px-4 bg-brand-dark text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Mission Card */}
          <div className="bg-brand-primary/5 rounded-2xl p-8 border border-brand-primary/10 hover:border-brand-light/20 transition-all flex items-start gap-5">
            <div className="p-4 bg-brand-primary/15 border border-brand-light/15 text-brand-accent rounded-xl">
              <Target className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-display font-extrabold text-xl text-white mb-2">Our Mission</h3>
              <p className="font-sans text-sm text-gray-300 leading-relaxed">
                To engineer solar rooftops and water pumping systems that deliver guaranteed clean outputs, maximize tax benefits, and release homeowners, factories, and farms from rising grid utility expenses.
              </p>
            </div>
          </div>

          {/* Vision Card */}
          <div className="bg-brand-primary/5 rounded-2xl p-8 border border-brand-primary/10 hover:border-brand-light/20 transition-all flex items-start gap-5">
            <div className="p-4 bg-brand-primary/15 border border-brand-light/15 text-brand-accent rounded-xl">
              <Eye className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-display font-extrabold text-xl text-white mb-2">Our Vision</h3>
              <p className="font-sans text-sm text-gray-300 leading-relaxed">
                To be the nation's most respected solar EPC installer, renowned for engineering craftsmanship, transparent paperwork liaisoning, and direct personal customer support.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Core Corporate Values */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs uppercase font-display font-extrabold tracking-widest text-brand-primary block mb-2">
            WHAT WE STAND FOR
          </span>
          <h2 className="font-display font-extrabold text-2xl md:text-4xl text-brand-dark tracking-tight">
            Our Pillars of Strength
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((val, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-6 border border-brand-primary/5 shadow-sm flex flex-col gap-4 hover:border-brand-primary/15 transition-all"
            >
              <div className="p-3 bg-brand-primary/5 text-brand-primary rounded-lg w-fit">
                <val.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display font-bold text-base text-brand-dark mb-1">
                  {val.title}
                </h3>
                <p className="font-sans text-xs text-gray-500 leading-relaxed">
                  {val.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Certifications & Awards panel */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs uppercase font-display font-extrabold tracking-widest text-brand-primary block mb-3">
              ACCREDITATIONS & TRUST
            </span>
            <h2 className="font-display font-extrabold text-2xl md:text-4xl text-brand-dark tracking-tight leading-tight">
              Certified Engineering Standards
            </h2>
            <p className="font-sans text-sm text-gray-500 leading-relaxed mt-4">
              Shambhavi Green Power is registered and certified by all relevant central and state authorities, ensuring maximum warranty validation and smooth subsidy processing.
            </p>

            <ul className="mt-6 space-y-3 font-sans text-sm text-gray-600">
              <li className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-brand-primary flex-shrink-0" />
                <span>National Portal Approved Rooftop Vendor</span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-brand-primary flex-shrink-0" />
                <span>Authorized Partner: Waaree, Adani, Goldi, Rayzon</span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-brand-primary flex-shrink-0" />
                <span>ISO 9001:2015 Quality Management Certified</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-brand-primary/5 shadow-md flex items-center justify-center relative h-64 overflow-hidden group">
            {/* Ambient gold circle decor */}
            <div className="absolute inset-0 bg-brand-primary/5 group-hover:bg-brand-primary/10 transition-all pointer-events-none" />
            <div className="text-center z-10 flex flex-col items-center">
              <Trophy className="h-14 w-14 text-brand-accent mb-4 animate-bounce" />
              <h3 className="font-display font-extrabold text-base md:text-lg text-brand-dark">
                National Solar Icon Award
              </h3>
              <p className="font-sans text-xs text-gray-400 mt-1 max-w-xs">
                Recognized for completing the highest volume of rural agricultural solar pumping installations.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
