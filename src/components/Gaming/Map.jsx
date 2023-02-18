import { Physics } from "@react-three/cannon";
import { Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Ground } from "../Ground";


export default function Map(){
    return (
        <>
        <Canvas>
            <Sky sunPosition={[100,100,20]}/>
            <ambientLight intensity={0.5}/>
            <Physics>
                <Ground/>
            </Physics>
        </Canvas>
        </>
    )
}