import Head from "next/head";
import Slider from "./components/Slider";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import PopularMovies from "./components/PopularMovies";
import TopRatedMovies from "./components/TopRatedMovies";
import NowPlayingMovies from "./components/NowPlayingMovies";
import UpcomingMovies from "./components/UpcomingMovies";
import NowPlayingTV from "./components/NowPlayingTV";
import TopRatedTV from "./components/TopRatedTV";
import { HiChevronUp } from "react-icons/hi";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main id="top" className="mx-4 lg:mx-12 scroll-smooth font-sans text-slate-300">
      <Head>
        <title>IQIYI - Watch Asian Drama Shows Anime Movie Free Online</title>
        <meta name="description" content="CLONE OF IQIYI WEBSITE" />
      </Head>
      {/* header */}
      <Header />

      {/* sidebar */}
      <Sidebar />

      {/* slider */}
      <Slider />

      {/* popular movies */}
      <section>
        <div className="flex flex-row max-w-sm text-xl font-bold text-slate-100 my-3 xl:text-3xl xl:my-4 select-none">Popular on iQIYI</div>
        <PopularMovies />
      </section>

      {/* top rated movies */}
      <section>
        <div className="flex flex-row max-w-sm text-xl font-bold my-3 text-slate-100  xl:text-3xl xl:my-4 select-none">Top Rated for you</div>
        <TopRatedMovies />
      </section>

      {/* now playing movies */}
      <section>
        <div className="flex flex-row max-w-sm text-xl font-bold my-3 text-slate-100  xl:text-3xl xl:my-4 select-none">Now Playing</div>
        <NowPlayingMovies />
      </section>

      {/* now playing tv */}
      <section>
        <div className="flex flex-row max-w-sm text-xl font-bold my-3 text-slate-100  xl:text-3xl xl:my-4 select-none">Ongoing TV-Series</div>
        <NowPlayingTV />
      </section>

      {/* top rated tv */}
      <section>
        <div className="flex flex-row max-w-sm text-xl font-bold my-3 text-slate-100  xl:text-3xl xl:my-4 select-none">Top TV-Series</div>
        <TopRatedTV />
      </section>

      {/* upcoming movies */}
      <section>
        <div className="flex flex-row max-w-sm text-xl font-bold my-3 text-slate-100  xl:text-3xl xl:my-4 select-none">Upcoming movies</div>
        <UpcomingMovies />
      </section>

      {/* footer */}
      <section>
        <Footer />
      </section>

      {/* go up */}
      <Link href="#top">
        <div className="sticky bottom-4 cursor-pointer z-50">
          <div className=" flex justify-end items-center">
            <HiChevronUp className="  h-12 w-12 bg-emerald-600 rounded-full cursor-pointer lg:h-14 lg:w-14 hover:bg-emerald-500 transition-all ease-out animate-bounce" />
          </div>
        </div>
        </Link>
      </main>
      );
    }