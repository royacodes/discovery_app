import React, { useState } from "react";
import GlobeComponent from "../components/GlobeComponent.jsx";
import "../components/Discovery/discovery.css";
import DiscoveryBody from "../components/Discovery/DiscoveryBody.jsx";
import { BsList } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";

const DiscoveryPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const isList = useSelector((state) => state.toggleListReducer.isListVisible);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    // You can handle the search functionality here
  };

  const navigateToPage = (page) => {
    setIsMenuOpen(false);
    switch (page) {
      case "Discovery":
        navigate("/discovery_app");
        break;
      case "Cards":
        navigate("/cards");
        break;
      case "Wallet":
        navigate("/wallet");
        break;
      default:
        break;
    }
  };

  const cards = [
    {
      id: 1,
      title: "Card 1",
      description: "This is the first card.kjfhncdjsazfjchsadfklcfchdkjslh",
      price: 10,
    },
    {
      id: 2,
      title: "Card 2",
      description: "This is the second card.",
      price: 10,
    },
    {
      id: 3,
      title: "Card 3",
      description: "This is the third card.",
      price: 10,
    },
    {
      id: 4,
      title: "Card 4",
      description: "This is the fourth card.",
      price: 10,
    },
  ];

  return (
    <>
      <div className="relative w-full h-full bg-black">
        <GlobeComponent />
        {isList && (
          <div className="absolute inset-0 bg-black opacity-25 z-10"></div>
        )}
        {isList && (
          <div className="absolute top-0 left-0 right-0 text-white z-20 mx-4 max-w-full my-5">
            <DiscoveryBody
              handleHideList={() => dispatch({ type: "HIDE_LIST" })}
            />
          </div>
        )}
        <div
          className="fixed top-0 left-0 p-2 flex flex-col items-end z-30"
          onClick={() => dispatch({ type: "TOGGLE_LIST" })}
        >
          {!isList && <BsList className="text-3xl" />}
        </div>
      </div>
    </>
  );
};

export default DiscoveryPage;
