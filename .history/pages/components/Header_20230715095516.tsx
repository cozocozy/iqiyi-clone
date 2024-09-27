import React from "react";

type Props = {};

function Header({}: Props) {
  return (
    <div className="sticky top-0 z-50 space-y-2">
      <div className="flex justify-between ">
        <div></div>
        <h3 className="text-lg text-green-500 font-bold">IQIYI</h3>
        <div></div>
        <button className="border rounded rounded-md bg-green-500 w-10 text-white">APP</button>
      </div>
      <div className="flex justify-evenly space-x-2">
        <div>For You</div>
        <div>Destined</div>
        <div>Drama</div>
        <div>K-drama</div>
        <div>Movie</div>
      </div>
    </div>
  );
}

export default Header;
