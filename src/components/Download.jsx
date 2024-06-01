import { ArrowRight } from "lucide-react";
import React from "react";

const Download = () => {
  return (
    <div>
      <div className="mt-40 h-[610px] bg-[#5BB5A2] rounded-[20px] px-[76px] py-[96px] flex">
        <div className="w-[524px] h-[418px]">
          <h1 className="text-[64px] leading-[70.4px] font-medium text-white mb-4">
            One app.
            <br /> One banking.
          </h1>
          <p className="text-[18px] leading-[32.4px] font-medium font-serif text-white mb-8 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna.
          </p>
          <div className="flex gap-16 text-white">
            <div className="space-y-4">
              <div className="flex gap-4">
                <img src="/darktick.png" alt="" />
                <p className="text-base font-serif leading-[25.6px]">
                  Instant transactions
                </p>
              </div>
              <div className="flex gap-4">
                <img src="/darktick.png" alt="" />
                <p className="text-base font-serif leading-[25.6px]">
                  Instant transactions
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex gap-4">
                <img src="/darktick.png" alt="" />
                <p className="text-base font-serif leading-[25.6px]">
                  Instant transactions
                </p>
              </div>
              <div className="flex gap-4">
                <img src="/darktick.png" alt="" />
                <p className="text-base font-serif leading-[25.6px]">
                  Instant transactions
                </p>
              </div>
            </div>
          </div>
          <div className="flex mt-12 gap-4">
            <img src="/Apple Store.svg" alt="" />
            <img src="/Google Store.svg" alt="" />
          </div>
        </div>

        <div className="">
          <img className="pt-4 pl-[108px]" src="/app-1.svg" alt="" />
        </div>
      </div>

      {/* help secssion */}

      <div className=" mt-40 mb-40 flex h-[500px]">
        <div className="w-1/2">
          <h1 className="text-[64px] leading-[70.4px] font-medium mb-12">
            Need Help?
          </h1>
          <div className="space-y-6">
            <div className="flex gap-6">
              <img src="/phone.png" alt="" />
              <div>
                <p> +49 176 123 456</p>
                <p className="opacity-50">Support Hotline</p>
              </div>
            </div>
            <div className="flex gap-6 pb-7">
              <img src="/mailicon.png" alt="" />
              <div>
                <p> help@banquee.com</p>
                <p className="opacity-50">Support Email</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <h1 className="text-[#5BB5A2]">Support</h1>
              <ArrowRight size={20} color="#5BB5A2" />
            </div>
          </div>
        </div>

        <div className="w-1/2">
          <div className="flex justify-between">
            <h1 className="text-[20px] leading-[24px] font-medium">
              How do I open an Banko account?
            </h1>
            <img src="/plusicon.png" alt="" />
          </div>
          <hr className="my-8 bg-[#E8E8E8]" />
          <div className="flex justify-between">
            <h1 className="text-[20px] leading-[24px] font-medium">
              How do I order a new card?
            </h1>
            <img src="/plusicon.png" alt="" />
          </div>
          <hr className="my-8 bg-[#E8E8E8]" />
          <div className="flex justify-between">
            <h1 className="text-[20px] leading-[24px] font-medium">
              How to change my account limits?
            </h1>
            <img src="/plusicon.png" alt="" />
          </div>
          <hr className="my-8 bg-[#E8E8E8]" />
          <div className="flex justify-between">
            <div>
              <h1 className="mb-3 text-[20px] leading-[24px] font-medium">
                How does Banko premium works?
              </h1>
              <p className="font-serif font-medium opacity-50 leading-[25.6px] text-[16px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui
                accumsan sit amet nulla facilisi morbi. Eget gravida cum sociis
                natoque penatibus et magnis dis parturient.
              </p>
            </div>
            <img className="w-6 h-6" src="/closeicon.png" alt="" />
          </div>
          <hr className="my-8 bg-[#E8E8E8]" />
          <div className="flex justify-between">
            <h1 className="text-[20px] leading-[24px] font-medium">
              Can I have two Banko accounts?
            </h1>
            <img src="/plusicon.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
