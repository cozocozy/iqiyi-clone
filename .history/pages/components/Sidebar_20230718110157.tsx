import React from "react";

type Props = {};

function Sidebar({}: Props) {
  return (
    <div className="fixed top-0 left-0 z-20 bg-white w-[50%] max-w-xl">
      <div className="">
        <h5 className="">Login/Signup</h5>
      </div>
    </div>
  );
}

export default Sidebar;
