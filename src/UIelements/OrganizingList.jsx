import React from "react";

const OrganizingList = ({ item, price, image }) => {
  return (
    <div className="w-[214px] h-[280px] mr-9 ">
      <div className="w-[214px] h-[214px] rounded-2xl">
        <img src={image} alt="" />
      </div>
      <div className="mt-4 ">
        <h1 className="font-sans font-medium text-xl leading-[24px]">{item}</h1>
        <p className="font-serif font-medium text-sm leading-[22.4px] text-[#1A191E] opacity-50">{price}</p>
      </div>
    </div>
  );
};

export default OrganizingList;
