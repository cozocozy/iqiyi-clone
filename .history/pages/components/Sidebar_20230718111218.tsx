import React from "react";
import { AiOutlineUser } from "react-icons/ai";
type Props = {};

function Sidebar({}: Props) {
  return (
    <div className="fixed top-0 left-0 z-50 bg-white h-full w-[55%] max-w-sm">
      <div className="">
        <h5 className="text-md flex items-center justify-center border border-red-500 h-24 bg-gradient-to-r from-green-950 to-green-800">
          <div>
            <AiOutlineUser />
          </div>
          Login/Signup
        </h5>
      </div>
    </div>
  );
}

export default Sidebar;
