// 

import { Canvas } from "@react-three/fiber";
import {
  PerspectiveCamera as ThreePerspectiveCamera,
  OrbitControls,
  Sphere,
} from "@react-three/drei";
import { Suspense } from "react";
import CanvasLoader from "../components/CanvasLoader.jsx";
import { useMediaQuery } from "react-responsive";
import { calculateSizes, webSizes } from "../constants/index.js";
import CameraZone from "../components/Camera.jsx";
import Button from "../components/Buttons.jsx";
import Space from "../components/Space.jsx";
import Circle from "../components/Circle.jsx";
import Rings from "../components/Rings.jsx";
import SpaceBoy from "../components/SpaceBoy.jsx";
import Galaxy1 from "../components/Galaxy1.jsx";
import Galaxy2 from "../components/Galaxy2.jsx";
import Galaxy3 from "../components/Galaxy3.jsx";
import Cube from "../components/Cube.jsx";

const Hero = () => {
  const isSmall = useMediaQuery({ query: "(max-width: 440px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTable = useMediaQuery({
    query: "(min-width: 768px, max-width: 1024px)",
  });

  const sizes = webSizes(isSmall, isMobile, isTable);
  const size = calculateSizes(isSmall, isMobile, isTable);

  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
          Hello, I&apos;m Oluwaseyi <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">I build websites & APIs</p>
      </div>

      <div className="w-full h-full absolute inset-0">
        <Canvas
          className="w-full h-full"
          shadows
          gl={{ antialias: false }}
          dpr={[1, 1.5]}
          camera={{ position: [0, 0, 20], fov: 35, near: 1, far: 40 }}
        >
          <Suspense fallback={<CanvasLoader />}>
            <OrbitControls
              enableZoom={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={0}
            />
            <ThreePerspectiveCamera makeDefault position={[0, 0, 20]} />
            <CameraZone isMobile={isMobile}>
              <Space />
            </CameraZone>
            <group>
              <Circle
                position={size.targetPosition}
                rotation={size.circleRotation}
                scale={size.circleScale}
              />
              <Rings position={size.ringPosition} scale={size.ringScale} />
              <Sphere />
              <SpaceBoy position={sizes.spaceBoyPosition} />
              <Galaxy1 />
              <Galaxy2 />
              <Galaxy3 />
              <Cube position={size.cubePosition} />
            </group>
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>

      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href="#about" className="w-fit">
          <Button
            name="Let's work together"
            isBeam
            containerClass="sm:w-fit w-full sm:min-w-96"
          />
        </a>
      </div>
    </section>
  );
};

export default Hero;
