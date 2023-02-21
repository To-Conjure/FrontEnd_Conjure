import { PointerLockControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import * as THREE from 'three';

export const FPV = () => {
  const { camera, gl } = useThree();
//   const listener = new THREE.AudioListener();
//   camera.add(listener);

//   const sound = new THREE.Audio(listener);

//   const audioLoader = new THREE.AudioLoader();
//   audioLoader.load("../Music/battle.mp3", function (buffer) {
//     sound.setBuffer(buffer);
//     sound.setLoop(true);
//     sound.setVolume(1);
//     sound.play();
//   });
  return <PointerLockControls args={[camera, gl.domElement]} />;
};
