import { Icon } from "@iconify/react";
import pattern from "../../assets/pattern.png";
import unity from "../../assets/logo/unity.png";
export const HeroSection = () => {
  return (
    <>
      <div className="flex flex-col w-full h-auto items-start mt-10">
        <h1 className="text-4xl lg:text-5xl font-bold leading-snug ml-20">
          We Create
          <br /> High Performing <br />
          LinkedIn Advertising <br />
          Campaigns.
        </h1>
        <div className="flex items-center gap-10 mt-8 ml-32 w-full ">
          <div className="flex items-center  border-b-2 border-blue-500">
            <Icon
              icon="fontisto:email"
              style={{ color: "#c4c2c2" }}
              className="ml-7 mt-1"
            />
            <input
              type="email"
              placeholder="yourmail.com"
              className="bg-transparent text-white py-1 px-2 rounded-full w-64 outline-none"
            />
            <button className="bg-blue-500 hover:bg-blue-800 text-white py-1 px-4 ">
              WORK WITH US →
            </button>
          </div>
          <div className="flex justify-end w-1/2 items-center mt-1">
            <img src={pattern} alt="cubic image pattern" className=" h-62 " />
          </div>
        </div>
        {/* footer section */}
        <footer className="text-center flex  items-center w-full">
          <div className="w-1/2  h-16 bg-white text-black flex items-center justify-between">
            <p className="text-lg ml-32">We Focus on Performance</p>
            <Icon
              icon="solar:round-arrow-down-linear"
              style={{ color: "#e0d1d1", height: "36px", width: "36px" }}
              className="mr-10 bg-blue-500 rounded-full"
            />
          </div>

          <div className="flex justify-center gap-8 pl-20">
            <img src={unity} alt="Betterment" className="w-20 " />
            <img src={unity} alt="Betterment" className="w-20 " />
            <img src={unity} alt="Betterment" className="w-20 " />
            <img src={unity} alt="Betterment" className="w-20 " />
          </div>
        </footer>{" "}
      </div>
    </>
  );
};
