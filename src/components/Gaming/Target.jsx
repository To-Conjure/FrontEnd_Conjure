import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { TextureLoader } from "three";

function Target() {
    const rearTarget = useRef();
    const frontTarget = useRef();
  
    const loader = new TextureLoader();
    const texture = loader.load("../images/target.png");
  

    useFrame(({ mouse }) => {
      rearTarget.current.position.y = -mouse.y * 10;
      rearTarget.current.position.x = -mouse.x * 30;
  
      frontTarget.current.position.y = -mouse.y * 20;
      frontTarget.current.position.x = -mouse.x * 60;
    });
    return (
      <group>
        <sprite position={[0, 0, -8]} ref={rearTarget}>
          <spriteMaterial attach="material" map={texture} />
        </sprite>
        <sprite position={[0, 0, -16]} ref={frontTarget}>
          <spriteMaterial attach="material" map={texture} />
        </sprite>
      </group>
    );
  }

  export default Target