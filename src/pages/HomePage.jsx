import React, { useState } from "react";
import BottomNavBar from "../components/BottomNavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DiscoveryPage from "./DiscoveryPage";
import EarnPage from "./EarnPage";
import AnimatedRoute from "../AnimatedRoute";
import MapPage from "./MapPage";
import WalletPage from "./WalletPage";
import CardsPage from "./CardsPage";
import IncomePage from "./IncomePage";

const HomePage = () => {
  const [isListVisible, setIsListVisible] = useState(false);

  const handleToggleList = () => {
    setIsListVisible((prev) => !prev);
  };
  return (
    <>
      <Router>
        <div className="h-screen w-full relative">
          {/* Main content area */}
          <div className="flex-grow overflow-auto m-0 p-0 w-full">
            <Routes>
              <Route
                path="/discovery_app"
                element={<DiscoveryPage onToggleList={handleToggleList} />}
              />
              <Route
                path="/wallet"
                element={
                  <AnimatedRoute>
                    <WalletPage />
                  </AnimatedRoute>
                }
              />
              <Route
                path="/map"
                element={
                  <AnimatedRoute>
                    <MapPage />
                  </AnimatedRoute>
                }
              />
              <Route
                path="/earn"
                element={
                  <AnimatedRoute>
                    <EarnPage />
                  </AnimatedRoute>
                }
              />
              <Route
                path="/cards"
                element={
                  <AnimatedRoute>
                    <CardsPage />
                  </AnimatedRoute>
                }
              />
              <Route
                path="/income"
                element={
                  <AnimatedRoute>
                    <IncomePage />
                  </AnimatedRoute>
                }
              />
            </Routes>
          </div>

          <BottomNavBar onDiscoveryClick={handleToggleList} />
        </div>
      </Router>
    </>
  );
};

export default HomePage;
