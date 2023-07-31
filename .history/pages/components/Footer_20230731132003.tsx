import React from "react";
import { BsArrowDownSquare, BsSearch } from "react-icons/bs";
type Props = {};

function Footer({}: Props) {
  return (
    <div>
      <div className="flex flex-col bg-black w-full flex border-t border-gray-600 space-y-4 items-center h-[20rem]">
        <p className="text-white text-lg capitalize font-bold mt-4">get the best experience on the APP</p>
        <p className="text-xs flex">
          <span className="text-green-500 flex tracking-wide">
            <BsSearch />
            IQIYI
          </span>
          Search in App Store
        </p>
        <div></div>
        <button className="border-full rounded-sm bg-zinc-800 p-1 w-[84%] h-8">Phone</button>
        <div className=" space-x-5 flex justify-center w-full h-8">
          <button className="border-full rounded-sm bg-zinc-800 w-[40%]">TV</button>
          <button className="border-full rounded-sm bg-zinc-800 w-[40%]">Web</button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
