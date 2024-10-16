import React, { useState } from "react";
import buttonClose from "../assets/buttonClose.svg";
import buttonOpen from "../assets/buttonOpen.svg";
import { useNavigate } from "react-router-dom";

const FloatingButton = ({ navigateToPage }) => {
  const navigate = useNavigate();
  // State to handle menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed bottom-20 right-5 flex flex-col items-end z-30">
      {/* Menu that toggles open/close */}
      {isMenuOpen && (
        <div className="bg-transparent shadow-lg rounded-lg mb-2 p-3">
          <ul className="text-gray-200 space-y-3">
            <li
              className="hover:bg-gray-100 hover:text-gray-700 bg-black rounded-full shadow-md shadow-white py-2 px-4 "
              onClick={() => navigateToPage("Discovery")}
            >
              Map
            </li>
            <li
              className="hover:bg-gray-100 bg-black hover:text-gray-700 rounded-full shadow-md shadow-white p-2 "
              onClick={() => navigateToPage("Cards")}
            >
              List
            </li>
          </ul>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={toggleMenu}
        className="bg-black shadow-white w-16 h-16 bg-opacity-10 rounded-full shadow-lg flex items-center justify-center transition duration-300"
      >
        {/* Icon change based on menu state */}
        {isMenuOpen ? (
          <img src={buttonClose} className="text-white h-8 w-8" />
        ) : (
          <img src={buttonOpen} className="text-white h-8 w-8" />
        )}
      </button>
    </div>
  );
};

export default FloatingButton;
