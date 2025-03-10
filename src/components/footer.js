const Footer = () => {
    return (
      <footer className="bg-[hsl(233,26%,24%)] text-white py-10 px-5 md:px-20 font-['Public_Sans']">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start">
          
          <div className="mb-6 md:mb-0">
            <img src="/images/logo.svg" alt="Easybank Logo" className="" />
            <div className="flex space-x-4 py-15">
              <img src="/images/icon-facebook.svg" alt="Facebook" className="h-6 cursor-pointer" />
              <img src="/images/icon-youtube.svg" alt="YouTube" className="h-6 cursor-pointer" />
              <img src="/images/icon-twitter.svg" alt="Twitter" className="h-6 cursor-pointer" />
              <img src="/images/icon-pinterest.svg" alt="Pinterest" className="h-6 cursor-pointer" />
              <img src="/images/icon-instagram.svg" alt="Instagram" className="h-6 cursor-pointer" />
            </div>
          </div>
  
          <div className="px-10 grid grid-cols-2 gap-x-10 gap-y-4">
            <a href="#" className="hover:text-gray-400 transition">About Us</a>
            <a href="#" className="hover:text-gray-400 transition">Contact</a>
            <a href="#" className="hover:text-gray-400 transition">Blog</a>
            <a href="#" className="hover:text-gray-400 transition">Careers</a>
            <a href="#" className="hover:text-gray-400 transition">Support</a>
            <a href="#" className="hover:text-gray-400 transition">Privacy Policy</a>
          </div>
  
          <div className="mt-6 md:mt-0 text-center md:text-right">
            <button className="w-40 h-10 rounded-full text-white bg-gradient-to-r from-[hsl(136,65%,51%)] to-[hsl(192,70%,51%)] hover:opacity-80 duration-300 font-semibold transition">
              Request Invite
            </button>
            <p className="text-gray-400 mt-4">© Easybank. All Rights Reserved</p>
          </div>
          
        </div>
      </footer>
    );
};
  
export default Footer;
