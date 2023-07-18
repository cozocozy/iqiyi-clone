import React from "react";
import { BiSolidUserCircle } from "react-icons/bi";
import Link from "next/link";
type Props = {};

function Sidebar({}: Props) {
  return (
    <div className="fixed top-0 left-0 z-50 bg-white h-full w-[50%] max-w-sm">
      <div className="text-md flex items-center justify-start h-24 bg-gradient-to-r from-green-950 to-green-800 font-semibold ">
        <div className="ml-7">
          <BiSolidUserCircle size={40} color="gray" />
        </div>
        <h5 className="ml-3">Login/Signup</h5>
      </div>
      <div className="h-full bg-zinc-900 text-lg space-y-6 pt-5">
        <div className="ml-4">
          <Link href="#">My Account</Link>
        </div>
        <div className="ml-4">
          <Link href="#">English</Link>
        </div>
        <div className="ml-4">
          <Link href="#">History</Link>
        </div>
        <div className="ml-4">
          <Link href="#">Watch later</Link>
        </div>
        <div className="ml-4">
          <Link href="#">Reservation</Link>
        </div>
        <div className="ml-4">
          <Link href="#">Subtitle Translation</Link>
        </div>
        <div className="ml-4">
          <Link href="#">About iQIYI</Link>
        </div>
        <div className="ml-4">
          <Link href="#">Cooperation</Link>
        </div>
        <div className="ml-4">
          <Link href="#">Help and Support</Link>
        </div>
        <div className="ml-4">
          <Link href="#">Term of Services</Link>
        </div>
        <div className=""></div>
        <div className=""></div>
      </div>
    </div>
  );
}

export default Sidebar;
