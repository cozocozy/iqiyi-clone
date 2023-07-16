import React from "react";
import { BsArrowDownSquare, BsSearch } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";
import BiTimeFive from "react-icons/bi";
type Props = {};

function Header({}: Props) {
  return (
    <div className="fixed top-0 z-50 bg-black w-full">
      <div className="flex justify-between items-center py-1 lg:p-4 ">
        {/* left part */}
        <div className="flex ml-4 mx-3">
          <AiOutlineMenu size={20} className="mt-2  lg:hidden" />
          <h3 className="text-2xl text-green-500 font-bold ml-2 lg:text-4xl lg:ml-4">IQIYI</h3>
          <div className="hidden md:flex text-2xl xl:hidden">Browse</div>
        </div>

        {/* middle part */}
        <div className="relative flex justify-end items-center w-full mx-auto mt-1 lg:max-w-sm lg:mr-24  ">
          <input className="border-none rounded rounded-md bg-neutral-700 w-full pl-3 pb-1 focus:outline-none" placeholder="search here.." autoComplete="off"></input>
          <button className="absolute h-full mr-4 border-l pl-3">
            <BsSearch size={18} />
          </button>
        </div>

        {/* desktop version */}
        <div className="flex">
          <div className="navbar">
            <BiTimeFive />
            <h1>History</h1>
          </div>
          <div className="navbar">Language</div>
          <div className="navbar">Me</div>

          {/* right part */}
          <button className="flex flex-row mr-8 mt-1 rounded rounded-md h-7 justify-center mx-3 bg-green-500 text-gray-100 items-center">
            <div className="mx-2 mr-1 lg:">
              <BsArrowDownSquare size={14} />
            </div>
            <p className="text-sm mr-2">APP</p>
          </button>
          <div className="navbar">VIP</div>
        </div>
      </div>

      {/* bottom part */}
      <div className="flex flex-row  p-3 overflow-x-auto container-snap whitespace-nowrap space-x-6 ml-3 text-gray-300">
        <Link href="#" className="text-white pages">
          For You
        </Link>
        <Link href="#" className=" pages">
          Destined
        </Link>
        <Link href="#" className=" pages">
          Drama
        </Link>
        <Link href="#" className=" pages">
          K-Drama
        </Link>
        <Link href="#" className=" pages">
          Movies
        </Link>
        <Link href="#" className=" pages">
          Anime
        </Link>
        <Link href="#" className=" pages">
          Variety Show
        </Link>
      </div>
    </div>
  );
}

export default Header;
