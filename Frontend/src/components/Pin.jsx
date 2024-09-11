import { useGLTF } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
// import * as THREE from 'three';

const PinWithLiquid = (props) => {
  const { nodes, materials } = useGLTF('/models/3d_location.glb');
  const groupRef = useRef();
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    const bounceHeight = Math.sin(time * 2) * 0.5;
    groupRef.current.position.y = -1 + bounceHeight;
  });

  return (
      <group ref={groupRef} position={[0, 0, 0]} scale={[0.5, 0.5, 0.5]} {...props} dispose={null}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials['Material.001']}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
  );
};

useGLTF.preload('/models/3d_location.glb');

export default PinWithLiquid;
