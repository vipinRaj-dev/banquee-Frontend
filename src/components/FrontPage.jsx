import React from "react";
import Button from "../UIelements/Button";
import { ArrowRight } from "lucide-react";

const FrontPage = () => {
  return (
    <div className="bg-custom-light-green h-[868px] text-custom-font ">
      <div className="pt-32 px-[440px]">
        <h6 className="text-xl text-center font-sans font-medium tracking-tighter">
          Features
        </h6>
        <h1 className="text-[80px] text-center font-sans font-medium ">
          All in one card.
        </h1>
        <p className="text-center text-xl leading-9 font-medium">
          Senectus et netus et malesuada fames ac turpis. <br />
          Sagittis vitae et leo duis ut diam.
        </p>
        <div className="flex justify-center gap-8 mt-8">
          <Button name="Open Account" variant="large" />
          <div className="flex items-center gap-2">
            <Button name="Compare Cards" variant="secondary" />
            <ArrowRight size={16} color="#5BB5A2" strokeWidth={2.7} />
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-[108px]">
        <div className="mt-48">
          <img src="/cardhalf3.png" alt="card-image" />
        </div>
        <div className="mt-24">
          <img src="/cardhalf2.png" alt="card-image" />
        </div>
        <div>
          <img src="/cardhalf.png" alt="card-image" />
        </div>
        <div className="mt-24">
          <img src="/cardhalf2.png" alt="card-image" />
        </div>
        <div className="mt-48">
          <img src="/cardhalf3.png" alt="card-image" />
        </div>
      </div>
    </div>
  );
};

export default FrontPage;
