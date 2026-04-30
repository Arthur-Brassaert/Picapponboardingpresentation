import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useEffect, useRef } from "react";
import {
  Sparkles,
  Route,
  ShieldCheck,
  Wallet,
  UserCheck,
  Flag,
  Brain,
  Target,
  TrendingUp,
  Users,
  Car,
  Heart,
  Compass,
  Zap,
  Lightbulb,
  AlertTriangle,
  RefreshCw,
  CheckCircle2,
  Code2,
  GitMerge,
  Quote,
  Layers,
  HelpCircle,
  Map,
  ThumbsUp,
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 90, damping: 16 } },
  exit: { opacity: 0, y: -24 },
};

const stagger = (i: number) => ({
  initial: { opacity: 0, y: 24, scale: 0.96 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: 0.1 + i * 0.08, type: "spring", stiffness: 110, damping: 15 },
  },
  whileHover: {
    y: -6,
    scale: 1.03,
    transition: { type: "spring", stiffness: 300, damping: 18 },
  },
  whileTap: { scale: 0.98 },
});

const SlideShell = ({
  children,
  bg = "from-emerald-50 via-white to-teal-50",
}: {
  children: React.ReactNode;
  bg?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });
  const tx1 = useTransform(sx, (v) => v * 30);
  const ty1 = useTransform(sy, (v) => v * 30);
  const tx2 = useTransform(sx, (v) => v * -40);
  const ty2 = useTransform(sy, (v) => v * -40);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      mx.set((e.clientX - r.left) / r.width - 0.5);
      my.set((e.clientY - r.top) / r.height - 0.5);
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  const sparks = Array.from({ length: 8 });

  return (
    <div ref={ref} className={`relative w-full h-full overflow-hidden bg-gradient-to-br ${bg}`}>
      <motion.div
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-emerald-200/40 blur-3xl"
        style={{ x: tx1, y: ty1 }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-teal-200/40 blur-3xl"
        style={{ x: tx2, y: ty2 }}
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      {sparks.map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-white/60 mix-blend-overlay"
          style={{ left: `${(i * 13 + 7) % 100}%`, top: `${(i * 29 + 11) % 100}%` }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 0.8, 0],
            scale: [0.6, 1.2, 0.6],
          }}
          transition={{ duration: 4 + (i % 3), repeat: Infinity, delay: i * 0.4, ease: "easeInOut" }}
        />
      ))}
      <motion.div
        className="relative w-full h-full flex flex-col px-16 py-14"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.4 } }}
      >
        {children}
      </motion.div>
    </div>
  );
};

const Eyebrow = ({ color = "emerald", children }: { color?: string; children: React.ReactNode }) => (
  <motion.div {...fadeUp} className={`uppercase tracking-[0.3em] text-${color}-700`} style={{ fontSize: "1.5rem" }}>
    {children}
  </motion.div>
);

// 1 — Cover / Us & PicApp
export const SlideCover = () => {
  const team = [
    ["Omar", "Inholland · NL", "Non-functional · report"],
    ["Arthur", "VIVES · BE", "Prototype design + build"],
    ["Asmus", "Zealand · DK", "Gap analysis · system goals"],
    ["Léonard", "IUT · FR", "Planning · documentation"],
    ["Felicia", "Borås · SE", "Client liaison · problem definition & analysis"],
  ];
  return (
    <SlideShell bg="from-[#0F2419] via-[#1A7340] to-[#7DC493]">
      <div className="flex-1 flex flex-col justify-center text-white">
        <motion.div className="flex items-center gap-3 mb-6" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
          <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 3, repeat: Infinity }}>
            <Car className="w-10 h-10" />
          </motion.div>
          <span className="tracking-[0.4em] uppercase opacity-80">PicApp · BIP 2026 · Group 1</span>
        </motion.div>

        <motion.h1
          style={{ fontSize: "9rem", fontWeight: 700, lineHeight: 1 }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
        >
          PicApp
        </motion.h1>
        <motion.p
          className="mt-3 max-w-2xl opacity-95"
          style={{ fontSize: "3rem", lineHeight: 1.2 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.5 } }}
        >
          Event-based ride-sharing — and the team behind the onboarding.
        </motion.p>

        <div className="mt-10 grid grid-cols-5 gap-3">
          {team.map(([n, where, role], i) => (
            <motion.div key={n} {...stagger(i)} className="rounded-xl bg-white/10 backdrop-blur p-4 border border-white/15">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mb-2" style={{ fontWeight: 600 }}>
                {n[0]}
              </div>
              <div style={{ fontWeight: 600, fontSize: "1.5rem" }}>{n}</div>
              <div className="opacity-80" style={{ fontSize: "1.2rem" }}>{where}</div>
              <div className="opacity-70 mt-1" style={{ fontSize: "1.15rem" }}>{role}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 1 } }}
          className="mt-16 flex gap-8 opacity-90"
          style={{ fontSize: "1.5rem" }}
        >
          <div><span className="opacity-60">Client</span> · Per Anders Hovbom (PicApp Sweden AB)</div>
          <div><span className="opacity-60">Coach</span> · Jan Willem Crabbendam (Inholland)</div>
        </motion.div>
      </div>

      <div className="absolute bottom-2 left-0 right-0 h-16 overflow-hidden">
        <div
          className="absolute top-1/2 left-0 right-0 h-1 bg-white/40"
          style={{ backgroundImage: "repeating-linear-gradient(90deg, white 0 30px, transparent 30px 60px)" }}
        />
        <motion.div
          className="absolute top-1/2 -translate-y-1/2"
          animate={{ x: ["-10%", "110%"] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        >
          <Car className="w-10 h-10 text-white" />
        </motion.div>
      </div>
    </SlideShell>
  );
};

