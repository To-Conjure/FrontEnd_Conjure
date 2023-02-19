import { Physics } from "@react-three/cannon";
import { Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Ground } from "./Ground";
import { Player } from "./Player";


const date = new Date().toLocaleTimeString()
const num = +date[0]
const time = date[date.length - 2]
let sky = ""
const morning = [100,100,20]
const night = [0,0,0]
const sunset = [0,-1,0]
const sunrise = [1,1,10]
 
if(num > 6 && num <= 12 && time == "A") sky = morning
if(num >=5 && num <= 6 && time == "A") sky = sunrise
if(num > 6 && num < 8 && time == "P") sky = night
if(num >=5 && num <= 6 && time == "A") sky = sunset

export default function Map(){
    return (
        <>
        <Canvas>
            <Sky sunPosition={sky}/>
            <ambientLight intensity={sky === night ? -1 : 1}/>
            <Physics>
                <Player/>
                <Ground/>
            </Physics>
        </Canvas>
        </>
    )
}