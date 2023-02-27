import React, { useRef} from "react";
import { useNavigate } from "react-router-dom";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  PerspectiveCamera,
  PresentationControls,
  Environment,
  ContactShadows,
  useFBX,
} from "@react-three/drei";
import flight from '../sounds/flight.mp3'
import { useStore } from "./hooks/useStore";

const flightSFX = new Audio(flight);

const Spaceship = () => {
  const fbx = useFBX("/fbxAssets/spaceship.fbx");
  return <primitive object={fbx} scale={0.9} rotation={[11, -19, 3]} />;
};


const ModelAnimated = (props) => {
  const ref = useRef()

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.rotation.x = -Math.PI / 1.8 + Math.cos(t / 4) / 8;
    ref.current.rotation.y = Math.sin(t / 2) / 8;
    ref.current.rotation.z = (1 + Math.sin(t / 4)) / 10;
    ref.current.position.y = (1 + Math.sin(t / 1.5)) / 10;
  });

  return (
    <group ref={ref} {...props} dispose={null}>
            <Spaceship/>
    </group>
  )
}
const MenuModel = () => {
  return (
      <Canvas shadows dpr={[2, 3]} camera={{ position: [0, 0, 0], fov: 90 }}>
        <PerspectiveCamera
          makeDefault
          fov={70}
          position={[3, 7, 14]}
          focusDistance={[0, 0]}
        />
        <ambientLight color="blue" intensity={0.5} />
        <spotLight
          position={[1, 40, 10]}
          angle={0.15}
          penumbra={1}
          shadow-mapSize={[512, 512]}
          castShadow
        />
        <PresentationControls
          global
          config={{ mass: 2, tension: 500 }}
          snap={{ mass: 4, tension: 1500 }}
          rotation={[0, 0.3, 0]}
          polar={[-Math.PI / 6, Math.PI / 4]}
          azimuth={[-Math.PI / 6, Math.PI / 6]}
        >
        <ModelAnimated/>
        </PresentationControls>
        <ContactShadows
          position={[0, -1.4, 0]}
          opacity={0.35}
          scale={10}
          blur={2.5}
          far={4}
        />
        <Environment preset="city" />
      </Canvas>
  );
};

export default function Lose() {
  const navigate = useNavigate();
  const textStyle = "text-cyan md:text-[120px] text-center mb-25";
  const hoverStyle = "hover:bg-sky-700"
  const resetTime = useStore((state) => state.resetCountDown);
  return (
      <div className="w-full h-full bg-cover bg-center bg-warping bg-fixed flex justify-center">
        <section>
          <p class={textStyle}>
            Game&nbsp;Over
          </p>
          <div class={hoverStyle}>
          <p className={textStyle} onClick ={(e) => (resetTime(),flightSFX.play(),navigate("/game"))}>
            Retry
          </p>
          </div>
          <div className={hoverStyle}>
          <p className={textStyle} onClick ={(e) => (flightSFX.play(),navigate("/"))}>
            Home
          </p>
          </div>
        </section>
      <MenuModel /> 
      </div>
  );
};
