import React from "react";

type Props = {};

function Footer({}: Props) {
  return (
    <div>
      <div className="flex flex-col bg-black w-full flex border-t space-y-3 items-center h-[20rem]">
        <p className="text-white text-lg capitalize font-bold">get the best experience on the APP</p>
        <p className="text-xs">
          <span>IQIYI</span>
          Search in App Store
        </p>
        <div></div>
        <button className="border-full rounded-sm bg-zinc-800 p-1 w-[84%]">Phone</button>
        <div className=" space-x-5 flex justify-center border-red-500 border w-full ">
          <button className="border-full rounded-sm bg-zinc-800 w-[40%]">TV</button>
          <button className="border-full rounded-sm bg-zinc-800 w-[40%]">Web</button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
