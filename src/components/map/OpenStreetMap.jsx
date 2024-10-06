import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useNavigate } from "react-router-dom";
import { useMapEvents } from "react-leaflet";
// Fix marker icons issue with leaflet in React (optional step)
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});
const MapZoomListener = ({ navigate }) => {
  const map = useMapEvents({
    zoomend: () => {
      const zoomLevel = map.getZoom();
      if (zoomLevel < 3) {
        // If zoom level is less than 4, navigate to "discovery_app"
        navigate("/");
      }
    },
  });
  return null;
};
const OpenStreetMap = ({ lat, lng }) => {
  const navigate = useNavigate();
  // Define map center (lat, long) and zoom level
  const position = [lat, lng]; // Example coordinates (London)

  return (
    <MapContainer
      center={position}
      zoom={4}
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      <MapZoomListener navigate={navigate} />
    </MapContainer>
  );
};

export default OpenStreetMap;
