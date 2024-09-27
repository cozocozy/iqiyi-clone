import React from "react";
import { BsArrowDownSquare, BsSearch } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
type Props = {};

function Header({}: Props) {
  return (
    <div className="sticky top-0 z-50 bg-black w-full overflow-auto">
      <div className="flex justify-evenly space-y-3 ">
        <div className="mt-4">
          <AiOutlineMenu size={25} />
        </div>
        <h3 className="text-2xl text-[rgb(28,199,3)] font-bold">IQIYI</h3>
        <div className="flex justify-center items-center">
          {/* <button className="absolute p-2 border-l">
            <BsSearch />
          </button> */}
          <input className="rounded rounded-md p-1 bg-gray-600 w-60 h-8 text-right" placeholder="search here.."></input>
        </div>
        <button className="flex flex-row rounded rounded-md w-20 bg-[rgb(28,199,3)] text-gray-200 justify-evenly items-center">
          <div className="">
            <BsArrowDownSquare size={12} />
          </div>
          <p className="text-md">APP</p>
        </button>
      </div>
      <div className="flex justify-around p-3 text-gray-300">
        <p>For You</p>
        <p>Destined</p>
        <p>Drama</p>
        <p>K-drama</p>
        <div>Movie</div>
      </div>
    </div>
  );
}

export default Header;
