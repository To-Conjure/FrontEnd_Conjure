import { NearestFilter, TextureLoader, RepeatWrapping } from 'three'


import { grass, stone, monster, stoneBrick,gold,lava } from "./images";


const stoneTexture = new TextureLoader().load(stone)
const grassTexture = new TextureLoader().load(grass)
const monsterTexture = new TextureLoader().load(monster)
const stoneBrickTexture = new TextureLoader().load(stoneBrick)
const goldTexture = new TextureLoader().load(gold)
const lavaTexture = new TextureLoader().load(lava)


stoneBrickTexture.magFilter = NearestFilter;
grassTexture.magFilter = NearestFilter;
monsterTexture.magFilter = NearestFilter;
goldTexture.magFilter = NearestFilter;



lavaTexture.magFilter = NearestFilter;
lavaTexture.wrapS = RepeatWrapping
lavaTexture.wrapT = RepeatWrapping

export {
    stoneTexture,
    grassTexture,
    monsterTexture,
    stoneBrickTexture,
    goldTexture,
    lavaTexture,
}