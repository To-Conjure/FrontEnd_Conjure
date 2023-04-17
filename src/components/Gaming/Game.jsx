import { Physics } from "@react-three/cannon";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { LavaGround } from "./LavaGround";
import { GrassGround } from "./GrassGround";
import { Player } from "./Player";
import { FPV } from "./FPV";
import "./game.css";
import { Cubes } from "./Cubes";
import SkyTime from "./SkyTime";
import Points from "./Points";
import Timer from "./Timer";
import { useStore } from "./hooks/useStore";


export default function Map() {
  const time = useStore((state) => state.time);
  const lavaTime = +time.toFixed(2)
  console.log("lava",lavaTime)
  console.log("time",time)
  return (
    <>
      <Points />
      <Timer />
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
        <SkyTime />
        <ambientLight intensity={1} />
        <FPV />
        <Physics>
          <Player />
          <Cubes />
          {lavaTime < 8 ? <LavaGround /> : <GrassGround />}
        </Physics>
      </Canvas>
      <div className="absolute centered cursor">+</div>
    </>
  );
}
