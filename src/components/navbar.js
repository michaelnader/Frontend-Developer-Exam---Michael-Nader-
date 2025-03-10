import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md p-5 fixed w-full top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <img src="/images/logo.svg" alt="Easybank Logo" className="h-6" />

        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          {isOpen ? (
            <img src="/images/icon-close.svg" alt="Close Menu" className="h-6" />
          ) : (
            <img src="/images/icon-hamburger.svg" alt="Menu" className="h-6" />
          )}
        </button>

        <ul className="hidden md:flex space-x-6">
          <li><a href="#" className="hover:text-gray-600">Home</a></li>
          <li><a href="#" className="hover:text-gray-600">About</a></li>
          <li><a href="#" className="hover:text-gray-600">Contact</a></li>
          <li><a href="#" className="hover:text-gray-600">Blog</a></li>
          <li><a href="#" className="hover:text-gray-600">Careers</a></li>
        </ul>
      </div>

      {isOpen && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-white shadow-lg rounded-lg py-5 text-center md:hidden">
          <ul className="space-y-4">
            <li><a href="#" className="block hover:text-gray-600">Home</a></li>
            <li><a href="#" className="block hover:text-gray-600">About</a></li>
            <li><a href="#" className="block hover:text-gray-600">Contact</a></li>
            <li><a href="#" className="block hover:text-gray-600">Blog</a></li>
            <li><a href="#" className="block hover:text-gray-600">Careers</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
