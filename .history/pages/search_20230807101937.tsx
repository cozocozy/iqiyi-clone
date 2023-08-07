import React from "react";
import Head from "next/head";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Link from "next/link";
import { HiChevronUp } from "react-icons/hi";

type Props = {};

function search({}: Props) {
  return (
    <main id="top" className="mx-4 lg:mx-12 scroll-smooth bg-gray-950">
      <Head>
        <title>IQIYI - Watch Asian Drama Shows Anime Movie Free Online</title>
        <meta name="description" content="CLONE OF IQIYI WEBSITE" />
      </Head>
      <Header />
      <Sidebar />
      {popularMovies.map((movies) => (
        <SwiperSlide>
          <img className="rounded-md gradient-mask-b-80 object-cover hover:scale-110 duration-300 ease-out cursor-pointer" src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`}></img>
          <div className="text-sm xl:text-xl">{movies.title}</div>
        </SwiperSlide>
      ))}
      <Footer />
      <Link href="#top">
        <footer className="sticky bottom-5 w-full  cursor-pointer z-50">
          <div className="flex justify-end items-center">
            <HiChevronUp className=" h-12 w-12 bg-emerald-600 rounded-full cursor-pointer lg:h-14 lg:w-14 hover:bg-emerald-500 transition-all ease-in-out animate-bounce" />
          </div>
        </footer>
      </Link>
    </main>
  );
}

export default search;
