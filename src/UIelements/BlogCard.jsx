import React from "react";

const BlogCard = ({ title, description, keywords, image }) => {
  return (
    <div className="w-[378px] h-[637px]">
      <img src={image} alt="" />
      <h1 className="text-[28px] leading-[33.6px] font-medium mt-6 mb-2">
        {title}
      </h1>
      <p className="font-serif font-medium text-[16px] leading-[25.6px] mb-6">
        {description}
      </p>
      <div className="flex gap-1">
        {keywords.map((keyword) => {
          return (
            <div className="bg-[#F8F8F8] py-1 px-[10px] rounded text-[13px] font-medium font-serif">
              {keyword}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogCard;
