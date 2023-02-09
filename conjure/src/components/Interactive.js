import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  PerspectiveCamera,
  PresentationControls,
  Environment,
  ContactShadows,
  Html,
  useFBX,
} from "@react-three/drei";

const menuItem = [
  {
    label: "Login",
    content: null,
  },
  {
    label: "Sign Up",
    content: null,
  },
  {
    label: "Learn More",
    content: null,
  },
];
//spaceship model
  // const fbx = useFBX('/assets/Spaceship.fbx')
  // return <primitive object={fbx} scale={0.2} rotation={[2.2, -0.3, 0]} />;

const Hologram = () => {
  const fbx = useFBX("/assets/holo.fbx");
  return <primitive object={fbx} scale={0.0005} rotation={[2.2, -0.3, 0]} />;
};

const CustomMenu = (props) => {
  const ref = useRef();

  //tailwindCSS
  const menuStyle = "group relative cursor-pointer flex items-center justify-center h-[22px] text-menu font-black w-[97px] text-center text-sm hover:text-white"
  const animatedStyle = "absolute z-[-1] h-full bg-menu w-0 right-0 block transform group-hover:animate-cover"
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.rotation.x = -Math.PI / 1.75 + Math.cos(t / 4) / 8;
    ref.current.rotation.y = Math.sin(t / 4) / 8;
    ref.current.rotation.z = (1 + Math.sin(t / 1.5)) / 20;
    ref.current.position.y = (1 + Math.sin(t / 1.5)) / 10;
  });

  return (
    <group ref={ref} {...props} dispose={null}>
      {menuItem.map((item, key) => (
        <>
          <mesh>
            <Html
              wrapperClass
              key={key}
              scale={0.7}
              rotation={[Math.PI / 2, 0, 0]}
              position={[1.88, 0, (key + -2) * -0.5]}
              transform
            >
              <div className={menuStyle}>
                <div className={animatedStyle}></div>
                {item.label}
              </div>
            </Html>
          </mesh>
          <mesh
            scale={[1.7, 0.1, 0.4]}
            position={[1.88, 0.06, (key + -2) * -0.5]}
          >
            <boxBufferGeometry />
            <meshStandardMaterial color="#ff0a65" />
          </mesh>
        </>
      ))}
      <Hologram/>
    </group>
  );
};

const Interactive = () => {
  return (
    <div className="mt-20 h-[65vh] md:mt-0 md:w-full md:h-full">
      <Canvas shadows dpr={[2, 3]} camera={{ position: [0, 0, 4], fov: 70 }}>
        <PerspectiveCamera
          makeDefault
          fov={70}
          position={[0, 0, 5]}
          focusDistance={[0, 0]}
        />
        <ambientLight color="#ff0a65" intensity={0.5} />
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
          <CustomMenu
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, 0.25, 0]}
            scale={1}
          />
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
    </div>
  );
};

export default Interactive;
