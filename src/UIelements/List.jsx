import React from "react";

const List = ({
  title,
  subtitle,
  amount,
  icon = "/appleimg.png",
  bgColor,
  width,
}) => {
  console.log("bgColor  width", bgColor, width);
  // rounded-[10px] h-[83px] py-4 pr-6 pl-4 mb-4
  return (
    <div
      className={` ${bgColor && width ? `rounded-[10px] h-[83px] py-4 pr-6 pl-4 mb-4 w-[499px] bg-[#F8F8F8]` : `rounded-[10px] h-[83px] py-4 pr-6 pl-4 mb-4  w-[400px] bg-[#FFFFFF]`}`}
    >
      <div className="flex justify-between items-center ">
        <div className="flex gap-4">
          <img src={icon} alt="icon" />
          <div className="text-custom-font">
            <h1 className=" font-serif text-lg font-medium">{title}</h1>
            <p className=" font-serif text-base opacity-50">{subtitle}</p>
          </div>
        </div>
        <div>{amount}</div>
      </div>
    </div>
  );
};

export default List;
