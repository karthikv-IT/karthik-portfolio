import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageShell, SectionHeader } from "../components/PageShell";
import { Reveal } from "../components/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Alex Vega" },
      { name: "description", content: "The journey, philosophy and craft of a full-stack developer." },
      { property: "og:title", content: "About — Alex Vega" },
      { property: "og:description", content: "The journey, philosophy and craft of a full-stack developer." },
    ],
  }),
  component: About,
});

const stats = [
  { value: "80+", label: "Projects Shipped" },
  { value: "6+", label: "Years Experience" },
  { value: "40+", label: "Technologies" },
  { value: "25+", label: "Happy Clients" },
];

const timeline = [
  { year: "2019", title: "First lines of code", body: "Fell in love with the browser. Built dozens of tiny experiments." },
  { year: "2021", title: "Full-stack engineer", body: "Shipped production apps with React, Node and Postgres for early-stage teams." },
  { year: "2023", title: "Creative engineering", body: "Blended 3D, motion and interaction design into product surfaces." },
  { year: "2026", title: "Independent studio", body: "Partnering with founders and studios on ambitious digital products." },
];

function About() {
  return (
    <PageShell>
      <SectionHeader
        eyebrow="About"
        title="A developer obsessed with craft, motion & the details you can feel."
        description="I'm Alex — a full-stack engineer building products that feel as good as they look. From API to pixel, from architecture to micro-interaction."
      />

      <div className="mt-14 grid md:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08}>
            <div className="glass rounded-2xl p-6">
              <div className="text-4xl font-semibold text-gradient" style={{ fontFamily: "Space Grotesk" }}>{s.value}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-24 grid lg:grid-cols-[1fr_1.4fr] gap-12">
        <Reveal>
          <div className="glass rounded-3xl p-8 sticky top-32">
            <div className="text-sm uppercase tracking-widest text-muted-foreground">Philosophy</div>
            <p className="mt-4 text-xl leading-relaxed">
              Great software feels inevitable. My job is to remove everything that gets in
              the way — friction, latency, ambiguity — until only the experience remains.
            </p>
            <div className="mt-6 h-px bg-white/10" />
            <div className="mt-6 text-sm text-muted-foreground">
              Based in Lisbon · Working globally · Available Q2 2026
            </div>
          </div>
        </Reveal>

        <div className="relative">
          <div className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-primary/20 to-transparent" />
          <ul className="space-y-8">
            {timeline.map((t, i) => (
              <Reveal key={t.year} delay={i * 0.1}>
                <li className="relative pl-12">
                  <motion.span
                    className="absolute left-0 top-2 h-6 w-6 rounded-full glass grid place-items-center"
                    whileInView={{ scale: [0.8, 1.2, 1] }}
                    transition={{ duration: 0.6 }}
                  >
                    <span className="h-2 w-2 rounded-full" style={{ background: "var(--electric)", boxShadow: "0 0 12px var(--electric)" }} />
                  </motion.span>
                  <div className="text-xs uppercase tracking-widest text-primary">{t.year}</div>
                  <div className="mt-1 text-xl font-semibold">{t.title}</div>
                  <p className="mt-2 text-muted-foreground">{t.body}</p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </PageShell>
  );
}