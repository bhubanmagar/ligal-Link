import { Icon } from "@iconify/react/dist/iconify.js";
import logo from "../../../../assets/logo/logo-white.png";
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {/* Navbar */}
      <header className=" flex justify-between items-center  px-6 md:px-8 bg-transparent shadow-md ">
        <div className="text-2xl font-bold md:pl-16 py-2">
          <a href="/">
            <img
              src={logo}
              alt="legal link logo"
              className=" max-h-10 max-w-32 "
            />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <Icon
              icon="gridicons:cross"
              style={{ color: "#e0d1d1", height: "32px", width: "32px" }}
            />
          ) : (
            <Icon
              icon="material-symbols:menu-rounded"
              style={{ color: "#e0d1d1", height: "32px", width: "32px" }}
            />
          )}
        </button>

        {/* Actions for larger screens */}
        {/* Navigation for larger screens */}
        <nav className=" hidden md:flex items-center gap-8 text-sm py-6">
          <a
            href="#home"
            className="relative  text-white after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-[-26px] after:w-10 after:h-1 after:bg-white after:opacity-0  after:transition-all after:duration-300 hover:after:opacity-100"
          >
            HOME
          </a>
          <a
            href="#about"
            className="relative  text-white after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-[-26px] after:w-12 after:h-1 after:bg-white after:opacity-0  after:transition-all after:duration-300 hover:after:opacity-100"
          >
            ABOUT
          </a>
          <a
            href="#playbook"
            className="relative text-white after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-[-26px] after:w-16 after:h-1 after:bg-white after:opacity-0  after:transition-all after:duration-300 hover:after:opacity-100"
          >
            SERVICES
          </a>
          <a
            href="#blog"
            className="relative  text-white after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-[-26px] after:w-10 after:h-1 after:bg-white after:opacity-0  after:transition-all after:duration-300 hover:after:opacity-100"
          >
            BLOG
          </a>
          <a
            href="#contact"
            className="relative  text-white after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-[-26px] after:w-16 after:h-1 after:bg-white after:opacity-0  after:transition-all after:duration-300 hover:after:opacity-100 "
          >
            CONTACT
          </a>
        </nav>
        <div className="hidden md:flex items-center gap-4 mr-16 ">
          <button className="bg-blue-200 hover:bg-blue-900 hover:text-white text-blue-950 py-2 px-4 text-sm ">
            WORK WITH US
          </button>
        </div>

        {/* Mobile Navigation - Toggle Menu */}
        {isOpen && (
          <div className="absolute top-9 right-1 w-60 bg-gray-300 shadow-lg md:hidden flex flex-col items-center gap-4 py-4">
            <a href="#about" className="hover:text-white ">
              ABOUT
            </a>
            <a href="#playbook" className="hover:text-white">
              SERVICES
            </a>
            <a href="#contact" className="hover:text-white">
              CONTACT
            </a>
            {/* <button className="bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded-full text-sm">
              WORK WITH US
            </button> */}
          </div>
        )}
      </header>
    </>
  );
};
