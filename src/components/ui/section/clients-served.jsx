import branch from "../../../assets/logo/branch.png";
import user from "../../../assets/logo/user.png";
export const ClientSection = () => {
  return (
    <>
      <div className="relative min-h-screen w-full bg-white flex flex-col  md:flex-row items-center justify-end">
        {/* left floating div */}
        <div className="order-first md:absolute bg-white md:w-[50%] w-full  md:-top-40 md:left-0 ">
          <div className="md:h-16 h-10 w-full text-center text-gray-600 md:mt-10 mt-9 text-3xl md:text-4xl">
            <h1>
              Our Happy{" "}
              <span className="underline text-blue-900 ">Clients</span>
            </h1>
          </div>
          <div className="bg-gray-200 w-full mt-8 md:p-8  text-black">
            <p className="pt-2 text-sm md:text-base md:pl-20 md:pt-16 md:pb-10  md:pr-1 p-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis est facilis earum ipsum voluptatum fuga inventore
              sapiente, labore quis dicta unde iure modi animi ipsam similique
              sit rerum soluta ab. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Numquam, ullam? Deleniti, maxime consequuntur ut
              distinctio, aliquid ratione itaque minus ab similique cum dolore
              neque velit. Laudantium incidunt numquam et quas. Reiciendis est
              facilis earum ipsum voluptatum fuga inventore sapiente, labore
              quis dicta unde iure modi animi ipsam similique sit rerum soluta
              ab. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Numquam, ullam? Deleniti, maxime consequuntur ut distinctio,
              aliquid ratione itaque minus ab similique cum dolore neque velit.
              Laudantium incidunt numquam et quas.
            </p>
            <div className="flex gap-5 pb-3 pl-3 md:mt-5 md:ml-16">
              <img
                src={user}
                alt=""
                className="rounded-full w-10 h-10  md:w-12 md:h-12 "
              />
              <div>
                <p className="text-black">Mark julius</p>
                <p className="text-blue-700 text-sm">kathmandu,Nepal</p>
              </div>
            </div>
          </div>
        </div>
        {/* right div  */}
        <div className="md:w-1/2 w-full grid grid-cols-2 md:grid-cols-3 md:gap-8  gap-2 mt-6 md:pl-3">
          <div className="shadow flex items-center justify-center h-32">
            <img src={branch} alt="branch" className="w-20 " />
          </div>
          <div className="shadow flex items-center justify-center h-32">
            <img src={branch} alt="branch" className="w-20 " />
          </div>
          <div className="shadow flex items-center justify-center h-32">
            <img src={branch} alt="branch" className="w-20 " />
          </div>
          <div className="shadow flex items-center justify-center h-32">
            <img src={branch} alt="branch" className="w-20 " />
          </div>
          <div className="shadow flex items-center justify-center h-32">
            <img src={branch} alt="branch" className="w-20 " />
          </div>
          <div className="shadow flex items-center justify-center h-32">
            <img src={branch} alt="branch" className="w-20 " />
          </div>
          <div className="shadow flex items-center justify-center h-32">
            <img src={branch} alt="branch" className="w-20 " />
          </div>
          <div className="shadow flex items-center justify-center h-32">
            <img src={branch} alt="branch" className="w-20 " />
          </div>
          <div className="shadow flex items-center justify-center h-32">
            <img src={branch} alt="branch" className="w-20 " />
          </div>
        </div>
      </div>
    </>
  );
};
