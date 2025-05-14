"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Ring() {
  const ref = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (ref.current) {
      ref.current.rotation.x = Math.sin(time * 0.3) * 0.3;
      ref.current.rotation.y = time * 0.2;
    }
  });
  
  return (
    <mesh ref={ref}>
      <torusGeometry args={[1, 0.3, 16, 32]} />
      <meshStandardMaterial
        color="#7e22ce"
        emissive="#7e22ce"
        emissiveIntensity={0.5}
        roughness={0.2}
        metalness={0.8}
      />
    </mesh>
  );
}

export default function OrbitRing({ className = "" }: { className?: string }) {
  return (
    <div className={`w-32 h-32 ${className}`}>
      <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Ring />
      </Canvas>
    </div>
  );
} 