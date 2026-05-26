import { Canvas, useFrame, useThree } from "@react-three/fiber";

import {
  Stars,
  Line,
  Html,
} from "@react-three/drei";

import * as THREE from "three";

import { useRef } from "react";


// ========================================
// SATURN
// ========================================

function Saturn() {

  const planetRef = useRef();

  const ringRef = useRef();

  useFrame(() => {

    // SUBTLE ROTATION
    planetRef.current.rotation.y += 0.0009;

    ringRef.current.rotation.z += 0.0004;

  });

  return (

    <group position={[4.8, 0.3, -2]}>

      {/* PLANET */}
      <mesh ref={planetRef}>

        <sphereGeometry
          args={[1.7, 128, 128]}
        />

        <meshStandardMaterial

          color="#b07a47"

          roughness={0.92}

          metalness={0.04}

          emissive="#5b3418"

          emissiveIntensity={0.15}

        />

      </mesh>

      {/* SHADOW DEPTH */}
      <mesh position={[0.25, -0.1, -0.4]}>

        <sphereGeometry
          args={[1.72, 64, 64]}
        />

        <meshBasicMaterial

          color="#000000"

          transparent

          opacity={0.18}

        />

      </mesh>

      {/* MAIN RINGS */}
      <mesh
        ref={ringRef}
        rotation={[
          Math.PI / 1.5,
          0,
          0,
        ]}
      >

        <ringGeometry
          args={[2.4, 3.4, 236]}
        />

        <meshStandardMaterial

          color="#d6c2a2"

          side={THREE.DoubleSide}

          transparent

          opacity={0.45}

          roughness={1.5}

          metalness={0.12}

        />

      </mesh>

      {/* OUTER FADE */}
      <mesh
        rotation={[
          Math.PI / 1.7,
          0,
          0,
        ]}
      >

        <ringGeometry
          args={[3.5, 4.8, 256]}
        />

        <meshBasicMaterial

          color="#e5d5gc"

          transparent

          opacity={0.06}

          side={THREE.DoubleSide}

        />

      </mesh>

    </group>
  );
}



// ========================================
// CAMERA FLOAT
// ========================================

function CameraMotion() {

  const { camera } = useThree();

  useFrame(({ clock }) => {

    const t = clock.getElapsedTime();

    camera.position.x =
      Math.sin(t * 0.08) * 0.5;

    camera.position.y =
      Math.cos(t * 0.1) * 0.25;

    camera.lookAt(0, 0, 0);

  });

  return null;
}



// ========================================
// SUBTLE ORBIT LINES
// ========================================

function OrbitPaths() {

  const orbit1 = [];

  for (let i = 0; i <= 100; i++) {

    const angle = (i / 100) * Math.PI * 3;

    orbit1.push([
      Math.cos(angle) * 8,
      Math.sin(angle) * 2.5,
      -2,
    ]);
  }

  const orbit2 = [];

  for (let i = 0; i <= 100; i++) {

    const angle = (i / 100) * Math.PI * 2;

    orbit2.push([
      Math.cos(angle) * 9,
      Math.sin(angle) * 3.4,
      -5,
    ]);
  }

  return (
    <>
      <Line

        points={orbit1}

        color="#ff6633"

        lineWidth={0.3}

        transparent

        opacity={0.08}

      />

      <Line

        points={orbit2}

        color="#ff6633"

        lineWidth={0.3}

        transparent

        opacity={0.04}

      />
    </>
  );
}



// ========================================
// SATELLITE
// ========================================

function Satellite() {

  const ref = useRef();

  useFrame(({ clock }) => {

    const t = clock.getElapsedTime();

    ref.current.position.x =
      Math.cos(t * 0.25) * 7;

    ref.current.position.y =
      Math.sin(t * 0.25) * 2;

    ref.current.position.z =
      Math.sin(t * 0.12) * 1;

    ref.current.rotation.y += 0.01;

  });

  return (

    <mesh ref={ref}>

      {/* CIRCULAR OBJECT */}
      <sphereGeometry
        args={[0.12, 32, 32]}
      />

      <meshStandardMaterial

        color="#ff9966"

        emissive="#ff6633"

        emissiveIntensity={2}

        roughness={0.2}

        metalness={0.4}

      />

    </mesh>
  );
}



// ========================================
// HUD OVERLAY
// ========================================

function HUD() {

  return (

    <Html fullscreen>

      <div
        className="
          absolute
          inset-0
          pointer-events-none
          font-mono
          text-white
        "
      >

        {/* TOP LEFT */}
        
        {/* TOP RIGHT */}
        

        {/* BOTTOM LEFT */}
        <div
          className="
            absolute
            bottom-12
            left-7
          "
        >

          
        </div>

      </div>

    </Html>
  );
}



// ========================================
// MAIN SCENE
// ========================================

function SpaceScene() {

  return (

    <div
      className="
        absolute
        inset-0
        z-0
      "
    >

      <Canvas
        camera={{
          position: [0, 0, 9],
          fov: 42,
        }}
      >

        {/* BACKGROUND */}
        <color
          attach="background"
          args={["#020207"]}
        />

        {/* LIGHTING */}
        <ambientLight intensity={0.38} />

        <directionalLight

          position={[8, 5, 5]}

          intensity={4.5}

          color="#ffd7a8"

        />

        <pointLight

          position={[10, 2, 2]}

          intensity={10}

          color="#ffbb77"

        />

        {/* STARS */}
        <Stars

          radius={260}

          depth={60}

          count={10000}

          factor={4}

          saturation={0}

          fade

          speed={1.25}

        />

        {/* ORBITS */}
        <OrbitPaths />

        {/* SATURN */}
        <Saturn />

        {/* SATELLITE */}
        <Satellite />

        {/* CAMERA FLOAT */}
        <CameraMotion />

        {/* HUD */}
        <HUD />

      </Canvas>

      {/* CINEMATIC VIGNETTE */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-black/10
          via-transparent
          to-black/80
          pointer-events-none
        "
      />

    </div>
  );
}

export default SpaceScene;