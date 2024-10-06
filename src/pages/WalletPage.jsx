import React, { useState } from "react";
import SearchBar from "../components/SearchBar/SearchBar.jsx";
import CategoryHeader from "../components/Discovery/CategoryHeader.jsx";
import CardItem from "../components/Discovery/CardItem.jsx";
import { FaStar } from "react-icons/fa";
import GlobeComponent from "../components/GlobeComponent.jsx";
import "../components/Discovery/discovery.css";
import FloatingButton from "../components/FloatingButton.jsx";
import ProfileBar from "../components/wallet/ProfileBar.jsx";
import tron from "../assets/tron.png";
import ton from "../assets/ton.webp";
import stable from "../assets/stable.png";

const WalletPage = () => {
  const [createClicked, setCreateClicked] = useState(false);
  const [tonClicked, setTonClicked] = useState(false);
  const [tronClicked, setTronClicked] = useState(false);
  const [imageSrc, setImageSrc] = useState(stable); // Default image is 'ton'

  // Function to toggle the clicked state
  const handleClick = ({ buttonType }) => {
    console.log(`button type is: ${buttonType}`);
    switch (buttonType) {
      case "wallet":
        setCreateClicked(true);
        setTonClicked(false);
        setTronClicked(false);
        setImageSrc(stable);
        break;
      case "ton":
        setCreateClicked(false);
        setTonClicked(true);
        setTronClicked(false);
        setImageSrc(ton);
        break;
      case "tron":
        setCreateClicked(false);
        setTonClicked(false);
        setTronClicked(true);
        setImageSrc(tron);
        break;
      default:
        break;
    }
  };
  return (
    <>
      <div className="relative w-full h-full bg-black">
        <GlobeComponent />
        <div className="absolute inset-0 bg-black opacity-25 z-10"></div>
        <div className="absolute top-0 left-0 right-0 text-white z-20 mx-4 max-w-full">
          <ProfileBar />
          <div className="flex justify-center">
            <img
              src={imageSrc}
              className="animate-rotate-horizontal h-40 w-40"
            />
          </div>{" "}
        </div>
        <FloatingButton />
        <div className="absolute bottom-0 w-full h-1/2 bg-black bg-opacity-50 rounded-tl-3xl rounded-tr-3xl z-20 shadow-top-only">
          <div className="flex flex-col justify-center items-center max-w-full mx-4 mt-8">
            <div
              onClick={() => handleClick({ buttonType: "wallet" })}
              className={`rounded-lg border-[2px] w-full py-4 mb-4 cursor-pointer ${
                createClicked ? "border-primary-color" : "border-white"
              }`}
            >
              Create Your Wallet
            </div>
            <div
              onClick={() => handleClick({ buttonType: "ton" })}
              className={`rounded-lg border-[2px] w-full py-4 mb-4 cursor-pointer ${
                tonClicked ? "border-ton-blue" : "border-white"
              }`}
            >
              Connect to TON Wallet
            </div>
            <div
              onClick={() => handleClick({ buttonType: "tron" })}
              className={`rounded-lg border-[2px] w-full py-4 mb-4 cursor-pointer ${
                tronClicked ? "border-tron-red" : "border-white"
              }`}
            >
              Connect to Tron Wallet
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WalletPage;
