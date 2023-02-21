import { useBox } from "@react-three/cannon"
import * as textures from "../images/textures"
import { PositionalAudio } from "@react-three/drei"

export const Cube = ({ position, texture }) => {

	const [ref] = useBox(() => ({
		type: 'Static',
		position
	}))
    const currTexture = textures[texture + "Texture"]
    // console.log(currTexture)

    return (
        <mesh ref = {ref}>
            <boxBufferGeometry attach="geometry" args={[1, 1, 1]}/>
            <meshStandardMaterial map ={currTexture} />
            {/* <PositionalAudio autoplay loop = {false} url="/discoSite.mp3" distance={3} /> */}
        </mesh>
    )
}