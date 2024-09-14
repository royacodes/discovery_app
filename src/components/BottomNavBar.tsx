import { FC } from 'react';
import { AiOutlineHome, AiOutlineSearch, AiOutlineUser } from 'react-icons/ai'; // React icons for example

const BottomNavBar: FC = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200">
      <div className="max-w-lg mx-auto flex justify-around items-center py-3">
        <div className="flex flex-col items-center bg-white border-none">
          <AiOutlineHome className="text-2xl text-gray-400" />
          <span className="text-sm text-gray-400">Home</span>
        </div>
        <div className="flex flex-col items-center bg-white">
          <AiOutlineSearch className="text-2xl text-gray-400" />
          <span className="text-sm text-gray-400">Discovery</span>
        </div>
        <div className="flex flex-col items-center bg-white">
          <AiOutlineUser className="text-2xl text-gray-400" />
          <span className="text-sm text-gray-400">Profile</span>
        </div>
      </div>
    </nav>
  );
};

export default BottomNavBar;