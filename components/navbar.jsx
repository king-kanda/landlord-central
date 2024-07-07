import React from 'react'
import Image from 'next/image'
import { Poppins } from "next/font/google";
import { Raleway } from 'next/font/google';
import { FaRegUserCircle } from "react-icons/fa";
import Link from 'next/link';

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],  
});

const raleway = Raleway({ 
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],  
});


const Navbar = () => {
  return (
    <>
      <nav className="bg-transparent absolute top-0 w-full">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
          <a
            href="#"
            className={`flex items-center text-2xl font-bold text-white space-x-3 rtl:space-x-reverse ${poppins.className}`}
          >
            L.Central
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className={`font-medium flex items-center flex-col p-3 md:p-0    md:flex-row md:space-x-2 rtl:space-x-reverse ${raleway.className} text-sm`}>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
             
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white"
                >
                  Refer Us & Earn
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 hover:text-orange-500 text-white hover:bg-orange bg-navy-blue px-8 py-4"
                >
                  Request Demo
                </a>
              </li>
              <li>
                <Link
                  href="/login"
                  className="block py-2 px-3  text-white  px-8 py-4 inline-flex items-center justify-around font-bold"
                >
                  <span className={` mr-2 `}>
                  <FaRegUserCircle />
                  </span>
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
