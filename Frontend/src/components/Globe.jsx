import { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";
import * as THREE from "three";

const Globe = () => {
  const [position, setPosition] = useState(null);

  // Convert latitude and longitude to 3D coordinates on a sphere
  const latLongToVector3 = (lat, lon, radius) => {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lon + 180) * (Math.PI / 180);

    const x = -(radius * Math.sin(phi) * Math.cos(theta));
    const z = radius * Math.sin(phi) * Math.sin(theta);
    const y = radius * Math.cos(phi);

    return new THREE.Vector3(x, y, z);
  };

  // Get the user's geolocation
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      const { latitude, longitude } = pos.coords;
      const vectorPosition = latLongToVector3(latitude, longitude, 5); // Radius of the globe
      setPosition(vectorPosition);
    });
  }, []);

  return (
    <Canvas>
      {/* Globe - A simple sphere */}
      <Sphere args={[5, 64, 64]} position={[0, 0, 0]}>
        <meshStandardMaterial map={new THREE.TextureLoader().load('/textures/earth_texture.jpg')} />
      </Sphere>

      {/* Marker at user's location */}
      {position && (
        <mesh position={position}>
          <sphereGeometry args={[0.1, 16, 16]} /> {/* Small marker */}
          <meshStandardMaterial color="red" />
        </mesh>
      )}

      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
    </Canvas>
  );
};

export default Globe;
