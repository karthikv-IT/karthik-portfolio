import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const width = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });
  return (
    <motion.div
      style={{ scaleX: width, transformOrigin: "0% 50%", background: "var(--gradient-primary)" }}
      className="fixed top-0 left-0 right-0 h-[2px] z-[60]"
    />
  );
}