import * as React from "react";
import { motion } from "motion/react";
import { Award, Zap, Users, Home, Calendar } from "lucide-react";
import { AnimatedCounter } from "../ui/AnimatedCounter";

export function StatsBar() {
  const stats = [
    {
      icon: Home,
      number: 5000,
      suffix: "+",
      label: "Installations Completed",
    },
    {
      icon: Users,
      number: 2000,
      suffix: "+",
      label: "Happy Families Powered",
    },
    {
      icon: Zap,
      number: 10,
      suffix: "+ MW",
      label: "Total Capacity Installed",
    },
    {
      icon: Award,
      number: 50,
      suffix: "+",
      label: "Excellence Awards",
    },
    {
      icon: Calendar,
      number: 10,
      suffix: "+ Years",
      label: "Industry Experience",
    },
  ];

  return (
    <section
      id="stats-bar-id"
      className="bg-brand-dark border-y border-brand-primary/10 py-12 px-4 relative z-20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              {/* Outer icon badge */}
              <div className="p-3 bg-brand-primary/10 border border-brand-light/10 rounded-2xl mb-4 text-brand-accent transition-transform duration-300 group-hover:scale-110">
                <stat.icon className="h-6 w-6" />
              </div>
              
              <div className="font-display font-extrabold text-3xl md:text-4xl text-brand-accent mb-1 tracking-tight">
                <AnimatedCounter value={stat.number} suffix={stat.suffix} />
              </div>
              
              <div className="font-sans text-xs md:text-sm text-gray-400 font-medium tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
