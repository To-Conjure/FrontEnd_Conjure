import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFBX } from "@react-three/drei";

const HomeMenu = () => {
  const navigate = useNavigate()
  const [path, setPath] = useState(" ")

  const navPage = (e) => {
    // setPath(e.target.innerText.toLowerCase())
    // console.log(path)
    navigate(`/login`)
  }

  const Spaceship = () => {
    const fbx = useFBX("/fbxAssets/Spaceship.fbx");
    return <primitive object={fbx} scale={0.5} rotation={[2.2, -0.3, 0]} />;
  };

  const textStyle = "text-white mt-10 md:text-[50px] font-bold		"
  return (
    <>
      <div className="absolute top-[20px] left-[20px] md:top-[30px] md:left-[50px]">
        <h1 className="drop-shadow-md text-white md:text-[120px]">
          <br />
          <br/>
          Conjure
        </h1>
        <br/>
        <Spaceship/>
        <br/>
        <section>
        <p className={textStyle} onClick ={navPage}>Login</p>
        <p className={textStyle} onClick ={navPage}>Register</p>
        <p className={textStyle} onClick ={navPage}>Play</p>
        </section>
      </div>
    </>
  );
};


export default HomeMenu