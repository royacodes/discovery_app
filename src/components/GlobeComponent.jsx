import React, { useEffect, useRef, useState } from "react";
import Globe from "react-globe.gl";
import FloatingButton from "./FloatingButton";
import CardItem from "./Discovery/CardItem";
import SearchBar from "./SearchBar/SearchBar";
import search from "../assets/search.svg";
import { useNavigate } from "react-router-dom";

const GlobeComponent = () => {
  const globeEl = useRef();
  const navigate = useNavigate();
  const [prevZoom, setPrevZoom] = useState(0);

  useEffect(() => {
    // Auto-rotate the globe
    globeEl.current.controls().autoRotate = true;
    globeEl.current.controls().autoRotateSpeed = 0.1;

    // Set the initial zoom level by changing the camera position
    globeEl.current.camera().position.z = 500; // Default is 1000, decrease to zoom in, increase to zoom out
  }, []);
  useEffect(() => {
    // Access OrbitControls via ref to listen to zoom changes
    const controls = globeEl.current.controls();

    const handleZoom = () => {
      const cameraPosition = globeEl.current.camera().position.z;
      // console.log(`camera pos: ${cameraPosition}`);
      // Calculate the zoom level by using the camera's position (distance from the origin)

      // Check if zoom level has changed significantly
      if (cameraPosition < 400) {
        // console.log("Zoom detected", cameraPosition);
        navigate("/cards");
      }
    };

    controls.addEventListener("change", handleZoom);

    return () => {
      // Cleanup the event listener when component unmounts
      controls.removeEventListener("change", handleZoom);
    };
  }, [navigate]);
  return (
    <Globe
      ref={globeEl}
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
      backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
    />
  );
};

export default GlobeComponent;
