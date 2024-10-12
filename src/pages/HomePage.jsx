import React from "react";
import BottomNavBar from "../components/BottomNavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DiscoveryPage from "./DiscoveryPage";
import EarnPage from "./EarnPage";
import FriendsPage from "./FriendsPage";
import ProfilePage from "./ProfilePage";
import GlobePage from "./GlobePage";
import FloatingButton from "../components/FloatingButton";
import AnimatedRoute from "../AnimatedRoute";
import MapPage from "./MapPage";
import WalletPage from "./WalletPage";
import CardsPage from "./CardsPage";

const HomePage = () => {
  return (
    <>
      <Router>
        <div className="h-screen w-full relative">
          {/* Main content area */}
          <div className="flex-grow overflow-auto m-0 p-0 w-full">
            <Routes>
              <Route path="/" element={<DiscoveryPage />} />
              <Route
                path="/discovery_app"
                element={
                  <AnimatedRoute>
                    <DiscoveryPage />
                  </AnimatedRoute>
                }
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
                path="/bot"
                element={
                  <AnimatedRoute>
                    <CardsPage />
                  </AnimatedRoute>
                }
              />
            </Routes>
          </div>

          <BottomNavBar />
        </div>
      </Router>
    </>
  );
};

export default HomePage;
