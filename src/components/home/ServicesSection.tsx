import * as React from "react";
import { motion } from "motion/react";
import { Home, Building, Sprout, ArrowRight, Shield, FlameKindling } from "lucide-react";
import { useRouter, RoutePath } from "../../lib/router";
import { SERVICE_DATA } from "../../lib/constants";

export function ServicesSection() {
  const { navigate } = useRouter();

  const cards = [
    {
      key: "residential",
      title: "Residential Solar",
      badgeText: "Home Solar",
      desc: SERVICE_DATA.residential.description,
      image: SERVICE_DATA.residential.heroImage,
      icon: Home,
      features: SERVICE_DATA.residential.features.slice(0, 5),
      subsidy: SERVICE_DATA.residential.subsidyBadge,
      route: "/services/residential" as RoutePath,
    },
    {
      key: "commercial",
      title: "Commercial Solar",
      badgeText: "Business Solar",
      desc: SERVICE_DATA.commercial.description,
      image: SERVICE_DATA.commercial.heroImage,
      icon: Building,
      features: SERVICE_DATA.commercial.features.slice(0, 5),
      subsidy: SERVICE_DATA.commercial.subsidyBadge,
      route: "/services/commercial" as RoutePath,
    },
    {
      key: "agricultural",
      title: "Agricultural Solar",
      badgeText: "Farm Solar",
      desc: SERVICE_DATA.agricultural.description,
      image: SERVICE_DATA.agricultural.heroImage,
      icon: Sprout,
      features: SERVICE_DATA.agricultural.features.slice(0, 5),
      subsidy: SERVICE_DATA.agricultural.subsidyBadge,
      route: "/services/agricultural" as RoutePath,
    },
  ];

  return (
    <section className="py-24 px-4 bg-brand-surface text-brand-dark overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Title Text */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase font-display font-extrabold tracking-widest text-brand-primary mb-3"
          >
            SOLAR POWER SECTORS
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-extrabold text-3xl md:text-5xl text-brand-dark tracking-tight leading-tight"
          >
            Solar Solutions for Every Need
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-sans text-sm md:text-base text-gray-500 mt-4 leading-relaxed"
          >
            From rooftop homes to vast farmlands — we power it all with tier-1 engineering and full-service warranty support.
          </motion.p>
        </div>

        {/* 3 Immersive Card Rows */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <motion.div
              key={card.key}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ y: -8 }}
              className="bg-brand-dark rounded-3xl overflow-hidden border border-brand-primary/10 shadow-xl group flex flex-col justify-between transition-all duration-300 hover:border-brand-light/30 hover:shadow-brand-primary/10"
            >
              
              {/* Image & Icon Top Half */}
              <div className="relative h-64 md:h-72 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Visual Glass Tint */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-black/30" />
                
                {/* Floating Category Badge */}
                <span className="absolute top-4 left-4 bg-brand-primary/90 text-white font-display text-xs font-bold px-3 py-1 rounded-full border border-brand-light/20 shadow-md">
                  {card.badgeText}
                </span>

                {/* Floating Subsidy Callout Badge */}
                {card.subsidy && (
                  <span className="absolute bottom-4 right-4 bg-brand-accent text-brand-dark font-display text-xs font-black px-3.5 py-1 rounded-full border border-yellow-300 shadow-lg glow-amber animate-pulse-slow">
                    {card.subsidy}
                  </span>
                )}

                {/* Circular Float Category Icon */}
                <div className="absolute -bottom-6 left-6 p-4.5 bg-brand-primary border-4 border-brand-dark rounded-2xl text-brand-accent shadow-2xl z-20">
                  <card.icon className="h-6 w-6" />
                </div>
              </div>

              {/* Bottom Content Area */}
              <div className="p-6 pt-10 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-extrabold text-xl md:text-2xl text-white group-hover:text-brand-accent transition-colors">
                    {card.title}
                  </h3>
                  <p className="font-sans text-sm text-gray-300 mt-2.5 leading-relaxed">
                    {card.desc}
                  </p>

                  {/* Bullet points array */}
                  <ul className="mt-5 space-y-2 border-t border-brand-primary/20 pt-4">
                    {card.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs md:text-sm text-gray-400 font-sans">
                        <span className="h-1.5 w-1.5 bg-brand-light rounded-full mt-1.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Explore Action CTA */}
                <div className="mt-8 pt-4 border-t border-brand-primary/20">
                  <button
                    onClick={() => navigate(card.route)}
                    className="w-full py-3 px-5 rounded-full bg-brand-primary/25 border border-brand-light/20 font-display font-bold text-white hover:text-brand-dark hover:bg-brand-accent hover:border-yellow-300 text-sm flex items-center justify-center gap-2 transition-all duration-300 group/btn cursor-pointer"
                  >
                    <span>Explore {card.title.split(" ")[0]} Solutions</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
