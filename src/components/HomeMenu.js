import React, { useRef, useState } from "react";
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
  const fbx = useFBX("/fbxAssets/Spaceship.fbx");
  return <primitive object={fbx} scale={0.5} rotation={[2.2, -0.3, 0]} />;
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
        <ambientLight color="pink" intensity={0.5} />
        <spotLight
          position={[10, 10, 10]}
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
          polar={[-Math.PI / 4, Math.PI / 4]}
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

const HomeMenu = () => {
  const navigate = useNavigate();
  const textStyle = "text-white mt-10 md:text-[50px] font-bold";

  const navPage = (e) => {
    const path = e.target.innerText.toLowerCase();
    navigate(`/${path}`);
  };

  return (
      <div className="w-full h-full bg-cover bg-center bg-galaxy-img flex justify-center">
      <MenuModel /> 
      <div className="absolute top-[20px] left-[20px] md:top-[30px] md:left-[50px]">
        <h1 className="drop-shadow-md text-white md:text-[120px]">
          <br />
          <br />
          Conjure
        </h1>
        <br />
        <br />
        <section>
          <p className={textStyle} onClick={navPage}>
            Game
          </p>
          <p className={textStyle} onClick={navPage}>
            Tutorial
          </p>
        </section>
      </div>
      </div>
  );
};


export default HomeMenu;
