import "./styles.css";
import Model from "./Model";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
export default function App() {
  return (
    <div className="App">
      <Canvas>
        <Suspense fallback={null}>
          <Model />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
}
