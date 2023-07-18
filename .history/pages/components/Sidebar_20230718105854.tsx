import React from "react";

type Props = {};

function Sidebar({}: Props) {
  return (
    <div className="fixed top-0 z-20 bg-grey-500 w-20">
      <div className="">
        <h5 className="">Login/Signup</h5>
      </div>
    </div>
  );
}

export default Sidebar;
