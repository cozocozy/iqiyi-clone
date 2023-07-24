import React from "react";
import axios from "axios";
type Props = {};

function popular({}: Props) {
  return (
    <div>
      <Header />
      <Sidebar />
      <Slider />
    </div>
  );
}

export default popular;
