import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {/* Navbar */}
      <header className="flex justify-between items-center py-4 px-6 md:px-8 bg-transparent shadow-md">
        <div className="text-2xl font-bold">Legal Link</div>

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

        {/* Navigation for larger screens */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#about" className="hover:text-gray-600">
            ABOUT
          </a>
          <a href="#playbook" className="hover:text-gray-600">
            SERVICES
          </a>
          <a href="#contact" className="hover:text-gray-600">
            CONTACT
          </a>
        </nav>

        {/* Actions for larger screens */}
        <div className="hidden md:flex items-center gap-4">
          <a href="#" className="hover:text-gray-600 text-sm">
            Legal-link@closingmedia.com
          </a>
          <button className="bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded-full text-sm">
            WORK WITH US
          </button>
        </div>

        {/* Mobile Navigation - Toggle Menu */}
        {isOpen && (
          <div className="absolute top-16 right-1 w-60 bg-gray-600 shadow-lg md:hidden flex flex-col items-center gap-4 py-4">
            <a href="#about" className="hover:text-gray-600">
              ABOUT
            </a>
            <a href="#playbook" className="hover:text-gray-600">
              SERVICES
            </a>
            <a href="#contact" className="hover:text-gray-600">
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

export default Navbar;
