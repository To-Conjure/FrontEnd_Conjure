import { TextureLoader } from "three";

import { grass, stone } from "./images";

const grassTexture = new TextureLoader().load(grass)
const stoneTexture = new TextureLoader().load(stone)

export {
    grassTexture,
    stoneTexture
}