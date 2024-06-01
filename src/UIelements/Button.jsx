import React from "react";

const Button = ({ name, variant }) => {
  const baseStyle = "rounded-md font-sans text-lg";
  const variants = {
    primary: `${baseStyle} px-4 py-1 bg-custom-green text-white `,
    secondary: `${baseStyle} text-custom-green `,
    large: `${baseStyle} bg-custom-green text-white w-[166px] h-[50px]`,
    outline: `${baseStyle} border border-[#E8E8E8] w-[176px] h-[50px] px-4 py-3 text-[18px] font-medium `,
  };

  return <button className={variants[variant]}>{name}</button>;
};
export default Button;