// 2 — Problem definition
export const SlideProblem = () => (
  <SlideShell bg="from-rose-50 via-white to-amber-50">
    <Eyebrow color="rose">Problem definition</Eyebrow>
    <motion.h2
      {...fadeUp}
      transition={{ delay: 0.1 }}
      style={{ fontSize: "5.5rem", fontWeight: 600, lineHeight: 1.1 }}
      className="mt-3"
    >
      Users sign up. And then —{" "}
      <span style={{ color: "#1A7340" }}>nothing.</span>
    </motion.h2>

    <motion.p
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
      className="mt-6 text-neutral-500 max-w-3xl"
      style={{ fontSize: "2.5rem" }}
    >
      The issue is not getting users to sign up — it's what happens next.
    </motion.p>

    <div className="mt-10 grid grid-cols-3 gap-4 flex-1">
      {[
        ["Low user growth", "Limited number of new and returning users"],
        ["Low activation", "Users sign up but don't take their first action"],
        ["High early drop-off", "Users leave before engaging with the platform"],
      ].map(([t, s], i) => (
        <motion.div
          key={t}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.5 + i * 0.12 } }}
          className="rounded-2xl bg-white p-6 shadow-md border border-rose-100"
        >
          <AlertTriangle className="w-12 h-12 mb-3" style={{ color: "#1A7340" }} />
          <div style={{ fontWeight: 600, fontSize: "2rem" }}>{t}</div>
          <div className="text-neutral-600 mt-1" style={{ fontSize: "1.5rem" }}>{s}</div>
        </motion.div>
      ))}
    </div>
  </SlideShell>
);

// 3 — Data / facts / statistics
export const SlideData = () => (
  <SlideShell bg="from-amber-50 via-white to-orange-50">
    <Eyebrow color="amber">numbers/context</Eyebrow>
    <motion.h2 {...fadeUp} transition={{ delay: 0.1 }} style={{ fontSize: "5rem", fontWeight: 600 }} className="mt-3">
      Where PicApp stands today.
    </motion.h2>

    <div className="mt-10 grid grid-cols-2 gap-6 flex-1">
      {[
        { n: "150", l: "registered users" },
        { n: "0", l: "user insights or analytics" },
        { n: "Low", l: "user activity" },
        { n: "Early-stage", l: "company" },
      ].map((s, i) => (
        <motion.div
          key={s.l}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1, transition: { delay: 0.2 + i * 0.1 } }}
          className="rounded-2xl bg-white p-6 shadow-md border border-amber-100"
        >
          <motion.div
            style={{ fontSize: "5rem", fontWeight: 700, lineHeight: 1, color: "#1A7340" }}
            initial={{ scale: 0.5 }}
            animate={{ scale: 1, transition: { delay: 0.4 + i * 0.1, type: "spring" } }}
          >
            {s.n}
          </motion.div>
          <div className="mt-2" style={{ fontWeight: 600, fontSize: "1.75rem" }}>{s.l}</div>
        </motion.div>
      ))}
    </div>
  </SlideShell>
);

// 4 — Our ideas / why they didn't work
export const SlideEarlyIdeas = () => {
  const ideas = [
    { t: "Predictive matching", why: "Needs behavioural data PicApp doesn't yet collect" },
    { t: "Live event map", why: "Future-tech — out of scope per client" },
    { t: "City competition", why: "Engagement layer for users who already get it" },
    { t: "Invite-and-earn", why: "Drives acquisition, not usage" },
    { t: "Driver profiles v2", why: "Existing flow already works" },
    { t: "Add-on integrations", why: "Adds features before users understand the basics" },
  ];
  return (
    <SlideShell bg="from-sky-50 via-white to-indigo-50">
      <Eyebrow color="sky">Phase 1 — Broad ideation</Eyebrow>
      <motion.h2 {...fadeUp} transition={{ delay: 0.1 }} style={{ fontSize: "5rem", fontWeight: 600 }} className="mt-3">
        We had big ideas. <span style={{ color: "#1A7340" }}>Most didn't survive.</span>
      </motion.h2>

      <div className="mt-10 grid grid-cols-3 gap-4 flex-1">
        {ideas.map((it, i) => (
          <motion.div
            key={it.t}
            initial={{ opacity: 0, rotate: -2, y: 20 }}
            animate={{ opacity: 1, rotate: 0, y: 0, transition: { delay: 0.2 + i * 0.08 } }}
            whileHover={{ rotate: 1, scale: 1.02 }}
            className="rounded-2xl bg-white p-5 shadow-md border border-sky-100 relative"
          >
            <div className="flex items-center gap-2 mb-2">
              <Lightbulb className="w-9 h-9" style={{ color: "#1A7340" }} />
              <div style={{ fontWeight: 600, fontSize: "1.65rem" }}>{it.t}</div>
            </div>
            <div className="text-neutral-600" style={{ fontSize: "1.4rem" }}>{it.why}</div>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "85%", transition: { delay: 0.6 + i * 0.08, duration: 0.4 } }}
              className="absolute top-1/2 left-4 h-1 bg-[#DC2626] origin-left -rotate-2"
            />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 1.1 } }}
        className="mt-6 text-neutral-600"
        style={{ fontSize: "1.75rem" }}
      >
        These were <em>radical</em> innovations — they assumed data and scale PicApp doesn't yet have.
        We were building for a future user, not the one signing up today.
      </motion.div>
    </SlideShell>
  );
};

