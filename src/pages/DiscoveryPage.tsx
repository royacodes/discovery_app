import React, { useState, FC } from 'react';
import SearchBar from '../components/SearchBar/SearchBar';
import CategoryHeader from '../components/Discovery/CategoryHeader';
import CardItem from '../components/Discovery/CardItem';

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
    { id: 5, title: 'Card 5', description: 'This is the fifth card.', price: 10 },
    { id: 6, title: 'Card 6', description: 'This is the sixth card.', price: 10 },
  ];
  const cats = [
    { id: 1, title: 'Card 1'},
    { id: 2, title: 'Card 2'},
    { id: 3, title: 'Card 3'},
    { id: 4, title: 'Card 4'},
    { id: 5, title: 'Card 5'},
    { id: 6, title: 'Card 6'},
  ];
  return (
    <>
          <div className="h-screen flex flex-col w-full bg-black px-4 py-4"
          //  style={{
          //   backgroundImage: 'linear-gradient(to bottom right, rgb(72, 82, 92), rgb(141, 154, 158))'
          // }}
          >
     

        {/* Image below Search Bar */}
  <div className="flex justify-left my-4">
    <img
      src="src/assets/mag.jpg"
      alt="Featured Image"
      className="w-1/2 object-cover"
    />
    <div className="w-1/2 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-2 h-20">
    {cats.map((cat) => (
      <>
      <div className='bg-white shadow-sm shadow-gray-50 rounded-3xl  m-0 p-0 flex justify-center items-center'>
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
        <CategoryHeader title='Featured' handleMore={() => {}}/>

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
      </div>
    </>
  )
}

export default DiscoveryPage
