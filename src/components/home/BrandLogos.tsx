import * as React from "react";
import { motion } from "motion/react";
import { PARTNER_BRANDS } from "../../lib/constants";
import { PartnerLogo } from "../ui/PartnerLogos";

export function BrandLogos() {
  // Duplicate the brand list to ensure smooth infinite loop looping
  const duplicatedBrands = [...PARTNER_BRANDS, ...PARTNER_BRANDS, ...PARTNER_BRANDS];

  return (
    <section className="py-16 bg-brand-surface border-y border-brand-primary/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-8 text-center">
        <span className="text-[10px] uppercase font-bold tracking-widest text-brand-primary font-display block mb-2">
          AUTHORIZED BRAND INSTALLERS
        </span>
        <h2 className="font-display font-extrabold text-2xl md:text-3xl text-brand-dark tracking-tight">
          We Install India's Best Solar Brands
        </h2>
        <p className="font-sans text-xs md:text-sm text-gray-500 mt-1.5">
          Equipped with DCR-certified high efficiency solar panels for maximum longevity.
        </p>
      </div>

      {/* Infinite Horizontal Scroll Marquee */}
      <div className="relative w-full flex items-center overflow-x-hidden py-4">
        {/* Soft edge gradient fade */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-brand-surface to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-brand-surface to-transparent z-10 pointer-events-none" />

        <div className="flex gap-4 md:gap-6 animate-marquee hover:[animation-play-state:paused] whitespace-nowrap">
          {duplicatedBrands.map((brand, bIdx) => (
            <div
              key={bIdx}
              className="inline-flex flex-col min-w-[220px] md:min-w-[280px] bg-white border border-brand-primary/5 rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-md hover:border-brand-primary/20 transition-all duration-300 group cursor-help select-none"
            >
              {/* Official Brand Logo */}
              <div className="flex items-center justify-center h-12 mb-3 border-b border-brand-primary/5 pb-3">
                <PartnerLogo name={brand.name} height={32} />
              </div>
              <p className="font-sans text-xs text-gray-400 leading-normal overflow-hidden text-ellipsis whitespace-normal text-center">
                {brand.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
