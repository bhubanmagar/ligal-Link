import square from "../../assets/square-pattern.png";

export const CapmaignSection = () => {
  return (
    <>
      <div className="relative bg-[#2F2D9B] text-white md:py-10 md:px-6 md:h-screen h-auto py-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">
            Campaigns That <span className="underline">Convert</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-3">
            <div className="flex flex-col items-center md:items-start md:pl-20">
              <div className="bg-blue-500 p-6 rounded-lg ">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-200 to-blue-900 rounded-md"></div>
              </div>
              <div className="text-left  md:w-40 p-3">
                <h3 className="text-lg font-semibold mt-4 ">Strategy</h3>
                <p className="text-sm mt-2 text-blue-200 ">
                  Lorem ipsum dolor sit amet, etur ing elit, sed do eiusmod
                  tempor.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center md:items-start md:pl-20">
              <div className="bg-blue-500 p-6 rounded-lg">
                <div className="w-16 h-16 bg-blue-300 rounded-full"></div>
              </div>
              <div className="text-left md:w-40 p-3">
                <h3 className="text-lg font-semibold mt-4">
                  Campaign Building
                </h3>
                <p className="text-sm mt-2 text-blue-200">
                  Lorem ipsum dolor sit amet, etur ing elit, sed do eiusmod
                  tempor.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center md:items-start md:pl-16 ">
              <div className="bg-blue-500 p-6 rounded-lg">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-200 to-blue-700 rounded-md"></div>
              </div>
              <div className="text-left md:w-40 p-3 ">
                <h3 className="text-lg font-semibold mt-4 ">Targeted Ads</h3>
                <p className="text-sm mt-2  text-blue-200 ">
                  Lorem ipsum dolor sit amet, etur ing elit, sed do eiusmod
                  tempor.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center md:items-start md:pl-16 ">
              <div className="bg-blue-500 p-6 rounded-lg">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-300 to-blue-600 rounded-md"></div>
              </div>
              <div className="text-left md:w-40 p-3">
                <h3 className="text-lg font-semibold mt-4">
                  Sponsored Content
                </h3>
                <p className="text-sm mt-2 text-blue-200 ">
                  Lorem ipsum dolor sit amet, etur ing elit, sed do eiusmod
                  tempor.
                </p>
              </div>
            </div>
          </div>
          <div className=" md:absolute w-1/2 right-0 top-110">
            <div className="relative"></div>
            <button className="mb-3 md:mt-20 px-6 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition">
              More About Us ➔
            </button>
            <img
              src={square}
              alt="square pattern"
              className="hidden md:block md:absolute w-20 h-20 top-21 left-0"
            />
          </div>
        </div>
      </div>
    </>
  );
};
