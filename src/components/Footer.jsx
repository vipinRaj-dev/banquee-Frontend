import React from "react";

const Footer = () => {
  return (
    <div className="mt-24 mb-12">
      <div className="w-[1400px] mx-auto">
        <div className="flex gap-10">
          <h1 className="w-[460px] text-[32px] leading-[32px] text-custom-green">
            banquee.
          </h1>
          <div className="flex w-full justify-between">
            <div className="flex flex-col">
              <h2 className="text-[18px] leading-[25.2px] font-medium mb-8">
                Company
              </h2>
              <ul className="space-y-3 opacity-50">
                <li>Features</li>
                <li>Blog</li>
                <li>Download</li>
              </ul>
            </div>
            <div className="flex flex-col">
              <h2 className="text-[18px] leading-[25.2px] font-medium mb-10">
                Services
              </h2>
              <ul className="space-y-3 opacity-50">
                <li>Notifications</li>
                <li>Testimonials</li>
                <li>Integrations</li>
              </ul>
            </div>
            <div className="flex flex-col">
              <h2 className="text-[18px] leading-[25.2px] font-medium mb-10">
                Resources
              </h2>
              <ul className="space-y-3 opacity-50">
                <li>Saving Accounts</li>
                <li>Help</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div className="flex flex-col">
              <h2 className="text-[18px] leading-[25.2px] font-medium mb-10">
                Contact
              </h2>
              <ul className="space-y-3 opacity-50">
                <li>Email Us</li>
                <li>Support</li>
                <li>FAQs</li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="mb-4 mt-20" />
        <div className="flex justify-between text-[14px] leading-[22.4px] font-medium opacity-50">
          <p>
            © Made by <span className="text-custom-green">Pawel Gola</span> - Powered by <span className="text-custom-green">Webflow</span>
          </p>
          <p > Impressum Datenschutz</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
