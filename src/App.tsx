import { Physics } from "@react-three/cannon"
import { Sky } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"

import { Ground } from "./components/Ground"
import { Player } from "./components/Player"
export default function App (): JSX.Element {
  return (
    <>
      {/* <span> outside canvas </span> */}
      <Canvas>
        <Sky sunPosition={[100, 100, 20]}></Sky>
        <ambientLight intensity={.5} />
        <Physics>
          <Player />
          <Ground />
        </Physics>
      </Canvas>
    </>
  )
}