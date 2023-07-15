import React from "react";

type Props = {};

function Header({}: Props) {
  return (
    <div className="flex flex-row items-center justify-center  ">
      <div>
        <div></div>
        <h3 className="text-md text-green-500 font-bold">IQIYI</h3>
        <div></div>
        <button className="rounded rounded-sm w-5 h-5">APP</button>
      </div>
    </div>
  );
}

export default Header;
