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
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  const [shouldNavigate, setShouldNavigate] = useState(false);

  useEffect(() => {
    // Auto-rotate the globe
    globeEl.current.controls().autoRotate = true;
    globeEl.current.controls().autoRotateSpeed = 0.1;

    // Set the initial zoom level by changing the camera position
    globeEl.current.camera().position.z = 500; // Default is 1000, decrease to zoom in, increase to zoom out
  }, []);
  useEffect(() => {
    globeEl.current.camera().position.z = 500; // Default is 1000, decrease to zoom in, increase to zoom out

    // Access OrbitControls via ref to listen to zoom changes
    const controls = globeEl.current.controls();
    const handleZoom = () => {
      const cameraPosition = globeEl.current.camera().position;
      const distanceFromCenter = cameraPosition.length(); // Get the distance (ignoring orbit)

      // console.log(`camera distance from center: ${distanceFromCenter}`);
      // console.log(`camera pos: ${cameraPosition}`);
      // Calculate the zoom level by using the camera's position (distance from the origin)

      // Check if zoom level has changed significantly
      if (distanceFromCenter < 200) {
        console.log("Navigating to map with:", lat); // Log the values
        setShouldNavigate(true);
        // console.log("Zoom detected", cameraPosition);
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
      onZoom={(cords) => {
        console.log(`coords : ${cords.lat} ${cords.lng}`);
        if (shouldNavigate) {
          navigate("/map", { state: { lat: cords.lat, lng: cords.lng } });
        }
      }}
    />
  );
};

export default GlobeComponent;
