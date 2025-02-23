import { Icon } from "@iconify/react";
import pattern from "../../../assets/img/pattern.png";
import unity from "../../../assets/logo/unity.png";
export const HeroSection = () => {
  return (
    <>
      <div className="flex flex-col w-full h-auto items-start mt-10 ">
        <h1 className="text-sm md:text-4xl lg:text-5xl  leading-snug md:ml-24 ml-10">
          We Uphold
          <br />
          <span className="font-bold "> Justice & Legal Excellence</span> <br />
          Through Strategic <br />
          Representation.
        </h1>
        {/* content section */}
        <div className="flex flex-col items-center justify-center md:flex-row md:gap-10 mt-8 md:ml-6 w-full">
          <div className="flex items-center justify-center md:border-b-2 border-blue-500 w-full md:w1/2 md:w-auto md:ml-19">
            <Icon
              icon="fontisto:email"
              style={{ color: "#c4c2c2" }}
              className=""
            />
            <input
              type="email"
              placeholder="yourmail.com"
              className=" text-white py-1 px-2 rounded-full w-30 md:w-64 outline-none text-sm"
            />
            <button className=" text-sm md:text-md bg-blue-500 hover:bg-blue-800 text-white  py-1 md:py-2 px-2 md:px-4  ">
              WORK WITH US →
            </button>
          </div>
          <div className="flex-grow flex justify-end md:w-1/2 w-full items-center mt-1">
            <img
              src={pattern}
              alt="cubic image pattern"
              className="w-[50vw] object-fit h-[15vh] md:w-full md:h-full sm:ml-24 md:ml-20"
            />
          </div>
        </div>
        {/* footer section */}
        <div className="w-full md:bg-white">
          <footer className="text-center md:flex-row flex flex-col items-center w-full md:ml-9 ml-4 ">
            <div className="md:w-1/2 md:h-16 h-10 bg-transparent text-white md:bg-white md:text-black flex items-center  justify-between mt-1">
              <p className="text-sm md:text-lg md:px-16 px-1 pr-8 ">
                We Focus on Performance
              </p>
              <Icon
                icon="solar:round-arrow-down-linear"
                style={{ color: "blue", height: "36px", width: "36px" }}
                className="md:mr-20 rounded-full hover:bg-red-500 cursor-pointer bg-blue-400"
              />
            </div>

            <div className="flex justify-center items-center gap-7 bg-blue-900 md:w-1/2 ">
              <img src={unity} alt="Betterment" className="md:w-20 w-10 " />
              <img src={unity} alt="Betterment" className="md:w-20 w-10 " />
              <img src={unity} alt="Betterment" className="md:w-20 w-10 " />
              <img src={unity} alt="Betterment" className="md:w-20 w-10 " />
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};
