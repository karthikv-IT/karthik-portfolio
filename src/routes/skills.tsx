import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageShell, SectionHeader } from "../components/PageShell";
import { Reveal } from "../components/Reveal";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — Alex Vega" },
      { name: "description", content: "Languages, frameworks, cloud and tools I ship with every day." },
      { property: "og:title", content: "Skills — Alex Vega" },
      { property: "og:description", content: "Languages, frameworks, cloud and tools I ship with every day." },
    ],
  }),
  component: Skills,
});

type Skill = { name: string; level: number };
type Group = { title: string; skills: Skill[] };

const groups: Group[] = [
  {
    title: "Frontend",
    skills: [
      { name: "React / Next.js", level: 96 },
      { name: "TypeScript", level: 94 },
      { name: "Tailwind / CSS", level: 92 },
      { name: "Framer Motion", level: 90 },
      { name: "Three.js / R3F", level: 84 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 92 },
      { name: "Python / FastAPI", level: 82 },
      { name: "PostgreSQL", level: 88 },
      { name: "GraphQL", level: 80 },
      { name: "tRPC", level: 85 },
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "AWS", level: 82 },
      { name: "Cloudflare", level: 88 },
      { name: "Docker", level: 84 },
      { name: "CI/CD", level: 86 },
      { name: "Vercel / Netlify", level: 90 },
    ],
  },
  {
    title: "Design & UX",
    skills: [
      { name: "Figma", level: 86 },
      { name: "Design Systems", level: 90 },
      { name: "Motion Design", level: 84 },
      { name: "Prototyping", level: 88 },
      { name: "Accessibility", level: 86 },
    ],
  },
];

function Skills() {
  return (
    <PageShell>
      <SectionHeader
        eyebrow="Toolkit"
        title="Every tool serves the product, not the other way around."
        description="Six years compounded across the stack — with a bias for what ships quickly and scales quietly."
      />

      <div className="mt-14 grid md:grid-cols-2 gap-6">
        {groups.map((g, gi) => (
          <Reveal key={g.title} delay={gi * 0.1}>
            <div className="glass rounded-3xl p-8 group hover:shadow-[var(--shadow-glow)] transition-shadow">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-semibold" style={{ fontFamily: "Space Grotesk" }}>{g.title}</h3>
                <span className="text-xs text-muted-foreground">{g.skills.length} core</span>
              </div>
              <ul className="mt-6 space-y-5">
                {g.skills.map((s, i) => (
                  <li key={s.name}>
                    <div className="flex justify-between text-sm">
                      <span>{s.name}</span>
                      <span className="text-muted-foreground">{s.level}%</span>
                    </div>
                    <div className="mt-2 h-1.5 rounded-full bg-white/5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                        className="h-full rounded-full"
                        style={{ background: "var(--gradient-primary)", boxShadow: "0 0 12px oklch(0.72 0.19 265 / 60%)" }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </PageShell>
  );
}