// 5 — The step back
export const SlideStepBack = () => (
  <SlideShell bg="from-neutral-50 via-white to-violet-50">
    <Eyebrow color="violet">The crisis meeting</Eyebrow>
    <motion.h2 {...fadeUp} transition={{ delay: 0.1 }} style={{ fontSize: "5rem", fontWeight: 600, lineHeight: 1.05 }} className="mt-3">
      More features ≠ more active users — <span style={{ color: "#1A7340" }}>without user understanding.</span>
    </motion.h2>

    <div className="mt-12 grid grid-cols-2 gap-8 flex-1">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0, transition: { delay: 0.3 } }}
        className="rounded-3xl bg-white p-8 shadow-xl border border-violet-100"
      >
        <div className="flex items-center gap-3 mb-4">
          <RefreshCw className="w-10 h-10" style={{ color: "#1A7340" }} />
          <div style={{ fontSize: "2.5rem", fontWeight: 600 }}>Our shift</div>
        </div>
        <div className="space-y-4">
          {[
            ["From", "Big new features"],
            ["To", "First-use experience"],
            ["From", "Radical innovation"],
            ["To", "Incremental, real value"],
            ["From", "What could we build?"],
            ["To", "What does the user actually face?"],
          ].map(([k, v], i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0, transition: { delay: 0.5 + i * 0.1 } }}
              className="flex gap-3"
            >
              <div className="uppercase tracking-wider w-20" style={{ fontWeight: 600, color: k === "From" ? "#DC2626" : "#1A7340", fontSize: "1.3rem" }}>
                {k}
              </div>
              <div className="text-neutral-700" style={{ fontSize: "1.6rem" }}>{v}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0, transition: { delay: 0.4 } }}
        className="rounded-3xl bg-violet-600 text-white p-8 shadow-xl flex flex-col justify-center"
      >
        <HelpCircle className="w-14 h-14 mb-4 opacity-80" />
        <div style={{ fontSize: "2.5rem", fontWeight: 600 }} className="mb-3">
          The questions we put back at the centre
        </div>
        <div className="space-y-2 opacity-95" style={{ fontSize: "1.6rem" }}>
          {[
            "How does a new user get started?",
            "What is the first action we want them to take?",
            "How do we guide users to that action?",
            "What prevents users from taking the first step?",
          ].map((q, i) => (
            <motion.div
              key={q}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0, transition: { delay: 0.6 + i * 0.12 } }}
              className="flex gap-2"
            >
              <span className="opacity-60">›</span> {q}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </SlideShell>
);

// 6 — Realization: no onboarding
export const SlideRealization = () => (
  <SlideShell bg="from-[#1A7340] via-[#1A7340] to-[#7DC493]">
    <div className="flex-1 flex flex-col justify-center text-white">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="uppercase tracking-[0.3em] opacity-80" style={{ fontSize: "1.5rem" }}>
        The realization
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
        style={{ fontSize: "7.5rem", fontWeight: 700, lineHeight: 1 }}
        className="mt-4"
      >
        PicApp doesn't have an onboarding.
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 1.1 } }}
        className="mt-8 max-w-3xl opacity-95"
        style={{ fontSize: "2.75rem", lineHeight: 1.3 }}
      >
        Users don't understand how to use what's already there.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 1.4 } }}
        className="mt-10 inline-flex items-center gap-3 bg-white/15 backdrop-blur rounded-full px-6 py-3 w-fit border border-white/20"
        style={{ fontSize: "1.85rem" }}
      >
        <CheckCircle2 className="w-9 h-9" />
        Solution defined: a guided first-use journey.
      </motion.div>
    </div>
  </SlideShell>
);

