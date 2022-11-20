import { Physics } from "@react-three/cannon"
import { Sky } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"

import { Ground } from "./components/Ground"
import { Player } from "./components/Player"
import { FPV } from "./components/FPV"

export default function App (): JSX.Element {
  return (
    <>
      {/* <span> outside canvas </span> */}
      <Canvas>
        <Sky sunPosition={[100, 100, 20]}></Sky>
        <ambientLight intensity={.5} />
        <FPV />
        <Physics>
          <Player />
          <Ground />
        </Physics>
      </Canvas>
      <span className="absolute centered cursor">+</span>
    </>
  )
}