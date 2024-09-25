import React, { useState, FC } from 'react';
import SearchBar from '../components/SearchBar/SearchBar';
import CategoryHeader from '../components/Discovery/CategoryHeader';
import CardItem from '../components/Discovery/CardItem';
import { FaStar } from "react-icons/fa";
const DiscoveryPage: FC =() => {

  const [searchTerm, setSearchTerm] = useState('');
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    // You can handle the search functionality here
  };
  const cards = [
    { id: 1, title: 'Card 1', description: 'This is the first card.kjfhncdjsazfjchsadfklcfchdkjslh', price: 10 },
    { id: 2, title: 'Card 2', description: 'This is the second card.', price: 10 },
    { id: 3, title: 'Card 3', description: 'This is the third card.', price: 10 },
    { id: 4, title: 'Card 4', description: 'This is the fourth card.', price: 10 },
    
  ];
  const cats = [
    { id: 1, title: 'Category'},
    { id: 2, title: 'Category'},
    { id: 3, title: 'Category'},
    { id: 4, title: 'Category'},
    { id: 5, title: 'Category'},
    { id: 6, title: 'Category'},
  ];
  return (
    <>
          <div className=" flex flex-col w-full bg-black px-4 pt-4 pb-16"
          //  style={{
          //   backgroundImage: 'linear-gradient(to bottom right, rgb(72, 82, 92), rgb(141, 154, 158))'
          // }}
          >
     

        {/* Image below Search Bar */}
        <div className="flex justify-between items-center mb-6">
          <div className='flex justify-start items-center'>
          <img
    src="src/assets/patterns/pat4.jpg"  // Replace with the correct path to your profile image
    alt="Profile Image"
    className="w-8 h-8 rounded-full object-cover border-4 border-white shadow-lg"
  />
  <p className='text-white'>@royaCodes</p>

          </div>
          <div className='flex justify-end items-center bg-black bg-opacity-20 border-purple-600 border rounded-3xl py-2 px-4 shadow-sm shadow-deep-purple'>
            <FaStar className='text-bold-gold text-lg'/>
            <p className='text-white'>12BNZ</p>
          </div>
  
 
</div>
  <div className="flex justify-left my-4">
    <img
      src="src/assets/mag.jpg"
      alt="Featured Image"
      className="w-1/2 object-cover"
    />
    <div className="w-1/2 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-2 h-20">
    {cats.map((cat) => (
      <>
    <div className="bg-[#1c1c1c] text-white text-[16px] rounded-3xl m-1 py-1 px-2 flex justify-center items-center shadow-[8px_8px_16px_#0a0a0a,-8px_-8px_16px_#333333]">
  {cat.title}
</div>
      </>
    ))}
    </div>
  </div>
           {/* Search Bar */}
           <div>
          <SearchBar searchTerm={searchTerm} handleSearch={handleSearch} />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cards.map((card) => (
            <CardItem
              key={card.id}
              id={card.id}
              title={card.title}
              description={card.description}
              price={card.price.toLocaleString()}
              handleClick={() => {}}
            />
          ))}
        </div>
        <CategoryHeader title='Featured' handleMore={() => {}}/>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cards.map((card) => (
            <CardItem
              key={card.id}
              id={card.id}
              title={card.title}
              description={card.description}
              price={card.price.toLocaleString()}
              handleClick={() => {}}
            />
          ))}
        </div>
        <CategoryHeader title='Trending' handleMore={() => {}}/>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cards.map((card) => (
            <CardItem
              key={card.id}
              id={card.id}
              title={card.title}
              description={card.description}
              price={card.price.toLocaleString()}
              handleClick={() => {}}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default DiscoveryPage
