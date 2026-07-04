import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      exit={{ opacity: 0, filter: "blur(6px)" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative z-10 pt-32 pb-20 px-6"
    >
      <div className="mx-auto max-w-6xl">{children}</div>
    </motion.main>
  );
}

export function SectionHeader({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="max-w-3xl"
    >
      <div className="inline-flex items-center gap-2 glass rounded-full px-3 py-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
        <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--electric)", boxShadow: "0 0 12px var(--electric)" }} />
        {eyebrow}
      </div>
      <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
        {title}
      </h1>
      {description && (
        <p className="mt-5 text-lg text-muted-foreground max-w-2xl">{description}</p>
      )}
    </motion.div>
  );
}