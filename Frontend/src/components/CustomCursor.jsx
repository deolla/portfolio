import { Canvas } from "@react-three/fiber";
import { useEffect, useState } from "react";
import Eyes from "./Eyes";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", updateCursor);
    return () => window.removeEventListener("mousemove", updateCursor);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: position.y,
          left: position.x,
          transform: "translate(-50%, -50%)",
          visibility: position.x === 0 && position.y === 0 ? "hidden" : "visible",
        }}
      >
        <Canvas
          camera={{ position: [0, 0, 10], fov: 50 }}
          style={{ width: "50px", height: "50px", pointerEvents: "none" }}
        >
          <ambientLight intensity={0.5} />
          <directionalLight position={[0, 0, 5]} />
          <Eyes />
        </Canvas>
      </div>
    </div>
  );
};

export default CustomCursor;
