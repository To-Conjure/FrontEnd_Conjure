import { Physics } from "@react-three/cannon";
import { Stars, Sparkles } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Ground } from "./Ground";
import { Player } from "./Player";
import { FPV } from "./FPV";
import "./game.css"
import { Cubes } from "./Cubes";
import SkyTime from "./SkyTime";


export default function Map() {
  return (
    <>
      <Canvas>
        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
          speed={1}
        />
        <SkyTime/>
        <ambientLight intensity={1} />
        <FPV />
        <Physics>
          <Player />
          <Cubes/>
          <Ground />
          
        </Physics>
      </Canvas>
      <div className="absolute centered cursor ">+</div>

    </>
  );
}
