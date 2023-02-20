import { useBox } from "@react-three/cannon"
import * as textures from "../images/texture"

export const Cube = ({ position, texture }) => {

	const [ref] = useBox(() => ({
		type: 'Static',
		position
	}))
    const currTexture = textures[texture + "Texture"]

    return (
        <mesh ref = {ref}>
            <boxBufferGeometry attach="geometry"/>
            <meshStandardMaterial map ={currTexture} attach="material"/>
        </mesh>
    )
}