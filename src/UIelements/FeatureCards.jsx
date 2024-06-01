import React from "react";

const FeatureCards = ({ icon, title, description }) => {
  return (
    <div className="w-[284px] h-[264px] rounded-2xl border-2 border-[#E8E8E8]">
      {icon && (
        <div className="m-8">
          <img src={icon} alt="icon" className="w-12 h-12 mb-4 " />

          <div className="w-[220px] h-12 ">
            {title.split(" ").map((word, index) => {
              return (
                <p
                  key={index}
                  className="text-xl leading-[24px] font-medium font-sans"
                >
                  {word}
                </p>
              );
            })}
          </div>
          <p className="font-medium font-serif text-sm leading-[25.6px] mt-2">
            {description}
          </p>
        </div>
      )}
    </div>
  );
};

export default FeatureCards;
