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

const HomePage = () => {
  return (
    <>
      <Router>
        <div className="h-screen w-full relative">
          {/* Main content area */}
          <div className="flex-grow overflow-auto m-0 p-0 w-full">
            <Routes>
              <Route path="/" element={<GlobePage />} />
              <Route
                path="/discovery_app"
                element={
                  <AnimatedRoute>
                    <DiscoveryPage />
                  </AnimatedRoute>
                }
              />
              <Route path="/earn" element={<EarnPage />} />
              <Route path="/cards" element={<EarnPage />} />
              <Route path="/friends" element={<FriendsPage />} />
              <Route path="/profile" element={<ProfilePage />} />
            </Routes>
          </div>

          {/* Bottom Navbar */}
          {/* <BottomNavBar /> */}
        </div>
      </Router>
    </>
  );
};

export default HomePage;
