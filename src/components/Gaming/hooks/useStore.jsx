import create from 'zustand'
import { nanoid } from 'nanoid'

export const useStore = create((set) => ({
	texture: 'grass',
	cubes: [
        {
            key: nanoid(),
            pos: [10,0.5,5],
            texture: "grass",
        },
        {
            key: nanoid(),
            pos: [12,2,8],
            texture: "grass",
        },
        {
            key: nanoid(),
            pos: [15,4,6],
            texture: "grass",
        },
        {
            key: nanoid(),
            pos: [5,5,5],
            texture: "grass",
        },
        {
            key: nanoid(),
            pos: [15,5,3],
            texture: "grass",
        },
        {
            key: nanoid(),
            pos: [10,5,3],
            texture: "grass",
        },
        {
            key: nanoid(),
            pos: [5,6,5],
            texture: "gold",
        },
        {
            key: nanoid(),
            pos: [10,0.5,0],
            texture: "monster",
        },
        {
            key: nanoid(),
            pos: [20,0.5,0],
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

