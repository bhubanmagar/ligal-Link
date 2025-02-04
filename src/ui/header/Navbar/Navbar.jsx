const Navbar = () => {
  return (
    <>
      {/* Navbar */}
      <header className="flex justify-between items-center py-4 px-8">
        <div className="text-2xl font-bold">Legal Link</div>
        <div className="flex items-center gap-10">
          <nav className="flex gap-8 text-sm">
            <a href="#about" className="hover:text-gray-300">
              ABOUT
            </a>
            <a href="#playbook" className="hover:text-gray-300">
              SERVICES
            </a>
            <a href="#contact" className="hover:text-gray-300">
              CONTACT
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <a
              href="mailto:team@closingmedia.com"
              className="hover:text-gray-300 text-sm"
            >
              Legal-link@closingmedia.com
            </a>
            <button className="bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded-full text-sm">
              WORK WITH US
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
