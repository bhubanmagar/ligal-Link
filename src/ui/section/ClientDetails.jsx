import unity from "../../assets/logo/unity.png";
export const ClientDetails = () => {
  return (
    <>
      <div className="bg-white p-8 px-24 ">
        {/* Metric Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-24">
          {/* Section Title */}
          <div className="text-center mb-8 ">
            <h2 className="text-lg font-semibold text-blue-600">
              Small but{" "}
              <span className="text-blue-600 underline font-bold text-3xl">
                Mighty
              </span>
            </h2>
            <p className="text-gray-500">
              Our performance metrics speak for themselves. <br />
              <span className="text-sm">
                (all measured against the platform average)
              </span>
            </p>
          </div>

          {/* Card 1 */}
          <div className="bg-blue-400 text-white p-6 rounded-lg shadow-md text-center ">
            <h3 className="text-4xl font-bold">92%</h3>
            <p className="text-sm mt-2 uppercase tracking-wide">
              Cost Per Lead Decrease
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-blue-600 text-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-4xl font-bold">+102%</h3>
            <p className="text-sm mt-2 uppercase tracking-wide">CTR Increase</p>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-400 text-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-4xl font-bold">+120%</h3>
            <p className="text-sm mt-2 uppercase tracking-wide">Add One More</p>
          </div>

          {/* Card 4 */}
          <div className="bg-blue-900 text-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-4xl font-bold">+220%</h3>
            <p className="text-sm mt-2 uppercase tracking-wide">
              Inmail Open Rate Increase
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-blue-500 text-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-4xl font-bold">+110%</h3>
            <p className="text-sm mt-2 uppercase tracking-wide">
              Engagement Rate Increase
            </p>
          </div>
        </div>
        {/* clents served */}
        <div className="">
          <div className="relative w-full flex mt-24 ">
            <p className="uppercase text-blue-700 ml-20">Client we helped</p>
            <div className="w-3/4 border h-1 bg-gray-300 absolute right-0 top-1/2"></div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6  gap-6 p-10">
            {/* Logo placeholders */}
            <div className="flex items-center justify-center">
              <img src={unity} alt="clent" className="max-h-12" />
            </div>
            <div className="flex items-center justify-center">
              <img src={unity} alt="clent" className="max-h-12" />
            </div>
            <div className="flex items-center justify-center">
              <img src={unity} alt="clent" className="max-h-12" />
            </div>
            <div className="flex items-center justify-center">
              <img src={unity} alt="clent" className="max-h-12" />
            </div>
            <div className="flex items-center justify-center">
              <img src={unity} alt="clent" className="max-h-12" />
            </div>
            <div className="flex items-center justify-center">
              <img src={unity} alt="clent" className="max-h-12" />
            </div>
            <div className="flex items-center justify-center">
              <img src={unity} alt="clent" className="max-h-12" />
            </div>
            <div className="flex items-center justify-center">
              <img src={unity} alt="clent" className="max-h-12" />
            </div>
            <div className="flex items-center justify-center">
              <img src={unity} alt="clent" className="max-h-12" />
            </div>
            <div className="flex items-center justify-center">
              <img src={unity} alt="clent" className="max-h-12" />
            </div>
            <div className="flex items-center justify-center">
              <img src={unity} alt="clent" className="max-h-12" />
            </div>
            <div className="flex items-center justify-center">
              <img src={unity} alt="clent" className="max-h-12" />
            </div>
            <div className="flex items-center justify-center">
              <img src={unity} alt="clent" className="max-h-12" />
            </div>
            <div className="flex items-center justify-center">
              <img src={unity} alt="clent" className="max-h-12" />
            </div>
            <div className="flex items-center justify-center">
              <img src={unity} alt="clent" className="max-h-12" />
            </div>
            <div className="flex items-center justify-center">
              <img src={unity} alt="clent" className="max-h-12" />
            </div>
            <div className="flex items-center justify-center">
              <img src={unity} alt="clent" className="max-h-12" />
            </div>
            <div className="flex items-center justify-center">
              <img src={unity} alt="clent" className="max-h-12" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
