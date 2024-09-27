import React from "react";
import { BsSearch } from "react-icons/bs";
import { SocialIcon } from "react-social-icons";
import { IoIosArrowDown } from "react-icons/io";
import { CiGlobe } from "react-icons/ci";
import { AiOutlineMobile } from "react-icons/ai";
import { PiTelevisionSimpleLight } from "react-icons/pi";
import { HiOutlineDesktopComputer } from "react-icons/hi";

type Props = {};

function Footer({}: Props) {
  return (
    <>
      <div className=" mx-auto ">
        <div className="flex flex-col bg-black w-full flex border-t border-gray-700 space-y-3 lg:space-y-4 items-center h-[11rem]">
          <p className="text-white text-lg capitalize font-bold mt-4">get the best experience on the APP</p>
          <p className="text-xs flex text-zinc-300">
            <span className="text-green-500 flex tracking-wide mr-1 mb-2">
              <BsSearch className="mr-1" />
              IQIYI
            </span>
            Search in App Store
          </p>
          <div className="w-full lg:flex space-y-4 lg:w-[20rem] lg:space-y-0 lg:pt-3 lg:justify-center ">
            <button className="border-full rounded-sm bg-zinc-800 p-1 w-[80%] lg:w-[50%] lg:-ml-4 lg:mr-4 mx-auto  h-8 flex items-center justify-center hover:bg-green-600 transition ease-in-out">
              <AiOutlineMobile className="mr-1" />
              Phone
            </button>
            <div className=" flex justify-evenly w-full h-8 ">
              <button className="border-full rounded-sm bg-zinc-800 w-[35%] lg:w-full lg:mr-4    flex items-center justify-center  hover:bg-green-600 transition ease-in-out delay-100">
                <PiTelevisionSimpleLight className="mr-1" />
                TV
              </button>
              <button className="border-full rounded-sm bg-zinc-800 w-[35%] lg:w-full lg:-mr-6 flex items-center justify-center  hover:bg-green-600 transition ease-in-out delay-100">
                <HiOutlineDesktopComputer className="mr-1" />
                Web
              </button>
            </div>
          </div>
        </div>
        <div className="flex bg-black w-full border-t border-gray-700 h-[6rem] lg:h-[12rem] justify-between lg:justify-center items-center">
          <div className="hidden lg:flex lg:capitalize lg:justify-center lg:space-x-24 lg:text-zinc-400 lg:curs">
            <div className="space-y-3">
              <p className="text-zinc-100">About IQIYI</p>
              <p>about us</p>
              <p>product and services</p>
              <p>ways to watch></p>
            </div>
            <div className="space-y-3">
              <p className="text-zinc-100">Cooperation</p>
              <p>advertise</p>
              <p>corporate relation</p>
              <p>preinstall cooperation</p>
            </div>
            <div className="space-y-3">
              <p className="text-zinc-100">help and support</p>
              <p>feeback</p>
              <p>security response center</p>
              <p>FAQ</p>
            </div>
            <div className="space-y-3">
              <p className="text-zinc-100">term of services</p>
              <p>privacy of policy</p>
              <p>term of services</p>
            </div>
          </div>
          <div className="flex border rounded-md p-2 items-center h-8 text-xs cursor-pointer ml-7">
            <CiGlobe className="mr-2" />
            English <IoIosArrowDown className="m-1 mt-1" />
          </div>
          <div className=" mr-7 cursor-pointer">
            <SocialIcon className="hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-100" network="instagram" fgColor="white" bgColor="transparent" />
            <SocialIcon className="hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-100" network="facebook" fgColor="white" bgColor="transparent" />
            <SocialIcon className="hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-100" network="twitter" fgColor="white" bgColor="transparent" />
          </div>
        </div>
        <div className="text-[9px] text-zinc-400 h-[6rem] space-y-2 flex flex-col w-[24.5rem] sm:w-[35rem] sm:text-[10px] ml-8">
          <p>Copyright © 2021 iQiyi All Rights Reserved </p>
          <p>
            We use cookies to improve your experience on this site. By continuing to use our website, you agree to our use of cookies. Learn more <span className="underline hover:text-green-500 cursor-pointer">IQIYI Privacy Policy</span>
          </p>
        </div>
      </div>
      <div className="hidden lg:flex"></div>
    </>
  );
}

export default Footer;
