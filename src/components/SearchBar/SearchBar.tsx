import { FC } from 'react';
import { TbDeviceIpadHorizontalSearch } from "react-icons/tb";
import { SearchBarProps } from './SearchBar.types';
import { IoSearchSharp } from "react-icons/io5";

const SearchBar: FC<SearchBarProps> = ({ searchTerm, handleSearch }) => {
  return (
    <div className="relative w-full mb-6">
            <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
        <TbDeviceIpadHorizontalSearch className="text-white" />
        </span>
    <input
      type="text"
      value={searchTerm}
      onChange={handleSearch}
      placeholder="Discover Cards!"
      className="w-full p-2 pl-10 border border-gray-300 placeholder-gray-300 rounded-3xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      style={{ textAlignLast: searchTerm ? 'left' : 'left' }} 
      />
      <button className="absolute inset-y-0 right-0 px-4 text-white bg-gray-300 rounded-r-3xl rounded-l-none focus:ring-2 focus:ring-blue-500">
      <IoSearchSharp className="text-gray-700" />
        </button>
  </div>
  );
};

export default SearchBar;