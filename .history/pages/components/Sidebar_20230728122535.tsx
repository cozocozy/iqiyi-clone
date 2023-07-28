import React from "react";
import { BiSolidUserCircle } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import Link from "next/link";
type Props = {};

function Sidebar({}: Props) {
  const [sidebar, setSideBar] = useState(false);

  return (
    <div className="lg:hidden">
      <button className="z-50 fixed top-0 mt-3" onClick={() => setSideBar(!sidebar)}>
        <AiOutlineMenu size={20} className="" />
      </button>
      {sidebar && (
        <>
          <div className="fixed top-0 left-0 z-50 bg-white h-full w-[50%] max-w-sm ">
            <div className="text-sm flex items-center justify-start h-24 bg-gradient-to-r from-green-950 to-green-800 font-semibold  ">
              <div className="ml-7">
                <BiSolidUserCircle size={40} color="gray" />
              </div>
              <h5 className="ml-3">Login/Signup</h5>
            </div>
            <div className="h-full bg-zinc-800 text-md space-y-7 pt-5">
              <div className="ml-4">
                <Link href="#" className="hover:text-green-500 transition ease-out duration-300">
                  My Account
                </Link>
              </div>
              <div className="ml-4">
                <Link href="#" className="hover:text-green-500 transition ease-out duration-300">
                  English
                </Link>
              </div>
              <div className="ml-4">
                <Link href="#" className="hover:text-green-500 transition ease-out duration-300">
                  History
                </Link>
              </div>
              <div className="ml-4">
                <Link href="#" className="hover:text-green-500 transition ease-out duration-300">
                  Watch later
                </Link>
              </div>
              <div className="ml-4">
                <Link href="#" className="hover:text-green-500 transition ease-out duration-300">
                  Reservation
                </Link>
              </div>
              <div className="ml-4">
                <Link href="#" className="hover:text-green-500 transition ease-out duration-300">
                  Subtitle Translation
                </Link>
              </div>
              <div className="border-t border-zinc-700"></div>
              <div className="ml-4">
                <Link href="#" className="hover:text-green-500 transition ease-out duration-300">
                  About iQIYI
                </Link>
              </div>
              <div className="ml-4">
                <Link href="#" className="hover:text-green-500 transition ease-out duration-300">
                  Cooperation
                </Link>
              </div>
              <div className="ml-4">
                <Link href="#" className="hover:text-green-500">
                  Help and Support
                </Link>
              </div>
              <div className="ml-4">
                <Link href="#" className="hover:text-green-500">
                  Term of Services
                </Link>
              </div>
              <div className="rounded rounded-md w-[75%] h-9 mx-auto text-white bg-gray-950 flex justify-center items-center text-xs font-semibold">Playstore</div>
              <div className="rounded rounded-md w-[75%] h-9 mx-auto text-white bg-gray-950 flex justify-center items-center text-xs font-semibold">Google Play</div>
            </div>
          </div>
          <div className="fixed top-0 right-0 z-50 bg-black opacity-40 h-full w-[50%] max-w-sm" onClick={() => setSideBar(!sidebar)}></div>
        </>
      )}
    </div>
  );
}

export default Sidebar;
