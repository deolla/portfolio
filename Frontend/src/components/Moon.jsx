/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: CookieDough (https://sketchfab.com/CookieDough)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/moon-model-c26ae86c07404779a54f3621170714bf
Title: MOON model
*/

import { useGLTF } from '@react-three/drei'

const Moon = (props) => {
  const { nodes, materials } = useGLTF('models/moon_model.glb')
  return (
    <group {...props} dispose={null} >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={materials['Scene_-_Root']}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.2}
      />
    </group>
  )
}

useGLTF.preload('models/moon_model.glb')
export default Moon;