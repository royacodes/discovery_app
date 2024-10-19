import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { LiaConnectdevelop } from "react-icons/lia";
import { SiGamemaker } from "react-icons/si";

const WalletDashboard = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center py-10"
      style={{
        background: "linear-gradient(to top, #212230 75%, #1A1B22 20%)",
      }}
    >
      {/* Balance Section */}
      <div className="relative flex justify-center items-center">
        {/* Balance Section (Top Circle) */}
        <div className="relative z-10 w-72 h-72 bg-gradient-to-r from-deep-purple via-primary-color to-deep-blue rounded-full flex items-center justify-center text-center">
          <div className="bg-[#1A1B22] w-60 h-60 rounded-full flex flex-col justify-center items-center">
            <p className="text-white text-xl">Available Balance</p>
            <p className="text-[#9CA3AF] text-xl font-poppinsMedium">
              $5,643.50
            </p>
          </div>
        </div>
        <div className="absolute z-0 w-80 h-80 rounded-b-full flex items-center justify-center text-center bg-[#1A1B22]"></div>
        {/* Black Circle (Underneath the Balance Section) */}
      </div>

      {/* Transaction Section */}
      <div className="mt-10 w-full max-w-md">
        <div className="space-y-4">
          <div className="bg-[#1A1B22] p-4 mx-4 rounded-3xl border border-[#2A2C38] shadow-sm shadow-[#2A2C38] flex justify-between items-center">
            <div className="flex items-center justify-center space-x-4">
              <LiaConnectdevelop className="text-3xl text-ton-blue bg-transparent" />

              <div>
                <p className="text-white font-poppinsMedium text-lg">
                  Connect Your Wallet
                </p>
              </div>
            </div>
            <div>
              {" "}
              <IoIosArrowForward className="text-3xl text-[#9CA3AF] bg-transparent" />
            </div>
          </div>
          <div className="bg-[#1A1B22] p-4 mx-4 rounded-3xl border border-[#2A2C38] shadow-sm shadow-[#2A2C38] flex justify-between items-center">
            <div className="flex items-center justify-center space-x-4">
              <SiGamemaker className="text-3xl text-ton-blue bg-transparent" />

              <div>
                <p className="text-white font-poppinsMedium text-lg">
                  Create Your Wallet
                </p>
              </div>
            </div>
            <div>
              {" "}
              <IoIosArrowForward className="text-3xl text-[#9CA3AF] bg-transparent" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletDashboard;
