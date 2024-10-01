import { NavLink } from "react-router-dom";
import { IoPersonAddSharp } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import { PiHandWithdrawFill } from "react-icons/pi";
import { FaCoins } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import globeIcon from "../assets/globe.svg";

const BottomNavBar = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 flex-shrink-0">
      <div className="max-w-lg mx-auto flex justify-around items-center py-3 relative">
        {/* <button className="flex flex-col items-center bg-white">
          <NavLink
            to="/earn"
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "text-gray-400"
            }
          >
            <FaCoins className="text-3xl text-silver-color" />
          </NavLink>
        </button> */}

        <button className="flex flex-col items-center bg-white">
          <NavLink to="/cards" className="flex flex-col items-center bg-white">
            <PiHandWithdrawFill className="text-3xl text-silver-color" />
          </NavLink>
        </button>

        {/* <button className="flex flex-col items-center bg-white">
          <NavLink to="/earn" className="flex flex-col items-center bg-white">
            <span className="text-sm text-gray-400"></span>
          </NavLink>
        </button> */}

        {/* Circular Button in the center */}
        {/* <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
          <button className="w-16 h-16 bg-primary-color text-white rounded-full shadow-lg flex items-center justify-center border-4 border-white">
            <NavLink
              to="/discovery_app"
              className="flex items-center justify-center"
            >
              <MdDashboard className="text-3xl" />
            </NavLink>
          </button>
        </div> */}

        {/* <button className="flex flex-col items-center bg-white">
          <NavLink to="/earn" className="flex flex-col items-center bg-white">
            <span className="text-sm text-gray-400"></span>
          </NavLink>
        </button> */}

        <button className="flex flex-col items-center bg-white">
          <NavLink
            to="/discovery_app"
            className="flex items-center justify-center"
          >
            <img src={globeIcon} className="mx-auto h-12 w-12 object-contain" />
            {/* <MdDashboard className="text-3xl" /> */}
          </NavLink>
        </button>

        <button className="flex flex-col items-center bg-white">
          <NavLink
            to="/profile"
            className="flex flex-col items-center bg-white"
          >
            <ImProfile className="text-3xl text-silver-color" />
          </NavLink>
        </button>
      </div>
    </nav>
  );
};

export default BottomNavBar;
