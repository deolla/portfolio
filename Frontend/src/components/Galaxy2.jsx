// 

import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

const Galaxy2 = (props) => {
  const { nodes, materials } = useGLTF('/models/voxel_planet_of_the_little_prince__magicavoxel.glb');
  const groupRef = useRef();
  
  // Animation parameters
  const radius = 1500;
  const speed = 0.02;
  let angle = 0;

  useFrame(() => {
    angle += speed;

    const x = Math.cos(angle) * radius; 
    const z = Math.sin(angle) * radius; 
    if (groupRef.current) {
      groupRef.current.position.set(x, groupRef.current.position.y, z);
      groupRef.current.rotation.y = angle; // Optional: Rotate around the Y-axis
    }
  });

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <group position={[-420, -200, -50]} rotation={[-Math.PI / 2, -0.43, 0]} scale={1.}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.palette}
          position={[-57.5, -62.5, 8]}
        />
      </group>
    </group>
  );
};

useGLTF.preload('/models/voxel_planet_of_the_little_prince__magicavoxel.glb');

export default Galaxy2;
