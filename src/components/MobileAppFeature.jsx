import React from "react";
import List from "../UIelements/List";
import { companyProductAmount } from "../TextData/CompanyProductAmount";

const MobileAppFeature = () => {
  return (
    <div className="bg-custom-light-green h-[636px] overflow-hidden">
      <div className="container flex justify-between ">
        <div className="mt-32">
          <h1 className="font-sans font-medium text-[64px] leading-[70.4px]">
            Send & receive <br />
            money instantly
          </h1>

          <p className="font-serif text-xl leading-[36px] mt-4 mb-8 font-medium tracking-tight">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            <br /> sed do eiusmod tempor incididunt ut labore et.
          </p>
          <div>
            <ul className="list-none">
              {["Malesuada Ipsum", "Vestibulum", "Parturient Lorem"].map(
                (item, index) => (
                  <li key={index} className="flex items-center gap-4 mb-2">
                    <img
                      className="w-6 h-6"
                      src="/tickbadge.png"
                      alt="Tick badge"
                    />
                    <span className="text-lg leading-[32.4px] font-medium">
                      {item}
                    </span>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        <div className="mt-[86.28px] mr-[100px]">
          {companyProductAmount.map((item, index) => {
            return (
              <List
                key={index}
                title={item.title}
                subtitle={item.subtitle}
                amount={item.amount}
                bgColor={false}
                width={false}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MobileAppFeature;
