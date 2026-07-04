import Particles, { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "@tsparticles/engine";

const init = async (engine: Engine) => {
  await loadSlim(engine);
};

export function ParticlesBg({ density = 60 }: { density?: number }) {
  return (
    <ParticlesProvider init={init}>
      <Particles
      id="tsparticles"
      className="pointer-events-none fixed inset-0 -z-10"
      options={{
        fullScreen: { enable: false },
        background: { color: { value: "transparent" } },
        fpsLimit: 60,
        particles: {
          color: { value: ["#7c3aed", "#22d3ee", "#ec4899", "#ffffff"] },
          links: {
            color: "#7c3aed",
            distance: 130,
            enable: true,
            opacity: 0.15,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.6,
            outModes: { default: "bounce" },
          },
          number: {
            value: density,
            density: { enable: true },
          },
          opacity: { value: { min: 0.2, max: 0.7 } },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 2.5 } },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "grab" },
          },
          modes: {
            grab: { distance: 160, links: { opacity: 0.4 } },
          },
        },
        detectRetina: true,
      }}
      />
    </ParticlesProvider>
  );
}