import React, { useEffect, useRef } from "react";
import Globe from "react-globe.gl";
import FloatingButton from "./FloatingButton";
import CardItem from "./Discovery/CardItem";
import SearchBar from "./SearchBar/SearchBar";
import search from "../assets/search.svg";

const GlobeComponent = () => {
  const globeEl = useRef();

  useEffect(() => {
    // Auto-rotate the globe
    globeEl.current.controls().autoRotate = true;
    globeEl.current.controls().autoRotateSpeed = 0.1;

    // Set the initial zoom level by changing the camera position
    globeEl.current.camera().position.z = 500; // Default is 1000, decrease to zoom in, increase to zoom out
  }, []);

  return (
    <Globe
      ref={globeEl}
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
      backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
    />
  );
};

export default GlobeComponent;
