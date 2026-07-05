import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight, MapPin, ZoomIn } from "lucide-react";

interface LightboxProps {
  images: { image: string; caption: string; location: string; size?: string }[];
  activeIndex: number | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export function Lightbox({
  images,
  activeIndex,
  onClose,
  onPrev,
  onNext,
}: LightboxProps) {
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeIndex === null) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, onClose, onPrev, onNext]);

  if (activeIndex === null) return null;

  const activeImage = images[activeIndex];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-brand-dark/95 backdrop-blur-md p-4 md:p-8"
        onClick={onClose}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all duration-300 z-50 cursor-pointer"
          aria-label="Close Lightbox"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Prev Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="absolute left-4 md:left-8 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 z-50 cursor-pointer"
          aria-label="Previous Image"
        >
          <ChevronLeft className="h-6 w-6 md:h-8 md:w-8" />
        </button>

        {/* Image Container */}
        <div
          className="relative max-w-5xl w-full max-h-[75vh] flex items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          <motion.img
            key={activeIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            src={activeImage.image}
            alt={activeImage.caption}
            referrerPolicy="no-referrer"
            className="max-w-full max-h-[75vh] object-contain rounded-xl border border-white/10 shadow-2xl"
          />
        </div>

        {/* Next Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-4 md:right-8 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 z-50 cursor-pointer"
          aria-label="Next Image"
        >
          <ChevronRight className="h-6 w-6 md:h-8 md:w-8" />
        </button>

        {/* Image Caption Metadata */}
        <motion.div
          key={`caption-${activeIndex}`}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 text-center text-white max-w-2xl px-4"
          onClick={(e) => e.stopPropagation()}
        >
          <h3 className="font-display font-bold text-lg md:text-xl text-brand-accent">
            {activeImage.caption}
          </h3>
          <div className="flex items-center justify-center gap-4 mt-2 text-sm text-gray-300 font-sans">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-brand-light" />
              {activeImage.location}
            </span>
            {activeImage.size && (
              <span className="bg-brand-primary/40 px-2.5 py-0.5 rounded-full border border-brand-light/30 text-xs">
                {activeImage.size}
              </span>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
