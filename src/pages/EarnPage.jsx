import React from "react";
import friends from "../assets/friends.webp";
import frens from "../assets/frens.webp";
import instagram from "../assets/instagram.webp";
import telegram from "../assets/telegram.webp";
import youtube from "../assets/youtube.png";

import TaskCard from "../components/Earn/TaskCard";

function EarnPage() {
  return (
    <>
      <div className="h-screen flex flex-col">
        {/* Main content area */}
        <div className="flex-grow p-4">
          <h1 className="text-center text-3xl font-bold mb-7">Earn</h1>
          <TaskCard
            imgSrc={youtube}
            description="Subscribe us on Youtube"
            point="1"
          />
          <TaskCard
            imgSrc={instagram}
            description="Follow us on Instagram"
            point="1"
          />
          <TaskCard
            imgSrc={telegram}
            description="Follow us on Telegram"
            point="1"
          />
          <div className="flex items-center">
            <div className="flex items-center border-none rounded-full p-[2px]">
              {" "}
              <img
                src={frens}
                className="w-12 h-12 rounded-full object-cover"
              />
            </div>
            <h4>Friends</h4>
          </div>
          <TaskCard imgSrc={friends} description="Invite Friends" point="1" />
        </div>
      </div>
    </>
  );
}

export default EarnPage;
