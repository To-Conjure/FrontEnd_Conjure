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



//Model
//Spaceship
const Spaceship = () => {
  const fbx = useFBX("/fbxAssets/viper.fbx");
  return <primitive object={fbx} scale={0.8} rotation={[5, -1, 5.5]} />;
};

//Movement
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
  const textStyle = "text-white mt-10 md:text-[50px] font-bold";
  return (
      <Canvas shadows dpr={[2, 3]} camera={{ position: [0, 0, 0], fov: 90 }}>
        <PerspectiveCamera
          makeDefault
          fov={70}
          position={[0, 0, 15]}
          focusDistance={[0, 0]}
        />
        <ambientLight color="blue" intensity={0.5} />
        <spotLight
          position={[1, 50, 10]}
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

export default function Win() {
  const navigate = useNavigate();
  const textStyle = "text-white mt-30 md:text-[120px] text-center font-bold";


  return (
      <div className="w-full h-full bg-cover bg-center bg-galaxy-img flex justify-center">
      <MenuModel /> 
      <div className="absolute bottom-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <section>
          <p className={textStyle}>
            You Won
          </p>
          <p className={textStyle} onClick ={() => navigate("/game")}>
            Retry
          </p>
          <p className={textStyle} onClick ={() => navigate("/")}>
            Home
          </p>
        </section>
      </div>
      </div>
  );
};
