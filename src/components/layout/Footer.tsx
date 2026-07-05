import * as React from "react";
import { Phone, Mail, MapPin, ShieldCheck, CheckCircle, ArrowUpRight, Globe } from "lucide-react";
import { useRouter } from "../../lib/router";
import { COMPANY_INFO } from "../../lib/constants";
import { ShambhaviLogo } from "../ui/ShambhaviLogo";

export function Footer() {
  const { navigate } = useRouter();
  const currentYear = 2026;

  const solutionsLinks = [
    { label: "Residential Solar Rooftop", path: "/services/residential" },
    { label: "Commercial Solar Power", path: "/services/commercial" },
    { label: "Agricultural Solar Pumps", path: "/services/agricultural" },
  ];

  const quickLinks = [
    { label: "Our Story & Founder", path: "/about" },
    { label: "Completed Projects Portfolio", path: "/projects" },
    { label: "National Solar Subsidy", path: "/subsidy" },
    { label: "Get a Sizing Quotation", path: "/contact" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0b1b10] text-white border-t border-brand-primary/10 pt-20 pb-10 font-sans relative overflow-hidden">
      {/* Decorative background visual elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Top Segment: Brand & Authority Tag */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-12 border-b border-white/10 mb-12">
          <div className="flex items-center gap-4">
            <div className="bg-white/5 p-3 rounded-2xl border border-white/10 shadow-inner">
              <ShambhaviLogo size={56} />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-black text-white text-xl tracking-tight leading-none">
                SHAMBHAVI
              </span>
              <span className="font-sans text-[10px] font-black text-brand-light tracking-widest mt-1.5 uppercase opacity-90">
                Green Power Private Limited
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2.5 text-xs text-brand-light font-bold bg-white/5 border border-white/10 px-4 py-2 rounded-xl backdrop-blur-sm">
              <ShieldCheck className="h-4 w-4 text-brand-accent" />
              National Solar Rooftop Portal Authorized
            </div>
            <div className="flex items-center gap-2.5 text-xs text-white/90 font-bold bg-brand-primary/20 border border-brand-primary/30 px-4 py-2 rounded-xl backdrop-blur-sm">
              <CheckCircle className="h-4 w-4 text-brand-accent" />
              ISO 9001:2015 Certified Company
            </div>
          </div>
        </div>

        {/* Middle Segment: 4-Column Structured Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Core Company Pitch (Span 4) */}
          <div className="lg:col-span-4 flex flex-col gap-5 pr-4">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-brand-accent">
              About Shambhavi Solar
            </h4>
            <p className="text-sm text-gray-300 leading-relaxed">
              We are premium, authorized solar technology integrators engineering robust photovoltaic arrays for domestic rooftops, agricultural operations, and heavy commercial systems. Built on absolute structural integrity and lifetime safety.
            </p>
            <div className="text-xs text-gray-400 flex items-center gap-2">
              <Globe className="h-4 w-4 text-brand-accent/70" />
              Empowering India's Clean Energy Transition
            </div>
          </div>

          {/* Column 2: Our Solutions (Span 2) */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-white/70 pb-2 border-b border-white/5">
              Our Solutions
            </h4>
            <ul className="flex flex-col gap-3.5 text-sm text-gray-300">
              {solutionsLinks.map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => navigate(link.path)}
                    className="hover:text-brand-accent transition-all duration-200 text-left cursor-pointer flex items-center gap-1 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="group-hover:translate-x-1 transition-transform inline-block">
                      {link.label}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Navigation (Span 2) */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-white/70 pb-2 border-b border-white/5">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3.5 text-sm text-gray-300">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => navigate(link.path)}
                    className="hover:text-brand-accent transition-all duration-200 text-left cursor-pointer flex items-center gap-1 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="group-hover:translate-x-1 transition-transform inline-block">
                      {link.label}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Headquarters (Span 4) */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-brand-accent pb-2 border-b border-white/5">
              HQ Address & Support
            </h4>
            <div className="flex flex-col gap-4 text-sm text-gray-300">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-brand-accent flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed text-xs text-gray-200">
                  {COMPANY_INFO.address}
                </span>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-brand-accent flex-shrink-0" />
                <a 
                  href={`tel:${COMPANY_INFO.phoneRaw}`} 
                  className="hover:text-brand-accent transition-colors font-bold text-brand-light flex items-center gap-1 group"
                >
                  {COMPANY_INFO.phone}
                  <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-brand-accent flex-shrink-0" />
                <a 
                  href={`mailto:${COMPANY_INFO.email}`} 
                  className="hover:text-brand-accent transition-colors text-xs break-all"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Segment: copyright & certificates */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-[11px] text-gray-400">
          <div className="flex flex-col gap-1 items-center md:items-start">
            <span>
              © {currentYear} {COMPANY_INFO.name}. All Rights Reserved.
            </span>
            <span className="text-gray-500 font-mono tracking-wider">
              GSTIN: 24ABRCS6465Q1Z9
            </span>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={scrollToTop}
              className="text-gray-400 hover:text-brand-accent transition-colors text-[11px] font-semibold flex items-center gap-1"
            >
              Back to Top ↑
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
