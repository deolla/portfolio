// 

import { useGLTF } from '@react-three/drei';
import { useEffect, useRef, useState } from 'react';

const Eyes = (props) => {
  const { nodes, materials } = useGLTF('/models/eyeball_v2_brown_game_object._free_download.glb');
  const [lookingDirection, setLookingDirection] = useState(0); // 0 = straight, -1 = left, 1 = right
  const [isMoving, setIsMoving] = useState(true);
  const intervalRef = useRef(null);

  useEffect(() => {
    // Timer to animate eyes when mouse is not moving
    const animateEyes = () => {
      setLookingDirection((prev) => (prev === 2 ? -2 : 2)); // Toggle between left and right
    };

    // Start the interval when the mouse is not moving
    if (!isMoving) {
      intervalRef.current = setInterval(animateEyes, 1000); // Change direction every second
    } else {
      clearInterval(intervalRef.current); // Clear interval when moving
    }

    return () => clearInterval(intervalRef.current); // Cleanup on unmount
  }, [isMoving]);

  // Handle mouse movement
  const handleMouseMove = () => {
    setIsMoving(true);
    setLookingDirection(0); // Reset to straight when moving
    clearInterval(intervalRef.current); // Clear the interval when moving

    // Reset isMoving after a timeout (e.g., 2 seconds of no movement)
    setTimeout(() => {
      setIsMoving(false);
    }, 2000);
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={40}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface7_OrangOetan__LOWOog_binnen_0.geometry}
            material={materials.OrangOetan__LOWOog_binnen}
            rotation={[0, lookingDirection * 0.3, 0]} // Adjust rotation based on direction
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface7_OrangOetan__LOWOog_buiten_0.geometry}
            material={materials.OrangOetan__LOWOog_buiten}
            rotation={[0, lookingDirection * 0.3, 0]} // Adjust rotation based on direction
          />
        </group>
      </group>
    </group>
  );
};

useGLTF.preload('/models/eyeball_v2_brown_game_object._free_download.glb');
export default Eyes;
