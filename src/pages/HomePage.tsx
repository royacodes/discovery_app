import React from 'react';
import BottomNavBar from '../components/BottomNavBar'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DiscoveryPage from './DiscoveryPage';
import EarnPage from './EarnPage';
import FriendsPage from './FriendsPage';
import ProfilePage from './ProfilePage';


const HomePage: React.FC = () => {
  return (
    <>
         <Router>
      <div className="h-screen flex flex-col">
        {/* Main content area */}
        <div className="flex-grow p-4">
          <Routes>
            <Route path="/discovery_app" element={<DiscoveryPage />} />
            <Route path="/earn" element={<EarnPage />} />
            <Route path="/cards" element={<EarnPage />} />
            <Route path="/friends" element={<FriendsPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </div>
        {/* Bottom Navbar */}
        <BottomNavBar />
      </div>
    </Router>
    </>
  )
}

export default HomePage
