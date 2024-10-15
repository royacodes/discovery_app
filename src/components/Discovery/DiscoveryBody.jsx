import React, { useState } from "react";
import CardItem from "./CardItem";
import SearchBar from "../SearchBar/SearchBar";
import "./DiscoveryBody.css";
const categories = [
  "All",
  "Electronics",
  "Clothing",
  "Books",
  "Furniture",
  "Toys",
];

const DiscoveryBody = ({ handleHideList }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cards, setCards] = useState([
    {
      id: 1,
      title: "Laptop",
      description: "A high-end laptop",
      price: "1000",
      category: "Electronics",
    },
    {
      id: 2,
      title: "Shirt",
      description: "A stylish shirt",
      price: "20",
      category: "Clothing",
    },
    {
      id: 3,
      title: "Book",
      description: "A best-selling book",
      price: "15",
      category: "Books",
    },
    {
      id: 4,
      title: "Table",
      description: "A wooden table",
      price: "150",
      category: "Furniture",
    },
    {
      id: 5,
      title: "Toy Car",
      description: "A fun toy car",
      price: "10",
      category: "Toys",
    },
    // More card items...
  ]);

  // Handle category selection
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  // Filter cards based on selected category
  const filteredCards =
    selectedCategory === "All"
      ? cards
      : cards.filter((card) => card.category === selectedCategory);
  return (
    <>
      <SearchBar handleHideList={handleHideList} />
      <div className="w-full flex justify-center mt-4">
        <div className="flex space-x-2 overflow-x-auto hide-scrollbar py-2">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => handleCategorySelect(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium ${
                selectedCategory === category
                  ? "bg-gray-100 text-gray-700"
                  : "bg-gray-900 text-white bg-opacity-20 shadow-sm shadow-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:mt-4 sm:pt-4 pt-4 justify-center">
        {filteredCards.map((card) => (
          <CardItem
            key={card.id}
            id={card.id}
            title={card.title}
            description={card.description}
            price={card.price}
            handleClick={() => {}}
          />
        ))}
      </div>
    </>
  );
};

export default DiscoveryBody;
