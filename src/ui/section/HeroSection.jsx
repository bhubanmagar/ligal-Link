import { Icon } from "@iconify/react";
import pattern from "../../assets/pattern.png";
import unity from "../../assets/logo/unity.png";
export const HeroSection = () => {
  return (
    <>
      <div className="flex flex-col w-full h-auto items-start mt-10 ">
        <h1 className="text-sm md:text-4xl lg:text-5xl font-bold leading-snug md:ml-24 ml-10">
          We Create
          <br /> High Performing <br />
          LinkedIn Advertising <br />
          Campaigns.
        </h1>
        {/* content section */}
        <div className="flex flex-col items-center justify-center md:flex-row md:gap-10 mt-8 md:ml-10 w-full">
          <div className="flex items-center justify-center md:border-b-2 border-blue-500 w-full md:w-auto">
            <Icon
              icon="fontisto:email"
              style={{ color: "#c4c2c2" }}
              className="md:ml-7 "
            />
            <input
              type="email"
              placeholder="yourmail.com"
              className=" text-white py-1 px-2 rounded-full w-30 md:w-64 outline-none"
            />
            <button className=" text-sm  md:text-md bg-blue-500 hover:bg-blue-800 text-white py-1 px-2 md:px-4   ">
              WORK WITH US →
            </button>
          </div>
          <div className="flex justify-center md:w-1/2 items-center mt-1">
            <img
              src={pattern}
              alt="cubic image pattern"
              className=" max-h-62 w-full "
            />
          </div>
        </div>
        {/* footer section */}
        <div className="w-full md:bg-white">
          <footer className="text-center md:flex-row flex flex-col items-center w-full md:ml-24 ml-4 ">
            <div className="md:w-1/2 md:h-16 h-10 bg-white text-black flex items-center justify-between mt-1">
              <p className="text-sm md:text-md md:ml-24 px-1 ">
                We Focus on Performance
              </p>
              <Icon
                icon="solar:round-arrow-down-linear"
                style={{ color: "#e0d1d1", height: "36px", width: "36px" }}
                className="md:mr-10 bg-blue-500 rounded-full"
              />
            </div>

            <div className="flex justify-center items-center gap-8 md:pl-20 bg-blue-900 md:w-1/2">
              <img src={unity} alt="Betterment" className="md:w-20 w-10 " />
              <img src={unity} alt="Betterment" className="md:w-20 w-10 " />
              <img src={unity} alt="Betterment" className="md:w-20 w-10 " />
              <img src={unity} alt="Betterment" className="md:w-20 w-10 " />
            </div>
          </footer>{" "}
        </div>
      </div>
    </>
  );
};
