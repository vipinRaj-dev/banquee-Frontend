import React from "react";
import OrganizingList from "../UIelements/OrganizingList";
import { items } from "../TextData/OrganizingData";

const SavingAccounts = () => {
  return (
    <>
      <div className="flex mt-40 font-sans font-medium">
        <div className=" w-[600px]">
          <p className=" text-xl">Saving Accounts</p>
          <h1 className="text-[64px] leading-[70.4px] my-4 ">
            Organize your <br />
            money the right way
          </h1>

          <p className=" text-xl leading-[36px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="w-[600px] flex justify-end items-end">
          <div className="flex items-center gap-2 text-lg text-[#5BB5A2]">
            <h1>All Features</h1>
            <img src="/rightArrow.png" alt="rightarrow" />
          </div>
        </div>
      </div>
      <div className="flex mt-16">
        {items.map((item) => (
          <OrganizingList
            key={item.item}
            item={item.item}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </>
  );
};

export default SavingAccounts;
