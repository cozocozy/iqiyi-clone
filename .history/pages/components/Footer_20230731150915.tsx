import React from "react";
import { BsSearch } from "react-icons/bs";
import { SocialIcon } from "react-social-icons";
import { IoIosArrowDown } from "react-icons/io";
import { CiGlobe } from "react-icons/ci";

type Props = {};

function Footer({}: Props) {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col bg-black w-full flex border-t border-gray-700 space-y-3 items-center h-[12rem]">
        <p className="text-white text-lg capitalize font-bold mt-4">get the best experience on the APP</p>
        <p className="text-xs flex text-zinc-300">
          <span className="text-green-500 flex tracking-wide mr-1 mb-2">
            <BsSearch className="mr-1" />
            IQIYI
          </span>
          Search in App Store
        </p>
        <button className="border-full rounded-sm bg-zinc-800 p-1 w-[87%] h-8">Phone</button>
        <div className=" flex justify-evenly w-full h-8">
          <button className="border-full rounded-sm bg-zinc-800 w-[40%]">TV</button>
          <button className="border-full rounded-sm bg-zinc-800 w-[40%]">Web</button>
        </div>
      </div>
      <div className="flex bg-black w-full border-t border-gray-700 h-[6rem] justify-between items-center p-2">
        <div className="flex border rounded-md p-2 pt-1 items-center h-8 text-xs cursor-pointer ml-7">
          <CiGlobe className="mr-2" />
          English <IoIosArrowDown className="m-1 mt-1" />
        </div>
        <div className=" mr-7">
          <SocialIcon network="instagram" fgColor="white" bgColor="transparent" />
          <SocialIcon network="facebook" fgColor="white" bgColor="transparent" />
          <SocialIcon network="twitter" fgColor="white" bgColor="transparent" />
        </div>
      </div>
      <div className="text-[8px] text-zinc-400 h-[5rem] space-y-2 flex flex-col justify-center">
        <p>Copyright © 2021 iQiyi All Rights Reserved </p>
        <p>We use cookies to improve your experience on this site. By continuing to use our website, you agree to our use of cookies. Learn more</p>
      </div>
    </div>
  );
}

export default Footer;
