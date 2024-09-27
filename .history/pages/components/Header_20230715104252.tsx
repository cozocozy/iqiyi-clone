import React from "react";
import { BsArrowDownSquare, BsSearch } from "react-icons/bs";

type Props = {};

function Header({}: Props) {
  return (
    <div className="sticky top-0 z-50 bg-black">
      <div className="flex justify-around space-y-3 ">
        <div></div>
        <h3 className="text-lg text-[rgb(28,199,3)] font-bold">IQIYI</h3>
        <div>
          <button className="absolute border p-3">
            <BsSearch />
          </button>
          <input className="rounded rounded-md p-1 bg-gray-600" placeholder="search here.."></input>
        </div>
        <button className="flex flex-row rounded rounded-md w-10 bg-green-500 text-gray-200">
          <div className="">
            <BsArrowDownSquare />
          </div>
          <p className="">APP</p>
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
