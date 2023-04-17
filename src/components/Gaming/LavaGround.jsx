import { usePlane } from "@react-three/cannon";
import { lavaTexture } from "../images/textures";

export const LavaGround = () => {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, -10, -10],
  }));

  lavaTexture.repeat.set(1000, 1000);
  const area = 200;
  return (
    <>
      <mesh
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
