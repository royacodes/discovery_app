import React, { useEffect, useRef } from "react";
import Globe from "react-globe.gl";

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
  useEffect(() => {
    // Auto-rotate the globe
    globeEl.current.controls().autoRotate = true;
    globeEl.current.controls().autoRotateSpeed = 0.1;

    // Set the initial zoom level by changing the camera position
    globeEl.current.camera().position.z = 550; // Default is 1000, decrease to zoom in, increase to zoom out
  }, []);

  return (
    <div className="relative w-full h-screen">
      <Globe
        ref={globeEl}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
      />

      <button
        className="absolute bottom-20 left-1/2 transform -translate-x-1/2 bg-primary-color text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 focus:outline-none"
        onClick={() => alert("Button Clicked!")}
      >
        Discover on List
      </button>
    </div>
  );
};

export default GlobeComponent;
