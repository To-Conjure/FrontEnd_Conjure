import React, { useRef, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  PerspectiveCamera,
  PresentationControls,
  Environment,
  ContactShadows,
  useFBX,
} from "@react-three/drei";
import { useStore } from "./hooks/useStore";
import UserContext from "../../Context/userContext";
//Model
//Spaceship
const Spaceship = () => {
  const fbx = useFBX("/fbxAssets/cube.fbx");
  return <primitive object={fbx} scale={0.05} rotation={[5, -1, 5.5]} />;
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
  return (
    <Canvas shadows dpr={[2, 3]} camera={{ position: [0, 0, 0], fov: 90 }}>
      <PerspectiveCamera
        makeDefault
        fov={70}
        position={[0, 0, 15]}
        focusDistance={[0, 0]}
      />
      <ambientLight color="gold" intensity={0.5} />
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
        rotation={[0, 0.5, 0]}
        polar={[-Math.PI / 6, Math.PI / 4]}
        azimuth={[-Math.PI / 6, Math.PI / 6]}
      >
        <ModelAnimated />
      </PresentationControls>
      <ContactShadows
        position={[-10, -1.4, 0]}
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
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const textStyle = "mt-20 md:text-[100px] text-center font-bold";
  const resetPoint = useStore((state) => state.resetPoint);
  const points = useStore((state) => state.points);

  const [isHover, setIsHover] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const scoreStyle = {
    backgroundColor:"transparent",
    color: "#FFFFFF",
    background: "#232323",
    textShadow:
      "0 0 5px #E9D66B, 0 0 10px #E9D66B, 0 0 15px #E9D66B, 0 0 20px #E9D66B, 0 0 30px #E9D66B, 0 0 40px #f7f779, 0 0 55px #f7f779, 0 0 75px #f7f779",
    color: "#FFFFFF",
    background: "transparent",
  };


  const hoverRetryStyle = {
    backgroundColor:"transparent",
    color: "#FFFFFF",
    background: "#232323",
    textShadow:
      "0 0 5px #E9D66B, 0 0 10px #E9D66B, 0 0 15px #E9D66B, 0 0 20px #f7f779, 0 0 30px #f7f779, 0 0 40px #f7f779, 0 0 55px #f7f779, 0 0 75px #f7f779",
    color: "#FFFFFF",
    background: "transparent",
  };

  const hoverHomeStyle = {
    backgroundColor:"transparent",
    color: "#FFFFFF",
    background: "#232323",
    textShadow:
      "0 0 5px #E9D66B, 0 0 10px #E9D66B, 0 0 15px #E9D66B, 0 0 20px #f7f779, 0 0 30px #f7f779, 0 0 40px #f7f779, 0 0 55px #f7f779, 0 0 75px #f7f779",
    color: "#FFFFFF",
    background: "transparent",
  };

  const retryHoverOn = () => {
    setIsHover(true);
  };
  const retryHoverOff = () => {
    setIsHover(false);
  };

  const homeHoverOn = () => {
    setIsHovered(true);
  };
  const homeHoverOff = () => {
    setIsHovered(false);
  };

  return (
    <div className="w-full h-full bg-cover bg-center bg-galaxy flex justify-items">
      <MenuModel />
      <section>
        <p className={textStyle} style={scoreStyle}>
          {user ? `${user.toUpperCase()} WON SCORE: ${points}` : `CAPTAIN WINNER SCORE:${points}`}
        </p>
        <p
          className={textStyle}
          style={isHover ? hoverRetryStyle : {color:"gold"} }
          onMouseEnter={retryHoverOn}
          onMouseLeave={retryHoverOff}
          onClick={() => (resetPoint(), navigate("/game"))}
        >
          RETRY
        </p>
        <div></div>
        <div
          className={textStyle}
          style={isHovered ? hoverHomeStyle : {color:"gold"}}
          onMouseEnter={homeHoverOn}
          onMouseLeave={homeHoverOff}
          onClick={() => (resetPoint(), navigate("/"))}
        >
          HOME
        </div>
      </section>
    </div>
  );
}
