import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import { PageShell, SectionHeader } from "../components/PageShell";
import { Reveal } from "../components/Reveal";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Alex Vega" },
      { name: "description", content: "Selected products, prototypes and experiments." },
      { property: "og:title", content: "Projects — Alex Vega" },
      { property: "og:description", content: "Selected products, prototypes and experiments." },
    ],
  }),
  component: Projects,
});

const filters = ["All", "Full Stack", "Frontend", "React", "AI", "Three.js"];

const projects = [
  {
    name: "Aurora Analytics",
    tag: "Full Stack",
    year: "2025",
    desc: "Real-time analytics platform with sub-100ms queries and a WebGL dashboard.",
    stack: ["Next.js", "Rust", "ClickHouse", "R3F"],
    tags: ["Full Stack", "React"],
    accent: "linear-gradient(135deg,#7c3aed,#22d3ee)",
  },
  {
    name: "Nova Design OS",
    tag: "Frontend",
    year: "2025",
    desc: "Design-system builder used by 400+ teams to ship consistent product surfaces.",
    stack: ["React", "TypeScript", "Vite", "Framer Motion"],
    tags: ["Frontend", "React"],
    accent: "linear-gradient(135deg,#ec4899,#f59e0b)",
  },
  {
    name: "Loom.ai",
    tag: "AI",
    year: "2024",
    desc: "Multimodal knowledge assistant with agentic retrieval and streaming UI.",
    stack: ["Python", "LangGraph", "React", "Postgres"],
    tags: ["AI", "Full Stack"],
    accent: "linear-gradient(135deg,#22d3ee,#a78bfa)",
  },
  {
    name: "Orbit 3D",
    tag: "Three.js",
    year: "2024",
    desc: "Interactive product configurator running at a stable 60fps on mobile.",
    stack: ["Three.js", "R3F", "Zustand"],
    tags: ["Three.js", "Frontend"],
    accent: "linear-gradient(135deg,#8b5cf6,#ec4899)",
  },
  {
    name: "Kite Commerce",
    tag: "Full Stack",
    year: "2023",
    desc: "Headless commerce stack powering a nine-figure DTC brand.",
    stack: ["Next.js", "Node", "Shopify", "Redis"],
    tags: ["Full Stack"],
    accent: "linear-gradient(135deg,#06b6d4,#3b82f6)",
  },
  {
    name: "Signal Journal",
    tag: "React",
    year: "2023",
    desc: "Beautifully calm reading app with offline-first sync and typography-first UI.",
    stack: ["React", "SQLite", "Motion"],
    tags: ["React", "Frontend"],
    accent: "linear-gradient(135deg,#f472b6,#a78bfa)",
  },
];

function Projects() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.tags.includes(active));

  return (
    <PageShell>
      <SectionHeader
        eyebrow="Selected Work"
        title="Products that ship. Interfaces that stay with you."
        description="A tight selection of work across product engineering, creative interaction and platform tooling."
      />

      <div className="mt-10 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`relative rounded-full px-4 py-2 text-sm transition-colors ${
              active === f ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {active === f && (
              <motion.span
                layoutId="filter-pill"
                className="absolute inset-0 rounded-full"
                style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            <span className="relative">{f}</span>
          </button>
        ))}
      </div>

      <motion.div layout className="mt-10 grid md:grid-cols-2 gap-6">
        {filtered.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.06}>
            <motion.article
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
              className="group glass rounded-3xl overflow-hidden"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <div className="absolute inset-0 opacity-90" style={{ background: p.accent }} />
                <div className="absolute inset-0 grid-bg opacity-30 mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 glass rounded-full px-3 py-1 text-xs">{p.tag}</div>
                <div className="absolute top-4 right-4 glass rounded-full px-3 py-1 text-xs text-muted-foreground">{p.year}</div>
                <motion.div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <div className="glass rounded-full p-4">
                    <ArrowUpRight size={22} />
                  </div>
                </motion.div>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold" style={{ fontFamily: "Space Grotesk" }}>{p.name}</h3>
                  <a href="#" aria-label="Source" className="text-muted-foreground hover:text-foreground">
                    <Github size={16} />
                  </a>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span key={s} className="text-xs rounded-full px-2.5 py-1 bg-white/5 border border-white/10">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          </Reveal>
        ))}
      </motion.div>
    </PageShell>
  );
}