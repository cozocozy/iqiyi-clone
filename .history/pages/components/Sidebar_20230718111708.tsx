import React from "react";
import { BiSolidUser } from "react-icons/bi";
type Props = {};

function Sidebar({}: Props) {
  return (
    <div className="fixed top-0 left-0 z-50 bg-white h-full w-[55%] max-w-sm">
      <div className="text-md flex items-center justify-center border border-red-500 h-24 bg-gradient-to-r from-green-950 to-green-800 space-x-2 ">
        <div className="rounded-full bg-gray-400 p-3">
          <BiSolidUser size={24} color="gray" />
        </div>
        <h5>Login/Signup</h5>
      </div>
    </div>
  );
}

export default Sidebar;
