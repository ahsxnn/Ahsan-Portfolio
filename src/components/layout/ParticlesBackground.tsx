import Particles from "@tsparticles/react";

export default function ParticlesBackground() {
  return (
    <Particles
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: { color: "transparent" },
        particles: {
          number: { value: 50 },
          color: { value: "#4da3ff" },
          opacity: { value: 0.3 },
          size: { value: 2 },
          move: { enable: true, speed: 1 },
        },
      }}
    />
  );
}