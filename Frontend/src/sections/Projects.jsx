import { Suspense, useState } from "react";
import CanvasLoader from "../components/CanvasLoader"; // Adjust the path as necessary
import { myProjects } from "../constants";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from "@react-three/drei";
import Computer from "../components/Computer";

const projectCount = myProjects.length;

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(0);

  const currentProject = myProjects[selectedProject];
  const handleNav = (direction) => {
    setSelectedProject((prev) => {
      if (direction === "prev") {
        return prev === 0 ? projectCount - 1 : prev - 1;
      } else {
        return prev === projectCount - 1 ? 0 : prev + 1;
      }
    });
  };

  return (
    <section className="c-space my-20">
      <p className="head-text">Works</p>

      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
        <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
          <div className="absolute top-0 right-0">
            <img
              src={currentProject.spotlight}
              alt="spotlight"
              className="w-full h-96 object-cover rounded-xl"
            />
          </div>
          <div
            className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg"
            style={currentProject.logoStyle}
          >
            <img
              src={currentProject.logo}
              alt="logo"
              className="w-13 h-10 shadow-sm"
            />
          </div>
          <div className="flex flex-col gap-5 text-white-600 my-5">
            <p className="text-white text-2xl font-semibold animatedText">
              {currentProject.title}
            </p>
            <p className="animatedText">{currentProject.desc}</p>
            <p className="animatedText">{currentProject.subdesc}</p>
          </div>
          <div className="flex items-center justify-between flex-wrap gap-5">
            <div className="flex items-center gap-3">
              {currentProject.tags.map((tag, index) => (
                <div key={index} className="tech-logo">
                  <img src={tag.path} alt={tag.name} />
                </div>
              ))}
            </div>
            <a
              className="flex items-center gap-2 cursor-pointer text-white-600"
              href={currentProject.href}
              target="_blank"
              rel="noreferrer"
            >
              <p>Live Site</p>
              <img src="/assets/arrow-up.png" alt="arrow" className="w-3 h-3" />
            </a>
          </div>
          <div className="flex justify-between items-center mt-7">
            <button className="arrow-btn" onClick={() => handleNav("prev")}>
              <img
                src="/assets/left-arrow.png"
                alt="right arrow"
                className="w-4 h-4"
              />
            </button>
            <button className="arrow-btn" onClick={() => handleNav("next")}>
              <img
                src="/assets/right-arrow.png"
                alt="right arrow"
                className="w-4 h-4"
              />
            </button>
          </div>
        </div>

        <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full">
          <Canvas shadows>
            <ambientLight intensity={Math.PI / 2} />
            <directionalLight position={[10, 10, 5]} />
            <Center>
              <Suspense fallback={<CanvasLoader />}>
                <group scale={1} position={[0, -2, 0]} rotation={[0, -1.6, 0]}>
                  <Computer texture={currentProject.texture} />
                </group>
              </Suspense>
            </Center>
            <OrbitControls  maxPolarAngle={Math.PI / 2} rotation={[0, -0.1, 0]} enableZoom={false}/>
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Projects;
