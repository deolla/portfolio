import { useGLTF } from '@react-three/drei'

const Eyes = (props) => {
  const { nodes, materials } = useGLTF('/models/eyeball_v2_brown_game_object._free_download.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={6}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface7_OrangOetan__LOWOog_binnen_0.geometry}
            material={materials.OrangOetan__LOWOog_binnen}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface7_OrangOetan__LOWOog_buiten_0.geometry}
            material={materials.OrangOetan__LOWOog_buiten}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/eyeball_v2_brown_game_object._free_download.glb')

export default Eyes;
