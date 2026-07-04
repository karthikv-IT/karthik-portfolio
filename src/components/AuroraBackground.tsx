import { motion } from "framer-motion";

export function AuroraBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <motion.div
        className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full opacity-40 blur-3xl animate-blob"
        style={{ background: "radial-gradient(circle, oklch(0.72 0.19 265) 0%, transparent 70%)" }}
      />
      <motion.div
        className="absolute top-1/3 -right-40 h-[700px] w-[700px] rounded-full opacity-30 blur-3xl animate-blob"
        style={{
          background: "radial-gradient(circle, oklch(0.68 0.22 300) 0%, transparent 70%)",
          animationDelay: "-6s",
        }}
      />
      <motion.div
        className="absolute bottom-0 left-1/4 h-[500px] w-[500px] rounded-full opacity-25 blur-3xl animate-blob"
        style={{
          background: "radial-gradient(circle, oklch(0.82 0.15 210) 0%, transparent 70%)",
          animationDelay: "-12s",
        }}
      />
    </div>
  );
}