import { TbDeviceIpadHorizontalSearch } from "react-icons/tb";
import { IoSearchSharp } from "react-icons/io5";

const SearchBar = ({ searchTerm, handleSearch }) => {
  return (
    <div className="relative w-full mb-6 shadow-md rounded-3xl bg-black bg-opacity-15 shadow-silver-color">
      <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
        <TbDeviceIpadHorizontalSearch className="text-white" />
      </span>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Discover Cards!"
        className="w-full p-2 pl-10 border border-gray-300 bg-black bg-opacity-15 placeholder-gray-300 rounded-3xl shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        style={{ textAlignLast: searchTerm ? "left" : "left" }}
      />
      <button className="absolute inset-y-0 right-0 px-4 text-white bg-black bg-opacity-15 rounded-r-3xl shadow-md focus:ring-2 focus:ring-blue-500">
        <IoSearchSharp className="text-white" />
      </button>
    </div>
  );
};

export default SearchBar;
