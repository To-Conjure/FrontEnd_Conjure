import { usePlane } from "@react-three/cannon"
import {lavaTexture} from "../images/textures"



export const Ground = () => {
    
    const [ref] = usePlane(() => ({
        rotation: [-Math.PI/2,0,0], position:[0,-100,1]
    }))

    lavaTexture.repeat.set(100,100)

    return (
        <>
        <mesh ref = {ref}>
            <planeBufferGeometry attach="geometry" args = {[100,100]} />
            <meshStandardMaterial
        attach="material"
        color="orange"
        map={lavaTexture}
        roughness={1}
        />
        </mesh>
        </>
    )
}