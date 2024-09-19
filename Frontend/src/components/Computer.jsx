import { useRef, useEffect } from 'react';
import { useGLTF, useVideoTexture } from '@react-three/drei';
import gsap from 'gsap';

const Computer = (props) => {
  const groupRef = useRef(); // Create a reference to the group
  const { nodes, materials } = useGLTF('/models/hardusrface_screen__pad__pc.glb');
  const txt = useVideoTexture(props.texture ? props.texture : "/textures/project/project1.mp4");

  // useEffect(() => {
  //   if(txt) {
  //     txt.flipY = true;
  //   }
  // }, [txt])

  useEffect(() => {
    if (groupRef.current) {
      // GSAP animation applied to the group rotation
      gsap.from(groupRef.current.rotation, {
        y: Math.PI / 2,
        duration: 1,
        ease: 'power3.out',
      });
    }
  }, [txt]); // Dependency array, ensures animation runs when txt changes

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <group scale={0.01}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={100}>
          <group position={[0, 0, -0.367]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.CubeSliceSlice001frozen_m2_0.geometry}
              material={materials.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.CubeSliceSlice001frozen_m1_0.geometry}
              material={materials.material_1}
            />
          </group>
        </group>
        <group position={[-105.47, 411.871, 0]} scale={38.518}>
          <group position={[0.667, -8.281, 0]} rotation={[0, 0, -0.146]} scale={2.596}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder004Slicefrozen001_m1_0.geometry}
              material={materials.material_1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder004Slicefrozen001_m2_0.geometry}
              material={materials.material}
            />
            <group position={[-0.024, 0.939, 0.228]} rotation={[-Math.PI / 2, 0, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube006frozen001_m1_0.geometry}
                material={materials.material_1}
              />
              <group position={[0, 0.228, 0.957]} rotation={[Math.PI / 2, 0, 0.391]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cylinder004Slicefrozen_m1_0.geometry}
                  material={materials.material_1}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cylinder004Slicefrozen_m2_0.geometry}
                  material={materials.material}
                />
                <group position={[0.92, -0.01, 0]} rotation={[-Math.PI / 2, Math.PI / 2, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.CylinderSlicefrozen_m1_0.geometry}
                    material={materials.material_1}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.CylinderSlicefrozen_m2_0.geometry}
                    material={materials.material}
                  />
                  <group position={[0.115, 0, 0.134]} rotation={[0, -Math.PI / 2, 0]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube003Slicefrozen_m1_0.geometry}
                      material={materials.material_1}
                    />
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube003Slicefrozen_m2_0.geometry}
                      material={materials.material}
                    />
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes['AI-illustration_AI-illustration_0'].geometry}
                      material={materials['AI-illustration']}
                      position={[0.034, -0.021, 0.059]}
                      rotation={[Math.PI / 2, Math.PI / 2, 0]}
                    >
                      <meshStandardMaterial map={txt} />
                    </mesh>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_m2_0.geometry}
          material={materials.material}
          position={[-65.22, 49.848, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/models/hardusrface_screen__pad__pc.glb');

export default Computer;
