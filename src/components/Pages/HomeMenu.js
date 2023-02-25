import React, { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  PerspectiveCamera,
  PresentationControls,
  Environment,
  ContactShadows,
  useFBX,
} from "@react-three/drei";
import UserContext from "../../Context/userContext";
import warp from "../sounds/warp.mp3";
import flight from "../sounds/flight.mp3";

const warpSFX = new Audio(warp);
const flightSFX = new Audio(flight);

//Spaceship
const Spaceship = () => {
  const fbx = useFBX("/fbxAssets/Spaceship.fbx");
  return <primitive object={fbx} scale={0.8} rotation={[2, -0.3, 0]} />;
};

//Movement
const ModelAnimated = (props) => {
  const ref = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.rotation.x = -Math.PI / 1.8 + Math.cos(t / 4) / 8;
    ref.current.rotation.y = Math.sin(t / 2) / 8;
    ref.current.rotation.z = (1 + Math.sin(t / 4)) / 10;
    ref.current.position.y = (1 + Math.sin(t / 1.5)) / 10;
  });

  return (
    <group ref={ref} {...props} dispose={null}>
      <Spaceship />
    </group>
  );
};
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
        position={[100, 10, 10]}
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
        <ModelAnimated />
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
  const textStyle = "text-cyan mt-10 md:text-[50px] font-bold";
  const { user } = useContext(UserContext);
  console.log(user)
  function takeFlight(e) {
    flightSFX.volume = 1;
    flightSFX.loop = false;
    flightSFX.play();
    const path = e.target.innerText.toLowerCase().substring(6);
    navigate(`/${path}`);
  }
  return (
    <div className="w-full h-full bg-cover bg-center bg-warping-img flex justify-center">
      <MenuModel />
      <div className="absolute top-[20px] left-[20px] md:top-[30px] md:left-[50px]">
        <h1 className="text-cyan md:text-[120px] drop-shadow-white">
          <br />
          <br />
          CONJURE
        </h1>
        <br />
        <br />
        <section>
          <p className={textStyle}>
            {user ? `WELCOME ${user.toUpperCase()}` : "WELCOME CAPTAIN"}
          </p>
          <div className="hover:bg-sky-700 ">
          <p className={textStyle} onClick={takeFlight}>
            ENTER GAME
          </p>
          </div>
          <div className="hover:bg-sky-700 ">
          <p className={textStyle} onClick={takeFlight}>
            ENTER TUTORIAL
          </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomeMenu;
