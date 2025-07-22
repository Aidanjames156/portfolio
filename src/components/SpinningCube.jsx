import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function Cube() {
  const mesh = useRef();
  useFrame(() => {
    mesh.current.rotation.x += 0.01;
    mesh.current.rotation.y += 0.01;
  });
  return (
    <mesh ref={mesh} castShadow receiveShadow>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#a6c1ee" roughness={0.3} metalness={0.7} />
    </mesh>
  );
}

export default function SpinningCube() {
  return (
    <div style={{ width: "220px", height: "220px", margin: "0 auto" }}>
      <Canvas shadows camera={{ position: [2, 2, 2], fov: 50 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Cube />
        <OrbitControls enablePan={false} enableZoom={false} />
      </Canvas>
    </div>
  );
} 