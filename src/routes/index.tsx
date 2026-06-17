import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { LandingReveal } from "@/components/LandingReveal";
import { JourneyPath } from "@/components/JourneyPath";
import { Counter } from "@/components/Counter";
import { Lightbox } from "@/components/Lightbox";

import hero from "@/assets/hero.jpg";
import pEdu from "@/assets/program-education.jpg";
import pFood from "@/assets/program-food.jpg";
import pWomen from "@/assets/program-women.jpg";
import pEnv from "@/assets/program-env.jpg";
import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";
import g4 from "@/assets/g4.jpg";
import g5 from "@/assets/g5.jpg";
import g6 from "@/assets/g6.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NayePankh Foundation — Empowering Dreams, Creating Change" },
      {
        name: "description",
        content:
          "Travel through the journey of NayePankh Foundation — programs, impact, and stories of community-led change.",
      },
      { property: "og:title", content: "NayePankh Foundation" },
      {
        property: "og:description",
        content: "Empowering dreams, creating change — one journey at a time.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  const [revealed, setRevealed] = useState(false);

  return (
    <main className="relative overflow-x-clip">
      <LandingReveal onDone={() => setRevealed(true)} />
      <Nav visible={revealed} />
      <Hero />

      {/* Journey container with snake path background */}
      <div className="relative">
        <JourneyPath />
        <div className="relative z-10">
          <About />
          <Impact />
          <Programs />
          <Gallery />
          <Voices />
          <Volunteer />
          <Contact />
        </div>
      </div>

      <Footer />
    </main>
  );
}

/* ------------------------------ NAV ------------------------------ */
function Nav({ visible }: { visible: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);

  const items = ["About", "Impact", "Programs", "Gallery", "Voices", "Join"];

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={visible ? { y: 0, opacity: 1 } : { y: -40, opacity: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled
          ? "border-b border-white/5 bg-[var(--teal-deep)]/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
        <a href="#top" className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-saffron-glow to-rose text-[var(--teal-deep)]">
            <FeatherIcon />
          </span>
          <span className="font-display text-lg text-ivory">
            Naye<em className="not-italic text-saffron">Pankh</em>
          </span>
        </a>
        <nav className="hidden items-center gap-7 text-sm text-ivory/80 md:flex">
          {items.map((i) => (
            <a
              key={i}
              href={i === "Programs" ? "/programs" : `#${i.toLowerCase()}`}
              className="transition hover:text-saffron"
            >
              {i}
            </a>
          ))}
        </nav>
        <a
          href="#join"
          className="rounded-full bg-saffron px-4 py-2 text-sm font-medium text-[var(--teal-deep)] transition hover:bg-saffron-glow"
        >
          Donate
        </a>
      </div>
    </motion.header>
  );
}

function FeatherIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
      <line x1="16" y1="8" x2="2" y2="22" />
      <line x1="17.5" y1="15" x2="9" y2="15" />
    </svg>
  );
}

