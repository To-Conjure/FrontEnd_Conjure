import create from 'zustand'
import { nanoid } from 'nanoid'


export const useStore = create((set) => ({
	texture: 'grass',
    points: 0,
    time:1,
	cubes: [
        {
            key: nanoid(),
            pos: [1,0,-0.5],
            texture: "grass",
        },
        {
            key: nanoid(),
            pos: [0,0,-0.5],
            texture: "grass",
        },
        {
            key: nanoid(),
            pos: [1,0,0.5],
            texture: "grass",
        },
        {
            key: nanoid(),
            pos: [-1,0,0.5],
            texture: "grass",
        },
        {
            key: nanoid(),
            pos: [-1,0,-0.5],
            texture: "grass",
        },
        {
            key: nanoid(),
            pos: [0,0,0.5],
            texture: "grass",
        },
        {
            key: nanoid(),
            pos: [0,0,-10],
            texture: "monster",
        },
        {
            key: nanoid(),
            pos: [0,0,-20],
            texture: "monster",
        },
        {
            key: nanoid(),
            pos: [0,0.5,-30],
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
					texture: prev.texture
				}
			]
		}))
	},
    removeCube: (x, y, z) => {
		set((prev) => ({
			cubes: prev.cubes.filter(cube => {
				const [X, Y, Z] = cube.pos
				return X !== x || Y !== y || Z !== z
			})

		}))
	},
    addPoint: () => set((state) => ({ points: state.points + 1 })),
    removePoint: () => set({ points: 0 }),
    countDown: () => set((state) => ({ time: state.time - 0.01 })),
    resetCountDown: () => set({ time: 60 }),
  }))

