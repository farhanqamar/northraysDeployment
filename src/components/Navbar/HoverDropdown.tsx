import React, { useState } from 'react';
import { BsArrowUpRight } from "react-icons/bs";
import Image from 'next/image';
import Link from 'next/link';
import dropDownImg from "../../../public/images/Services.jpg"
// import eyeimge from "../../public/images/Services.jpg";

interface imgBoxHeadingProps {
  imgBoxHeading: string,
  route?: string | undefined,
}

const NavbarDropdown = ({ imgBoxHeading, route }: imgBoxHeadingProps) => {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <div className="relative inline-block text-left">
      <Link href={`${route}`}>
        <button
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          className="inline-flex justify-center w-full px-2 lg:px-4 py-2 text-lg text-white hover:text-[#FA8500]"
        >
          {imgBoxHeading}
        </button>
      </Link>


      {isOpen && (
        <div
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          className="fixed right-0 bottum- w-full mt-2 origin-top-right bg-white border border-gray-200 shadow-lg z-20"
        >

          {/* imgBoxHeading, image, imgBoxPara */}

          <div className="flex justify-center gap-10">
            <div className='border p-8 space-y-5 w-1/4 bg-neutral-200'>
              <h4 className='font-bold text-xl'>{imgBoxHeading}</h4>
              <div><Image src={dropDownImg} className='h-48 w-full' alt="Image" /></div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit doloremque tenetur nobis praesentium, quis a harum.</p>

              <div className='text-orange-500'>
                <div className='flex gap-2'>
                  <p>LEARN MORE</p>
                  <span className='relative top-1 transition-transform duration-300 ease-in-out group-hover:rotate-45'>
                    <BsArrowUpRight />
                  </span>
                </div>
              </div>
            </div>

            <div className='p-8 space-y-8'>
              <div>
                <h3 className="font-bold text-gray-700 hover:text-orange-500 relative group">
                  Digital
                </h3>
                <ul className="mt-2 space-y-2">
                  <li className="hover:text-orange-500 cursor-pointer relative group">
                    Digital Consulting & Strategy
                  </li>
                  <li className="hover:text-orange-500 cursor-pointer relative group">
                    Digital Commerce
                  </li>
                  <li className="hover:text-orange-500 cursor-pointer relative group">
                    Business Applications
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-gray-700 hover:text-orange-500">Digital</h3>
                <ul className="mt-2 space-y-2">
                  <li className="hover:text-orange-500 cursor-pointer">Digital Consulting & Strategy</li>
                  <li className="hover:text-orange-500 cursor-pointer">Digital Commerce</li>
                  <li className="hover:text-orange-500 cursor-pointer">Business Applications</li>
                </ul>
              </div>
            </div>

            <div className='p-8'>
              <h3 className="font-bold text-gray-700 hover:text-orange-500">Data & AI</h3>
              <ul className="mt-2 space-y-2">
                <li className="hover:text-orange-500 cursor-pointer">Data Modernization</li>
                <li className="hover:text-orange-500 cursor-pointer">Advanced Analytics</li>
                <li className="hover:text-orange-500 cursor-pointer">Generative AI</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavbarDropdown;
