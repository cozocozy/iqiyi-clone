import React from "react";
import { BsArrowDownSquare, BsSearch } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";
import { BiTimeFive } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { CiGlobe } from "react-icons/ci";
import { PiCrownSimpleFill } from "react-icons/pi";

type Props = {};

function Header({}: Props) {
  return (
    <div className="fixed top-0 z-50 bg-black w-full lg:bg-transparent">
      <div className="flex justify-between items-center py-1 lg:p-3 lg:ml-3 ">
        {/* left part */}
        <div className="flex ml-4 mx-3">
          <AiOutlineMenu size={20} className="mt-2  lg:hidden" />
          <h3 className="text-2xl text-green-500 font-bold ml-2 lg:text-4xl lg:ml-4">IQIYI</h3>{" "}
          <button class="text-gray-400 hidden lg:ml-6 lg:flex z-20 lg:bg-transparent hover:text-green-500 font-medium text-lg text-center items-center" type="button">
            Browse
            <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
            </svg>
          </button>
        </div>

        {/* search  part */}
        <div className="relative flex justify-end items-center w-full mx-auto mt-1 lg:max-w-xs lg:mr-4 lg:mt-2">
          <input className="border-none rounded rounded-md bg-neutral-700 w-full pl-3 pb-1 focus:outline-none lg:h-10" placeholder="search here.." autoComplete="off"></input>
          <button className="absolute h-full mr-4 border-l border-gray-400 pl-3">
            <BsSearch size={18} />
          </button>
        </div>

        {/* desktop version */}
        <div className="lg:flex lg:mt-2 lg:mr-4">
          <div className="navbar lg:hover:border-green-500 lg:hover:text-green-500 cursor-pointer ">
            <BiTimeFive size={25} />
            <h1>History</h1>
          </div>
          <div className="navbar lg:hover:border-green-500 lg:hover:text-green-500 cursor-pointer  ">
            <CiGlobe size={25} />
            <h1>Language</h1>
          </div>
          <div className="navbar lg:hover:border-green-500 lg:hover:text-green-500 cursor-pointer  ">
            <AiOutlineUser size={25} />
            <h1>Me</h1>
          </div>

          {/* right part */}
          <button className="flex flex-row mr-8 mt-1 lg:mt-0 lg:ml-7 rounded rounded-md h-7 justify-center mx-3 bg-green-500 text-gray-100 items-center appBtn lg:bg-transparent lg:mx-2 lg:h-9 lg:hover:border-green-500 lg:hover:text-green-500 ">
            <div className="mx-2 mr-1">
              <BsArrowDownSquare size={14} />
            </div>
            <p className="text-sm mr-2">APP</p>
          </button>
          <button className="navbar lg:rounded lg:rounded-md lg:bg-orange-300  lg:w-20 lg:h-9 lg:text-black lg:flex lg:flex-row lg:justify-center lg:items-center lg:ml-3 lg:mr-10">
            <PiCrownSimpleFill size={25} />
            <h1 className="lg:text-md">VIP</h1>
          </button>
        </div>
      </div>

      {/* bottom part */}

      <div className="flex flex-row  p-3 overflow-x-auto container-snap whitespace-nowrap space-x-4 ml-3 text-gray-300 md:justify-center md:items-center lg:flex-col lg:text-center " id="dropdownHover">
        <Link href="#" className="text-white pages lg:ml-5 lg:hover:text-green-500">
          For You
        </Link>
        <Link href="#" className=" pages lg:hover:text-green-500 ">
          Destined
        </Link>
        <Link href="#" className=" pages lg:hover:text-green-500 ">
          Drama
        </Link>
        <Link href="#" className=" pages lg:hover:text-green-500 ">
          K-Drama
        </Link>
        <Link href="#" className=" pages lg:hover:text-green-500 ">
          Movies
        </Link>
        <Link href="#" className=" pages lg:hover:text-green-500 lg:hidden">
          Anime
        </Link>
        <Link href="#" className=" pages browse lg:hover:text-green-500 lg:hidden">
          Variety Show
        </Link>
      </div>
    </div>
  );
}

export default Header;
