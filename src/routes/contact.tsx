import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Send, Check, Mail, MapPin, Github, Linkedin, Twitter } from "lucide-react";
import { PageShell, SectionHeader } from "../components/PageShell";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Alex Vega" },
      { name: "description", content: "Let's build something amazing together." },
      { property: "og:title", content: "Contact — Alex Vega" },
      { property: "og:description", content: "Let's build something amazing together." },
    ],
  }),
  component: Contact,
});

function Field({ label, type = "text", value, onChange, textarea }: { label: string; type?: string; value: string; onChange: (v: string) => void; textarea?: boolean }) {
  const [focus, setFocus] = useState(false);
  const active = focus || value.length > 0;
  const Cmp: any = textarea ? "textarea" : "input";
  return (
    <label className="relative block glass rounded-2xl px-5 pt-6 pb-3 focus-within:shadow-[var(--shadow-glow)] transition-shadow">
      <span
        className={`absolute left-5 pointer-events-none transition-all duration-200 ${
          active ? "top-2 text-xs text-primary" : "top-5 text-sm text-muted-foreground"
        }`}
      >
        {label}
      </span>
      <Cmp
        type={type}
        value={value}
        rows={textarea ? 5 : undefined}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        onChange={(e: any) => onChange(e.target.value)}
        className="w-full bg-transparent outline-none resize-none text-foreground"
      />
    </label>
  );
}

function Contact() {
  const [f, setF] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      setF({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSent(false), 4000);
    }, 900);
  };

  return (
    <PageShell>
      <SectionHeader
        eyebrow="Contact"
        title="Let's build something amazing together."
        description="Have a product in mind, a role to fill, or an idea to sharpen? Drop a note — I read every message."
      />

      <div className="mt-14 grid lg:grid-cols-[1.3fr_1fr] gap-8">
        <form onSubmit={onSubmit} className="space-y-4 relative">
          <div className="grid md:grid-cols-2 gap-4">
            <Field label="Your name" value={f.name} onChange={(v) => setF({ ...f, name: v })} />
            <Field label="Email" type="email" value={f.email} onChange={(v) => setF({ ...f, email: v })} />
          </div>
          <Field label="Subject" value={f.subject} onChange={(v) => setF({ ...f, subject: v })} />
          <Field label="Tell me about your project" textarea value={f.message} onChange={(v) => setF({ ...f, message: v })} />

          <motion.button
            type="submit"
            whileTap={{ scale: 0.97 }}
            disabled={loading}
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-medium text-primary-foreground disabled:opacity-70"
            style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}
          >
            {loading ? "Sending..." : (<><Send size={16} /> Send Message</>)}
          </motion.button>

          <AnimatePresence>
            {sent && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                className="glass rounded-2xl p-4 flex items-center gap-3 text-sm"
              >
                <span className="rounded-full p-1.5" style={{ background: "var(--gradient-primary)" }}>
                  <Check size={14} />
                </span>
                Message sent. I'll get back within 24 hours.
              </motion.div>
            )}
          </AnimatePresence>
        </form>

        <aside className="space-y-4">
          <div className="glass rounded-3xl p-6">
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Direct</div>
            <div className="mt-3 space-y-3 text-sm">
              <a href="mailto:hello@example.com" className="flex items-center gap-3 hover:text-primary">
                <Mail size={16} /> karthikeya.official@gmail.com
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin size={16} /> Tamilnadu, India
              </div>
            </div>
          </div>

          <div className="glass rounded-3xl p-6">
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Elsewhere</div>
            <div className="mt-4 grid grid-cols-3 gap-3">
              {[
                { icon: Github, label: "GitHub" },
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Twitter, label: "Twitter" },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  className="glass rounded-2xl p-4 flex flex-col items-center gap-2 hover:text-primary hover:shadow-[var(--shadow-glow)] transition-all"
                >
                  <s.icon size={18} />
                  <span className="text-xs">{s.label}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="glass rounded-3xl p-6 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full blur-3xl opacity-40" style={{ background: "var(--gradient-primary)" }} />
            <div className="relative">
            </div>
          </div>
        </aside>
      </div>
    </PageShell>
  );
}