// 7 — Why onboarding + why it works (merged)
export const SlideWhy = () => {
  return (
    <SlideShell bg="from-violet-50 via-white to-emerald-50">
      <Eyebrow color="violet">Why onboarding?</Eyebrow>
      <motion.h2 {...fadeUp} transition={{ delay: 0.1 }} style={{ fontSize: "4.75rem", fontWeight: 600 }} className="mt-3">
        Two theories. <span style={{ color: "#1A7340" }}>One clear direction.</span>
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
        className="mt-5 rounded-xl bg-[#DC2626] text-white px-6 py-4 shadow-md flex items-center gap-4"
      >
        <div className="flex items-center gap-2 uppercase tracking-widest opacity-90 shrink-0" style={{ fontSize: "1.3rem" }}>
          <AlertTriangle className="w-7 h-7" />
          Cost of no onboarding
        </div>
        <div className="flex gap-6 flex-1">
          {[
            { v: "70–90%", l: "first-session drop" },
            { v: "90%", l: "churn in week 1" },
            { v: "77% / 90%", l: "lost at 3 / 30 days" },
          ].map((s) => (
            <div key={s.l} className="flex items-baseline gap-2">
              <div style={{ fontSize: "2rem", fontWeight: 700 }}>{s.v}</div>
              <div className="opacity-90" style={{ fontSize: "1.3rem" }}>{s.l}</div>
            </div>
          ))}
        </div>
        <div className="opacity-70 shrink-0" style={{ fontSize: "1.1rem" }}>Localytics · Quettra · Appcues</div>
      </motion.div>

      <div className="mt-6 grid grid-cols-2 gap-6 flex-1">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0, transition: { delay: 0.25 } }}
          className="rounded-2xl bg-white p-7 shadow-md border border-violet-100 flex flex-col"
        >
          <div className="flex items-center gap-3 mb-2">
            <Brain className="w-11 h-11" style={{ color: "#1A7340" }} />
            <div style={{ fontWeight: 600, fontSize: "2.25rem" }}>Self-Determination Theory</div>
          </div>
          <div className="text-neutral-500 mb-4" style={{ fontSize: "1.3rem" }}>Deci & Ryan, 1985</div>
          <div className="grid grid-cols-3 gap-2 mb-4">
            {["Autonomy", "Competence", "Relatedness"].map((n) => (
              <div key={n} className="bg-[#EBF5EE] rounded-lg p-3 text-center" style={{ fontWeight: 600, color: "#1A7340", fontSize: "1.5rem" }}>{n}</div>
            ))}
          </div>
          <div className="text-neutral-700" style={{ fontSize: "1.6rem" }}>
            People stay engaged when they feel in control, capable, and connected — exactly what good onboarding delivers.
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0, transition: { delay: 0.4 } }}
          className="rounded-2xl bg-white p-7 shadow-md border border-[#F5F3FF] flex flex-col"
        >
          <div className="flex items-center gap-3 mb-2">
            <Compass className="w-11 h-11 text-[#7C3AED]" />
            <div style={{ fontWeight: 600, fontSize: "2.25rem" }}>The Zeigarnik Effect</div>
          </div>
          <div className="text-neutral-500 mb-4" style={{ fontSize: "1.3rem" }}>Zeigarnik, 1927</div>
          <div className="bg-[#F5F3FF] text-[#7C3AED] rounded-lg p-4 mb-4" style={{ fontWeight: 600, fontSize: "1.6rem" }}>
            Unfinished tasks pull us forward.
          </div>
          <div className="text-neutral-700" style={{ fontSize: "1.6rem" }}>
            A visible road creates motion. Each completed stop is a small reward — and the open ones quietly demand closure.
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.7 } }}
        className="mt-5 rounded-xl bg-[#1A7340] text-white px-6 py-4 shadow-md flex items-center gap-3"
      >
        <Sparkles className="w-9 h-9 shrink-0" />
        <div style={{ fontSize: "1.65rem" }}>
          <span style={{ fontWeight: 600 }}>Together:</span> users feel guided <em>and</em> motivated to finish — the foundation of activation.
        </div>
      </motion.div>
    </SlideShell>
  );
};

// 9 — Show prototype 1 and 2
export const SlidePrototypesShow = () => (
  <SlideShell bg="from-white via-emerald-50/40 to-teal-50">
    <Eyebrow color="emerald">The two prototypes</Eyebrow>
    <motion.h2 {...fadeUp} transition={{ delay: 0.1 }} style={{ fontSize: "5rem", fontWeight: 600 }} className="mt-3">
      Two takes on the same problem.
    </motion.h2>

    <div className="mt-10 grid grid-cols-2 gap-8 flex-1">
      <motion.div
        initial={{ opacity: 0, x: -40, rotate: -3 }}
        animate={{ opacity: 1, x: 0, rotate: -2, transition: { delay: 0.2 } }}
        whileHover={{ rotate: 0, scale: 1.02 }}
        className="rounded-3xl bg-white shadow-2xl border border-neutral-200 p-6 flex flex-col"
      >
        <div className="flex items-center justify-between mb-3">
          <div className="uppercase tracking-widest text-neutral-500" style={{ fontSize: "1.3rem" }}>Prototype 1</div>
          <Layers className="w-9 h-9 text-neutral-400" />
        </div>
        <div style={{ fontSize: "2.75rem", fontWeight: 600 }}>The traditional</div>
        <div className="text-neutral-500 mt-1" style={{ fontSize: "1.6rem" }}>Familiar onboarding pattern</div>

        {/* Prototype 1 screenshot */}
        <div className="mt-4 flex-1 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1, transition: { delay: 0.4 } }}
            className="rounded-xl overflow-hidden shadow-lg border border-neutral-200"
          >
            <img
              src="/src/imports/image-1.png"
              alt="Traditional onboarding prototype"
              className="w-full h-auto"
              style={{ maxHeight: "400px" }}
            />
          </motion.div>
        </div>

      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 40, rotate: 3 }}
        animate={{ opacity: 1, x: 0, rotate: 2, transition: { delay: 0.3 } }}
        whileHover={{ rotate: 0, scale: 1.02 }}
        className="rounded-3xl bg-[#1A7340] text-white shadow-2xl p-6 flex flex-col"
      >
        <div className="flex items-center justify-between mb-3">
          <div className="uppercase tracking-widest opacity-80" style={{ fontSize: "1.3rem" }}>Prototype 2</div>
          <Map className="w-9 h-9 opacity-80" />
        </div>
        <div style={{ fontSize: "2.75rem", fontWeight: 600 }}>The unconventional</div>
        <div className="opacity-80 mt-1" style={{ fontSize: "1.6rem" }}>A road trip with a moving car</div>

        {/* Prototype 2 screenshot */}
        <div className="mt-4 flex-1 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1, transition: { delay: 0.5 } }}
            className="rounded-xl overflow-hidden shadow-lg border border-white/20"
          >
            <img
              src="/src/imports/image-2.png"
              alt="Road trip prototype with moving car"
              className="w-full h-auto"
              style={{ maxHeight: "400px" }}
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  </SlideShell>
);

