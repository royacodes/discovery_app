import React, { useState } from "react";
import jupiter from "../assets/planets/jupiter.jpg";
import mars from "../assets/planets/mars.jpg";
import mercury from "../assets/planets/mercury.jpg";
import neptune from "../assets/planets/neptune.jpg";
import saturn from "../assets/planets/saturn.jpg";
import uranus from "../assets/planets/uranus.jpg";
import venus from "../assets/planets/venus.jpg";
import nightSky from "../assets/globe/nightSky.png";

import CardItem from "../components/Discovery/CardItem";
import PlanetCardItem from "../components/income/PlanetCardItem";

const IncomePage = () => {
  return (
    <>
      <div
        className="h-screen flex flex-col bg-cover bg-center"
        style={{ backgroundImage: `url(${nightSky})` }}
      >
        <div className="flex-grow p-4">
          <div className="flex justify-start items-center p-4 bg-transparent rounded-lg shadow-md w-96">
            {/* Circle Avatar */}
            <div className="flex items-center border rounded-full p-[2px]">
              {" "}
              {/* Adjust padding for border */}
              <img
                src={mars}
                alt="planet"
                className="w-12 h-12 rounded-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-start items-start mx-2">
              <span className="text-sm font-poppinsMedium text-[#D1D5DB]">
                You are on
              </span>
              <span className="text-sm font-poppinsMedium text-[#9CA3AF]">
                Mars
              </span>
            </div>
          </div>
          <div className="min-w-full grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:mt-4 sm:pt-4 pt-4 mb-12">
            <PlanetCardItem
              id={1}
              title="Mercury"
              level="1"
              imageSrc={mercury}
              handleClick={() => {}}
            />
            <PlanetCardItem
              id={2}
              title="Mars"
              level="2"
              imageSrc={mars}
              handleClick={() => {}}
            />
            <PlanetCardItem
              id={3}
              title="Venus"
              level="3"
              imageSrc={venus}
              handleClick={() => {}}
            />
            <PlanetCardItem
              id={4}
              title="Neptune"
              level="4"
              imageSrc={neptune}
              handleClick={() => {}}
            />
            <PlanetCardItem
              id={5}
              title="Uranus"
              level="5"
              imageSrc={uranus}
              handleClick={() => {}}
            />
            <PlanetCardItem
              id={6}
              title="Saturn"
              level="6"
              imageSrc={saturn}
              handleClick={() => {}}
            />
            <PlanetCardItem
              id={7}
              title="Jupiter"
              level="7"
              imageSrc={jupiter}
              handleClick={() => {}}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default IncomePage;
