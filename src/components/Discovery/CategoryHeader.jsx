import { IoIosArrowForward } from "react-icons/io";

const CategoryHeader = ({ title, handleMore }) => {
  return (
    <>
      <button
        onClick={handleMore}
        className="w-full flex justify-between bg-white shadow-slate-300 shadow-sm items-center rounded-3xl mb-4 mt-4 text-gray-700 p-2"
      >
        {title}
        <IoIosArrowForward />
      </button>
    </>
  );
};

export default CategoryHeader;
