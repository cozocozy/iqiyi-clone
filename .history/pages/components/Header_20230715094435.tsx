import React from "react";

type Props = {};

function Header({}: Props) {
  return (
    <div className="flex flex-col h-screen justify-center items-center  ">
      <div>
        <div></div>
        <h3 className="text-lg text-green-500 font-bold">IQIYI</h3>
        <div></div>
        <button className="border rounded rounded-md bg-green-500 w-10 text-white">APP</button>
      </div>
    </div>
  );
}

export default Header;
