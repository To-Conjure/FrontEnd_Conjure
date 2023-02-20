import create from 'zustand'
import { nanoid } from 'nanoid'

export const useStore = create((set) => ({
	texture: 'grass',
	cubes: [
        {
            key: nanoid(),
            pos: [4,0.5,0],
            texture: "grass",
        },
        {
            key: nanoid(),
            pos: [4,2,2],
            texture: "grass",
        },
        {
            key: nanoid(),
            pos: [4,4,5],
            texture: "grass",
        },
        {
            key: nanoid(),
            pos: [5,5,5],
            texture: "grass",
        },
        {
            key: nanoid(),
            pos: [5,6,5],
            texture: "monster",
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
}))