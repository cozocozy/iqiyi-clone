import React from "react";
import { BsArrowDownSquare, BsSearch } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
type Props = {};

function Header({}: Props) {
  return (
    <div className="sticky top-0 z-50 bg-black">
      <div className="flex justify-between space-y-3 ">
        <div className="mt-4">
          <AiOutlineMenu size={20} />
        </div>
        <h3 className="text-2xl text-[rgb(28,199,3)] font-bold">IQIYI</h3>
        <div>
          <button className="absolute p-2 border-l">
            <BsSearch />
          </button>
          <input className="rounded rounded-md p-1 bg-gray-600" placeholder="search here.."></input>
        </div>
        <button className="flex flex-row rounded rounded-md w-20 bg-green-500 text-gray-200">
          <div className="">
            <BsArrowDownSquare size={20} />
          </div>
          <p className="text-xl">APP</p>
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
