import { NearestFilter, TextureLoader, RepeatWrapping } from 'three'


import { grass, stone } from "./images";

const grassTexture = new TextureLoader().load(grass)
const stoneTexture = new TextureLoader().load(stone)

grassTexture.magFilter = NearestFilter;
stoneTexture.magFilter = NearestFilter;
stoneTexture.wrapS = RepeatWrapping
stoneTexture.wrapT = RepeatWrapping

export {
    stoneTexture,
    grassTexture,
}