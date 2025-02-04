import unity from "../../assets/logo/unity.png";
import user from "../../assets/logo/user.png";
export const ClientSection = () => {
  return (
    <>
      <div className="relative h-screen w-full bg-white flex  items-center justify-end">
        {/* left floating div */}
        <div className="absolute bg-white w-1/2 h-full -top-40 left-0 ">
          <div className="h-24 w-full text-center text-gray-600 mt-24 text-4xl">
            <h1>
              Our Happy <span className="underline ">Clients</span>
            </h1>
          </div>
          <div className="bg-gray-200 w-full mt-8 p-8 text-black">
            <p className="pt-9">
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
            <div className="flex gap-5">
              <img src={user} alt="" className="rounded-full w-12 h-12 mt-16" />
              <div className="">
                <p className="text-black mt-16">Mark julius</p>
                <p className="text-blue-700 text-sm">kathmandu,Nepal</p>
              </div>
            </div>
          </div>
        </div>
        {/* right div  */}
        <div className="w-1/2 grid grid-cols-3 gap-8 mt-6">
          <div className="shadow flex items-center justify-center h-32">
            <img src={unity} alt="unity" className="w-20 " />
          </div>
          <div className="shadow flex items-center justify-center h-32">
            <img src={unity} alt="unity" className="w-20 " />
          </div>
          <div className="shadow flex items-center justify-center h-32">
            <img src={unity} alt="unity" className="w-20 " />
          </div>
          <div className="shadow flex items-center justify-center h-32">
            <img src={unity} alt="unity" className="w-20 " />
          </div>
          <div className="shadow flex items-center justify-center h-32">
            <img src={unity} alt="unity" className="w-20 " />
          </div>
          <div className="shadow flex items-center justify-center h-32">
            <img src={unity} alt="unity" className="w-20 " />
          </div>
          <div className="shadow flex items-center justify-center h-32">
            <img src={unity} alt="unity" className="w-20 " />
          </div>
          <div className="shadow flex items-center justify-center h-32">
            <img src={unity} alt="unity" className="w-20 " />
          </div>
          <div className="shadow flex items-center justify-center h-32">
            <img src={unity} alt="unity" className="w-20 " />
          </div>
        </div>
      </div>
    </>
  );
};
