import React from "react";
import { BiSolidUserCircle } from "react-icons/bi";
type Props = {};

function Sidebar({}: Props) {
  return (
    <div className="fixed top-0 left-0 z-50 bg-white h-full w-[50%] max-w-sm p-3">
      <div className="text-md flex items-center justify-start h-24 bg-gradient-to-r from-green-950 to-green-800 font-semibold ">
        <div className="ml-7">
          <BiSolidUserCircle size={40} color="gray" />
        </div>
        <h5 className="ml-3">Login/Signup</h5>
      </div>

      <div className="h-full bg-zinc-900">
        <h3></h3>
        <h3></h3>
        <h3></h3>
        <h3></h3>
        <h3></h3>
        <h3></h3>
        <hr />
        <h3></h3>
        <h3></h3>
        <h3></h3>
        <h3></h3>
        <div className=""></div>
        <div className=""></div>
      </div>
    </div>
  );
}

export default Sidebar;
