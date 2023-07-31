import React from "react";

type Props = {};

function Footer({}: Props) {
  return (
    <div>
      <div className="flex flex-col bg-black w-full flex justify-center items-center h-[20rem]">
        <h3 className="text-white capitalize">get the best experience on the APP</h3>
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
