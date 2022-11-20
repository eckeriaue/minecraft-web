import create from 'zustand'
import { nanoid } from 'nanoid'
export const useStore = create(set => ({
  texture: 'dirt',
  cubes: [
    {
      key: nanoid(),
      pos: [1,1,1],
      texture: 'dirt'
    }
  ],
  addCube: (
    x:number,
    y:number,
    z:number
    ) => {
      set((prev: any) => {
        cubes: [
          ...prev.cubes,
          {
            key: nanoid(),
            pos: x,y,z,
            texture: prev.texture 
          }
        ]
      })
    },
  removeCube: () => {},
  saveWorld: () => {},
  resetWorld: () => {},
}))