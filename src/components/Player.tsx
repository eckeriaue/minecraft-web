
import {
  type RootState,
  useThree,
  useFrame,
} from '@react-three/fiber'

import { useSphere } from '@react-three/cannon'
import { type Object3D, Vector3 } from 'three'
import { useEffect, useRef } from 'react'
import { useKeyboard } from '../hooks/useKeyboard'


const JUMP_FORCE = 3
const SPEED = 4
export const Player = (): JSX.Element => {
  const {camera} = useThree<RootState>() 
  const [ref, api] = useSphere<Object3D<Event>>(() => ({
    mass: 1,
    type: "Dynamic",
    position: [0, 1, 0]
  }))

  const {
    moveForward,
    moveBackward,
    moveLeft,
    moveRight,
    jump
  } = useKeyboard()
  // console.log('action',
  //   moveForward,
  //   moveBackward,
  //   moveLeft,
  //   moveRight,
  //   jump
  // )


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
    camera.position.copy(new Vector3(pos.current[0], pos.current[1], pos.current[2]))
    
    const direction = new Vector3()

    const frontVector = new Vector3(
      0,
      0,
      (moveBackward ? 1 : 0) - (moveForward ? 1 : 0),
    )
    const sideVector = new  Vector3(
      (moveLeft ? 1 : 0) - (moveRight ? 1 : 0),
      0,
      0,
    )

    direction
      .subVectors(frontVector, sideVector)
      .normalize()
      .multiplyScalar(SPEED)
      .applyEuler(camera.rotation)

      api.velocity.set(direction.x, vel.current[1], direction.z)

    if (jump && Math.abs(vel.current[1] < .05)) {
      api.velocity.set(vel.current[0] , JUMP_FORCE ,vel.current[2])
    }
  })
  return (
    <mesh ref={ref}>

    </mesh>
  )
}