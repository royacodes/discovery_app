import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const GiftCard = ({
  backgroundImage,
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
    <div
      className="border rounded-lg w-full h-40 flex items-center justify-center shadow-md hover:shadow-lg transition-shadow"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
      }}
    >
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
        <div className="flex justify-between">
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

const ImageSelector = ({ images, onSelect }) => {
  return (
    <div className="grid grid-cols-3 gap-2">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt="Background option"
          className="cursor-pointer w-20 h-20 rounded-md border"
          onClick={() => onSelect(image)}
        />
      ))}
    </div>
  );
};

const CardsPage = () => {
  const [showImageSelector, setShowImageSelector] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [title, setTitle] = useState("Enter Card's Title");
  const [description, setDescription] = useState("Enter Card's Description");
  const [price, setPrice] = useState("Price");
  const [expDate, setExpDate] = useState(null);

  const images = [
    "https://via.placeholder.com/150/FF0000",
    "https://via.placeholder.com/150/00FF00",
    "https://via.placeholder.com/150/0000FF",
    "https://via.placeholder.com/150/FFFF00",
    "https://via.placeholder.com/150/00FFFF",
  ];

  const handleImageSelect = (image) => {
    setSelectedImage(image);
    setShowImageSelector(false);
  };

  return (
    <div className="flex flex-col items-center h-screen w-full p-6 bg-bg-color overflow-x-hidden">
      <div className="relative border-dashed border-2 border-gray-300 rounded-lg w-full h-40 flex items-center justify-center">
        {selectedImage ? (
          <GiftCard
            backgroundImage={selectedImage}
            title={title}
            setTitle={setTitle}
            description={description}
            setDescription={setDescription}
            price={price}
            setPrice={setPrice}
            expDate={expDate}
            setExpDate={setExpDate}
          />
        ) : (
          <button
            onClick={() => setShowImageSelector(!showImageSelector)}
            className="flex flex-col items-center text-gray-300"
          >
            <FaPlus className="text-3xl" />
            <span>Create New Card</span>
          </button>
        )}
      </div>

      {showImageSelector && (
        <div className="mt-4">
          <h4 className="text-gray-200 mb-2">Choose a background:</h4>
          <ImageSelector images={images} onSelect={handleImageSelect} />
        </div>
      )}
    </div>
  );
};

export default CardsPage;