/* ------------------------------ HERO ------------------------------ */
function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const fade = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section id="top" ref={ref} className="relative isolate min-h-[100svh] overflow-hidden">
      <motion.div style={{ scale, y }} className="absolute inset-0 -z-10">
        <img src={hero} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--teal-deep)]/60 via-[var(--teal-deep)]/65 to-[var(--teal-deep)]" />
      </motion.div>

      <motion.div style={{ opacity: fade }} className="mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-6 pb-24 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.9, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-saffron/30 bg-saffron/10 px-3 py-1 text-[11px] uppercase tracking-[0.3em] text-saffron-glow">
            <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-saffron" />
            Begin the journey
          </span>
          <h1 className="mt-6 font-display text-5xl leading-[1.02] text-ivory text-balance sm:text-7xl md:text-[88px]">
            Changing lives through{" "}
            <em className="not-italic text-saffron-glow">collective action.</em>
          </h1>
          <p className="mt-6 max-w-xl text-base text-ivory/75 sm:text-lg">
            NayePankh Foundation walks alongside communities — building access to education,
            dignity, and opportunity. Every scroll is a step on the journey.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#about"
              className="group inline-flex items-center gap-3 rounded-full bg-saffron px-6 py-3 text-sm font-medium text-[var(--teal-deep)] transition hover:bg-saffron-glow"
            >
              Explore the journey
              <span className="transition group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#join"
              className="inline-flex items-center gap-3 rounded-full border border-ivory/20 px-6 py-3 text-sm font-medium text-ivory transition hover:border-saffron hover:text-saffron"
            >
              Become a volunteer
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/* scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-ivory/40">
        <div className="flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.4em]">
          Scroll
          <span className="h-10 w-px animate-drift bg-gradient-to-b from-saffron to-transparent" />
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ STOP wrapper ------------------------------ */
function Stop({
  id,
  index,
  side,
  eyebrow,
  children,
}: {
  id: string;
  index: string;
  side: "left" | "right";
  eyebrow: string;
  children: React.ReactNode;
}) {
  const ref = useRef(null);
  return (
    <section
      id={id}
      ref={ref}
      className={`relative mx-auto flex min-h-[90vh] max-w-7xl items-center px-6 py-28 ${
        side === "left" ? "justify-start" : "justify-end"
      }`}
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative w-full max-w-2xl"
      >
        <div className="mb-5 flex items-center gap-3 text-[11px] uppercase tracking-[0.4em] text-saffron">
          <span className="grid h-7 w-7 place-items-center rounded-full border border-saffron/40 text-saffron-glow">
            {index}
          </span>
          {eyebrow}
        </div>
        {children}
      </motion.div>
    </section>
  );
}

/* ------------------------------ ABOUT ------------------------------ */
function About() {
  return (
    <Stop id="about" index="01" side="right" eyebrow="The Origin">
      <h2 className="font-display text-4xl text-ivory text-balance sm:text-6xl">
        A small feather, a long flight.
      </h2>
      <p className="mt-6 text-lg leading-relaxed text-ivory/75">
        NayePankh — meaning "new wings" — began with a simple belief: every life deserves the
        chance to rise. We work with grassroots networks across India to turn empathy into
        infrastructure, and intent into measurable change.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {[
          { k: "Mission", v: "Give every child a fair chance at education and dignity." },
          { k: "Vision", v: "Communities that lift themselves through collective hands." },
          { k: "Values", v: "Empathy. Transparency. Persistence. Joy." },
        ].map((b) => (
          <motion.div
            key={b.k}
            whileHover={{ y: -4 }}
            className="rounded-2xl border border-white/10 bg-card/60 p-5 backdrop-blur"
          >
            <div className="font-display text-xl text-saffron-glow">{b.k}</div>
            <p className="mt-2 text-sm text-ivory/70">{b.v}</p>
          </motion.div>
        ))}
      </div>
    </Stop>
  );
}

/* ------------------------------ IMPACT ------------------------------ */
function Impact() {
  const stats = [
    { n: 500, s: "+", label: "Volunteers on ground" },
    { n: 10000, s: "+", label: "Lives directly impacted" },
    { n: 150, s: "+", label: "Campaigns delivered" },
    { n: 50, s: "+", label: "Communities reached" },
  ];
  return (
    <Stop id="impact" index="02" side="left" eyebrow="The Measure">
      <h2 className="font-display text-4xl text-ivory text-balance sm:text-6xl">
        Numbers we earn,{" "}
        <em className="not-italic text-saffron-glow">one story at a time.</em>
      </h2>
      <p className="mt-6 max-w-xl text-lg text-ivory/70">
        Behind every figure is a face, a meal, a classroom that wasn't there yesterday.
      </p>

      <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/5 sm:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="bg-[var(--teal-deep)] p-6">
            <div className="font-display text-4xl text-saffron-glow sm:text-5xl">
              <Counter to={s.n} suffix={s.s} />
            </div>
            <div className="mt-2 text-xs uppercase tracking-[0.2em] text-ivory/60">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </Stop>
  );
}

/* ------------------------------ PROGRAMS ------------------------------ */
const PROGRAMS = [
  { t: "Education", img: pEdu, d: "Classrooms, scholarships, and books for first-generation learners." },
  { t: "Food Security", img: pFood, d: "Hot meals and ration kits during crisis and beyond." },
  { t: "Women Empowerment", img: pWomen, d: "Skills, livelihoods, and safe spaces to grow." },
  { t: "Environment", img: pEnv, d: "Tree drives, clean-ups and climate education." },
];

