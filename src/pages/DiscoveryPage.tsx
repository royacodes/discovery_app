import React, { useState, FC } from 'react';
import SearchBar from '../components/SearchBar/SearchBar';
import CategoryHeader from '../components/Discovery/CategoryHeader';

const DiscoveryPage: FC =() => {

  const [searchTerm, setSearchTerm] = useState('');
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    // You can handle the search functionality here
  };
  const cards = [
    { id: 1, title: 'Card 1', description: 'This is the first card.', price: 10 },
    { id: 2, title: 'Card 2', description: 'This is the second card.', price: 10 },
    { id: 3, title: 'Card 3', description: 'This is the third card.', price: 10 },
    { id: 4, title: 'Card 4', description: 'This is the fourth card.', price: 10 },
    { id: 5, title: 'Card 5', description: 'This is the fifth card.', price: 10 },
    { id: 6, title: 'Card 6', description: 'This is the sixth card.', price: 10 },
  ];
  return (
    <>
        <div className="flex flex-col">
           {/* Main content area */}
      {/* <h1 className="text-center text-3xl font-bold mb-6">Discovery Page</h1> */}
      {/* Search Bar */}
      <div>
      <SearchBar searchTerm={searchTerm} handleSearch={handleSearch} />
    </div>
    <CategoryHeader title='Featured' handleMore={() => {}}/>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {cards.map((card) => (
          <div
            key={card.id}
            className="p-4 bg-white shadow-lg rounded-lg border border-gray-200"
          >
            <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
            <p className="text-gray-600">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default DiscoveryPage
