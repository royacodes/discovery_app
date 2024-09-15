import React, { useState, FC } from 'react';

const DiscoveryPage: FC =() => {

  const [searchTerm, setSearchTerm] = useState('');
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    // You can handle the search functionality here
  };
  const cards = [
    { id: 1, title: 'Card 1', description: 'This is the first card.' },
    { id: 2, title: 'Card 2', description: 'This is the second card.' },
    { id: 3, title: 'Card 3', description: 'This is the third card.' },
    { id: 4, title: 'Card 4', description: 'This is the fourth card.' },
    { id: 5, title: 'Card 5', description: 'This is the fifth card.' },
    { id: 6, title: 'Card 6', description: 'This is the sixth card.' },
  ];
  return (
    <>
        <div className="h-screen flex flex-col">
        <div className="p-0">
      {/* Search Bar */}
      <div className="w-full mb-6">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search..."
          className="w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Main content area */}
      <h1 className="text-center text-3xl font-bold mb-6">Discovery Page</h1>
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
    </div>
    </>
  )
}

export default DiscoveryPage