function Programs() {
  return (
    <Stop id="programs" index="03" side="right" eyebrow="The Work">
      <h2 className="font-display text-4xl text-ivory text-balance sm:text-6xl">
        Four roots, one canopy.
      </h2>
      <p className="mt-6 max-w-xl text-lg text-ivory/70">
        Our programs intertwine — feed a family and a child returns to school; train a mother and
        a village shifts.
      </p>

      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {PROGRAMS.map((p) => (
          <motion.article
            key={p.t}
            whileHover="hover"
            className="group relative aspect-[5/6] overflow-hidden rounded-3xl border border-white/10"
          >
            <motion.img
              src={p.img}
              alt={p.t}
              loading="lazy"
              variants={{ hover: { scale: 1.08 } }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <motion.div
              variants={{ hover: { opacity: 1 } }}
              initial={{ opacity: 0.4 }}
              className="absolute inset-0 bg-gradient-to-t from-[var(--teal-deep)] via-[var(--teal-deep)]/30 to-transparent"
            />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <div className="font-display text-2xl text-ivory">{p.t}</div>
              <motion.p
                variants={{ hover: { opacity: 1, y: 0 } }}
                initial={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.4 }}
                className="mt-2 max-w-sm text-sm text-ivory/80"
              >
                {p.d}
              </motion.p>
              <motion.div
                variants={{ hover: { opacity: 1, y: 0 } }}
                initial={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.4, delay: 0.05 }}
                className="mt-4"
              >
                <a
                  href="/programs"
                  className="inline-flex items-center gap-2 rounded-full bg-saffron px-4 py-1.5 text-xs font-medium text-[var(--teal-deep)] hover:bg-saffron-glow"
                >
                  Learn more →
                </a>
              </motion.div>
            </div>
          </motion.article>
        ))}
      </div>
    </Stop>
  );
}

/* ------------------------------ GALLERY ------------------------------ */
const GALLERY = [
  { src: g1, h: "row-span-2" },
  { src: g2, h: "" },
  { src: g3, h: "" },
  { src: g4, h: "row-span-2" },
  { src: g5, h: "" },
  { src: g6, h: "row-span-2" },
];

