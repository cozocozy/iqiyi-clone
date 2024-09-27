import React from "react";

type Props = {};

function Header({}: Props) {
  return (
    <div className="sticky top-0 z-50 bg-black">
      <div className="flex justify-around space-y-3 ">
        <div></div>
        <h3 className="text-lg text-green-400 font-bold">IQIYI</h3>
        <div></div>
        <button className="border rounded rounded-md bg-green-500 w-10 text-gray-200">APP</button>
      </div>
      <div className="flex justify-around p-3 text-gray-300">
        <p>For You</p>
        <p>Destined</p>
        <p>Drama</p>
        <p>K-drama</p>
        <div>Movie</div>
      </div>
    </div>
  );
}

export default Header;
