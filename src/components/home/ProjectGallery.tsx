import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { ZoomIn, MapPin, Eye, ArrowRight } from "lucide-react";
import { useRouter } from "../../lib/router";
import { PROJECT_GALLERY } from "../../lib/constants";
import { Lightbox } from "../ui/Lightbox";
import { Button } from "../ui/Button";

export function ProjectGallery({ limit = 5, hideHeader = false }: { limit?: number; hideHeader?: boolean }) {
  const { navigate } = useRouter();
  const [filter, setFilter] = React.useState<string>("all");
  const [activeImageIndex, setActiveImageIndex] = React.useState<number | null>(null);

  // Filters projects based on the selected tab
  const filteredProjects = React.useMemo(() => {
    const projs = PROJECT_GALLERY;
    if (filter === "all") return projs;
    return projs.filter((p) => p.type === filter);
  }, [filter]);

  const activeProjectsList = filteredProjects.slice(0, limit);

  // Lightbox handlers
  const handleOpenLightbox = (index: number) => {
    setActiveImageIndex(index);
  };

  const handleCloseLightbox = () => {
    setActiveImageIndex(null);
  };

  const handlePrev = () => {
    if (activeImageIndex === null) return;
    setActiveImageIndex((prev) =>
      prev === 0 ? activeProjectsList.length - 1 : (prev as number) - 1
    );
  };

  const handleNext = () => {
    if (activeImageIndex === null) return;
    setActiveImageIndex((prev) =>
      prev === activeProjectsList.length - 1 ? 0 : (prev as number) + 1
    );
  };

  const tabs = [
    { id: "all", label: "All Projects" },
    { id: "residential", label: "Residential" },
    { id: "commercial", label: "Commercial" },
    { id: "agricultural", label: "Agricultural" },
  ];

  return (
    <section className="py-24 px-4 bg-brand-dark text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-brand-primary/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Header Title Text */}
        {!hideHeader && (
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs uppercase font-display font-extrabold tracking-widest text-brand-light mb-3"
            >
              REAL CASE STUDIES
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display font-extrabold text-3xl md:text-5xl text-white tracking-tight leading-tight"
            >
              Our Completed Projects
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-sans text-sm md:text-base text-gray-400 mt-4 leading-relaxed"
            >
              Showcasing over 5000+ active solar installations power networks delivering structural and electrical reliability nationwide.
            </motion.p>
          </div>
        )}

        {/* Tab Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setFilter(tab.id);
                setActiveImageIndex(null);
              }}
              className={`px-6 py-2.5 rounded-full font-display font-bold text-xs md:text-sm tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                filter === tab.id
                  ? "bg-brand-accent text-brand-dark border-2 border-yellow-300 shadow-md"
                  : "bg-brand-primary/10 border-2 border-brand-primary/20 text-white/70 hover:text-white hover:bg-brand-primary/25"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Masonry/Grid Layout for Photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {activeProjectsList.map((project, idx) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.45 }}
                whileHover={{ y: -6 }}
                onClick={() => handleOpenLightbox(idx)}
                className="relative rounded-2xl overflow-hidden group shadow-lg cursor-pointer h-80 border border-white/5 bg-brand-primary/5 hover:border-brand-light/30 transition-all duration-300"
              >
                {/* Real photo display */}
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Dark Gradient Tint Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent group-hover:via-brand-dark/40 transition-all duration-300" />

                {/* Captions and hover tags */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
                  <div className="flex items-center justify-between">
                    <span className="bg-brand-primary/90 text-white text-[10px] font-bold font-display uppercase tracking-widest px-3 py-1 rounded-full border border-brand-light/20 shadow-sm">
                      {project.type}
                    </span>
                    <div className="bg-white/10 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Eye className="h-4.5 w-4.5 text-brand-accent" />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-brand-light font-sans font-bold mb-1">
                      <MapPin className="h-3.5 w-3.5 text-brand-accent" />
                      {project.location}
                    </div>
                    <h3 className="font-display font-extrabold text-base md:text-lg text-white group-hover:text-brand-accent transition-colors">
                      {project.caption}
                    </h3>
                    <div className="flex items-center justify-between text-xs text-white/50 font-sans mt-2 pt-2 border-t border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <span>Size: {project.size}</span>
                      <span>Date: {project.date}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Home Page Link to Gallery */}
        {limit === 5 && (
          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="group text-white border-white/20 hover:border-brand-accent hover:text-brand-accent"
              onClick={() => navigate("/projects")}
            >
              View All Completed Projects
              <ArrowRight className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>
        )}

      </div>

      {/* Lightbox Trigger frame */}
      <Lightbox
        images={activeProjectsList}
        activeIndex={activeImageIndex}
        onClose={handleCloseLightbox}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </section>
  );
}
