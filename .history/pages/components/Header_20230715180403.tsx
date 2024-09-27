import React from "react";
import { BsArrowDownSquare, BsSearch } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
type Props = {};

function Header({}: Props) {
  return (
    <div className="sticky top-0 z-50 bg-black w-full overflow-auto">
      <div className="flex justify-between pt-2 items-center ">
        <div className="mb-2">
          <AiOutlineMenu size={22} />
        </div>
        <h3 className="text-2xl pb-1 text-[rgb(28,199,3)] font-bold">IQIYI</h3>
        <div className="flex justify-center items-center">
          <button className="absolute p-2 border-l border-gray-500 ml-48 pl-3">
            <BsSearch />
          </button>
          <input className="rounded rounded-md bg-gray-600 w-60 h-7 pb-1 pl-3" placeholder="search here.."></input>
        </div>
        <button className="flex flex-row rounded rounded-md w-20 h-8 bg-[rgb(28,199,3)] text-gray-100 justify-evenly items-center p-2">
          <div className="">
            <BsArrowDownSquare size={15} />
          </div>
          <p className="text-sm">APP</p>
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
