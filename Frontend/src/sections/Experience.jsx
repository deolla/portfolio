//

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { workExperiences } from "../constants";
import { Suspense, useState, useEffect } from "react";
import CanvasLoader from "../components/CanvasLoader";
import DevEngineer from "../components/DevEngineer";

const Experience = () => {
  const [animationName, setAnimationName] = useState("idle");
  const [currentIcons, setCurrentIcons] = useState({});

  const handleMouseOver = (animation) => {
    setAnimationName(animation.toLowerCase());
  };

  const handleMouseOut = () => {
    setAnimationName("idle");
  };


  useEffect(() => {
    const iconSwitchInterval = setInterval(() => {
      setCurrentIcons((prevIcons) => {
        const newIcons = { ...prevIcons };

        workExperiences.forEach((experience) => {
          if (experience.icons && experience.icons.length > 1) {
            const currentIconIndex = prevIcons[experience.id] || 0;
            const nextIconIndex = (currentIconIndex + 1) % experience.icons.length;
            newIcons[experience.id] = nextIconIndex;
          }
        });

        return newIcons;
      });
    }, 2000);

    return () => clearInterval(iconSwitchInterval); // Clean up the interval on component unmount
  }, []);

  return (
    <section className="c-space my-20" id="work">
      <div className="w-full text-white-600">
        <h3 className="head-text">Experience</h3>
        <div className="work-container">
          <div className="work-canvas">
            <Canvas>
              <ambientLight intensity={7} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <directionalLight position={[10, 10, 10]} intensity={1} />
              <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />
              <Suspense fallback={<CanvasLoader />}>
                <DevEngineer
                  position-y={-3}
                  scale={3.3}
                  animationNames={animationName}
                />
              </Suspense>
            </Canvas>
          </div>
          <div className="work-content">
            <div className="sm:py-10 py-5 sm:px-5 px-2.5">
              {workExperiences.map(
                ({ id, icons, icon, name, pos, duration, title, animation }) => (
                  <div
                    key={id}
                    className="work-content_container group"
                    onClick={() => handleMouseOver(animation)}
                    onPointerOver={() => handleMouseOver(animation)}
                    onPointerOut={handleMouseOut}
                  >
                    <div className="flex flex-col h-full justify-start items-center py-2">
                      <div className="work-content_logo">
                      {icons && icons.length > 1 ? (
                          <img
                            src={icons[currentIcons[id] || 0]} 
                            alt="logo" 
                            className="w-full h-full"
                          />
                        ) : (
                          <img
                            src={icon || (icons && icons[0])} 
                            alt="logo" 
                            className="w-full h-full"
                          />
                        )}
                        {/* <img src={icon} alt="logo" className="w-full h-full" /> */}
                      </div>
                      <div className="work-content_bar"></div>
                    </div>
                    <div className="sm:p-5 px-2.5 py-5">
                      <p className="font-bold text-white-800">{name}</p>
                      <p className="text-sm mb-5">
                        {pos} -- {duration}
                      </p>
                      <p className="group-hover:text-white transition ease-in-out duration-500">
                        {title}
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
