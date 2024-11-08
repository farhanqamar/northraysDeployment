import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div className="relative w-full h-[100vh] ">
        <Image
          src="/bggalaxy.webp"
          alt="bg"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
        <div className="absolute top-0 left-0 bg-black opacity-65 z-10"></div>

        <div className="h-screen absolute top-0 w-full z-20">
          <div></div>
          <div>
            <div className="flex items-center px-3 sm:pl-10 lg:pl-48 h-[92.5vh]">
              <div className="md:w-[800px] text-white text-justify">
                <h1 className="font-light ">
                  Empowering Businesses in the Digital Age
                </h1>
                <div className="md:leading-10 py-10 font-light">
                  <p className="px-2">
                    A dynamic technology solutions and marketing firm dedicated
                    to helping businesses thrive in the digital age.
                  </p>
                  <button className="bg-white text-black hover:bg-[#FA8500] hover:text-white transition-colors duration-300 ease-in-out text-[18px] font-semibold  rounded-[40px] px-6 py-2 my-10">
                    Get In Touch
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
