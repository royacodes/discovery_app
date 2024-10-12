import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { RiCoinFill } from "react-icons/ri";

function TaskCard({ imgSrc, description, point }) {
  return (
    <>
      <div className="flex flex-col mx-4 my-1 p-2 bg-gray-700 rounded-2xl text-white">
        <div className="flex items-center justify-between">
          <div className="flex">
            <div className="flex items-center border-none rounded-full p-[2px]">
              {" "}
              <img
                src={imgSrc}
                className="w-12 h-12 rounded-full object-cover"
              />
            </div>
            <div className="flex flex-col items-start">
              <p>{description}</p>
              <div className="flex items-center">
                <RiCoinFill className="text-lg text-bold-gold bg-transparent" />
                <p>+</p>
                <p>{point}</p>
              </div>
            </div>
          </div>

          <div>
            {" "}
            <IoIosArrowForward className="text-3xl text-gray-500 bg-transparent" />
          </div>
        </div>
      </div>
    </>
  );
}

export default TaskCard;
