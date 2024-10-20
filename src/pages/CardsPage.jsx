import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CardItem from "../components/Discovery/CardItem";

const GiftCard = ({
  title,
  setTitle,
  description,
  setDescription,
  price,
  setPrice,
  expDate,
  setExpDate,
}) => {
  const preventTyping = (e) => {
    e.preventDefault();
  };
  return (
    <div className="border rounded-lg w-full h-40 flex items-center justify-center shadow-md hover:shadow-lg transition-shadow">
      <div className="flex flex-col items-center">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="bg-transparent text-white text-lg font-bold text-center outline-none"
          placeholder="Enter title"
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="bg-transparent text-white text-lg font-bold text-center outline-none"
          placeholder="Enter Description"
        />
        <div className="flex items-center justify-between mx-8">
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="bg-transparent text-white text-lg font-bold text-center outline-none"
            placeholder="Enter price"
          />
          <DatePicker
            selected={expDate}
            onChange={(date) => setExpDate(date)}
            placeholderText="Enter exp"
            dateFormat="MM/yy"
            showMonthYearPicker
            className="bg-transparent text-white text-lg font-bold text-center outline-none"
          />
        </div>
      </div>
    </div>
  );
};

const TypeSelector = ({ types, onSelect }) => {
  return (
    <div className="grid grid-cols-3 gap-2">
      {types.map((type, index) => (
        <div
          className="cursor-pointer flex items-center justify-center w-20 h-20 rounded-md border"
          onClick={() => onSelect(type)}
        >
          <p>{type}</p>
        </div>
      ))}
    </div>
  );
};

const CardsPage = () => {
  const [showCard, setShowCard] = useState(false);
  const [selectedType, setSelectedType] = useState("");
  const [title, setTitle] = useState("Enter Card's Title");
  const [description, setDescription] = useState("Enter Card's Description");
  const [price, setPrice] = useState("Price");
  const [expDate, setExpDate] = useState(null);
  const types = ["request", "demand", "trade", "stake", "money"];
  const steps = ["card", "description", "detail"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleNext = () => {
    if (currentIndex < steps.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      //confirm
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleTypeSelect = (type) => {
    setSelectedType(type);
  };

  return (
    <div className="flex flex-col items-center h-screen w-full p-6 bg-bg-color overflow-hidden">
      <div className="relative border-dashed border-2 border-gray-300 rounded-lg w-full py-4 mb-4 flex items-center justify-center">
        <button
          onClick={() => setShowCard(!showCard)}
          className="flex flex-col items-center text-gray-300"
        >
          <FaPlus className="text-3xl" />
          <span>Create New Card</span>
        </button>
      </div>
      {showCard && (
        <>
          <GiftCard
            title={title}
            setTitle={setTitle}
            description={description}
            setDescription={setDescription}
            price={price}
            setPrice={setPrice}
            expDate={expDate}
            setExpDate={setExpDate}
          />
        </>
      )}

      {showCard && (
        <div className="flex justify-between w-full mt-5">
          <button
            className="bg-deep-purple w-32 rounded-lg px-4 py-2 disabled:bg-gray-400"
            onClick={handlePrevious}
            disabled={currentIndex === 0}
          >
            Previous
          </button>

          <button
            className="bg-deep-purple w-32 rounded-lg px-4 py-2 disabled:bg-gray-400"
            onClick={handleNext}
          >
            {currentIndex === steps.length - 1 ? "Confirm" : "Next"}
          </button>
        </div>
      )}

      {/* Image Selector */}
      {/* {showImageSelector && (
        <div className="mt-4">
          <h4 className="text-gray-200 mb-2">Choose a Card Type:</h4>
          <TypeSelector types={types} onSelect={handleTypeSelect} />
        </div>
      )} */}

      {/* Slide Wrapper */}
      <div className="relative w-full mt-12 mb-8 overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 110}%)` }}
        >
          {/* Slides */}
          <div className="w-full flex flex-col items-start justify-start">
            <span className="text-xl">My Cards</span>
            <div className="min-w-full grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:mt-4 sm:pt-4 pt-4">
              <CardItem
                id={1}
                title="test"
                description="this is a description test"
                price="10"
                handleClick={() => {}}
              />
              <CardItem
                id={1}
                title="test"
                description="this is a description test"
                price="10"
                handleClick={() => {}}
              />
              <CardItem
                id={1}
                title="test"
                description="this is a description test"
                price="10"
                handleClick={() => {}}
              />
              <CardItem
                id={1}
                title="test"
                description="this is a description test"
                price="10"
                handleClick={() => {}}
              />
              <CardItem
                id={1}
                title="test"
                description="this is a description test"
                price="10"
                handleClick={() => {}}
              />
              <CardItem
                id={1}
                title="test"
                description="this is a description test"
                price="10"
                handleClick={() => {}}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsPage;
