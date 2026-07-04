import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight, Download, Github, Linkedin, Twitter, Mail, Sparkles } from "lucide-react";
import { Hero3D } from "../components/Hero3D";

export const Route = createFileRoute("/")({
  component: Home,
});

const socials = [
  { icon: Github, href: "https://github.com" },
  { icon: Linkedin, href: "https://linkedin.com" },
  { icon: Twitter, href: "https://twitter.com" },
  { icon: Mail, href: "mailto:hello@example.com" },
];

function Home() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative z-10 min-h-screen flex items-center px-6 pt-24"
    >
      <div className="mx-auto max-w-7xl w-full grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 glass rounded-full px-3 py-1.5 text-xs uppercase tracking-[0.2em] text-muted-foreground"
          >
            <Sparkles size={12} className="text-primary" />
            Available for select projects · 2026
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 font-semibold tracking-tight leading-[0.95]"
            style={{ fontFamily: "Space Grotesk, Inter, sans-serif", fontSize: "clamp(2.75rem, 7vw, 5.75rem)" }}
          >
            Hi, I'm <span className="text-gradient animate-gradient">KARTHIKEYAN V  </span>.
            <br />
            <span className="text-muted-foreground text-[0.7em]">I build immersive</span>
            <br />
            <span className="italic font-light">digital experiences.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed"
          >
            Full-stack developer and creative engineer crafting fast, elegant,
            production-grade products with React, Three.js and modern web tech.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 rounded-full px-6 py-3 font-medium text-primary-foreground transition-transform hover:scale-[1.03]"
              style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}
            >
              View Projects
              <ArrowUpRight size={18} className="transition-transform group-hover:rotate-45" />
            </Link>
            <Link
              to="/resume"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-medium glass hover:bg-white/10"
            >
              <Download size={16} /> Resume
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-medium text-muted-foreground hover:text-foreground"
            >
              Contact Me →
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-10 flex items-center gap-3"
          >
            {socials.map((s, i) => (
              <motion.a
                key={i}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -4, scale: 1.1 }}
                className="glass rounded-full p-3 text-muted-foreground hover:text-primary hover:shadow-[var(--shadow-glow)]"
              >
                <s.icon size={16} />
              </motion.a>
            ))}
            <div className="ml-4 h-px flex-1 max-w-40 bg-gradient-to-r from-white/20 to-transparent" />
            <span className="text-xs text-muted-foreground tracking-widest uppercase">Scroll</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative aspect-square w-full max-w-[560px] mx-auto"
        >
          <div className="absolute inset-0 rounded-full blur-3xl opacity-40" style={{ background: "var(--gradient-primary)" }} />
          <div className="relative h-full w-full">
            <Hero3D />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
