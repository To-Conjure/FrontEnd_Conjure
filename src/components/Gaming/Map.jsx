import { Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";


export default function Map(){
    return (
        <>
        <Canvas>
            <Sky sunPosition={[100,100,20]}/>
        </Canvas>
        </>
    )
}