import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import {  AiOutlineSearch, AiOutlineUser } from 'react-icons/ai'; // React icons for example
import { PiCoins } from "react-icons/pi";
import { TbFriends } from "react-icons/tb";
const BottomNavBar: FC = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200">
      <div className="max-w-lg mx-auto flex justify-around items-center py-3">
      <button className="flex flex-col items-center bg-white">
      <NavLink  to="/" className={({ isActive }) => isActive ? "text-blue-500" : "text-gray-400"}>
      <AiOutlineSearch className="text-2xl text-gray-400" />
      <span className="text-sm text-gray-400">Discovery</span>
      </NavLink >
         
        </button>
        <button className="flex flex-col items-center bg-white border-none">
        <NavLink  to="/earn" className="flex flex-col items-center bg-white">
        <PiCoins className="text-2xl text-gray-400" />
          <span className="text-sm text-gray-400">Earn</span>
        </NavLink >
        </button>
        <button className="flex flex-col items-center bg-white border-none">
        <NavLink  to="/friends" className="flex flex-col items-center bg-white">
        <TbFriends className="text-2xl text-gray-400" />
        <span className="text-sm text-gray-400">Friends</span>
        </NavLink >

        
        </button>
        
        <button className="flex flex-col items-center bg-white">
        <NavLink  to="/profile" className="flex flex-col items-center bg-white">
        <AiOutlineUser className="text-2xl text-gray-400" />
          <span className="text-sm text-gray-400">Profile</span>
        </NavLink >

          
        </button>
      </div>
    </nav>
  );
};

export default BottomNavBar;