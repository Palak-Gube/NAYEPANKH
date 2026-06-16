import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Our Programs — NayePankh Foundation" },
      {
        name: "description",
        content:
          "Deep dive into NayePankh Foundation programs across education, food security, women empowerment, and environment.",
      },
    ],
  }),
  component: ProgramsPage,
});

const PROGRAM_BLOCKS = [
  {
    key: "education",
    title: "Education",
    stat: "1,500+ learners",
    blurb:
      "Community classrooms, scholarships, and after-school support so first-generation learners don’t have to drop out.",
    bullets: [
      "Bridge classes for children out of school",
      "Scholarships for secondary and college education",
      "Mentoring circles with volunteers and alumni",
    ],
  },
  {
    key: "food",
    title: "Food Security",
    stat: "250,000+ meals",
    blurb:
      "From crisis relief to everyday nutrition, our kitchens and ration drives keep families from slipping into hunger.",
    bullets: [
      "Hot meal camps around construction sites and slums",
      "Monthly ration kits for high‑risk households",
      "Nutrition awareness sessions with mothers",
    ],
  },
  {
    key: "women",
    title: "Women Empowerment",
    stat: "600+ women",
    blurb:
      "Skills, livelihoods and safe peer spaces so women can earn, lead, and shape decisions at home and in the community.",
    bullets: [
      "Self‑help groups and savings circles",
      "Tailoring, crafts and digital literacy trainings",
      "Legal and financial awareness sessions",
    ],
  },
  {
    key: "environment",
    title: "Environment",
    stat: "40+ neighbourhoods",
    blurb:
      "Climate education, clean‑up drives and tree plantations that put children and youth at the heart of local action.",
    bullets: [
      "Tree drives with schools and RWAs",
      "Lake & street clean‑ups with volunteers",
      "Workshops on waste segregation and climate",
    ],
  },
];

function ProgramsPage() {
  return (
    <main className="min-h-[100svh] bg-[var(--teal-deep)]/60 pb-20 pt-24 text-ivory">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6">
        <header className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-saffron-glow">The Work in Detail</p>
            <h1 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">
              Programs that move{" "}
              <span className="text-saffron-glow">
                from relief
                <span className="text-rose"> to resilience.</span>
              </span>
            </h1>
            <p className="mt-4 max-w-2xl text-sm text-ivory/75 sm:text-base">
              Each program is a wing of the same bird — supporting children, families and neighbourhoods at different
              points of their journey. Together, they turn short‑term help into long‑term change.
            </p>
          </div>
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full border border-ivory/25 px-4 py-2 text-xs font-medium text-ivory/80 transition hover:border-saffron hover:text-saffron"
          >
            ← Back to journey
          </Link>
        </header>

        <section className="grid gap-6 md:grid-cols-[1.4fr,1fr]">
          <div className="space-y-5 rounded-3xl border border-white/10 bg-card/70 p-6 backdrop-blur">
            <h2 className="font-display text-2xl text-saffron-glow">How we choose where to work</h2>
            <p className="text-sm text-ivory/75">
              We prioritise communities with low public investment, high school drop‑out rates, and limited safety nets.
              Our teams work with local leaders, schools and volunteers before we launch any program.
            </p>
            <ul className="grid gap-3 text-sm text-ivory/80 sm:grid-cols-2">
              <li className="rounded-2xl border border-white/10 bg-white/5 p-3">
                <span className="text-xs uppercase tracking-[0.25em] text-ivory/50">Listen</span>
                <p className="mt-1">
                  Door‑to‑door conversations, mapping existing support, and understanding what people say they need.
                </p>
              </li>
              <li className="rounded-2xl border border-white/10 bg-white/5 p-3">
                <span className="text-xs uppercase tracking-[0.25em] text-ivory/50">Co‑design</span>
                <p className="mt-1">
                  Programs are designed with community volunteers so they can run even when teams move on.
                </p>
              </li>
              <li className="rounded-2xl border border-white/10 bg-white/5 p-3">
                <span className="text-xs uppercase tracking-[0.25em] text-ivory/50">Measure</span>
                <p className="mt-1">
                  Simple but strong tracking — attendance, learning, income, and stories — to keep us honest.
                </p>
              </li>
              <li className="rounded-2xl border border-white/10 bg-white/5 p-3">
                <span className="text-xs uppercase tracking-[0.25em] text-ivory/50">Share back</span>
                <p className="mt-1">
                  Regular reports to donors and communities so everyone knows what changed and what didn&apos;t.
                </p>
              </li>
            </ul>
          </div>

          <div className="space-y-4 rounded-3xl border border-saffron/25 bg-gradient-to-b from-saffron/15 via-rose/10 to-transparent p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-saffron-glow">At a glance</p>
            <dl className="mt-2 space-y-3 text-sm text-ivory/85">
              <div className="flex items-baseline justify-between gap-4">
                <dt>Communities we serve</dt>
                <dd className="font-display text-lg text-saffron-glow">Urban slums & peri‑urban pockets</dd>
              </div>
              <div className="flex items-baseline justify-between gap-4">
                <dt>Primary focus</dt>
                <dd className="font-display text-lg text-saffron-glow">Children, women & youth</dd>
              </div>
              <div className="flex items-baseline justify-between gap-4">
                <dt>Approach</dt>
                <dd className="font-display text-lg text-saffron-glow">Relief → Rehabilitation → Leadership</dd>
              </div>
            </dl>
            <p className="mt-4 text-xs text-ivory/70">
              You can support a single program or back our entire ecosystem — either way, your contribution strengthens
              the same communities.
            </p>
          </div>
        </section>

        <section className="mt-4 space-y-8">
          {PROGRAM_BLOCKS.map((p, idx) => (
            <motion.article
              key={p.key}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, delay: idx * 0.05 }}
              className="rounded-3xl border border-white/10 bg-card/70 p-6 backdrop-blur"
            >
              <div className="flex flex-col justify-between gap-4">
                <header>
                  <div className="mb-3 inline-flex rounded-full border border-saffron/30 bg-saffron/10 px-3 py-1 text-[11px] uppercase tracking-[0.25em] text-saffron-glow">
                    {p.stat}
                  </div>
                  <h2 className="font-display text-2xl text-ivory">{p.title}</h2>
                  <p className="mt-3 text-sm text-ivory/80">{p.blurb}</p>
                </header>
                <ul className="space-y-2 text-sm text-ivory/80">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-[5px] h-1.5 w-1.5 rounded-full bg-saffron" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-2 flex flex-wrap gap-3">
                  <a
                    href="#join"
                    className="inline-flex items-center gap-2 rounded-full bg-saffron px-4 py-2 text-xs font-medium text-[var(--teal-deep)] shadow-sm transition hover:bg-saffron-glow"
                  >
                    I want to support this
                  </a>
                  <a
                    href="#top"
                    className="inline-flex items-center gap-2 rounded-full border border-ivory/25 px-4 py-2 text-xs font-medium text-ivory/75 transition hover:border-saffron hover:text-saffron"
                  >
                    Read stories from the journey
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </section>
      </div>
    </main>
  );
}

