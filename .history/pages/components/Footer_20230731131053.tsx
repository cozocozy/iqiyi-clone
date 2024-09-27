import React from "react";

type Props = {};

function Footer({}: Props) {
  return (
    <div>
      <div className="flex flex-col bg-black w-full flex border-t border-gray-100 space-y-4 items-center h-[20rem]">
        <p className="text-white text-lg capitalize font-bold mt-4">get the best experience on the APP</p>
        <p className="text-xs">
          <span>IQIYI</span>
          Search in App Store
        </p>
        <div></div>
        <button className="border-full rounded-sm bg-zinc-800 p-1 w-[84%] h-8">Phone</button>
        <div className=" space-x-5 flex justify-center w-full h-8">
          <button className="border-full rounded-sm bg-zinc-800 w-[40%]">TV</button>
          <button className="border-full rounded-sm bg-zinc-800 w-[40%]">Web</button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
