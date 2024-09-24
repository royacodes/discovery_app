
import { FC } from 'react';
import { CategoryHeaderProps } from './CategoryHeader.types';
import { IoIosArrowForward } from "react-icons/io";

const CategoryHeader: FC<CategoryHeaderProps> = ({ title, handleMore }) => {
  return (
   <>
   <button className='w-full flex justify-between bg-white shadow-slate-300 shadow-sm items-center rounded-3xl mb-4 text-gray-700 p-2'>
    {title}
   <IoIosArrowForward />
   </button>
   
   </>
  );
};

export default CategoryHeader;