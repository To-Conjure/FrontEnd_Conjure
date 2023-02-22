import create from 'zustand'
import { nanoid } from 'nanoid'

export const useStore = create((set) => ({
	texture: 'grass',
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
    
}))

