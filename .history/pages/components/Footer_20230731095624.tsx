import React from "react";

type Props = {};

function Footer({}: Props) {
  return (
    <div>
      <div className="flex flex-col bg-black w-full flex justify-center items-center h-[20rem]">
        <p className="text-white text-lg capitalize font-bold">get the best experience on the APP</p>
        <p className="text-sm">
          <span>IQIYI</span>
          Search in App Store
        </p>
        <button></button>
        <button></button>
        <button></button>
      </div>
    </div>
  );
}

export default Footer;
