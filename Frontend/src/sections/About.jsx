// 

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import pinImage from "/assets/pin.png";
import Button from "../components/Buttons.jsx";
import { useState } from "react";

const customIcon = new L.Icon({
  iconUrl: pinImage,
  iconSize: [30, 30],
  iconAnchor: [15, 30],
  popupAnchor: [0, -25],
});

const About = () => {
  const [emailCopied, setEmailCopied] = useState(false);
  const [numCopied, setNumCopied] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const copyEmailHandler = () => {
    navigator.clipboard.writeText("deosundeola@gmail.com")
      .then(() => {
        setEmailCopied(true);
        setSuccessMessage("Email copied!");
        setTimeout(() => {
          setEmailCopied(false);
          setSuccessMessage('');
        }, 2000);
      })
      .catch((error) => {
        console.error("Copy failed!", error);
      });
  };

  const copyNumHandler = () => {
    navigator.clipboard.writeText("+2348144094252")
      .then(() => {
        setNumCopied(true);
        setSuccessMessage("Number copied!");
        setTimeout(() => {
          setNumCopied(false);
          setSuccessMessage('');
        }, 2000);
      })
      .catch((error) => {
        console.error("Copy failed!", error);
      });
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid.png"
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Hi, I&apos;m Oluwaseyi </p>
              <p className="grid-subtext">
                Over the past 2 years, I&apos;ve developed a solid foundation in both frontend and backend development, specializing in backend development and animations.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid2.gif"
              alt="grid-2"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I focus on JavaScript/TypeScript and Python, and I&apos;m exploring 3D animations to bring my projects to life.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center item-center z-0">
              <MapContainer
                center={[6.6018, 3.3515]}
                zoom={13}
                style={{ height: "300px", width: "300px" }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={[6.6018, 3.3515]} icon={customIcon}>
                  <Popup>Hi, I&apos;m Oluwaseyi</Popup>
                </Marker>
              </MapContainer>
            </div>
            <div>
              <p className="grid-headtext">Location</p>
              <p className="grid-subtext">
                I am based in Lagos, Nigeria and open to remote opportunities.
              </p>
              <Button name="Contact me" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid3.png"
              alt="grid-3"
              className="w-full sm:h-[266px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">My Passion</p>
              <p className="grid-subtext">
                I have a strong passion for crafting websites and applications that are not only visually appealing but also highly functional, ensuring a seamless experience for users.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />
            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={copyEmailHandler}>
                <img
                  src={emailCopied ? "assets/tick.svg" : "assets/copy.svg"}
                  alt="copy"
                />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                  deosundeola@gmail.com
                </p>
                {successMessage && successMessage.includes("Email") && (
                  <p className="text-green-500">{successMessage}</p>
                )}
              </div>
              <div className="copy-container" onClick={copyNumHandler}>
                <img
                  src={numCopied ? "assets/tick.svg" : "assets/copy.svg"}
                  alt="copy"
                />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                  +234 8144094252
                </p>
                {successMessage && successMessage.includes("Number") && (
                  <p className="text-green-500">{successMessage}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
