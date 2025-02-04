import { Icon } from "@iconify/react";
import user from "../../assets/logo/user.png";
export const FooterSection = () => {
  return (
    <>
      <div className="">
        <div className="w-full h-68 bg-blue-500 flex justify-around items-center">
          <div className="flex gap-10 w-1/2 justify-center">
            <img src={user} alt="user logo" className="w-20  rounded-full " />
            <p className="text-white text-4xl ">
              Let's work together
              <br />
              for your better Future
            </p>
          </div>
          <div className="w-1/2 flex justif-center">
            <div className="flex items-center border-b-2 border-blue-900 ml-32">
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
              <button className="bg-blue-900 hover:bg-blue-700 text-white py-1 px-4 ">
                GET STARTED →
              </button>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="w-full h-68 bg-blue-900 flex justify-around items-center">
          <div className="flex gap-5 w-1/2 justify-center ml-4">
            <img src={user} alt="user logo" className="w-20  rounded-full " />
            <div className="">
              <div className="flex gap-3 text-white text-sm mt-4">
                <p>0345-35345-34534</p>
                <p>Legal-link@closingmedia.com</p>
                <p>ktm, Nepal</p>
              </div>
              <p>Copyright O Media, LLC 2020</p>
            </div>
          </div>
          <div className="w-1/2 flex justify-center gap-10 ">
            <Icon
              icon="ic:baseline-facebook"
              style={{ color: "#e0d1d1", height: "32px", width: "32px" }}
            />
            <Icon
              icon="fa-brands:instagram"
              style={{ color: "#e0d1d1", height: "32px", width: "32px" }}
            />
            <Icon
              icon="mdi:twitter"
              style={{ color: "#e0d1d1", height: "32px", width: "32px" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};
