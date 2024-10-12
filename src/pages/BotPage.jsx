import React, { useState } from "react";
import tron from "../assets/tron.png";
import ton from "../assets/ton.webp";
import { BiStats } from "react-icons/bi";

const BotPage = () => {
  return (
    <>
      <div className="h-screen flex flex-col bg-bg-color">
        <div className="flex-grow p-4">
          <h1 className="text-center text-3xl font-bold mb-12">Crypto</h1>

          <div className="flex flex-col mx-4 my-4 p-2 bg-gray-700 rounded-2xl text-white">
            <div className="flex items-center justify-between">
              <div className="flex">
                <div className="flex items-center border-none rounded-full p-[2px]">
                  {" "}
                  <img
                    src={ton}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </div>
                <div className="flex flex-col items-start">
                  <p>TON/USDT</p>
                  <div className="flex items-center">
                    <p>openning:</p>
                    <p>5.3</p>
                  </div>
                </div>
              </div>

              <div>
                {" "}
                <BiStats className="text-3xl text-gray-300 bg-transparent" />
              </div>
            </div>
          </div>

          <div className="flex flex-col mx-4 my-1 p-2 bg-gray-700 rounded-2xl text-white">
            <div className="flex items-center justify-between">
              <div className="flex">
                <div className="flex items-center border-none rounded-full p-[2px]">
                  {" "}
                  <img
                    src={tron}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </div>
                <div className="flex flex-col items-start">
                  <p>TRX/USDT</p>
                  <div className="flex items-center">
                    <p>openning:</p>
                    <p>1.3</p>
                  </div>
                </div>
              </div>

              <div>
                {" "}
                <BiStats className="text-3xl text-gray-300 bg-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BotPage;
