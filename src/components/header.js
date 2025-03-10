import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <header className="flex flex-col md:flex-row justify-between items-center px-6 md:px-20 lg:px-40 py-5 bg-white shadow-md">
      <div className="flex items-center">
        <Image src="/images/logo.svg" alt="Easybank Logo" width={150} height={40} />
      </div>

      <nav className="flex space-x-6 mt-4 md:mt-0">
        {["Home", "About", "Contact", "Blog", "Careers"].map((item) => (
          <div key={item} className="relative group">
            <a 
              href="#" 
              className="text-[hsl(233,8%,62%)] text-sm md:text-base group-hover:text-gray-900 transition duration-300"
            >
              {item}
            </a>
            <span className="absolute left-0 bottom-[-29px] w-full h-1 bg-[hsl(136,65%,51%)] scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </div>
        ))}
      </nav>

      <button className="mt-4 md:mt-0 px-6 py-2 rounded-full text-white bg-gradient-to-r from-[hsl(136,65%,51%)] to-[hsl(192,70%,51%)] hover:opacity-80 transition-opacity duration-300">
        Request Invite
      </button>
    </header>
  );
};

export default Header;