// 10 — Why these prototypes / Per liked both
export const SlidePrototypesWhy = () => (
  <SlideShell bg="from-amber-50 via-white to-emerald-50">
    <Eyebrow color="amber">Client feedback</Eyebrow>
    <motion.h2 {...fadeUp} transition={{ delay: 0.1 }} style={{ fontSize: "5rem", fontWeight: 600 }} className="mt-3">
      Per liked both. <span style={{ color: "#1A7340" }}>"Combine them."</span>
    </motion.h2>

    <div className="mt-10 grid grid-cols-2 gap-6 flex-1">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
        className="rounded-2xl bg-white p-6 shadow-md border border-neutral-200 flex flex-col"
      >
        <div className="flex items-center gap-2 mb-4">
          <ThumbsUp className="w-9 h-9" style={{ color: "#1A7340" }} />
          <div style={{ fontWeight: 600, fontSize: "2.1rem" }}>Why the traditional works</div>
        </div>
        <div className="flex-1 flex flex-col justify-around text-neutral-700" style={{ fontSize: "1.85rem" }}>
          {[
            "Familiar UX — no learning curve",
            "Clear progress signal",
            "Low risk to ship in Vue 3",
            "Maps cleanly to existing app patterns",
          ].map((s, i) => (
            <motion.div
              key={s}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0, transition: { delay: 0.4 + i * 0.08 } }}
              className="flex gap-3"
            >
              <CheckCircle2 className="w-7 h-7 mt-0.5 shrink-0" style={{ color: "#1A7340" }} /> {s}
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
        className="rounded-2xl bg-[#1A7340] text-white p-6 shadow-xl flex flex-col"
      >
        <div className="flex items-center gap-2 mb-4">
          <ThumbsUp className="w-9 h-9" />
          <div style={{ fontWeight: 600, fontSize: "2.1rem" }}>Why the unconventional works</div>
        </div>
        <div className="flex-1 flex flex-col justify-around" style={{ fontSize: "1.85rem" }}>
          {[
            "Storytelling holds attention — fights skip behaviour",
            "Visible road = built-in Zeigarnik pull",
            "Emotional fit with PicApp's product (a journey)",
            "Memorable — users actually remember what they learned",
          ].map((s, i) => (
            <motion.div
              key={s}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0, transition: { delay: 0.5 + i * 0.08 } }}
              className="flex gap-3"
            >
              <CheckCircle2 className="w-7 h-7 mt-0.5 shrink-0" /> {s}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>

    <motion.blockquote
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 1 } }}
      className="mt-6 border-l-4 pl-6 italic text-neutral-700 max-w-3xl"
      style={{ borderLeftColor: "#1A7340", fontSize: "1.4rem" }}
    >
      "I like both — can you combine them?"
      <span className="not-italic text-neutral-500 ml-2" style={{ fontSize: "1.1rem" }}>— Per Anders Hovbom</span>
    </motion.blockquote>
  </SlideShell>
);

