import { Icon } from "@iconify/react";
import user from "../../assets/logo/user.png";

export const FooterSection = () => {
  return (
    <div className="w-full">
      {/* Top Section */}
      <div className="bg-blue-500 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10 p-4 md:p-8">
        {/* Left: Logo & Text */}
        <div className="flex items-center gap-4 md:gap-8 text-center md:text-left md:pl-20">
          <img
            src={user}
            alt="user logo"
            className="w-14 md:w-20 rounded-full"
          />
          <p className="text-white text-base md:text-3xl leading-tight">
            Let&apos;s work together <br />
            for your better future
          </p>
        </div>

        {/* Right: Email Input Section */}
        <div className="w-full md:w-1/2 flex flex-col md:flex-row items-center gap-4 md:gap-0">
          <div className="flex items-center border-b-2 border-blue-900 w-full md:w-auto">
            <Icon
              icon="fontisto:email"
              style={{ color: "white", height: "20px", width: "20px" }}
              className="text-gray-400 w-6 h-6 md:w-8 md:h-8"
            />
            <input
              type="email"
              placeholder="yourmail.com"
              className="bg-transparent text-white py-2 px-3 outline-none w-full md:w-64"
            />
            <button className="bg-blue-900 hover:bg-blue-700 text-white py-2 px-4 text-sm md:text-base w-full md:w-auto ">
              GET STARTED →
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-blue-900 flex flex-col md:flex-row items-center justify-between p-6 md:p-8">
        {/* Left: Contact Info */}
        <div className="flex flex-col md:flex-row items-center gap-4 text-white text-sm text-center md:text-left md:pl-20">
          <img
            src={user}
            alt="user logo"
            className="w-14 md:w-20 rounded-full"
          />
          <div>
            <p>0345-35345-34534 | Legal-link@closingmedia.com | KTM, Nepal</p>
            <p className="mt-2">© O Media, LLC 2020</p>
          </div>
        </div>

        {/* Right: Social Media Icons */}
        <div className="flex gap-6 mt-4 md:mt-0">
          <Icon
            icon="ic:baseline-facebook"
            className="text-gray-300 w-8 h-8  rounded-full hover:text-amber-600"
          />
          <Icon
            icon="fa-brands:instagram"
            className="text-gray-300 w-8 h-8   rounded-full hover:text-amber-600"
          />
          <Icon
            icon="mdi:twitter"
            className="text-gray-300 w-8 h-8   rounded-full hover:text-amber-600"
          />
        </div>
      </div>
    </div>
  );
};
