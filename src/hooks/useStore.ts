import create from 'zustand'
import { nanoid } from 'nanoid'
export const useStore = create(set => ({
  texture: 'dirt',
  cubes: [],
	addCube: (x:number, y:number, z:number) => {
		set((prev: { cubes: any; texture: any }) => ({
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
  removeCube: () => {},
  saveWorld: () => {},
  resetWorld: () => {},
}))