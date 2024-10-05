import React, { useState } from "react";
import GlobeComponent from "../components/GlobeComponent.jsx";
import FloatingButton from "../components/FloatingButton.jsx";

const GlobePage = () => {
  return (
    <>
      <div className="relative w-full h-full">
        <GlobeComponent />
        <FloatingButton />
      </div>
    </>
  );
};

export default GlobePage;
