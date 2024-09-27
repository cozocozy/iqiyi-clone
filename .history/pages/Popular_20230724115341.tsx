import React from "react";
import axios from "axios";
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
        Popular
        <div></div>
      </div>
    </>
  );
}

export default popular;
