import { Physics } from "@react-three/cannon";
import { Sky, Stars, Sparkles } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Ground } from "./Ground";
import { Player } from "./Player";
import { FPV } from "./FPV";
import "./game.css"
import { Cubes } from "./Cubes";
const date = new Date().toLocaleTimeString();
const num = +date[0];
const time = date[date.length - 2];
let sky = "";
const morning = [100, 100, 20];
const night = [0, 0, 0];
const sunrise = [1, 1, -10];
const sunset = [1, 1, 100];

if (num > 6 && num < 13 && time == "A") sky = morning;
if (num >= 1 && num <= 6 && time == "A") sky = sunrise;
if (num > 6 && num < 13 && time == "P") sky = night;
if (num >= 1 && num <= 6 && time == "P") sky = sunset;


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
        <Sky sunPosition={sky} />
        <ambientLight intensity={sky === night ? -1 : 1} />
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
