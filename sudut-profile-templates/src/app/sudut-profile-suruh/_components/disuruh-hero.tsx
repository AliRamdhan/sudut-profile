"use client";

import { Button } from "@/components/ui/button";

import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { Grid } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import { Manrope } from "next/font/google";

const manrope = Manrope({ subsets: ["latin"] });

function AnimatedBox({
  initialPosition,
}: {
  initialPosition: [number, number, number];
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [targetPosition, setTargetPosition] = useState(
    new THREE.Vector3(...initialPosition)
  );
  const currentPosition = useRef(new THREE.Vector3(...initialPosition));

  const getAdjacentIntersection = (current: THREE.Vector3) => {
    const directions = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ];
    const randomDirection =
      directions[Math.floor(Math.random() * directions.length)];
    return new THREE.Vector3(
      current.x + randomDirection[0] * 3,
      0.5,
      current.z + randomDirection[1] * 3
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const newPosition = getAdjacentIntersection(currentPosition.current);
      newPosition.x = Math.max(-15, Math.min(15, newPosition.x));
      newPosition.z = Math.max(-15, Math.min(15, newPosition.z));
      setTargetPosition(newPosition);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  useFrame((state, delta) => {
    if (meshRef.current) {
      currentPosition.current.lerp(targetPosition, 0.1);
      meshRef.current.position.copy(currentPosition.current);
    }
  });

  return (
    <mesh ref={meshRef} position={initialPosition}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#ffffff" opacity={0.9} transparent />
      <lineSegments>
        <edgesGeometry
          attach="geometry"
          args={[new THREE.BoxGeometry(1, 1, 1)]}
        />
        <lineBasicMaterial attach="material" color="#000000" linewidth={2} />
      </lineSegments>
    </mesh>
  );
}

function Scene() {
  const initialPositions: [number, number, number][] = [
    [-9, 0.5, -9],
    [-3, 0.5, -3],
    [0, 0.5, 0],
    [3, 0.5, 3],
    [9, 0.5, 9],
    [-6, 0.5, 6],
    [6, 0.5, -6],
    [-12, 0.5, 0],
    [12, 0.5, 0],
    [0, 0.5, 12],
  ];

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Grid
        renderOrder={-1}
        position={[0, 0, 0]}
        infiniteGrid
        cellSize={1}
        cellThickness={0.5}
        sectionSize={3}
        sectionThickness={1}
        sectionColor={"#808080"}
        fadeDistance={50}
      />
      {initialPositions.map((position, index) => (
        <AnimatedBox key={index} initialPosition={position} />
      ))}
    </>
  );
}

const Hero = () => {
  return (
    <div
      className={`relative w-full h-screen bg-black text-white overflow-hidden ${manrope.className}`}
    >
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10 pt-28">
        <p className="text-lg font-medium">Welcome to</p>
        <h1 className="text-7xl font-bold mb-8">Disuruh</h1>
        <h2 className="text-2xl mb-10">
          Kami adalah platform yang menghubungkan Anda dengan orang-orang yang
          siap membantu menyelesaikan berbagai kebutuhan Anda — dari belanja
          titipan, mengantar barang, hingga membantu pekerjaan harian.
        </h2>
        <div className="mt-10 flex justify-center items-center gap-x-6">
          <p className="text-lg font-medium cursor-default">
            Mau dibantu apa hari ini?
          </p>
          <Button className="px-8 rounded-full text-lg border border-gray-200 transition-all duration-300 hover:scale-105">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4"
            >
              <title>WhatsApp</title>
              <path d="M20.52 3.48A11.94 11.94 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.12.55 4.19 1.6 6.02L0 24l6.18-1.6A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.21-3.48-8.52zM12 21.5c-1.94 0-3.83-.53-5.47-1.54l-.39-.23-3.67.95.98-3.57-.25-.37A9.48 9.48 0 0 1 2.5 12c0-5.25 4.26-9.5 9.5-9.5 2.54 0 4.93.99 6.72 2.78A9.48 9.48 0 0 1 21.5 12c0 5.24-4.25 9.5-9.5 9.5z" />
              <path d="M17.27 14.54c-.29-.15-1.71-.84-1.97-.94-.26-.1-.45-.15-.64.15-.19.29-.74.94-.91 1.13-.17.19-.34.21-.63.06-.29-.15-1.22-.45-2.33-1.45-.86-.76-1.44-1.7-1.61-1.99-.17-.29-.02-.45.13-.59.14-.14.29-.34.43-.51.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.64-1.54-.88-2.11-.23-.55-.47-.48-.64-.49-.17 0-.36-.01-.55-.01-.19 0-.51.07-.78.36-.27.29-1.02 1-1.02 2.44 0 1.44 1.04 2.84 1.18 3.03.15.19 2.06 3.14 5 4.4.7.3 1.25.48 1.68.61.71.23 1.36.2 1.87.12.57-.09 1.71-.7 1.95-1.38.24-.67.24-1.25.17-1.38-.07-.13-.26-.21-.55-.36z" />
            </svg>
            Hubungi Kami
          </Button>
        </div>
      </div>
      <Canvas
        shadows
        camera={{ position: [30, 30, 30], fov: 50 }}
        className="absolute inset-0"
      >
        <Scene />
      </Canvas>
    </div>
  );
};

export default Hero;
