import { ArrowRight } from "lucide-react";
import React from "react";
import List from "../UIelements/List"; 
import { transationData } from "../TextData/OrganizingData";

const Notifications = () => {
  return (
    <div className="mt-40 h-[473.84px]  flex font-sans font-medium">
      <div className="w-[539px]">
        <p className="text-xl">Notifications</p>
        <h1 className="text-[64px] leading-[70.4px] mt-2 mb-4">
          Stay notified
        </h1>
        <p className="text-[17.96px] leading-[32.32px]">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
        <ul className="mt-8 space-y-4">
          {["Malesuada Ipsum", "Vestibulum", "Parturient Lorem"].map(
            (item, index) => (
              <li key={index} className="flex items-center gap-4">
                <img
                  className="w-6 h-6"
                  src="/lightTick.png"
                  alt="Tick badge"
                />
                <span className="text-lg leading-[32.4px] font-medium">
                  {item}
                </span>
              </li>
            )
          )}
        </ul>

        <div className="text-custom-green flex gap-2 items-center mt-12">
          <p className="text-[18px]">Compare cards </p>
          <ArrowRight size={24} color=" #5BB5A2" />
        </div>
      </div>

      <div className="flex-grow ml-[162.59px]">
        {transationData.map((item, index) => {
            return (
                <List
                key={index}
                title={item.title}
                subtitle={item.subtitle}
                icon={`/app-icon.png`}
                bgColor={true}
                width={true}
                />
            );
        }
        )}
      </div>
    </div>
  );
};

export default Notifications;
