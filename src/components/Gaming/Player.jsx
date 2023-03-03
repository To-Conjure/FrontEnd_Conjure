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
import speed from "../sounds/speed.mp3";
import { useStore } from "./hooks/useStore";
const speedSFX = new Audio(speed);
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
  const { goBackward, goForward, goRight, goLeft, jump, sprint, exit } =
    useKeyboard();
  const removePoint = useStore((state) => state.removePoint);
  const resetPoint = useStore((state) => state.resetPoint);

  const remove = () => {
    removePoint();
  };

  const reset = () => {
    resetPoint();
  };
  if(exit) navigate("/play")

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
  // console.log("x", x, "y", y, "z", z);

  function timeJumpBlock() {
    let jumpBoost = setInterval(() => (JUMP_FORCE = 30), 100);
    //end jump effect
    setTimeout(() => {
      clearInterval(jumpBoost);
      powerDownSFX.play();
      JUMP_FORCE = 4;
    }, 1000);
  }

  //jump boost feature on the question block
  function jumpBlock() {
    if (x >= -0.5 && y === 0.5 && z < -9.5 && z >= -9.9) {
      // console.log("jump ready")
      powerUpSFX.play();
      timeJumpBlock();
    }
  }
  jumpBlock();

  function timeSpeedBlock() {
    let speedBoost = setInterval(() => (MOVE = 10), 100);
    setTimeout(() => {
      clearInterval(speedBoost);
      powerDownSFX.play();
      MOVE = 4;
    }, 3000);
  }

  //speed boost feature on the question block
  function speedBlock() {
    if (x >= -1.5 && x <= 1.5 && y === 1.5 && z < -1 && z >= -1.2) {
      console.log("speed ready");
      speedSFX.volume = 0.1;
      speedSFX.play();
      timeSpeedBlock();
    }
  }
  speedBlock();

  useEffect(() => {
    const interval = setInterval(() => {
      remove();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

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

  function winBlock() {
    if (x >= -0.5 && y <= 2 && z <= -29) {
      winSFX.play();
      navigate("/win");
    }
  }
  winBlock();

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
    sprint ? (MOVE = 6) : (MOVE = 4);

    api.velocity.set(direction.x, vel.current[1], direction.z);

    //jump logic and prevent multiple jumps before landing
    if (jump && Math.abs(vel.current[1].toFixed(2)) < 0.01) {
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
