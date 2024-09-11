// import { Canvas } from "@react-three/fiber";
// import Pin from "../components/Pin";

import { Canvas } from "@react-three/fiber";
import PinWithGlobe from "../components/Pin";

const About = () => {
  return (
    <section className="c-space my-20">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid.png"
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit objevt-contain"
            />
            <div>
              <p className="grid-headtext">Hi, I&apos;m Oluwaseyi </p>
              <p className="grid-subtext">
                With 3 years of experience, I have honed my skills in frontend
                and backend development, with a focus on backend
                development/animations.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid2.gif"
              alt="grid-2"
              className="w-full sm:w-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I specialise in JavaScript/TypeScript and Python with an intrest
                in 3D animations.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit justify-center item-center">
              < Canvas>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <PinWithGlobe />
          </Canvas>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
