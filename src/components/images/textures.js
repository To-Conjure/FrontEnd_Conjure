import { NearestFilter, TextureLoader, RepeatWrapping } from 'three'


import { grass, stone, monster, stoneBrick, gold } from "./images";


const stoneTexture = new TextureLoader().load(stone)
const grassTexture = new TextureLoader().load(grass)
const monsterTexture = new TextureLoader().load(monster)
const stoneBrickTexture = new TextureLoader().load(stoneBrick)
const goldTexture = new TextureLoader().load(gold)



stoneBrickTexture.magFilter = NearestFilter;
grassTexture.magFilter = NearestFilter;
monsterTexture.magFilter = NearestFilter;
goldTexture.magFilter = NearestFilter;



stoneTexture.magFilter = NearestFilter;
stoneTexture.wrapS = RepeatWrapping
stoneTexture.wrapT = RepeatWrapping

export {
    stoneTexture,
    grassTexture,
    monsterTexture,
    stoneBrickTexture,
    goldTexture,
}