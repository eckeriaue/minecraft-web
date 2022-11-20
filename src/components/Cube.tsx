import { useBox } from '@react-three/cannon'
import * as textures from '../img/textures'
export const Cube = ({ position, texture }: any) => {
  const [ref] = useBox(() => ({
    type: 'Static',
    position
  }))
  const activeTexture = textures[texture] 

  return (
    <mesh ref={ref}>
      <boxBufferGeometry attach='geometry' />

      <meshStandardMaterial
        map={activeTexture}
        attach='material'
      />

    </mesh>
  )
}