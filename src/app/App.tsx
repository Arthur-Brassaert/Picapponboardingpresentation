import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, Maximize2, Grid3x3 } from "lucide-react";
import { slides, slideTitles } from "./components/slides";

export default function App() {
  const [i, setI] = useState(0);
  const [overview, setOverview] = useState(false);
  const [dir, setDir] = useState(1);

  const go = (n: number) => {
    if (n < 0 || n >= slides.length) return;
    setDir(n > i ? 1 : -1);
    setI(n);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") go(i + 1);
      else if (e.key === "ArrowLeft" || e.key === "PageUp") go(i - 1);
      else if (e.key === "Home") go(0);
      else if (e.key === "End") go(slides.length - 1);
      else if (e.key === "Escape") setOverview((v) => !v);
      else if (e.key === "f") tryFullscreen();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [i]);

  const tryFullscreen = () => {
    try {
      const el = document.documentElement as any;
      const req = el.requestFullscreen || el.webkitRequestFullscreen;
      req?.call(el)?.catch?.(() => {});
    } catch {}
  };

  const Current = slides[i];

  return (
    <div className="size-full bg-neutral-900 flex flex-col overflow-hidden">
      {/* Slide stage */}
      <div className="flex-1 relative">
        <AnimatePresence mode="wait" custom={dir}>
          <motion.div
            key={i}
            custom={dir}
            initial={{ opacity: 0, x: dir * 80, scale: 0.98 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -dir * 80, scale: 0.98 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className="absolute inset-0"
          >
            <Current />
          </motion.div>
        </AnimatePresence>

        {/* Slide number */}
        <div className="absolute top-6 right-8 text-white/50 text-sm tracking-widest z-10">
          {String(i + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
        </div>
      </div>

      {/* Controls */}
      <div className="bg-neutral-900 border-t border-neutral-800 px-6 py-3 flex items-center gap-4">
        <button
          onClick={() => go(i - 1)}
          disabled={i === 0}
          className="p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 disabled:opacity-30 text-white transition"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="flex-1 flex items-center gap-1.5">
          {slides.map((_, n) => (
            <button
              key={n}
              onClick={() => go(n)}
              className="flex-1 h-1.5 rounded-full overflow-hidden bg-neutral-700 hover:bg-neutral-600 transition"
            >
              <motion.div
                className="h-full bg-emerald-500"
                initial={false}
                animate={{ width: n < i ? "100%" : n === i ? "100%" : "0%" }}
                transition={{ duration: 0.4 }}
              />
            </button>
          ))}
        </div>

        <div className="text-white/70 text-sm min-w-[140px] text-center">
          {slideTitles[i]}
        </div>

        <button
          onClick={() => setOverview(true)}
          className="p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-white transition"
          title="Overview (Esc)"
        >
          <Grid3x3 className="w-5 h-5" />
        </button>
        <button
          onClick={tryFullscreen}
          className="p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-white transition"
          title="Fullscreen (F)"
        >
          <Maximize2 className="w-5 h-5" />
        </button>
        <button
          onClick={() => go(i + 1)}
          disabled={i === slides.length - 1}
          className="p-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 disabled:opacity-30 text-white transition"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Overview */}
      <AnimatePresence>
        {overview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-20 bg-neutral-950/95 backdrop-blur p-8 overflow-auto"
            onClick={() => setOverview(false)}
          >
            <div className="text-white/60 text-sm uppercase tracking-widest mb-6">
              All slides — click to jump
            </div>
            <div className="grid grid-cols-3 gap-6">
              {slides.map((S, n) => (
                <motion.div
                  key={n}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0, transition: { delay: n * 0.04 } }}
                  whileHover={{ scale: 1.03, y: -4 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    go(n);
                    setOverview(false);
                  }}
                  className={`relative aspect-video rounded-xl overflow-hidden cursor-pointer border-2 ${
                    n === i ? "border-emerald-500" : "border-neutral-800"
                  }`}
                >
                  <div className="absolute inset-0 origin-top-left scale-[0.25] w-[400%] h-[400%] pointer-events-none">
                    <S />
                  </div>
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-3 text-white">
                    <div className="text-xs opacity-60">{String(n + 1).padStart(2, "0")}</div>
                    <div className="text-sm">{slideTitles[n]}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
