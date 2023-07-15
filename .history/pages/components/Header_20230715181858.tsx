import React from "react";
import { BsArrowDownSquare, BsSearch } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
type Props = {};

function Header({}: Props) {
  return (
    <div className="sticky top-0 z-50 bg-black w-full overflow-auto">
      <div className="flex justify-evenly -space-x-3 mr-3 pt-1 items-center ">
        <div className="mb-1">
          <AiOutlineMenu size={22} />
        </div>
        <h3 className="text-2xl mb-2 text-[rgb(28,199,3)] font-bold">IQIYI</h3>
        <div className="flex justify-center items-center">
          <button className="absolute p-1 border-l border-gray-500 ml-56 pl-3">
            <BsSearch />
          </button>
          <input className="rounded rounded-md bg-neutral-700 w-72 h-7 pb-1 pl-3" placeholder="search here.."></input>
        </div>
        <button className="flex flex-row rounded rounded-md w-16 h-7 space-x-1 bg-[rgb(28,199,3)] text-gray-100 justify-evenly items-center p-2">
          <div className="">
            <BsArrowDownSquare size={15} />
          </div>
          <p className="text-sm">APP</p>
        </button>
      </div>
      <div className="flex justify-around p-3 text-gray-300 overflow-hidden">
        <p>For You</p>
        <p>Destined</p>
        <p>Drama</p>
        <p>K-drama</p>
        <div>Movie</div>
        <div>Anime</div>
        <div>Variety Show</div>
      </div>
    </div>
  );
}

export default Header;
