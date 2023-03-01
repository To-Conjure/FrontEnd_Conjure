import { useSphere } from "@react-three/cannon";
import { useFrame, useThree } from "@react-three/fiber";
import { Vector3 } from "three";
import { useEffect, useRef, useState } from "react";
import { useKeyboard } from "./hooks/useKeyboard";
import { useNavigate } from "react-router-dom";
import death from "../sounds/death.mp3";
import win from "../sounds/winner.wav";
import jump from "../sounds/jump.mp3";
import powerUp from "../sounds/powerUp.mp3";
import powerDown from "../sounds/powerDown.mp3";
import { useStore } from "./hooks/useStore";
const winSFX = new Audio(win);
const powerUpSFX = new Audio(powerUp);
const powerDownSFX = new Audio(powerDown);
const deathSFX = new Audio(death);
const jumpSFX = new Audio(jump);

let JUMP_FORCE = 6;
let MOVE = 4;

export const Player = () => {
  const navigate = useNavigate();
  const { camera } = useThree();
  const { goBackward, goForward, goRight, goLeft, jump, sprint } =
    useKeyboard();
  const removePoint = useStore((state) => state.removePoint);
  const resetPoint = useStore((state) => state.resetPoint);

  const remove = () => {
    removePoint();
  };

  const reset = () => {
    resetPoint();
  };

  

  const [ref, api] = useSphere(() => ({
    mass: 1,
    type: "Dynamic",
    position: [0, 5, 0],
  }));

  //velocity for the sphere
  const vel = useRef([0, 0, 0]);
  useEffect(() => {
    return api.velocity.subscribe((v) => (vel.current = v));
  }, [api.velocity]);

  //camera pos tracking
  const pos = useRef([0, 0, 0]);
  useEffect(() => {
    return api.position.subscribe((p) => (pos.current = p));
  }, [api.position]);

  const x = +pos.current[0].toFixed(2);
  const y = +pos.current[1].toFixed(2);
  const z = +pos.current[2].toFixed(2);
  const xyz = [x, y, z];
  console.log(x,y,z)

  function speedBlock(){  
    let speedBoost = setInterval(() => (JUMP_FORCE = 50), 1000);
    //end speed effect
    setTimeout(() => {
      clearInterval(speedBoost);
      powerDownSFX.play()
      JUMP_FORCE = 4;
    }, 3000);
  }
  
  //speed boost feature
  if(x >= -0.5 && y <= 0.5 && z <= -10){
    console.log("here")
    powerUpSFX.play()
    speedBlock()
  }

  //Fall logic keep track
  useEffect(() => {
    const interval = setInterval(() => {
      const playerFall = pos.current[1].toFixed(2);
      // console.log(playerFall)
      if (playerFall <= -8) {
        reset();
        deathSFX.play();
        navigate("/lose");
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);



  if (x >= -0.5 && y <= 2 && z <= -29) {
    winSFX.play();
    navigate("/win");
  }

  useFrame(() => {
    camera.position.copy(
      new Vector3(pos.current[0], pos.current[1], pos.current[2])
    );

    const direction = new Vector3();

    //Z direction up/down
    const frontVector = new Vector3(
      0,
      0,
      (goBackward ? 1 : 0) - (goForward ? 1 : 0)
    );

    //X direction left/right
    const sideVector = new Vector3(
      (goLeft ? 1 : 0) - (goRight ? 1 : 0),
      0,
      0,
      0
    );

    direction
      .subVectors(frontVector, sideVector)
      .normalize()
      .multiplyScalar(MOVE)
      .applyEuler(camera.rotation);

    //run movement
    sprint ? MOVE = 6 : MOVE = 4

    api.velocity.set(direction.x, vel.current[1], direction.z);

    //jump logic and prevent multiple jumps before landing
    if (jump && Math.abs(vel.current[1].toFixed(2)) < 0.01) {
      remove();
      jumpSFX.play();
      api.velocity.set(vel.current[0], JUMP_FORCE, vel.current[2]);
    }
  });

  return (
    <>
      <mesh ref={ref} />
    </>
  );
};
