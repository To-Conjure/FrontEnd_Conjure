import { useBox } from "@react-three/cannon";
import * as textures from "../images/textures";
import { useStore } from "./hooks/useStore";

export const Cube = ({ position, texture }) => {
//   function handleBlocks(e) {
//     const clickedFace = Math.floor(e.faceIndex / 2);
//     const { x, y, z } = ref.current.position;

//     if (e.altKey) {
//       removeCube(x, y, z);
//       return;
//     } else if (clickedFace === 0) {
//       addCube(x + 1, y, z);
//       return;
//     } else if (clickedFace === 1) {
//       addCube(x - 1, y, z);
//       return;
//     } else if (clickedFace === 2) {
//       addCube(x, y + 1, z);
//       return;
//     } else if (clickedFace === 3) {
//       addCube(x, y - 1, z);
//       return;
//     } else if (clickedFace === 4) {
//       addCube(x, y, z + 1);
//       return;
//     } else if (clickedFace === 5) {
//       addCube(x, y, z - 1);
//       return;
//     }
//   }

  const [ref] = useBox(() => ({
    type: "Static",
    position,
  }));
  const [addCube, removeCube] = useStore((state) => [
    state.addCube,
    state.removeCube,
  ]);
  const currTexture = textures[texture + "Texture"];

  return (
    <mesh 
    // onClick={(e) => handleBlocks()} 
    ref={ref}>
      <boxBufferGeometry attach="geometry" args={[1]} />
      <meshStandardMaterial map={currTexture} />
    </mesh>
  );
};
