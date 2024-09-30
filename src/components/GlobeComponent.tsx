import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { OrbitControls } from '@react-three/drei';
import { Mesh } from 'three';


const GlobeComponent: React.FC = () => {
  const earthRef = useRef<Mesh>(null);
  const textureUrl = "https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg"; // Earth texture

  // Auto-rotate effect
  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.001; // Rotate Earth
    }
  });

  return (
    <>
      <ambientLight intensity={0.5} /> {/* Ambient light */}
      <directionalLight position={[10, 10, 5]} intensity={1} /> {/* Directional light for better shading */}
      <mesh ref={earthRef}>
        <sphereBufferGeometry args={[1, 64, 64]} /> {/* Sphere for Earth */}
        <meshStandardMaterial map={new TextureLoader().load(textureUrl)} />
      </mesh>
      <OrbitControls /> {/* Allow for manual control if needed */}
    </>
  );
};

export default GlobeComponent;