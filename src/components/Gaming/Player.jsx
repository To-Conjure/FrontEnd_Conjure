import { useSphere } from "@react-three/cannon";
import { useFrame, useThree } from "@react-three/fiber";
import { Vector3 } from "three";
import { useEffect, useRef, useState } from "react";
import { useKeyboard } from "./hooks/useKeyboard";
import { useNavigate } from "react-router-dom";
import * as THREE from "three";
import death from "../sounds/death.mp3";
import win from "../sounds/winner.wav";
import jump from "../sounds/jump.mp3";
import { useStore } from "./hooks/useStore";
const winSFX = new Audio(win);
const deathSFX = new Audio(death);
const jumpSFX = new Audio(jump);

const JUMP_FORCE = 7;
let MOVE = 4;

export const Player = () => {
  const navigate = useNavigate();
  const { camera } = useThree();
  const { goBackward, goForward, goRight, goLeft, jump, sprint } =
    useKeyboard();
  const addPoint = useStore((state) => state.addPoint);
  const removePoint = useStore((state) => state.removePoint);

  const add = () => {
    addPoint();
  };

  const remove = () => {
    removePoint();
  };

  const [ref, api] = useSphere(() => ({
    mass: 1,
    type: "Dynamic",
    position: [0, 3, 0],
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
  console.log(xyz);

  if (x <= -0.05 && y <= 2 && z <= -29.5) {
    winSFX.play();
    navigate("/win");
  }

  if (y <= -90) {
    remove();
    deathSFX.play();
    navigate("/lose");
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
    api.velocity.set(direction.x, vel.current[1], direction.z);

    //jump logic and prevent multiple jumps before landing
    if (jump && Math.abs(vel.current[1].toFixed(2)) < 0.05) {
      add();
      jumpSFX.play();
      api.velocity.set(vel.current[0], JUMP_FORCE, vel.current[2]);
    }
    sprint ? (MOVE = 8) : (MOVE = 4);
  });

  return (
    <>
      <mesh ref={ref} />
    </>
  );
};
