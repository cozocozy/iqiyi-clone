import React from "react";
import {} from "./api/api";
import Slider from "./components/Slider";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
type Props = {};

function popular({}: Props) {
  return (
    <>
      <Header />
      <Sidebar />
      <Slider />
      <div>
        <div className="flex flex-row max-w-sm text-xl font-bold py-2 px-4 xl:text-3xl xl:mx-10 xl:my-4">Popular on iQIYI</div>
        <div className="flex flex-row ml-4 w-[9rem] h-[12rem] rounded rounded-md space-x-2 cursor-pointerz"></div>
      </div>
    </>
  );
}

export default popular;
