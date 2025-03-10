import Image from "next/image";
import Header from '../components/header.js';
import Navbar from '../components/navbar.js';
import LatestArticles from "@/components/articles.js";
import Footer from "@/components/footer.js";

export default function Home() {
  return (
    <>
      <div className="hidden md:block">
        <Header />
      </div>
      <div className="block md:hidden">
        <Navbar />
      </div>

      <section className="relative flex flex-col md:flex-row items-center justify-between px-5 md:px-30 bg-white overflow-hidden font-['Public_Sans']">
        <div className="text-center md:text-left md:w-115 py-8 ml-9">        
          <h1 className="text-4xl md:text-6xl font-light text-[hsl(233,26%,24%)] leading-tight">
            Next Generation <br /> Digital Banking
          </h1>
          <p className="text-lg text-[hsl(233,8%,62%)] mt-5">
            Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing and much more.
          </p>
          <button className="mt-8 px-6 py-3 rounded-full text-white bg-gradient-to-r from-[hsl(136,65%,51%)] to-[hsl(192,70%,51%)] hover:opacity-80 transition-opacity duration-300">
            Request Invite
          </button>
        </div>

        <div className="relative w-full md:w-1/2 flex justify-center md:justify-end mt-10 md:mt-0 h-[600px] overflow-visible">  
          <div className="absolute w-[150%] h-[200%] scale-150 top-[-150px] right-[-200px] w-full h-full">
            <Image
              src="/images/bg-intro-desktop.svg"
              alt="Background Shape"
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>

          <div className="absolute top-[-220px] right-[-500px] w-[90%] md:w-[120%] lg:w-[140%] z-10 overflow-visible">  
            <Image
              src="/images/image-mockups.png"
              alt="Mockup Image"
              layout="intrinsic"
              width={700}
              height={850}
            />
          </div>
        </div>
      </section>

      <section className="text-left md:px-38 bg-gray-100 py-16 font-['Public_Sans']">
        <h2 className="text-3xl md:text-4xl font-light text-[hsl(233,26%,24%)]">
          Why choose Easybank?
        </h2>
        <p className="text-lg text-[hsl(233,8%,62%)] mt-5 max-w-3xl"> 
          We leverage Open Banking to turn your bank account into your financial hub. 
          Control your finances like never before.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12 md:px-0">  
          <div className="text-left">
            <img src="/images/icon-online.svg" alt="Online Banking" className="mb-4" />
            <h3 className="text-xl font-semibold text-[hsl(233,26%,24%)]">Online Banking</h3>
            <p className="text-[hsl(233,8%,62%)] mt-2">
              Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.
            </p>
          </div>

          <div className="text-left">
            <img src="/images/icon-budgeting.svg" alt="Simple Budgeting" className="mb-4" />
            <h3 className="text-xl font-semibold text-[hsl(233,26%,24%)]">Simple Budgeting</h3>
            <p className="text-[hsl(233,8%,62%)] mt-2">
              See exactly where your money goes each month. Receive notifications when you're close to hitting your limits.
            </p>
          </div>

          <div className="text-left">
            <img src="/images/icon-onboarding.svg" alt="Fast Onboarding" className="mb-4" />
            <h3 className="text-xl font-semibold text-[hsl(233,26%,24%)]">Fast Onboarding</h3>
            <p className="text-[hsl(233,8%,62%)] mt-2">
              We don’t do branches. Open your account in minutes online and start taking control of your finances right away.
            </p>
          </div>

          <div className="text-left">
            <img src="/images/icon-api.svg" alt="Open API" className="mb-4" />
            <h3 className="text-xl font-semibold text-[hsl(233,26%,24%)]">Open API</h3>
            <p className="text-[hsl(233,8%,62%)] mt-2">
              Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.
            </p>
          </div>
        </div>
      </section>

      <LatestArticles />
      <Footer />
    </>
  );
}
