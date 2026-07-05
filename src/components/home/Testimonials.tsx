import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { Quote, Star, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";
import { REVIEWS } from "../../lib/constants";

export function Testimonials() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? REVIEWS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === REVIEWS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-24 px-4 bg-brand-surface text-brand-dark overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Text details */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase font-display font-extrabold tracking-widest text-brand-primary mb-3"
          >
            CLIENT RETROSPECTIVES
          </motion.div>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-brand-dark tracking-tight leading-tight">
            What Our Customers Say
          </h2>
          <p className="font-sans text-sm md:text-base text-gray-500 mt-4">
            Hear from happy families, businesses, and farmers nationwide about their financial and operational achievements.
          </p>
        </div>

        {/* Desktop grid layout & Mobile active slide carousel combo */}
        <div className="hidden lg:grid grid-cols-3 gap-8">
          {REVIEWS.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl p-8 border border-brand-primary/5 shadow-md flex flex-col justify-between hover:border-brand-primary/20 hover:shadow-lg transition-all duration-300 relative"
            >
              <Quote className="absolute top-6 right-6 h-10 w-10 text-brand-primary/5 pointer-events-none" />
              
              <div>
                {/* Stars Rating row */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(review.stars)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-brand-accent text-brand-accent" />
                  ))}
                </div>

                <p className="font-sans text-sm md:text-base text-gray-600 italic leading-relaxed mb-6">
                  "{review.text}"
                </p>
              </div>

              <div className="flex items-center gap-3.5 border-t border-brand-primary/5 pt-4 mt-auto">
                {/* Circular Initial Avatar */}
                <div className="h-11 w-11 rounded-full bg-brand-primary/10 border border-brand-light/10 flex items-center justify-center text-brand-primary font-display font-extrabold text-base">
                  {review.name[0]}
                </div>
                
                <div>
                  <h3 className="font-display font-extrabold text-sm md:text-base text-brand-dark">
                    {review.name}
                  </h3>
                  <div className="flex items-center gap-1 text-[11px] text-gray-400 font-sans mt-0.5 font-semibold">
                    <span>{review.location}</span>
                    <span>•</span>
                    <span className="text-brand-primary flex items-center gap-0.5">
                      <CheckCircle2 className="h-3 w-3 text-brand-light" />
                      {review.service}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Swipe/Slide Carousel */}
        <div className="lg:hidden max-w-lg mx-auto bg-white rounded-2xl p-6 md:p-8 border border-brand-primary/5 shadow-md relative">
          <Quote className="absolute top-6 right-6 h-10 w-10 text-brand-primary/5 pointer-events-none" />
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.35 }}
              className="flex flex-col justify-between"
            >
              <div>
                {/* Stars Rating row */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(REVIEWS[activeIndex].stars)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-brand-accent text-brand-accent" />
                  ))}
                </div>

                <p className="font-sans text-sm md:text-base text-gray-600 italic leading-relaxed mb-6">
                  "{REVIEWS[activeIndex].text}"
                </p>
              </div>

              <div className="flex items-center gap-3.5 border-t border-brand-primary/5 pt-4">
                <div className="h-10 w-10 rounded-full bg-brand-primary/10 border border-brand-light/10 flex items-center justify-center text-brand-primary font-display font-extrabold text-sm">
                  {REVIEWS[activeIndex].name[0]}
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-sm text-brand-dark">
                    {REVIEWS[activeIndex].name}
                  </h3>
                  <div className="flex items-center gap-1 text-[10px] text-gray-400 font-sans mt-0.5 font-semibold">
                    <span>{REVIEWS[activeIndex].location}</span>
                    <span>•</span>
                    <span className="text-brand-primary flex items-center gap-0.5">
                      <CheckCircle2 className="h-3 w-3 text-brand-light" />
                      {REVIEWS[activeIndex].service.split(" — ")[0]}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Dots controls row */}
          <div className="flex items-center justify-between mt-8 border-t border-brand-primary/5 pt-4">
            <div className="flex gap-1.5">
              {REVIEWS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === activeIndex ? "w-6 bg-brand-primary" : "w-2 bg-gray-200"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex gap-2">
              <button
                onClick={handlePrev}
                className="bg-brand-primary/5 hover:bg-brand-primary/10 p-2 rounded-full text-brand-primary transition-all cursor-pointer"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={handleNext}
                className="bg-brand-primary/5 hover:bg-brand-primary/10 p-2 rounded-full text-brand-primary transition-all cursor-pointer"
                aria-label="Next Slide"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