function Gallery() {
  const [active, setActive] = useState<number | null>(null);
  return (
    <Stop id="gallery" index="04" side="left" eyebrow="The Field">
      <h2 className="font-display text-4xl text-ivory text-balance sm:text-6xl">
        Moments from the road.
      </h2>
      <p className="mt-6 max-w-xl text-lg text-ivory/70">
        Photos from camps, classrooms, kitchens and quiet corners where change happens. Tap any
        frame to step inside.
      </p>
      <div className="mt-10 grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[220px] sm:grid-cols-3">
        {GALLERY.map((g, i) => (
          <motion.button
            key={i}
            onClick={() => setActive(i)}
            whileHover={{ y: -4 }}
            animate={{
              filter:
                active !== null && active !== i
                  ? "blur(6px) brightness(0.4)"
                  : "blur(0px) brightness(1)",
              scale: active !== null && active !== i ? 0.97 : 1,
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className={`group relative overflow-hidden rounded-2xl border border-white/10 ${g.h}`}
          >
            <motion.img
              layoutId={`gallery-${i}`}
              src={g.src}
              alt=""
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
            <div className="pointer-events-none absolute bottom-3 left-3 translate-y-2 text-xs uppercase tracking-[0.3em] text-ivory opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
              View ↗
            </div>
          </motion.button>
        ))}
      </div>

      <Lightbox
        images={GALLERY}
        index={active}
        onClose={() => setActive(null)}
        onSelect={setActive}
      />
    </Stop>
  );
}

/* ------------------------------ VOICES ------------------------------ */
const VOICES = [
  {
    q: "I joined a literacy camp for a weekend. I left with a year-long commitment and a second family.",
    a: "Ananya, Volunteer",
  },
  {
    q: "My daughter is the first in our family to finish school. NayePankh stood by her every term.",
    a: "Sushila, Parent",
  },
  {
    q: "The women's collective bought our first sewing machine. Today there are twelve of us.",
    a: "Priya, Founder member",
  },
];

function Voices() {
  return (
    <Stop id="voices" index="05" side="right" eyebrow="The People">
      <h2 className="font-display text-4xl text-ivory text-balance sm:text-6xl">
        Voices from the path.
      </h2>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {VOICES.map((v, i) => (
          <motion.figure
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.7 }}
            className="rounded-3xl border border-white/10 bg-card/60 p-6 backdrop-blur"
          >
            <div className="font-display text-3xl text-saffron">"</div>
            <blockquote className="text-ivory/85">{v.q}</blockquote>
            <figcaption className="mt-5 text-xs uppercase tracking-[0.25em] text-ivory/50">
              — {v.a}
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </Stop>
  );
}

/* ------------------------------ VOLUNTEER ------------------------------ */
function Volunteer() {
  const [sent, setSent] = useState(false);
  return (
    <Stop id="join" index="06" side="left" eyebrow="Your Step">
      <h2 className="font-display text-4xl text-ivory text-balance sm:text-6xl">
        Walk a stretch of the journey with us.
      </h2>
      <p className="mt-6 max-w-xl text-lg text-ivory/70">
        Volunteer a weekend, sponsor a child, or run a drive in your city. Every wing counts.
      </p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSent(true);
        }}
        className="mt-10 grid gap-4 rounded-3xl border border-white/10 bg-card/60 p-6 backdrop-blur sm:grid-cols-2"
      >
        <input required placeholder="Your name" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-ivory placeholder:text-ivory/40 outline-none focus:border-saffron" />
        <input required type="email" placeholder="Email address" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-ivory placeholder:text-ivory/40 outline-none focus:border-saffron" />
        <input placeholder="City" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-ivory placeholder:text-ivory/40 outline-none focus:border-saffron" />
        <select className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-ivory outline-none focus:border-saffron">
          <option className="bg-[var(--teal-deep)]">I want to volunteer</option>
          <option className="bg-[var(--teal-deep)]">I want to donate</option>
          <option className="bg-[var(--teal-deep)]">I want to partner</option>
        </select>
        <textarea placeholder="Tell us a little about you" rows={3} className="sm:col-span-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-ivory placeholder:text-ivory/40 outline-none focus:border-saffron" />
        <button
          type="submit"
          className="sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-full bg-saffron px-6 py-3 font-medium text-[var(--teal-deep)] transition hover:bg-saffron-glow"
        >
          {sent ? "Thank you — we'll be in touch ✓" : "Count me in"}
        </button>
      </form>
    </Stop>
  );
}

/* ------------------------------ CONTACT ------------------------------ */
function Contact() {
  return (
    <Stop id="contact" index="07" side="right" eyebrow="The Destination">
      <h2 className="font-display text-4xl text-ivory text-balance sm:text-6xl">
        End of the path,{" "}
        <em className="not-italic text-saffron-glow">start of something.</em>
      </h2>
      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-card/60 p-6">
          <div className="text-xs uppercase tracking-[0.3em] text-saffron">Write to us</div>
          <a href="mailto:hello@nayepankh.org" className="mt-2 block font-display text-2xl text-ivory hover:text-saffron">
            hello@nayepankh.org
          </a>
          <p className="mt-4 text-sm text-ivory/60">
            We respond to every email — usually within two working days.
          </p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-card/60 p-6">
          <div className="text-xs uppercase tracking-[0.3em] text-saffron">Find us</div>
          <p className="mt-2 font-display text-2xl text-ivory">
            Varanasi · Lucknow · Delhi NCR
          </p>
          <div className="mt-4 flex gap-4 text-sm text-ivory/70">
            <a href="#" className="hover:text-saffron">Instagram</a>
            <a href="#" className="hover:text-saffron">LinkedIn</a>
            <a href="#" className="hover:text-saffron">YouTube</a>
          </div>
        </div>
      </div>
    </Stop>
  );
}

/* ------------------------------ FOOTER ------------------------------ */
function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-[var(--teal-deep)]">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 px-6 py-10 text-center text-sm text-ivory/50">
        <div className="flex items-center gap-2 font-display text-ivory">
          <FeatherIcon /> NayePankh Foundation
        </div>
        <p>© {new Date().getFullYear()} NayePankh Foundation. All wings reserved.</p>
      </div>
    </footer>
  );
}
