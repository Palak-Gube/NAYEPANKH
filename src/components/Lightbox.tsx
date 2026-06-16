import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface Props {
  images: { src: string }[];
  index: number | null;
  onClose: () => void;
  onSelect: (i: number) => void;
}

export function Lightbox({ images, index, onClose, onSelect }: Props) {
  const open = index !== null;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onSelect(((index ?? 0) + 1) % images.length);
      if (e.key === "ArrowLeft")
        onSelect(((index ?? 0) - 1 + images.length) % images.length);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, index, images.length, onClose, onSelect]);

  return (
    <AnimatePresence>
      {open && index !== null && (
        <motion.div
          className="fixed inset-0 z-[90] flex items-center justify-center p-4 sm:p-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
        >
          {/* heavy shadow + blur backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/85 backdrop-blur-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* main image — pops out of grid */}
          <motion.img
            key={images[index].src}
            src={images[index].src}
            alt=""
            layoutId={`gallery-${index}`}
            className="relative z-10 max-h-[85vh] max-w-[92vw] rounded-2xl object-contain shadow-[0_40px_120px_-20px_rgba(0,0,0,0.9)]"
            style={{
              boxShadow:
                "0 50px 120px -20px rgba(0,0,0,0.9), 0 0 80px -20px color-mix(in oklab, var(--saffron) 35%, transparent)",
            }}
            transition={{ type: "spring", damping: 28, stiffness: 220 }}
            onClick={(e) => e.stopPropagation()}
          />

          {/* close */}
          <motion.button
            onClick={onClose}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="absolute right-5 top-5 z-20 grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/10 text-ivory backdrop-blur-md hover:border-saffron hover:text-saffron"
            aria-label="Close"
          >
            ✕
          </motion.button>

          {/* prev / next */}
          <NavBtn side="left" onClick={(e) => { e.stopPropagation(); onSelect((index - 1 + images.length) % images.length); }} />
          <NavBtn side="right" onClick={(e) => { e.stopPropagation(); onSelect((index + 1) % images.length); }} />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2 text-xs tracking-[0.3em] text-ivory/60 uppercase"
          >
            {index + 1} / {images.length}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function NavBtn({
  side,
  onClick,
}: {
  side: "left" | "right";
  onClick: (e: React.MouseEvent) => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`absolute top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-white/10 text-ivory backdrop-blur-md hover:border-saffron hover:text-saffron sm:grid ${
        side === "left" ? "left-5" : "right-5"
      }`}
      aria-label={side === "left" ? "Previous" : "Next"}
    >
      {side === "left" ? "‹" : "›"}
    </button>
  );
}