// 11 — Merged prototype
export const SlideMerged = () => {
  const stops = [
    { n: 1, t: "What is PicApp?", icon: Sparkles, c: "emerald" },
    { n: 2, t: "How it works", icon: Route, c: "teal" },
    { n: 3, t: "Safety & trust", icon: ShieldCheck, c: "cyan" },
    { n: 4, t: "Pricing", icon: Wallet, c: "sky" },
    { n: 5, t: "Your role", icon: UserCheck, c: "indigo" },
    { n: 6, t: "Ready to ride", icon: Flag, c: "violet" },
  ];
  return (
    <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      {/* Background effects from SlideShell */}
      <motion.div
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-emerald-200/40 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-teal-200/40 blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      {/* Prototype screenshot - full height on right */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0, transition: { delay: 0.6 } }}
        className="absolute top-0 right-8 h-full flex items-center z-10"
      >
        <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-[#7DC493] bg-white">
          <img
            src="/src/imports/image.png"
            alt="Live prototype"
            className="h-full w-auto"
            style={{ height: "calc(100vh - 60px)", maxHeight: "660px" }}
          />
        </div>
      </motion.div>

      {/* Left content area */}
      <div className="relative h-full flex flex-col px-16 py-14" style={{ width: "65%" }}>
        <div className="flex items-center gap-3">
          <Eyebrow color="emerald">The merged prototype</Eyebrow>
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1, transition: { delay: 0.2 } }}>
            <GitMerge className="w-5 h-5" style={{ color: "#1A7340" }} />
          </motion.div>
        </div>
        <motion.h2 {...fadeUp} transition={{ delay: 0.1 }} style={{ fontSize: "5rem", fontWeight: 600 }} className="mt-3 mb-6">
          Six stops. One road.
        </motion.h2>

        {/* Vertical road flow - all 6 stops */}
        <div className="flex-1 relative min-h-0">
          <svg viewBox="0 0 300 600" className="absolute inset-0 w-full h-full">
            <motion.path
              d="M 60 40 Q 90 90, 70 140 Q 50 190, 80 240 Q 110 290, 85 340 Q 60 390, 85 440 Q 110 490, 90 540"
              stroke="#1A7340"
              strokeWidth="6"
              fill="none"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2.5 }}
            />
            <motion.path
              d="M 60 40 Q 90 90, 70 140 Q 50 190, 80 240 Q 110 290, 85 340 Q 60 390, 85 440 Q 110 490, 90 540"
              stroke="white"
              strokeWidth="2.5"
              strokeDasharray="12 15"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2.5 }}
            />
          </svg>

          <div className="absolute inset-0">
            {stops.map((s, i) => {
              const Icon = s.icon;
              const positions = [
                { top: "3%", left: "14%" },
                { top: "19%", left: "18%" },
                { top: "35%", left: "11%" },
                { top: "51%", left: "22%" },
                { top: "67%", left: "13%" },
                { top: "87%", left: "24%" },
              ];
              return (
                <motion.div
                  key={s.n}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1, transition: { delay: 0.5 + i * 0.12, type: "spring" } }}
                  className="absolute flex items-center gap-3"
                  style={{ top: positions[i].top, left: positions[i].left }}
                >
                  <motion.div
                    className={`w-16 h-16 rounded-2xl bg-white shadow-xl flex items-center justify-center text-${s.c}-600 border-2 border-${s.c}-200`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 2 + i * 0.3, repeat: Infinity }}
                  >
                    <Icon className="w-7 h-7" />
                  </motion.div>
                  <div className="bg-white/90 backdrop-blur rounded-lg px-3 py-2 shadow-md">
                    <div className="text-neutral-500" style={{ fontSize: "1.15rem" }}>Stop {s.n}</div>
                    <div style={{ fontWeight: 600, fontSize: "1.45rem" }}>{s.t}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Details at bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 2 } }}
          className="grid grid-cols-1 gap-2 text-neutral-600 mt-4"
        >
          {[
            ["Familiar style", "PicApp's colours and language"],
            ["Interactive metaphor", "The car moves with the user"],
            ["Decisive ending", "Setup complete — start exploring"],
          ].map(([t, s]) => (
            <div key={t} className="bg-white/60 rounded-lg p-3 backdrop-blur flex gap-2" style={{ fontSize: "1.45rem" }}>
              <div style={{ fontWeight: 600, color: "#1A7340" }}>•</div>
              <div>
                <span style={{ fontWeight: 600 }} className="text-neutral-800">{t}:</span> {s}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

// 9 — Video demo
export const SlideVideo = () => (
  <SlideShell bg="from-neutral-900 via-neutral-800 to-neutral-900">
    <div className="flex-1 flex flex-col text-white pt-2 pb-4">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
        style={{ fontSize: "5rem", fontWeight: 700, lineHeight: 1 }}
        className="text-center mb-4"
      >
        See it in action.
      </motion.h2>

      {/* Video container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1, transition: { delay: 0.4 } }}
        className="relative mx-auto rounded-2xl overflow-hidden shadow-2xl border-4 border-[#1A7340]"
        style={{ height: "calc(100% - 80px)", width: "auto" }}
      >
        <video
          className="h-full w-auto object-contain"
          controls
          autoPlay
          loop
          muted
        >
          <source src="/src/imports/2026-04-30_11-38-46_(online-video-cutter.com).mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>
    </div>
  </SlideShell>
);

// 12 — We started to code it
export const SlideCode = () => (
  <SlideShell bg="from-neutral-50 via-white to-sky-50">
    <Eyebrow color="sky">Coding the final prototype</Eyebrow>
    <motion.h2 {...fadeUp} transition={{ delay: 0.1 }} style={{ fontSize: "4.5rem", fontWeight: 600 }} className="mt-3">
      We started building it — in two formats.
    </motion.h2>

    <div className="mt-10 grid grid-cols-2 gap-6 flex-1">
      {[
        { n: "Vue 3", d: "Web-based onboarding with progressive components", c: "emerald" },
        { n: "Kotlin", d: "Native Android app experience", c: "indigo" },
      ].map((t, i) => (
        <motion.div
          key={t.n}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.2 + i * 0.12 } }}
          className="rounded-2xl bg-white p-6 shadow-md border border-neutral-200 flex flex-col"
        >
          <Code2 className="w-11 h-11 mb-3" style={{ color: "#1A7340" }} />
          <div style={{ fontSize: "2.75rem", fontWeight: 700 }}>{t.n}</div>
          <div className="text-neutral-600 mt-2" style={{ fontSize: "1.6rem" }}>{t.d}</div>
        </motion.div>
      ))}
    </div>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.7 } }}
      className="mt-8 rounded-2xl bg-[#0F2419] text-[#7DC493] p-6 font-mono shadow-xl"
      style={{ fontSize: "1.35rem" }}
    >
      <div className="flex items-center gap-2 text-neutral-400 mb-3" style={{ fontSize: "1.15rem" }}>
        <span className="ml-2">OnboardingRoad.vue</span>
      </div>
      <div className="space-y-1">
        {[
          "<template>",
          "  <RoadProgress :stop=\"current\" :total=\"6\" />",
          "  <component :is=\"stops[current]\" @next=\"advance\" />",
          "</template>",
        ].map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0, transition: { delay: 1 + i * 0.1 } }}
          >
            {line}
          </motion.div>
        ))}
      </div>
    </motion.div>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 1.6 } }}
      className="mt-4 text-neutral-500"
      style={{ fontSize: "1.45rem" }}
    >
      Our approach: add road with car · add in the tiles · make tiles clickable · apply all information. Extra's: smoothed onboarding animation · implemented new homepage
    </motion.div>
  </SlideShell>
);

// 13 — Project management / teamwork
export const SlideTeamwork = () => (
  <SlideShell bg="from-violet-50 via-white to-fuchsia-50">
    <Eyebrow color="violet">How we worked</Eyebrow>
    <motion.h2 {...fadeUp} transition={{ delay: 0.1 }} style={{ fontSize: "4.5rem", fontWeight: 600 }} className="mt-3">
      Five countries. One project. Honest reflections.
    </motion.h2>

    <div className="mt-10 grid grid-cols-3 gap-6 flex-1">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
        className="rounded-2xl bg-white p-6 shadow-md border border-emerald-100 flex flex-col"
      >
        <div className="uppercase tracking-widest mb-4" style={{ color: "#1A7340", fontSize: "1.4rem" }}>What worked</div>
        <div className="flex-1 flex flex-col justify-around text-neutral-700" style={{ fontSize: "1.75rem" }}>
          {[
            "Strong, open communication",
            "Everyone owned their slice",
            "Five backgrounds = better solutions",
            "Iterative cycles late in the project",
          ].map((s) => (
            <div key={s} className="flex gap-3">
              <CheckCircle2 className="w-7 h-7 mt-0.5 shrink-0" style={{ color: "#1A7340" }} /> {s}
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.35 } }}
        className="rounded-2xl bg-white p-6 shadow-md border border-amber-100 flex flex-col"
      >
        <div className="uppercase tracking-widest mb-4" style={{ color: "#1A7340", fontSize: "1.4rem" }}>What was hard</div>
        <div className="flex-1 flex flex-col justify-around text-neutral-700" style={{ fontSize: "1.75rem" }}>
          {[
            "Open brief — slow to find direction",
            "Time spent on infeasible ideas",
            "Different working styles across cultures",
            "Late client validation on early ideas",
          ].map((s) => (
            <div key={s} className="flex gap-3">
              <AlertTriangle className="w-7 h-7 mt-0.5 shrink-0" style={{ color: "#1A7340" }} /> {s}
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.5 } }}
        className="rounded-2xl bg-violet-600 text-white p-6 shadow-xl flex flex-col"
      >
        <div className="uppercase tracking-widest opacity-80 mb-4" style={{ fontSize: "1.4rem" }}>Next time</div>
        <div className="flex-1 flex flex-col justify-around" style={{ fontSize: "1.75rem" }}>
          {[
            "Establish a clearer project plan from the start",
            "Have more frequent internal team meetings",
            "Spend more time on analysis before ideation",
            "Align early on what problem we are solving",
          ].map((s) => (
            <div key={s} className="flex gap-3">
              <RefreshCw className="w-7 h-7 mt-0.5 shrink-0" /> {s}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </SlideShell>
);

// 14 — Recommendations for PicApp
export const SlideClosing = () => (
  <SlideShell bg="from-emerald-600 via-emerald-700 to-teal-800">
    <div className="flex-1 flex flex-col text-white">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="uppercase tracking-[0.3em] opacity-80" style={{ fontSize: "1.5rem" }}>
        Recommendations for PicApp
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
        style={{ fontSize: "5.5rem", fontWeight: 700, lineHeight: 1.05 }}
        className="mt-3"
      >
        What's next for PicApp?
      </motion.div>

      <div className="mt-10 grid grid-cols-2 gap-6 flex-1">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0, transition: { delay: 0.4 } }}
          className="rounded-2xl bg-white/10 backdrop-blur border border-white/20 p-6"
        >
          <div className="flex items-center gap-2 mb-4">
            <Target className="w-10 h-10" />
            <div style={{ fontSize: "2.5rem", fontWeight: 600 }}>Immediate actions</div>
          </div>
          <div className="space-y-3" style={{ fontSize: "1.6rem" }}>
            {[
              "Ship the onboarding flow in the current Vue 3 stack",
              "Track completion rate and time-to-first-action",
              "Collect user feedback during the journey",
              "A/B test traditional vs. road-trip metaphor",
            ].map((s, i) => (
              <motion.div
                key={s}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0, transition: { delay: 0.6 + i * 0.1 } }}
                className="flex gap-2"
              >
                <CheckCircle2 className="w-6 h-6 mt-0.5 shrink-0 opacity-80" /> {s}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0, transition: { delay: 0.5 } }}
          className="rounded-2xl bg-white/10 backdrop-blur border border-white/20 p-6"
        >
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-10 h-10" />
            <div style={{ fontSize: "2.5rem", fontWeight: 600 }}>Medium-term priorities</div>
          </div>
          <div className="space-y-3" style={{ fontSize: "1.6rem" }}>
            {[
              "Build analytics to understand user behaviour",
              "Iterate on onboarding based on real data",
              "Expand activation metrics beyond first login",
              "Consider personalizing the journey per user type",
            ].map((s, i) => (
              <motion.div
                key={s}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0, transition: { delay: 0.7 + i * 0.1 } }}
                className="flex gap-2"
              >
                <Zap className="w-6 h-6 mt-0.5 shrink-0 opacity-80" /> {s}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.6 } }}
          className="rounded-2xl bg-white/10 backdrop-blur border border-white/20 p-6 col-span-2"
        >
          <div className="flex items-center gap-2 mb-4">
            <Lightbulb className="w-10 h-10" />
            <div style={{ fontSize: "2.5rem", fontWeight: 600 }}>Long-term vision</div>
          </div>
          <div className="grid grid-cols-3 gap-4" style={{ fontSize: "1.6rem" }}>
            {[
              "Revisit advanced features once activation is solved",
              "Use onboarding data to inform product roadmap",
              "Scale onboarding content as PicApp grows",
            ].map((s, i) => (
              <motion.div
                key={s}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0, transition: { delay: 0.8 + i * 0.1 } }}
                className="flex gap-2"
              >
                <Map className="w-6 h-6 mt-0.5 shrink-0 opacity-80" /> {s}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 1.2 } }}
        className="mt-6 flex items-center justify-between"
      >
        <div className="flex -space-x-2">
          {["O", "A", "A", "L", "F"].map((c, i) => (
            <div key={i} className="w-10 h-10 rounded-full bg-white/20 backdrop-blur border-2 border-emerald-700 flex items-center justify-center text-sm">
              {c}
            </div>
          ))}
        </div>
        <div className="text-right">
          <div style={{ fontWeight: 600, fontSize: "2.25rem" }}>Thank you.</div>
          <div className="opacity-80" style={{ fontSize: "1.6rem" }}>Group 1 · BIP 2026 · Bruges · Questions?</div>
        </div>
      </motion.div>
    </div>

    <div className="absolute bottom-2 left-0 right-0 h-12 overflow-hidden">
      <div
        className="absolute top-1/2 left-0 right-0 h-1 bg-emerald-300/40"
        style={{ backgroundImage: "repeating-linear-gradient(90deg, #a7f3d0 0 30px, transparent 30px 60px)" }}
      />
      <motion.div
        className="absolute top-1/2 -translate-y-1/2"
        initial={{ x: "-5%" }}
        animate={{ x: "calc(100vw - 60px)" }}
        transition={{ duration: 5, ease: "easeOut" }}
      >
        <Car className="w-10 h-10" style={{ color: "#7DC493" }} />
      </motion.div>
      <motion.div
        className="absolute top-1/2 right-12 -translate-y-1/2"
        initial={{ scale: 0 }}
        animate={{ scale: 1, transition: { delay: 4.5 } }}
      >
        <Flag className="w-10 h-10" style={{ color: "#1A7340" }} />
      </motion.div>
    </div>
  </SlideShell>
);

// 14 — Reflection
export const SlideReflection = () => (
  <SlideShell bg="from-sky-50 via-white to-violet-50">
    <Eyebrow color="sky">Looking back</Eyebrow>
    <motion.h2 {...fadeUp} transition={{ delay: 0.1 }} style={{ fontSize: "5rem", fontWeight: 600 }} className="mt-3">
      What we'd do differently.
    </motion.h2>

    <div className="mt-10 flex-1 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
        className="rounded-2xl bg-white border border-sky-200 p-8 shadow-xl max-w-4xl"
      >
        <div className="flex items-center gap-3 mb-6">
          <RefreshCw className="w-7 h-7" style={{ color: "#1A7340" }} />
          <div style={{ fontWeight: 600, fontSize: "1.5rem", color: "#0F2419" }}>What we'd do differently</div>
        </div>
        <div className="space-y-4 text-neutral-700" style={{ fontSize: "1.15rem", lineHeight: 1.6 }}>
          <div className="flex gap-3">
            <div className="shrink-0" style={{ fontSize: "1.5rem", color: "#1A7340" }}>•</div>
            <div>Establish a clearer project plan early and follow it more consistently</div>
          </div>
          <div className="flex gap-3">
            <div className="shrink-0" style={{ fontSize: "1.5rem", color: "#1A7340" }}>•</div>
            <div>Have more frequent internal meetings to improve alignment</div>
          </div>
          <div className="flex gap-3">
            <div className="shrink-0" style={{ fontSize: "1.5rem", color: "#1A7340" }}>•</div>
            <div>Spend more time defining the problem before moving into ideation, to avoid exploring ideas that aren't feasible in this context</div>
          </div>
        </div>
      </motion.div>
    </div>
  </SlideShell>
);

// 15 — Final Q&A slide
export const SlideQA = () => (
  <SlideShell bg="from-[#EBF5EE] via-white to-[#EBF5EE]">
    <div className="flex-1 flex items-center gap-16">
      {/* Left side - Title */}
      <div className="flex-1 flex flex-col justify-center">
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0, transition: { delay: 0.2 } }}
          style={{ fontSize: "7rem", fontWeight: 700, lineHeight: 1, color: "#0F2419" }}
          className="mb-6"
        >
          Questions?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.4 } }}
          className="text-neutral-600"
          style={{ fontSize: "2.5rem" }}
        >
          Scan to visit our site
        </motion.p>
      </div>

      {/* Right side - QR Code */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1, transition: { delay: 0.6, type: "spring", stiffness: 100 } }}
        className="rounded-3xl bg-white p-6 shadow-2xl border-4 border-[#1A7340]"
      >
        <img
          src="/src/imports/0yHXpQ.png"
          alt="QR Code"
          className="w-auto"
          style={{ height: "calc(100vh - 180px)", maxHeight: "800px" }}
        />
      </motion.div>
    </div>
  </SlideShell>
);

export const slides = [
  SlideCover,
  SlideData,
  SlideEarlyIdeas,
  SlideStepBack,
  SlideProblem,
  SlideRealization,
  SlidePrototypesShow,
  SlidePrototypesWhy,
  SlideVideo,
  SlideCode,
  SlideTeamwork,
  SlideQA,
];

export const slideTitles = [
  "Us & PicApp",
  "Data & facts",
  "Our early ideas",
  "Step back",
  "Problem",
  "Realization",
  "Prototypes 1 & 2",
  "Why both work",
  "Prototype demo",
  "We coded it",
  "How we worked",
  "Questions?",
];
