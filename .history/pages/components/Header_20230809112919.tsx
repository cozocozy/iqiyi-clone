import React from "react";
import { BsArrowDownSquare, BsSearch } from "react-icons/bs";
import Link from "next/link";
import { BiTimeFive } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { CiGlobe } from "react-icons/ci";
import { PiCrownSimpleFill } from "react-icons/pi";
import { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { searchMovie } from "../api/api";

type Props = {};

function Header({}: Props) {
  const [show, setShow] = useState(true);
  const [navbar, setNavbar] = useState(false);
  const [search, setSearch] = useState("");

  const changeBackground = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 750) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);
  });

  const handleSubmit = async (q) => {
    const query = setSearch(search);
    location.href = "/search";
  };
  return (
    <div className={navbar ? "fixed top-0 z-50 bg-black w-full left-0" : "fixed top-0 z-50 bg-black w-full left-0 lg:bg-transparent"}>
      <div className="flex justify-between items-center py-1  lg:p-3 lg:ml-3 ">
        {/* left part */}
        <div className="flex ml-4 mx-3">
          <h3 className="text-2xl text-green-500 font-bold ml-7 lg:text-4xl lg:ml-4">IQIYI</h3>{" "}
          <button className="text-gray-400 hidden lg:ml-6 lg:flex z-20 lg:bg-transparent hover:text-green-500 font-medium text-lg text-center items-center" type="button" onClick={() => setShow(!show)}>
            Browse
            <IoIosArrowDown className="lg:ml-1" />
          </button>
        </div>

        {/* search  part */}
        <div className="relative flex justify-end items-center w-full mx-auto mt-1 lg:max-w-xs lg:mr-4 lg:mt-2">
          <input
            onChange={(e) => setSearch(e.target.value)}
            className="border-none rounded rounded-md bg-zinc-700 w-full pl-3 pb-1 focus:outline-none lg:h-8 lg:text-lg lg:opacity-80 lg:bg-zinc-500"
            placeholder="search here.."
            autoComplete="off"
          />
          <button onClick={handleSubmit} className="absolute h-full mr-4 border-l border-gray-500 pl-3">
            <BsSearch size={18} />
          </button>
        </div>

        {/* desktop version */}
        <div className="lg:flex lg:mt-2 lg:mr-4">
          <div className="navbar lg:hover:border-green-500 lg:hover:text-green-500 cursor-pointer ">
            <BiTimeFive size={25} />
            <h1>History</h1>
          </div>
          <div className="navbar lg:hover:border-green-500 lg:hover:text-green-500 cursor-pointer  ">
            <CiGlobe size={25} />
            <h1>Language</h1>
          </div>
          <div className="navbar lg:hover:border-green-500 lg:hover:text-green-500 cursor-pointer  ">
            <AiOutlineUser size={25} />
            <h1>Me</h1>
          </div>

          {/* right part */}
          <button className="flex flex-row mr-8 mt-1 lg:mt-0 lg:ml-7 rounded rounded-md h-7 justify-center mx-3 bg-green-500 text-gray-100 items-center appBtn lg:bg-transparent lg:mx-2 lg:h-9 lg:hover:border-green-500 lg:hover:text-green-500 ">
            <div className="mx-2 mr-1">
              <BsArrowDownSquare size={14} />
            </div>
            <p className="text-sm mr-2">APP</p>
          </button>
          <button className="navbar lg:rounded lg:rounded-md lg:bg-orange-300  lg:w-20 lg:h-9 lg:text-black lg:flex lg:flex-row lg:justify-center lg:items-center lg:ml-3 lg:mr-10">
            <PiCrownSimpleFill size={25} />
            <h1 className="lg:text-md">VIP</h1>
          </button>
        </div>
      </div>

      {/* bottom part */}
      <div
        className={
          show
            ? "lg:hidden genre"
            : "genre lg:space-x-0 text-gray-300 md:justify-center md:items-center lg:absolute lg:flex-col lg:text-center lg:border-y-8 lg:rounded-md lg:border-zinc-800 lg:bg-zinc-800 lg:w-36 lg:ml-32 lg:space-y-2 lg:p-0 ease-out duration-300"
        }
      >
        <div className=" pages font-bold ">
          <Link href="#">Popular</Link>
        </div>
        <div className=" pages">
          <Link href="#">Top Rated</Link>
        </div>
        <div className=" pages">
          <Link href="#">Now Playing</Link>
        </div>
        <div className=" pages">
          <Link href="#">Upcoming</Link>
        </div>
        <div className=" pages">
          <Link href="#">Ongoing Series</Link>
        </div>
        <div className=" pages">
          <Link href="#">Top Rated Series</Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
