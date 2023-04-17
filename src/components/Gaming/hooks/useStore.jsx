import create from "zustand";
import { nanoid } from "nanoid";

export const useStore = create((set) => ({
  texture: "spaceGround",
  points: 300,
  levels:0,
  time: 10,
  cubes: [
    //Starting platform
    {
      key: nanoid(),
      pos: [0, 0, -0.5],
      texture: "spaceGround",
    },
    {
      key: nanoid(),
      pos: [1, 0, -0.5],
      texture: "spaceGround",
    },
    {
      key: nanoid(),
      pos: [0, 0, 0.5],
      texture: "spaceGround",
    },
    {
      key: nanoid(),
      pos: [1, 0, 0.5],
      texture: "spaceGround",
    },
    {
      key: nanoid(),
      pos: [-1, 0, 0.5],
      texture: "spaceGround",
    },
    {
      key: nanoid(),
      pos: [-1, 0, 0.5],
      texture: "spaceGround",
    },
    {
      key: nanoid(),
      pos: [-1, 0, -0.5],
      texture: "spaceGround",
    },
    {
      key: nanoid(),
      pos: [0, 0, -1.5],
      texture: "up",
    },
    {
      key: nanoid(),
      pos: [1, 0, -1.5],
      texture: "up",
    },
    {
      key: nanoid(),
      pos: [-1, 0, -1.5],
      texture: "up",
    },

    //road
    {
      key: nanoid(),
      pos: [0, 0.5, -3],
      texture: "spaceGround",
    },
    {
      key: nanoid(),
      pos: [0, 1, -4],
      texture: "spaceGround",
    },

    //obstacle 1
    // cover

    {
      key: nanoid(),
      pos: [-1, 1, 8],
      texture: "monster",
    },
    {
      key: nanoid(),
      pos: [-2, 1, 8],
      texture: "monster",
    },
    {
      key: nanoid(),
      pos: [0, 1, 8],
      texture: "monster",
    },
    {
      key: nanoid(),
      pos: [1, 1, 8],
      texture: "monster",
    },
    {
      key: nanoid(),
      pos: [2, 1, 8],
      texture: "monster",
    },
    //1st row
    {
      key: nanoid(),
      pos: [-1, 2, 8],
      texture: "monster",
    },
    {
      key: nanoid(),
      pos: [-2, 2, 8],
      texture: "monster",
    },
    {
      key: nanoid(),
      pos: [0, 2, 8],
      texture: "monster",
    },
    {
      key: nanoid(),
      pos: [1, 2, 8],
      texture: "monster",
    },
    {
      key: nanoid(),
      pos: [2, 2, 8],
      texture: "monster",
    },

    //2nd row
    {
      key: nanoid(),
      pos: [-2, 3, 8],
      texture: "monster",
    },
    {
      key: nanoid(),
      pos: [-1, 3, 8],
      texture: "monster",
    },
    {
      key: nanoid(),
      pos: [0, 3, 8],
      texture: "monster",
    },
    {
      key: nanoid(),
      pos: [1, 3, 8],
      texture: "monster",
    },
    {
      key: nanoid(),
      pos: [2, 3, 8],
      texture: "monster",
    },

    //3rd row
    {
      key: nanoid(),
      pos: [-2, 4, 8],
      texture: "monster",
    },
    {
      key: nanoid(),
      pos: [-1, 4, 8],
      texture: "monster",
    },
    {
      key: nanoid(),
      pos: [0, 4, 8],
      texture: "monster",
    },
    {
      key: nanoid(),
      pos: [1, 4, 8],
      texture: "monster",
    },
    {
      key: nanoid(),
      pos: [2, 4, 8],
      texture: "monster",
    },
    //row 4
    {
      key: nanoid(),
      pos: [-2, 5, 8],
      texture: "monster",
    },
    {
      key: nanoid(),
      pos: [-1, 5, 8],
      texture: "monster",
    },
    {
      key: nanoid(),
      pos: [0, 5, 8],
      texture: "monster",
    },
    {
      key: nanoid(),
      pos: [1, 5, 8],
      texture: "monster",
    },
    {
      key: nanoid(),
      pos: [2, 5, 8],
      texture: "monster",
    },

    //row 5
    {
      key: nanoid(),
      pos: [-2, 6, 8],
      texture: "monster",
    },
    {
      key: nanoid(),
      pos: [-1, 6, 8],
      texture: "monster",
    },
    {
      key: nanoid(),
      pos: [0, 6, 8],
      texture: "monster",
    },
    {
      key: nanoid(),
      pos: [1, 6, 8],
      texture: "monster",
    },
    {
      key: nanoid(),
      pos: [2, 6, 8],
      texture: "monster",
    },

    //under
    {
      key: nanoid(),
      pos: [0, -1, -8],
      texture: "grass",
    },
    {
      key: nanoid(),
      pos: [0, -1, -9],
      texture: "grass",
    },
    //jump boost block area
    {
      key: nanoid(),
      pos: [-1, -1, -8],
      texture: "grass",
    },
    {
      key: nanoid(),
      pos: [1, -1, -8],
      texture: "grass",
    },
    {
      key: nanoid(),
      pos: [0, -1, -10],
      texture: "mystery",
    },
    {
      key: nanoid(),
      pos: [1, -1, -9],
      texture: "grass",
    },
    {
      key: nanoid(),
      pos: [-1, -1, -9],
      texture: "grass",
    },
    {
      key: nanoid(),
      pos: [1, -1, -10],
      texture: "grass",
    },
    {
      key: nanoid(),
      pos: [-1, -1, -10],
      texture: "grass",
    },

    //right pillar
    {
      key: nanoid(),
      pos: [4, -2, -10],
      texture: "stoneBrick",
    },
    {
      key: nanoid(),
      pos: [4, -1, -10],
      texture: "stoneBrick",
    },
    {
      key: nanoid(),
      pos: [4, 0, -10],
      texture: "stoneBrick",
    },
    {
      key: nanoid(),
      pos: [4, 1, -10],
      texture: "stoneBrick",
    },
    {
      key: nanoid(),
      pos: [4, 2, -10],
      texture: "stoneBrick",
    },
    {
      key: nanoid(),
      pos: [4, 3, -10],
      texture: "stoneBrick",
    },
    {
      key: nanoid(),
      pos: [4, 4, -10],
      texture: "stoneBrick",
    },
    {
      key: nanoid(),
      pos: [4, 5, -10],
      texture: "stoneBrick",
    },
    {
      key: nanoid(),
      pos: [4, 6, -10],
      texture: "stoneBrick",
    },
    {
      key: nanoid(),
      pos: [4, 7, -10],
      texture: "stoneBrick",
    },
    {
      key: nanoid(),
      pos: [4, 8, -10],
      texture: "stoneBrick",
    },
    {
      key: nanoid(),
      pos: [4, 9, -10],
      texture: "stoneBrick",
    },
    {
      key: nanoid(),
      pos: [4, 10, -10],
      texture: "mystery",
    },
    //right stairs
    {
      key: nanoid(),
      pos: [2, -0.5, -9],
      texture: "stoneBrick",
    },
    {
      key: nanoid(),
      pos: [3, 0, -9],
      texture: "stoneBrick",
    },
    {
      key: nanoid(),
      pos: [4, 1, -9],
      texture: "stoneBrick",
    },
    {
      key: nanoid(),
      pos: [5, 2, -9],
      texture: "stoneBrick",
    },
    {
      key: nanoid(),
      pos: [5, 3, -10],
      texture: "stoneBrick",
    },
    {
      key: nanoid(),
      pos: [5, 4, -11],
      texture: "stoneBrick",
    },
    {
      key: nanoid(),
      pos: [4, 5, -11],
      texture: "stoneBrick",
    },
    {
      key: nanoid(),
      pos: [3, 6, -11],
      texture: "stoneBrick",
    },
    {
      key: nanoid(),
      pos: [3, 7, -10],
      texture: "stoneBrick",
    },
    {
      key: nanoid(),
      pos: [3, 8, -9],
      texture: "stoneBrick",
    },
    {
      key: nanoid(),
      pos: [4, 9, -9],
      texture: "stoneBrick",
    },
    {
      key: nanoid(),
      pos: [5, 9, -9],
      texture: "stoneBrick",
    },
    {
      key: nanoid(),
      pos: [5, 9, -10],
      texture: "stoneBrick",
    },


    //front
    {
      key: nanoid(),
      pos: [0, 15, -13],
      texture: "spaceGround",
    },
    {
      key: nanoid(),
      pos: [0, 13, -15],
      texture: "spaceGround",
    },
    {
      key: nanoid(),
      pos: [0, 17, -18],
      texture: "spaceGround",
    },
    {
      key: nanoid(),
      pos: [0, 18, -20],
      texture: "spaceGround",
    },
    {
      key: nanoid(),
      pos: [0, 21, -25],
      texture: "spaceGround",
    },

    //front goal
    {
      key: nanoid(),
      pos: [0, 0, -30],
      texture: "gold",
    },

    //back goal area test
    {
      key: nanoid(),
      pos: [0, -1, 9],
      texture: "stoneBrick",
    },
    {
      key: nanoid(),
      pos: [-1, -1, 9],
      texture: "stoneBrick",
    },
    {
      key: nanoid(),
      pos: [1, -1, 9],
      texture: "stoneBrick",
    },
    {
      key: nanoid(),
      pos: [0, -1, 11],
      texture: "stoneBrick",
    },
    {
      key: nanoid(),
      pos: [-1, -1, 11],
      texture: "stoneBrick",
    },
    {
      key: nanoid(),
      pos: [1, -1, 11],
      texture: "stoneBrick",
    },
    {
      key: nanoid(),
      pos: [-1, -1, 10],
      texture: "stoneBrick",
    },
    {
      key: nanoid(),
      pos: [1, -1, 10],
      texture: "stoneBrick",
    },
    {
      key: nanoid(),
      pos: [0, 5, 10],
      texture: "gold",
    },
  ],
  addCube: (x, y, z) => {
    set((prev) => ({
      cubes: [
        ...prev.cubes,
        {
          key: nanoid(),
          pos: [x, y, z],
          texture: prev.texture,
        },
      ],
    }));
  },
  removeCube: (x, y, z) => {
    set((prev) => ({
      cubes: prev.cubes.filter((cube) => {
        const [X, Y, Z] = cube.pos;
        return X !== x || Y !== y || Z !== z;
      }),
    }));
  },
  addLevel: () => set((state) => ({ levels: state.points + 1 })),
  resetLevel: () => set({ levels: 0 }),
  removePoint: () => set((state) => ({ points: state.points - 1 })),
  resetPoint: () => set({ points: 300 }),
  countDown: () => set((state) => ({ time: state.time - 0.01 })),
  resetCountDown: () => set({ time: 10 }),
}));
