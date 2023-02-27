import { NearestFilter, TextureLoader, RepeatWrapping } from "three";

import {
  grass,
  stone,
  monster,
  stoneBrick,
  gold,
  lava,
  spaceGround,
  up,
} from "./images";

const stoneTexture = new TextureLoader().load(stone);
const grassTexture = new TextureLoader().load(grass);
const monsterTexture = new TextureLoader().load(monster);
const stoneBrickTexture = new TextureLoader().load(stoneBrick);
const goldTexture = new TextureLoader().load(gold);
const lavaTexture = new TextureLoader().load(lava);
const spaceGroundTexture = new TextureLoader().load(spaceGround);
const upTexture = new TextureLoader().load(up);

spaceGroundTexture.magFilter = NearestFilter;
stoneBrickTexture.magFilter = NearestFilter;
grassTexture.magFilter = NearestFilter;
monsterTexture.magFilter = NearestFilter;
goldTexture.magFilter = NearestFilter;
upTexture.magFilter = NearestFilter;

lavaTexture.magFilter = NearestFilter;
lavaTexture.wrapS = RepeatWrapping;
lavaTexture.wrapT = RepeatWrapping;

export {
  stoneTexture,
  grassTexture,
  monsterTexture,
  stoneBrickTexture,
  goldTexture,
  lavaTexture,
  spaceGroundTexture,
  upTexture
};
