import React from "react";
import { testimonialsData } from "../TextData/TestmonialData";

function TestimonialsList({ testimonials }) {
  return (
    <div className="flex gap-6">
      {testimonials.map((column, i) => (
        <div key={i} className="flex-col space-y-6">
          {column.map((testimonial, j) => (
            <div
              key={j}
              className="w-[378.67px] p-8 border-2 border-[#E8E8E8] rounded-[10px]"
            >
              <img src={testimonial.image} alt="" />
              <h1 className="text-[28px] leading-[33.6px] mt-2 mb-4 font-medium">
                {testimonial.title}
              </h1>
              <p className="font-serif text-[16px] leading-[25.6px] font-medium">
                {testimonial.content}
              </p>
              <p className="text-[18px] font-medium leading-[25.2px] mt-6">
                {testimonial.author}
              </p>
              <p className="text-[#1A191E] opacity-50">{testimonial.role}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

const Testimonials = () => {
  return (
    <div className="mt-40 ">
      <div className="flex mb-16">
        <div className="w-[829px]">
          <p className="text-xl">Testimonials</p>
          <h1 className="text-[64px] leading-[70.4px] mt-4">
            People all over the <br />
            world use banko.
          </h1>
        </div>
        <div className=" flex-grow flex justify-end items-end font-serif text-[18px] leading-[32.4px] ">
          <div className="flex gap-4 items-center">
            <img className="w-10 h-10" src="/star.png" alt="" />
            <p>
              Rated <span className="text-custom-green">4.8/5</span> from over
              1000 users
            </p>
          </div>
        </div>
      </div>

      <TestimonialsList testimonials={testimonialsData} />
    </div>
  );
};

export default Testimonials;
