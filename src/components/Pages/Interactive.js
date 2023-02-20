import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  PerspectiveCamera,
  PresentationControls,
  Environment,
  ContactShadows,
  Html,
  useFBX,
} from "@react-three/drei";
import Login from "../menuPath/Login";
import Register from "../menuPath/Register";
import { useNavigate } from "react-router-dom";

const menuItem = [
  {
    label: "Login",
    content: <Login />,
  },
  {
    label: "Register",
    content: <Register/>,
  },
];
 

const Hologram = () => {
  const fbx = useFBX("/fbxAssets/holo.fbx");
  return <primitive object={fbx} scale={0.0005} rotation={[2.2, -0.3, 0]} />;
};


const CustomMenu = (props) => {
  const navigate = useNavigate()
  const ref = useRef();

  const transition = () => {
    navigate("/play")
  }
  //tailwindCSS
  const menuStyle =
    "group relative cursor-pointer flex items-center justify-center h-[22px] text-menu font-black w-[97px] text-center text-sm hover:text-white";
  const animatedStyle =
    "absolute z-[-1] h-full bg-menu w-0 right-0 block transform group-hover:animate-cover";

  //fbx 3d look
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.rotation.x = -Math.PI / 1.75 + Math.cos(t / 4) / 8;
    ref.current.rotation.y = Math.sin(t / 4) / 8;
    ref.current.rotation.z = (1 + Math.sin(t / 1.5)) / 20;
    ref.current.position.y = (1 + Math.sin(t / 1.5)) / 10;
  });
  //transitions scene
  const menuClicked = (item) => {
    props.setClickedMenu(item);
    setTimeout(() => {
      props.setTime(true);
    }, 1500);
  };
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
              <div className={menuStyle} onClick={() => menuClicked(item)}>
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
            <mesh>
            <Html
              wrapperClass
              scale={0.7}
              rotation={[Math.PI / 2, 0, 0]}
              position={[1.88, 0, (0) * -0.5]}
              transform
            >
              <div className={menuStyle} onClick = {() => transition()}>
                <div className={animatedStyle}></div>
                Play Now
              </div>
            </Html>
          </mesh>
          <mesh
            scale={[1.7, 0.1, 0.4]}
            position={[1.88, 0.06, (0) * -0.5]}
          >
            <boxBufferGeometry />
            <meshStandardMaterial color="#ff0a65" />
          </mesh>
      <Hologram/>
    </group>

  );
};
const Interactive = () => {
  //close page  
  const navigate = useNavigate()

  const closePage = () => {
    setClickedMenu(null);
    setTime(null);
    window.scrollTo(0, 0);
  };

  const [clickedMenu, setClickedMenu] = useState(null);
  const [time, setTime] = useState(null);
  
  const menuClickedStyle = `mt-20 h-[65vh] md:mt-0 md:w-full md:h-full transition-opacity duration-500 opacity-0 ${
    !clickedMenu && `opacity-100`
  }`;

  return (
    <>
    <div className="absolute bottom-3/4 left-1/3 transform -translate-x-3/4 -translate-y-3/4">
    <h1 className="drop-shadow-md text-primary md:text-[120px]">
      Conjure
    </h1>
    </div>
      <div className={menuClickedStyle}>
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
            {!clickedMenu && (
              <CustomMenu
                rotation={[-Math.PI / 2, 0, 0]}
                position={[0, 0.25, 0]}
                scale={1}
                setClickedMenu={setClickedMenu}
                setTime={setTime}
              />
            )}
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
      {/* menus bg color */}
      {clickedMenu && (
        <div className="absolute w-full min-h-full bg-black top-0 z-20 flex justify-center">

          {/* closeButton appearence */}
          <div
            className={`p-10 mt-8 md:mt-0 md:max-w-[80%] md:p-20 transition-opacity duration-1000 opacity-0 ${
              time && "delay-600 opacity-100"
            }`}
          >
            {clickedMenu.content}

            <div
              className="fixed group top-[10px] right-[10px] md:top-[50px] md:right-[50px] w-[50px] h-[50px] bg-white cursor-pointer flex justify-center items-center text-black hover:text-white"
              onClick={() => closePage()}
              // onMouseEnter={() => isMusic && hoverSoundEffect()}
            >
              <div className="absolute h-full bg-menu w-0 right-0 block transform group-hover:animate-cover"></div>
              <p className="absolute font-normal text-[30px]">&#10005;</p>
            </div>
          </div>
        </div>
      )}

      {/* transition effects */}
       <div className={`absolute block w-full bg-cover bg-center bg-load-img z-20 transition-all duration-500 ease-in ${clickedMenu ? 'bottom-0 h-full' : 'h-0'}  ${time && 'delay-[unset] top-0 h-0'}`}></div>
    </>
  );
};

export default Interactive;
