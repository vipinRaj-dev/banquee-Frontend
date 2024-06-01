import React from "react";
import Button from "../UIelements/Button";

const Accounts = () => {
  return (
    <div className="w-[800px] mx-auto  h-[958px]">
      <div className="text-center font-sans">
        <p className="text-[20px] leading-[24px] font-medium">Account</p>
        <h1 className="text-[80px] leading-[88px] font-medium mt-2 mb-4">
          Perfect card <br />
          for your needs.
        </h1>
        <p className="text-[20px] leading-[36px] font-medium font-serif">
          Senectus et netus et malesuada fames ac turpis. <br />
          Sagittis vitae et leo duis ut diam.
        </p>
      </div>

      <div className="mt-14 relative flex flex-col items-center mb-[552px]">
        <div className="absolute top-0">
          <img src="/card.png" alt="" />
        </div>
        <div className="absolute top-[100px]">
          <img src="/card (1).png" alt="" />
        </div>
        <div className="absolute top-[200px]">
          <img src="/card2.png" alt="" />
        </div>
      </div>

      <div className="px- flex justify-center gap-4">
        <Button name="Open Account" variant="large" />
        <Button name="Compare Cards" variant="outline" />
      </div>
    </div>
  );
};

export default Accounts;
