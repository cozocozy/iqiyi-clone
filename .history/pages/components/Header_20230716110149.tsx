import React from "react";
import { BsArrowDownSquare, BsSearch } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";
type Props = {};

function Header({}: Props) {
  return (
    <div className="fixed top-0 z-50 bg-black w-full">
      <div className="flex justify-between items-center py-1 ">
        {/* left part */}
        <div className="flex ml-4 mx-3 lg:hidden">
          <AiOutlineMenu size={20} className="mt-2" />
          <h3 className="text-2xl text-green-500 font-bold ml-2 ">IQIYI</h3>
        </div>

        {/* middle part */}
        <div className="flex justify-center items-center w-full mx-auto mt-1 ">
          <input className="border-none rounded rounded-md bg-neutral-700 w-full max-w-2xl pl-3 pb-1" placeholder="search here.." autoComplete="off"></input>
          <button className="relative">
            <BsSearch />
          </button>
        </div>

        {/* right part */}
        <button className="flex flex-row mr-8 mt-1 rounded rounded-md h-7 justify-center mx-3 bg-green-500 text-gray-100 items-center">
          <div className="mx-2 mr-1">
            <BsArrowDownSquare size={14} />
          </div>
          <p className="text-sm mr-2">APP</p>
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
