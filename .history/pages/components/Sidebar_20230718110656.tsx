import React from "react";

type Props = {};

function Sidebar({}: Props) {
  return (
    <div className="fixed top-0 left-0 z-50 bg-white h-full w-[55%] max-w-sm">
      <div className="">
        <h5 className="text-lgflex items-center justify-center text-black">Login/Signup</h5>
      </div>
    </div>
  );
}

export default Sidebar;
