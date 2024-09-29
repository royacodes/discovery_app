import React, { useEffect, useRef, useState } from 'react';
import Globe, { GlobeMethods } from 'react-globe.gl';

// Define the structure of a point's data
interface PointData {
  lat: number;
  lng: number;
  size: number;
  color: string;
}

// Define the structure of coordinates (lat, lng)
interface Coordinates {
  lat: number;
  lng: number;
}

const GlobeComponent: React.FC = () => {
  const globeRef = useRef<GlobeMethods>();
  const [points, setPoints] = useState<PointData[]>([]);

  // Mock data fetch
  useEffect(() => {
    setPoints([
      { lat: 37.7749, lng: -122.4194, size: 1, color: 'red' },   // San Francisco
      { lat: 51.5074, lng: -0.1278, size: 1, color: 'blue' },    // London
      { lat: 35.6895, lng: 139.6917, size: 1, color: 'green' }   // Tokyo
    ]);
  }, []);

  const handleZoom = (pov: { lat: number; lng: number; altitude: number }) => {
    console.log('Zoom (altitude):', pov.altitude);
  };

  const handlePointClick = (point: PointData) => {
    console.log('Clicked on point:', { lat: point.lat, lng: point.lng });
  };

  return (
    <div className='p-4 h-screen box-border'>

<Globe
      ref={globeRef}
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
      onZoom={handleZoom}
      onPointClick={(point: object) => handlePointClick(point as PointData)} // Handle point click event
      pointsData={points}
      pointColor={(point: object) => (point as PointData).color} // Cast point to PointData
      pointAltitude={(point: object) => (point as PointData).size * 0.1}  // Cast point to PointData
      pointLabel={(point: object) => `Lat: ${(point as PointData).lat}, Lng: ${(point as PointData).lng}`} // Cast point to PointData
    />
    </div>
    
  );
};

export default GlobeComponent;