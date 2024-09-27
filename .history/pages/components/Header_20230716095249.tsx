import React from "react";
import { BsArrowDownSquare, BsSearch } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";
type Props = {};

function Header({}: Props) {
  return (
    <div className="fixed top-0 z-50 bg-black w-full">
      <div className="flex justify-between items-center py-1 ">
        <div className="flex ml-4 lg:hidden">
          <AiOutlineMenu size={20} className="mt-2" />
          <h3 className="text-2xl text-green-500 font-bold ml-2 ">IQIYI</h3>
        </div>
        <div className="flex justify-center items-center">
          <button className="absolute border-l border-gray-500 ml-56">
            <BsSearch />
          </button>
          <input className="block rounded rounded-md bg-neutral-700 w-72 h-7" placeholder="search here.."></input>
        </div>
        <button className="flex flex-row mr-7 mt-1 rounded rounded-md w-16 h-7 bg-green-500 text-gray-100 justify-evenly items-center">
          <div className="ml-1">
            <BsArrowDownSquare size={14} />
          </div>
          <p className="text-md">APP</p>
        </button>
      </div>
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
