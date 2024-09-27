import React from "react";
import { BiSolidUserCircle } from "react-icons/bi";
type Props = {};

function Sidebar({}: Props) {
  return (
    <div className="fixed top-0 left-0 z-50 bg-white h-full w-[55%] max-w-sm">
      <div className="text-md flex items-center justify-start border border-red-500 h-24 bg-gradient-to-r from-green-950 to-green-800 ">
        <div className="ml-6">
          <BiSolidUserCircle size={40} color="gray" />
        </div>
        <h5>Login/Signup</h5>
      </div>
    </div>
  );
}

export default Sidebar;
