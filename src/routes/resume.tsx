import { createFileRoute } from "@tanstack/react-router";
import { Download, FileText, Award, Briefcase, GraduationCap } from "lucide-react";
import { PageShell, SectionHeader } from "../components/PageShell";
import { Reveal } from "../components/Reveal";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title: "Resume — kathikeyan V" },
      { name: "description", content: "Experience, education and credentials." },
      { property: "og:title", content: "Resume — kathikeyan V" },
      { property: "og:description", content: "Experience, education and credentials." },
    ],
  }),
  component: Resume,
});

const experience = [
  { role: "Full Stack Engineer", company: "Freelance / Studios", period: "2023", },
];

const education = [
  { title: "BTect Information Technology", place: "Sri Balaji Chockalingam Engineering College(SBCE),Arni,Tamil Nadu",  },
  { title: "Academic Year ", year: "2023 - 2027" },
];

const certs = ["DEVOPS/In ( Alpha city - Divine IT Solutions )",];

function Resume() {
  return (
    <PageShell>
      <SectionHeader
        eyebrow="Resume"
        title="Six years of shipping. Countless nights refining the details."
        description="Download the one-page PDF or explore the interactive timeline below."
      />

      <div className="mt-10 flex flex-wrap gap-3">
        <a
          href="#"
          className="inline-flex items-center gap-2 rounded-full px-5 py-3 font-medium text-primary-foreground hover:scale-[1.03] transition-transform"
          style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}
        >
          <Download size={16} /> Download PDF
        </a>
        <a href="#" className="inline-flex items-center gap-2 rounded-full px-5 py-3 glass hover:bg-white/10">
          <FileText size={16} /> Preview PDF
        </a>
      </div>

      <div className="mt-16 grid lg:grid-cols-[1.4fr_1fr] gap-10">
        <div>
          <h2 className="flex items-center gap-2 text-2xl font-semibold" style={{ fontFamily: "Space Grotesk" }}>
            <Briefcase size={20} className="text-primary" /> Experience
          </h2>
          <ol className="mt-6 space-y-4">
            {experience.map((e, i) => (
              <Reveal key={e.company} delay={i * 0.08}>
                <li className="glass rounded-2xl p-6">
                  <div className="flex justify-between gap-4 flex-wrap">
                    <div>
                      <div className="text-lg font-semibold">{e.role}</div>
                      <div className="text-sm text-primary">{e.company}</div>
                    </div>
                    <div className="text-xs text-muted-foreground uppercase tracking-widest">{e.period}</div>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">{e.body}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>

        <div className="space-y-10">
          <div>
            <h2 className="flex items-center gap-2 text-2xl font-semibold" style={{ fontFamily: "Space Grotesk" }}>
              <GraduationCap size={20} className="text-primary" /> Education
            </h2>
            <ul className="mt-6 space-y-3">
              {education.map((e) => (
                <Reveal key={e.title}>
                  <li className="glass rounded-2xl p-5">
                    <div className="font-medium">{e.title}</div>
                    <div className="text-sm text-muted-foreground">{e.place} · {e.year}</div>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="flex items-center gap-2 text-2xl font-semibold" style={{ fontFamily: "Space Grotesk" }}>
              <Award size={20} className="text-primary" /> Certifications
            </h2>
            <ul className="mt-6 flex flex-wrap gap-2">
              {certs.map((c) => (
                <li key={c} className="glass rounded-full px-4 py-2 text-sm">{c}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </PageShell>
  );
}