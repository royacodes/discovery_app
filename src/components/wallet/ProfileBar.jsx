import React from "react";
import setting from "../../assets/setting.svg";
import notification from "../../assets/notification.svg";
import profile from "../../assets/profile.webp";

const ProfileBar = () => {
  return (
    <div className="flex justify-start items-center p-4 bg-transparent rounded-lg shadow-md w-96">
      {/* Circle Avatar */}
      <div className="flex items-center border rounded-full p-[2px]">
        {" "}
        {/* Adjust padding for border */}
        <img
          src={profile}
          alt="Profile Avatar"
          className="w-12 h-12 rounded-full object-cover"
        />
      </div>
      <div className="flex flex-col justify-start items-start mx-2">
        <span className="text-md font-poppinsMedium text-[#D1D5DB]">
          Welcome Back!
        </span>
        <span className="text-sm text-[#9CA3AF]">RoyaCodes</span>
      </div>

      {/* Circle Buttons */}
      {/* <div className="flex space-x-3">
        <button className="w-12 h-12 rounded-full bg-black bg-opacity-10 shadow-lg shadow-gray-50 hover:bg-gray-300 flex justify-center items-center">
          <img src={notification} className="h-6 w-6" />
        </button>
        <button className="w-12 h-12 rounded-full bg-black bg-opacity-10 shadow-lg shadow-gray-50 hover:bg-gray-300 flex justify-center items-center">
          <img src={setting} className="h-6 w-6" />
        </button>
      </div> */}
    </div>
  );
};

export default ProfileBar;
