import { usePlane } from "@react-three/cannon";
import { grassTexture } from "../images/textures";

export const GrassGround = () => {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, -10, -10],
  }));

  grassTexture.repeat.set(1000, 1000);
  const area = 200;
  return (
    <>
      <mesh
        ref={ref}
      >
        <planeBufferGeometry attach="geometry" args={[area, area]} />
        <meshStandardMaterial
          attach="material"
          color="green"
          map={grassTexture}
          roughness={1}
        />
      </mesh>
    </>
  );
};