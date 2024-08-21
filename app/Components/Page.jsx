"use client";
import React, { useState } from "react";
import Image from "next/image";

const Hero = () => {
  const [isClick, setIsClick] = useState(false);

  const toggleNavbar = () => {
    setIsClick(!isClick);
  };

  return (
    <div className="relative bg-[#041402]">
      <div className="absolute top-0 right-0 z-0">
        <Image src="/maskgroup.png" width={500} height={500} alt="Mask Group" />
      </div>
      <>
        <nav className="relative z-10 bg-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center lg:mt-20 mt-5">
                <div className="flex-shrink-0">
                  <a href="/" className="text-white">
                    <Image src="/logo.png" width={80} height={80} alt="Logo" />
                  </a>
                </div>
              </div>
                <div className="hidden md:flex justify-between items-center w-full mt-16 ml-52">
                    <div className="flex justify-center flex-grow">
                        <div className="ml-4 flex items-center space-x-10">
                        <a href="/" className="text-white hover:bg-white hover:text-black rounded-lg p-2">
                            Home
                        </a>
                        <a href="/" className="text-white hover:bg-white hover:text-black rounded-lg p-2">
                            About
                        </a>
                        <a href="/" className="text-white hover:bg-white hover:text-black rounded-lg p-2">
                            Services
                        </a>
                        <a href="/" className="text-white hover:bg-white hover:text-black rounded-lg p-2">
                            Contact
                        </a>
                        </div>
                    </div>
                    <div className="lg:-mr-20">
                        <button className="bg-[#167E27] p-2 text-[#ffffff] rounded-lg">
                        Download Now
                        </button>
                    </div>
                </div>
              <div className="md:hidden flex items-center">
                <button
                  className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  onClick={toggleNavbar}
                >
                  {isClick ? (
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  ) : (
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          {isClick && (
            <div className="md:hidden z-10 mt-10">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a href="/" className="text-white block hover:bg-white hover:text-black rounded-lg p-2">
                  Home
                </a>
                <a href="/" className="text-white block hover:bg-white hover:text-black rounded-lg p-2">
                  About
                </a>
                <a href="/" className="text-white block hover:bg-white hover:text-black rounded-lg p-2">
                  Services
                </a>
                <a href="/" className="text-white block hover:bg-white hover:text-black rounded-lg p-2">
                  Contact
                </a>
              </div>
            </div>
          )}
        </nav>
      </>

      <div className="lg:px-52 lg:mt-28 mt-10 p-3">
        <div className="flex lg:flex-row flex-col items-center justify-between">
            <div>
                <h1 className='lg:text-[56px] text-[35px] font-semibold text-[#ffffff] z-10'>Your Path to <br /> Financial Success</h1>
                <Image src='/vector.png' width={130} height={130} className="lg:ml-[380px] md:block hidden -mt-5"/>
                <h2 className="text-[#EDEBEB] text-[16px] mt-5">Take charge of your money, track expenses effortlessly, and <br /> reach your financial goals. Start budgeting smarter today.</h2>

                <div className="flex items-center gap-5 mt-5">
                    <button className="bg-[#167E27] p-2 text-[#ffffff] rounded-lg">
                    Download Now
                    </button>
                    <button className="text-[#ffffff] flex items-center gap-3">
                    <Image src="/play.png" width={25} height={25}/>
                    Watch Demo
                    </button>
                </div>

                <div className="mt-5">
                    <h1 className="text-[#ffffff] text-[16px]">Trusted by leading companies</h1>
                    <div className="mt-5">
                        <Image src='/logos.png' width={500} height={500}/>
                    </div>
                </div>
            </div>
            <div className="lg:-mt-20 z-20">
                <Image src="/heroimage.png" width={600} height={600} alt="Hero Image"/>
            </div>
        </div>
      </div>

      <div>
        <h1 className="bg-[#D3FFDB] p-3"></h1>
      </div>
    </div>
  );
};

export default Hero;
