import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useState } from "react";
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
        className=" space
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
          className=" space
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

function MouseReactiveStars() {

  const starsRef = useRef();

  const mouse = useRef({
    x: 0,
    y: 0,
  });

  useEffect(() => {

    const handleMouseMove = (e) => {

      mouse.current.x =
        (e.clientX / window.innerWidth - 0.5) * 2;

      mouse.current.y =
        (e.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener(
      "mousemove",
      handleMouseMove
    );

    return () =>
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

  }, []);

  useFrame(({ clock }) => {

  if (!starsRef.current) return;

  const t = clock.getElapsedTime();

  // Infinite cosmic drifting
  starsRef.current.rotation.y += 0.00015;

  starsRef.current.rotation.x =
    Math.sin(t * 0.05) * 0.015;

  // Mouse interaction
  starsRef.current.rotation.y +=
    (mouse.current.x * 0.02 -
      starsRef.current.rotation.y) *
    0.02;

  starsRef.current.rotation.x +=
    (-mouse.current.y * 0.015 -
      starsRef.current.rotation.x) *
    0.02;

  // Living-space breathing effect
  const pulse =
    1 + Math.sin(t * 0.7) * 0.003;

  starsRef.current.scale.x =
    pulse + Math.abs(mouse.current.x) * 0.01;

  starsRef.current.scale.y =
    pulse + Math.abs(mouse.current.y) * 0.01;

  starsRef.current.scale.z =
    pulse;
});

  return (

    <group ref={starsRef}>

      <Stars
        radius={90}
        depth={30}
        count={10000}
        factor={5}
        saturation={0}
        fade
        speed={0.25}
      />

    </group>
  );
}

// ========================================
// MAIN SCENE
// ========================================
function DynamicLighting() {

  const directionalRef = useRef();
  const ambientRef = useRef();

  useFrame(({ clock }) => {

    if (
      !directionalRef.current ||
      !ambientRef.current
    ) return;

    const t = clock.getElapsedTime();

    // Smooth day cycle
    const cycle =
      (Math.sin(t * 0.05) + 1) / 2;

    // TARGET VALUES
    const targetIntensity =
      1.2 + cycle * 3.2;

    const targetX =
      Math.sin(t * 0.05) * 18;

    const targetY =
      Math.cos(t * 0.05) * 8;

    // SMOOTH POSITION
    directionalRef.current.position.x +=
      (
        targetX -
        directionalRef.current.position.x
      ) * 0.008;

    directionalRef.current.position.y +=
      (
        targetY -
        directionalRef.current.position.y
      ) * 0.008;

    // SMOOTH INTENSITY
    directionalRef.current.intensity +=
      (
        targetIntensity -
        directionalRef.current.intensity
      ) * 0.01;

    // COLOR BLENDING
    const sunrise =
      new THREE.Color("#ff9966");

    const noon =
      new THREE.Color("#fff4d6");

    const sunset =
      new THREE.Color("#ff7744");

    let targetColor;

    if (cycle < 0.35) {

      targetColor = sunrise;

    } else if (cycle < 0.75) {

      targetColor = noon;

    } else {

      targetColor = sunset;
    }

    // VERY SMOOTH COLOR TRANSITION
    directionalRef.current.color.lerp(
      targetColor,
      0.008
    );

    // AMBIENT SMOOTHNESS
    const ambientTarget =
      0.2 + cycle * 0.35;

    ambientRef.current.intensity +=
      (
        ambientTarget -
        ambientRef.current.intensity
      ) * 0.01;
  });

  return (
    <>
      {/* Ambient */}
      <ambientLight
        ref={ambientRef}
        intensity={0.3}
      />

      {/* Main Sun */}
      <directionalLight
        ref={directionalRef}
        position={[10, 5, 5]}
        intensity={2}
        color="#fff4d6"
      />

      {/* Glow */}
      <pointLight
        position={[10, 2, 2]}
        intensity={6}
        color="#ffbb77"
      />
    </>
  );
}

function SpaceScene() {

  return (

    <div
      className=" space
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

        {/* DYNAMIC LIGHTING */}
        <DynamicLighting />

        {/* STARS */}
        <MouseReactiveStars />

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

      {/* CINEMATIC OVERLAY */}
      <div
        className=" space
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