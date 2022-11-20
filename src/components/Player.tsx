
import {
  type RootState,
  useThree,
  useFrame,
} from '@react-three/fiber'

import { useSphere } from '@react-three/cannon'
import { type Object3D, Vector3 } from 'three'
import { useEffect, useRef } from 'react'

export const Player = (): JSX.Element => {
  const {camera} = useThree<RootState>() 
  const [ref, api] = useSphere<Object3D<Event>>(() => ({
    mass: 1,
    type: "Dynamic",
    position: [0, 3, 0]
  }))


  const vel: React.MutableRefObject<number[]> = useRef<number[]>([0,0,0])
  useEffect(() => {
    api.velocity.subscribe(v => {
      vel.current = v
    })
  }, [api.velocity])

  const pos: React.MutableRefObject<number[]> = useRef<number[]>([0,0,0])
  useEffect(() => {
    api.position.subscribe(p => {
      pos.current = p
    })
  }, [api.position])


  useFrame(() => {
    camera.position.copy(new Vector3(pos.current[0], pos.current[1], pos.current[3]))
    // api.velocity.set(0,1,0)
  })
  return (
    <mesh ref={ref}>

    </mesh>
  )
}