import React from "react";
import OpenStreetMap from "../components/map/OpenStreetMap";
import { useLocation } from "react-router-dom";

const MapPage = () => {
  const location = useLocation();
  const { lat, lng } = location.state || {};
  return (
    <div>
      <OpenStreetMap lat={lat} lng={lng} />
    </div>
  );
};

export default MapPage;
