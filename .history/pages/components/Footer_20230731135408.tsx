import React from "react";
import { BsSearch } from "react-icons/bs";
import { SocialIcon } from "react-social-icons";
import { IoIosArrowDown } from "react-icons/io";
import { CiGlobe } from "react-icons/ci";

type Props = {};

function Footer({}: Props) {
  return (
    <div>
      <div className="flex flex-col bg-black w-full flex border-t border-gray-600 space-y-3 items-center h-[12rem]">
        <p className="text-white text-lg capitalize font-bold mt-4">get the best experience on the APP</p>
        <p className="text-xs flex text-zinc-300">
          <span className="text-green-500 flex tracking-wide mr-1 mb-2">
            <BsSearch className="mr-1" />
            IQIYI
          </span>
          Search in App Store
        </p>
        <button className="border-full rounded-sm bg-zinc-800 p-1 w-[84%] h-8">Phone</button>
        <div className=" space-x-5 flex justify-center w-full h-8">
          <button className="border-full rounded-sm bg-zinc-800 w-[40%]">TV</button>
          <button className="border-full rounded-sm bg-zinc-800 w-[40%]">Web</button>
        </div>
      </div>
      <div className="flex bg-black w-full flex border-t border-gray-600 space-y-3 h-[20rem] justify-around p-2">
        <div className="flex border rounded-md p-2 items-center h-8 text-sm mt-4 mr-10 cursor-pointer">
          <CiGlobe className="mr-2" />
          English <IoIosArrowDown className="m-1 mt-1" />
        </div>
        <div>
          <SocialIcon network="instagram" bgColor="transparent" fgcolor="" />
          <SocialIcon network="facebook" bgColor="gray" fgcolor="gray" />
          <SocialIcon network="twitter" bgColor="gray" fgcolor="white" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
