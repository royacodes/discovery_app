
import { FC } from 'react';
import { CardItemProps } from './CardItem.types';

const CardItem: FC<CardItemProps> = ({id, title, description, price, handleClick }) => {
  return (
   <>
   <div
  key={id}
  className="p-0 bg-white shadow-lg rounded-lg border border-gray-200"
>
  <div className="relative">
    <img
      src="src/assets/patterns/pat1.jpg"
      alt={title}
      className="w-full h-1/2 object-cover rounded-t-lg"
    />
     <h2 className="absolute rounded-md top-1/2 left-0 transform -translate-y-1/2 w-[calc(100%-16px)] mx-2 text-center text-white text-xl font-semibold bg-black bg-opacity-50 px-4 py-2">
      {title}
    </h2>
  </div>
  <div className="p-2">
  <p className="text-gray-600 truncate">{description}</p>
  <p className="text-gray-900 font-bold mt-2">${price}</p>
  </div>
</div>
   
   </>
  );
};

export default CardItem;