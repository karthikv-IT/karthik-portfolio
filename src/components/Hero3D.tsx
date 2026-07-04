import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, MeshDistortMaterial, Icosahedron, Torus, TorusKnot } from "@react-three/drei";
import type { Mesh } from "three";

function Knot() {
  const ref = useRef<Mesh>(null);
  useFrame((_, dt) => {
    if (ref.current) {
      ref.current.rotation.x += dt * 0.15;
      ref.current.rotation.y += dt * 0.2;
    }
  });
  return (
    <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.2}>
      <TorusKnot ref={ref} args={[1, 0.32, 220, 32]} position={[0, 0, 0]}>
        <MeshDistortMaterial
          color="#7c3aed"
          emissive="#4c1d95"
          emissiveIntensity={0.6}
          roughness={0.15}
          metalness={0.85}
          distort={0.35}
          speed={1.5}
        />
      </TorusKnot>
    </Float>
  );
}

function OrbitingObjects() {
  return (
    <>
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <Icosahedron args={[0.35, 0]} position={[2.4, 1, -1]}>
          <meshStandardMaterial color="#22d3ee" emissive="#0891b2" emissiveIntensity={0.6} metalness={0.9} roughness={0.1} />
        </Icosahedron>
      </Float>
      <Float speed={1.6} rotationIntensity={0.8} floatIntensity={1.6}>
        <Torus args={[0.4, 0.12, 32, 100]} position={[-2.6, -0.8, 0.5]}>
          <meshStandardMaterial color="#ec4899" emissive="#be185d" emissiveIntensity={0.5} metalness={0.8} roughness={0.2} />
        </Torus>
      </Float>
      <Float speed={2.4} rotationIntensity={1.2} floatIntensity={2}>
        <Icosahedron args={[0.22, 0]} position={[1.6, -1.5, 1.2]}>
          <meshStandardMaterial color="#a78bfa" emissive="#7c3aed" emissiveIntensity={0.8} metalness={1} roughness={0.05} />
        </Icosahedron>
      </Float>
    </>
  );
}

export function Hero3D() {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0, 5], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
      className="!absolute inset-0"
    >
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={1.2} color="#a78bfa" />
      <pointLight position={[-5, -3, -3]} intensity={0.8} color="#22d3ee" />
      <Suspense fallback={null}>
        <Knot />
        <OrbitingObjects />
        <Environment preset="city" />
      </Suspense>
    </Canvas>
  );
}