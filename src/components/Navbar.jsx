import React from "react";
import Button from "../UIelements/Button";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-around font-serif font-normal p-6">
        <div>
          <h1 className="font-sans font-bold text-4xl text-custom-green">
            banquee.
          </h1>
        </div>
        <div>
          <ul className="flex gap-4">
            <li className="px-2 py-3 text-lg font-medium">Features</li>
            <li className="bg-[#F8F8F8] px-2 py-3 rounded-md text-lg font-medium flex items-center gap-1">
              Compare <ChevronDown size={16} strokeWidth={4} />
            </li>
            <li className="px-2 py-3 text-lg font-medium">Support</li>
            <li className="px-2 py-3 text-lg font-medium flex items-center gap-1">
              Blog <ChevronDown size={16} strokeWidth={4} />
            </li>
          </ul>
        </div>
        <div className="flex gap-8">
          <Button name="Login" variant="secondary" />
          <Button name="Open Account" variant="primary" />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
