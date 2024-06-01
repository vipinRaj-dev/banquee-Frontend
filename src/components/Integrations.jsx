import React from "react";

const Integrations = () => {
  return (
    <div className="mt-[160px]">
      <div>
        <div className="flex gap-4">
          <img src="/logo.svg" alt="" />
          <img src="/logo-1.svg" alt="" />
          <img src="/logo-2.svg" alt="" />
          <img src="/logo-3.svg" alt="" />
        </div>
        <div className="flex gap-4 mt-4">
          <img src="/logo-4.svg" alt="" />
          <img src="/logo-5.svg" alt="" />
          <img src="/logo-6.svg" alt="" />
          <img src="/logo-7.svg" alt="" />
          <img src="/logo-8.svg" alt="" />
          <img src="/logo-9.svg" alt="" />
        </div>
      </div>

      <div className="w-[1046.65px] h-[252px] flex mt-16">
        <div className="w-[538.65px] font-sans">
          <p className="text-[20px] font-medium leading-[24px]">Tools</p>
          <h1 className="text-[64px] font-medium leading-[70.4px] mt-2 mb-4">
            Seemless <br />
            integration
          </h1>
          <p className="text-lg leading-[32.32px] font-serif">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </p>
        </div>
        <div className="flex-grow flex justify-end items-end ">
          <div>
            <ul className="space-y-2">
              {[
                "Secure and encrypted integration",
                "Fully API interface",
                "Payments worldwide",
              ].map((item, index) => (
                <li key={index} className="flex items-center font-medium gap-4">
                  <img src="/listTick.png" alt={item} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Integrations;
