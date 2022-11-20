import { Physics } from "@react-three/cannon"
import { Sky } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"

import { Ground } from "./components/Ground"
export default function App () {
  return (
    <>
      {/* <span> outside canvas </span> */}
      <Canvas>
        <Sky sunPosition={[100, 100, 20]}></Sky>
        <ambientLight intensity={.5} />
        <Physics>
          <Ground />
        </Physics>
      </Canvas>
    </>
  )
}