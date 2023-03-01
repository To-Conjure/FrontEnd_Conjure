import create from "zustand";
import { nanoid } from "nanoid";

// let i = 0;

// function countUp() {
//   let interval = setInterval(function () {
//     i += 1;

//     if (i === 5) {
//       clearInterval(interval);
//       countdown();
//     }
//     console.log(i);
//   }, 1000);
// }

// function countdown() {
//   let timer = setInterval(function () {
//     i -= 1;

//     if (i === 0) {
//       clearInterval(timer);
//       countUp();
//     }
//     console.log(i);
//   }, 1000);
// }

// countUp();

export const useStore = create((set) => ({
  texture: "spaceGround",
  points: 100,
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

    //1st row
    {
      key: nanoid(),
      pos: [-1, 2, -8],
      texture: "monster",
    },
    {
      key: nanoid(),
      pos: [-2, 2, -8],
      texture: "monster",
    },
    {
      key: nanoid(),
      pos: [0, 2, -8],
      texture: "monster",
    },
    {
      key: nanoid(),
      pos: [1, 2, -8],
      texture: "monster",
    },
    {
      key: nanoid(),
      pos: [2, 2, -8],
      texture: "monster",
    },

    //2nd row
    {
      key: nanoid(),
      pos: [-2, 3, -8],
      texture: "monster",
    },
    {
      key: nanoid(),
      pos: [-1, 3, -8],
      texture: "monster",
    },
    {
      key: nanoid(),
      pos: [0, 3, -8],
      texture: "monster",
    },
    {
      key: nanoid(),
      pos: [1, 3, -8],
      texture: "monster",
    },
    {
      key: nanoid(),
      pos: [2, 3, -8],
      texture: "monster",
    },

    //3rd row
    {
      key: nanoid(),
      pos: [-2, 4, -8],
      texture: "monster",
    },
    {
      key: nanoid(),
      pos: [-1, 4, -8],
      texture: "monster",
    },
    {
      key: nanoid(),
      pos: [0, 4, -8],
      texture: "monster",
    },
    {
      key: nanoid(),
      pos: [1, 4, -8],
      texture: "monster",
    },
    {
      key: nanoid(),
      pos: [2, 4, -8],
      texture: "monster",
    },
    //row 4
    {
      key: nanoid(),
      pos: [-2, 5, -8],
      texture: "monster",
    },
    {
      key: nanoid(),
      pos: [-1, 5, -8],
      texture: "monster",
    },
    {
      key: nanoid(),
      pos: [0, 5, -8],
      texture: "monster",
    },
    {
      key: nanoid(),
      pos: [1, 5, -8],
      texture: "monster",
    },
    {
      key: nanoid(),
      pos: [2, 5, -8],
      texture: "monster",
    },

    //row 5
    {
      key: nanoid(),
      pos: [-2, 6, -8],
      texture: "monster",
    },
    {
      key: nanoid(),
      pos: [-1, 6, -8],
      texture: "monster",
    },
    {
      key: nanoid(),
      pos: [0, 6, -8],
      texture: "monster",
    },
    {
      key: nanoid(),
      pos: [1, 6, -8],
      texture: "monster",
    },
    {
      key: nanoid(),
      pos: [2, 6, -8],
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
    //jump boost block
    {
      key: nanoid(),
      pos: [0, -1, -10],
      texture: "mystery",
    },
    //end of obstacle 1

    // {
    //   key: nanoid(),
    //   pos: [0, 1.5, -13],
    //   texture: "spaceGround",
    // },
    // {
    //   key: nanoid(),
    //   pos: [0, 2, -15],
    //   texture: "spaceGround",
    // },
    // {
    //   key: nanoid(),
    //   pos: [0, 2, -18],
    //   texture: "spaceGround",
    // },
    // {
    //   key: nanoid(),
    //   pos: [0, 2, -20],
    //   texture: "spaceGround",
    // },
    // {
    //   key: nanoid(),
    //   pos: [0, 2, -23],
    //   texture: "spaceGround",
    // },
    // {
    //   key: nanoid(),
    //   pos: [0, 2, -25],
    //   texture: "spaceGround",
    // },

    //goal area
    {
      key: nanoid(),
      pos: [0, -1, -29],
      texture: "stoneBrick",
    },
    {
      key: nanoid(),
      pos: [-1, -1, -29],
      texture: "stoneBrick",
    },
    {
      key: nanoid(),
      pos: [1, -1, -29],
      texture: "stoneBrick",
    },
    {
      key: nanoid(),
      pos: [0, -1, -31],
      texture: "stoneBrick",
    },
    {
      key: nanoid(),
      pos: [-1, -1, -31],
      texture: "stoneBrick",
    },
    {
      key: nanoid(),
      pos: [1, -1, -31],
      texture: "stoneBrick",
    },
    {
      key: nanoid(),
      pos: [-1, -1, -30],
      texture: "stoneBrick",
    },
    {
      key: nanoid(),
      pos: [1, -1, -30],
      texture: "stoneBrick",
    },
    {
      key: nanoid(),
      pos: [0, 0, -30],
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
  removePoint: () => set((state) => ({ points: state.points - 1 })),
  resetPoint: () => set({ points: 100 }),
  countDown: () => set((state) => ({ time: state.time - 0.01 })),
  resetCountDown: () => set({ time: 10 }),
}));
