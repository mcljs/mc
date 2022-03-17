import React, { useRef } from "react";
import { useGLTF, PerspectiveCamera } from "@react-three/drei";
import url from "./Ghost-okong.glb";
export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF(url);
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0.02, 7.39, 1.01]}>
        <group position={[0, -0.24, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Capsule.geometry}
            material={materials.Ghost}
            position={[0, 1.42, 0.5]}
          />
        </group>
      </group>
      <group position={[0.02, 7.88, 0.73]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere.geometry}
          material={materials["Ghost.001"]}
          position={[0.01, 3.91, 4.07]}
        />
      </group>
      <group position={[0.03, 9.49, 4.89]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Capsule002.geometry}
          material={materials["Ghost.002"]}
          position={[0, -0.49, 0.13]}
        />
      </group>
      <group position={[1.09, 8.97, 85.49]} rotation={[1.56, 0, -0.02]}>
        <PerspectiveCamera
          makeDefault={true}
          far={1000}
          near={0.1}
          fov={20.41}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
    </group>
  );
}
