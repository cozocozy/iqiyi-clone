import React from "react";

type Props = {};

function Footer({}: Props) {
  return (
    <div>
      <div className="flex flex-col bg-black w-full flex border-t  items-center h-[20rem]">
        <p className="text-white text-lg capitalize font-bold">get the best experience on the APP</p>
        <p className="text-xs">
          <span>IQIYI</span>
          Search in App Store
        </p>
        <div></div>
        <button className="border-full bg-zinc-800 p-1 w-[80%]">Phone</button>
        <div className=" flex flex-2 space-x-5">
          <button className="border-full bg-zinc-800 w-[30%]">TV</button>
          <button className="border-full bg-zinc-800 w-[30%]">Web</button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
