import sectionImg from "../../../assets/img/client-pattern-image.png";

export const BlogSection = () => {
  return (
    <>
      <div className="relative  min-h-screen w-full bg-gray-200 flex flex-col sm:flex-row justify-center items-center gap-4 p-2">
        <div className="hidden md:block md:absolute right-0 top-88 z-0">
          <img
            src={sectionImg}
            alt="cubic image pattern"
            className="md:h-[260px] md:w-32 pt-1"
          />
        </div>
        {/* Card 1 */}
        <div className=" w-full sm:w-82 md:pl-0 p-4 overflow-hidden flex flex-col justify-start">
          <h2 className="uppercase text-blue-700 m-3 text-sm">The Playbook</h2>
          <h2 className="uppercase text-gray-500 text-md font-bold mt-10 md:text-xl  ">
            Read Our Blog fro <br />
            Latest Advice and News <br />
            In the Industry
          </h2>
          <p className="text-black mt-3 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            repellendus dignissimos nobis? Provident, non iure! Aliquid
          </p>
          <div>
            <button className="rounded mt-9 bg-blue-600 px-7 py-1  text-white hover:text-black transition-colors">
              View Playbook
            </button>
          </div>
        </div>
        {/* Card 2 */}
        <div className=" w-full sm:w-82 bg-blue-900 p-4 overflow-hidden flex flex-col justify-start">
          <h2 className="uppercase text-white m-3 text-sm">getting started</h2>
          <h2 className="uppercase text-white m-3 sm:text-xl text-md font-bold mt-10 md:pt-4">
            Linkedin ad
            <br />
            Capmaigns 101. <br />
            how to get
            <br /> started with <br />
            linkedlin ads
          </h2>
          <div>
            <button className="rounded mt-10 ml-2 text-white hover:text-blue-600 transition-colors">
              10 august 2023
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-full sm:w-82 bg-[#4CB4E4] p-4 overflow-hidden flex flex-col justify-start relative z-10 mr-2">
          <h2 className="uppercase text-blue-900 m-3 text-sm">Case study</h2>
          <h2 className="uppercase text-gray-100 m-3 sm:text-xl text-md font-bold mt-10 md:pt-7">
            How Linkedin a
            <br />
            Capmaigns from <br />
            Closing Media <br /> Helped Us <br />
            Suceed
          </h2>
          <div>
            <button className="rounded mt-10 ml-2 text-gray-100 hover:text-blue-600 transition-colors">
              10 august 2023
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
