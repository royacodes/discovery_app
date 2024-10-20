import { NavLink } from "react-router-dom";
import { FaGlobeAmericas } from "react-icons/fa";
import { RiAiGenerate } from "react-icons/ri";
import { LuWallet } from "react-icons/lu";
import { SiSololearn } from "react-icons/si";
import { GiReceiveMoney } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { BsCardChecklist } from "react-icons/bs";

const BottomNavBar = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const isList = useSelector((state) => state.toggleListReducer.isListVisible);
  const navigate = useNavigate();

  const toggleList = () => {
    dispatch({ type: "TOGGLE_LIST" });
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-black shadow-bottom-nav-shadow flex-shrink-0 z-40">
      <div className="max-w-lg mx-auto flex justify-around items-center py-3 relative">
        <button className="flex flex-col items-center bg-transparent">
          <NavLink
            to="/earn"
            className={({ isActive }) =>
              `flex flex-col items-center ${
                isActive ? "text-white" : "text-gray-400"
              }`
            }
          >
            <BsCardChecklist className="text-2xl" />
            {/* <p className="text-gray-400 text-xs mt-[1px]">Earn</p> */}
          </NavLink>
        </button>

        <button className="flex flex-col items-center bg-transparent">
          <NavLink
            to="/cards"
            className={({ isActive }) =>
              `flex flex-col items-center ${
                isActive ? "text-white" : "text-gray-400"
              }`
            }
          >
            <RiAiGenerate className="text-3xl " />
            {/* <p className="text-gray-400 text-xs mt-[1px]">Cards</p> */}
          </NavLink>
        </button>

        <button className="flex flex-col items-center bg-white">
          <NavLink to="/earn" className="flex flex-col items-center bg-white">
            <span className="text-sm text-gray-400"></span>
          </NavLink>
        </button>

        {/* Circular Button in the center */}
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
          <button
            className="w-16 h-16 bg-deep-purple text-white rounded-full shadow-lg flex items-center justify-center border-4 border-white"
            onClick={() => {
              if (location.pathname === "/discovery_app") {
                toggleList(); // Dispatch Redux action to toggle the list
              } else {
                navigate("/discovery_app");
              }
            }}
          >
            {/* <NavLink
              to="/discovery_app"
              className="flex items-center justify-center"
            > */}
            {isList && <FaGlobeAmericas className="text-5xl" />}
            {!isList && <MdDashboard className="text-5xl" />}

            {/* </NavLink> */}
          </button>
        </div>
        <button className="flex flex-col items-center bg-white">
          <NavLink to="/earn" className="flex flex-col items-center bg-white">
            <span className="text-sm text-gray-400"></span>
          </NavLink>
        </button>

        <button className="flex flex-col items-center bg-transparent">
          <NavLink
            to="/income"
            className={({ isActive }) =>
              `flex flex-col items-center ${
                isActive ? "text-white" : "text-gray-400"
              }`
            }
          >
            <SiSololearn className="text-3xl" />
            {/* <p className="text-gray-400 text-xs mt-[1px]">Game</p> */}
          </NavLink>
        </button>
        <button className="flex flex-col items-center bg-transparent">
          <NavLink
            to="/wallet"
            className={({ isActive }) =>
              `flex flex-col items-center ${
                isActive ? "text-white" : "text-gray-400"
              }`
            }
          >
            <LuWallet className="text-3xl" />
            {/* <p className="text-gray-400 text-xs mt-[1px]">Wallet</p> */}
          </NavLink>
        </button>
      </div>
    </nav>
  );
};

export default BottomNavBar;
