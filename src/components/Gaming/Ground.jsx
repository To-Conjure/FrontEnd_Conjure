import { usePlane } from "@react-three/cannon";
import { lavaTexture } from "../images/textures";
import { useStore } from "./hooks/useStore";

export const Ground = () => {
  const [addCube] = useStore((state) => [state.addCube]);

  // const buildClick = (e) => {
  //         const [x, y, z] = Object.values(e.point).map(val => Math.ceil(val));
  //         console.log(x,y,z)
  //         addCube(x, y, z)
  // }

  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, -10, -10],
  }));

  lavaTexture.repeat.set(1000, 1000);
  const area = 200;
  return (
    <>
      <mesh
        // onClick={(e)=>buildClick()}
        ref={ref}
      >
        <planeBufferGeometry attach="geometry" args={[area, area]} />
        <meshStandardMaterial
          attach="material"
          color="orange"
          map={lavaTexture}
          roughness={1}
        />
      </mesh>
    </>
  );
};
