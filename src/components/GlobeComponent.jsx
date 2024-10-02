import React, { useEffect, useRef } from "react";
import Globe from "react-globe.gl";
import FloatingButton from "./FloatingButton";
import CardItem from "./Discovery/CardItem";
import SearchBar from "./SearchBar/SearchBar";
import search from "../assets/search.svg";

const GlobeComponent = () => {
  const globeEl = useRef();
  const N = 20;
  const arcsData = [...Array(N).keys()].map(() => ({
    startLat: (Math.random() - 0.5) * 180,
    startLng: (Math.random() - 0.5) * 360,
    endLat: (Math.random() - 0.5) * 180,
    endLng: (Math.random() - 0.5) * 360,
    color: [
      ["red", "yellow", "green", "blue"][Math.floor(Math.random() * 4)],
      ["red", "yellow", "green", "blue"][Math.floor(Math.random() * 4)],
    ],
  }));

  const cards = [
    {
      id: 1,
      title: "Card 1",
      description: "This is the first card.kjfhncdjsazfjchsadfklcfchdkjslh",
      price: 10,
    },
    {
      id: 2,
      title: "Card 2",
      description: "This is the second card.",
      price: 10,
    },
    {
      id: 3,
      title: "Card 3",
      description: "This is the third card.",
      price: 10,
    },
    {
      id: 4,
      title: "Card 4",
      description: "This is the fourth card.",
      price: 10,
    },
    {
      id: 4,
      title: "Card 4",
      description: "This is the fourth card.",
      price: 10,
    },
    {
      id: 4,
      title: "Card 4",
      description: "This is the fourth card.",
      price: 10,
    },
  ];
  useEffect(() => {
    // Auto-rotate the globe
    globeEl.current.controls().autoRotate = true;
    globeEl.current.controls().autoRotateSpeed = 0.1;

    // Set the initial zoom level by changing the camera position
    globeEl.current.camera().position.z = 500; // Default is 1000, decrease to zoom in, increase to zoom out
  }, []);

  return (
    <div className="relative w-full h-screen">
      <Globe
        ref={globeEl}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
      />
      <div className="absolute inset-0 bg-black opacity-25 z-10"></div>
      {/* Optionally, you can add content inside this overlay */}
      <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 text-white z-20 mx-4 max-w-full">
        {/* <img
          src={search}
          className="h-12 w-12 mx-auto mb-4 shadow-lg shadow-bold-gold rounded-full bg-transparent"
        /> */}
        <SearchBar />

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">
          <div className="flex flex-col hover:bg-gray-100 py-12 bg-opacity-20 bg-black rounded-3xl shadow-md shadow-white p-2 text-center">
            <div>title</div>
            <div>description</div>
            <div className="flex justify-between">
              <div>10$</div>
              <div>24/07</div>
            </div>
          </div>
          <div className="hover:bg-gray-100 py-12 bg-opacity-20 bg-black rounded-3xl shadow-md shadow-white p-2 text-center">
            Discovery
          </div>
          <div className="hover:bg-gray-100 py-12 bg-opacity-20 bg-black rounded-3xl shadow-md shadow-white p-2 text-center">
            Discovery
          </div>
          <div className="hover:bg-gray-100 py-12 bg-opacity-20 bg-black rounded-3xl shadow-md shadow-white p-2 text-center">
            Discovery
          </div>
          <div className="hover:bg-gray-100 py-12 bg-opacity-20 bg-black rounded-3xl shadow-md shadow-white p-2 text-center">
            Discovery
          </div>
          <div className="hover:bg-gray-100 py-12 bg-opacity-20 bg-black rounded-3xl shadow-md shadow-white p-2 text-center">
            Discovery
          </div>
          <div className="hover:bg-gray-100 py-12 bg-opacity-20 bg-black rounded-3xl shadow-md shadow-white p-2 text-center">
            Discovery
          </div>
          <div className="hover:bg-gray-100 py-12 bg-opacity-20 bg-black rounded-3xl shadow-md shadow-white p-2 text-center">
            Discovery
          </div>
        </div>
      </div>
      {/* <button
        className="absolute bottom-20 left-1/2 transform -translate-x-1/2 bg-primary-color text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 focus:outline-none"
        onClick={() => alert("Button Clicked!")}
      >
        Discover on List
      </button> */}
      {/* <FloatingButton /> */}
    </div>
  );
};

export default GlobeComponent;
