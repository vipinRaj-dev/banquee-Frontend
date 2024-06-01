import React from "react";
import FeatureCards from "../UIelements/FeatureCards";
import { featureData } from "../TextData/FeatureData";

const FeaturesPage = () => {
  return (
    <div className="my-[126px]">
      <div className="flex justify-between">
        <div className="w-1/2">
          <h1 className="font-sans text-[80px] font-medium leading-tight ">
            One app.
            <br /> One banking.
          </h1>
          <div className="flex flex-wrap mt-16 gap-8">
            {featureData.map((feature, index) => {
              return (
                <FeatureCards
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              );
            })}
          </div>
        </div>
        <div className="w-1/2">
          <img className="mx-auto" src="app.svg" alt="icon" />
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;
