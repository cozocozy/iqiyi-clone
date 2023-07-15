import React from "react";

type Props = {};

function Header({}: Props) {
  return (
    <div className="flex flex-col items-center justify-center  ">
      <div>
        <div></div>
        <h3 className="text-md text-green-500 font-bold">IQIYI</h3>
        <div></div>
        <button className="border rounded rounded-md">APP</button>
      </div>
    </div>
  );
}

export default Header;
