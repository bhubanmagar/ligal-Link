import sectionImg from "../../assets/client-pattern-image.png";

const BlogSection = () => {
  return (
    <>
      <div className="relative  h-screen w-full bg-gray-200 flex flex-col sm:flex-row justify-center items-center gap-4 p-4 sm:p-0">
        <div className="absolute right-0 top-88 z-0">
          <img
            src={sectionImg}
            alt="cubic image pattern"
            className="h-[252px] w-32 pt-1"
          />
        </div>
        {/* Card 1 */}
        <div className=" w-full sm:w-82 p-4 overflow-hidden flex flex-col justify-start">
          <h2 className="uppercase text-blue-700 m-3 text-sm">The Playbook</h2>
          <h2 className="uppercase text-gray-500 text-xl font-bold mt-10">
            Read Our Blog fro <br />
            Latest Advice and News <br />
            In the Industry
          </h2>
          <p className="text-gray-500 mt-3text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            repellendus dignissimos nobis? Provident, non iure! Aliquid
          </p>
          <div>
            <button className="rounded mt-9 bg-blue-300 px-7 py-1  text-white hover:text-blue-600 transition-colors">
              View Playbook
            </button>
          </div>
        </div>
        {/* Card 2 */}
        <div className=" w-full sm:w-82 bg-blue-900 p-4 overflow-hidden flex flex-col justify-start">
          <h2 className="uppercase text-blue-700 m-3 text-sm">
            getting started
          </h2>
          <h2 className="uppercase text-gray-500 m-3 text-2xl font-bold mt-10">
            Linkedin ad
            <br />
            Capmaigns 101. <br />
            how to get
            <br /> started with <br />
            linkedlin ads
          </h2>
          <div>
            <button className="rounded mt-10 ml-2 text-gray-500 hover:text-blue-600 transition-colors">
              10 august 2023
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-full sm:w-82 bg-[#4CB4E4] p-4 overflow-hidden flex flex-col justify-start relative z-10 mr-2">
          <h2 className="uppercase text-blue-800 m-3 text-sm">Case study</h2>
          <h2 className="uppercase text-gray-300 m-3 text-2xl font-bold mt-10">
            How Linkedin a
            <br />
            Capmaigns from <br />
            Closing Media <br /> Helped Us <br />
            Suceed
          </h2>
          <div>
            <button className="rounded mt-10 ml-2 text-gray-300 hover:text-blue-600 transition-colors">
              10 august 2023
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogSection;
