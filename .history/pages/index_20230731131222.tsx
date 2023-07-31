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

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="mx-4 lg:mx-12 scroll-smooth bg-zinc-800">
      <Head>
        <title>IQIYI - watch Asian drama shows anime movie free online</title>
        <meta name="description" content="CLONE OF IQIYI WEBSITE" />
      </Head>
      <Header />
      <Sidebar />
      <Slider />
      <section>
        <div className="flex flex-row max-w-sm text-xl font-bold my-3 xl:text-3xl xl:my-4 select-none">Popular on iQIYI</div>
        <PopularMovies />
      </section>
      <section>
        <div className="flex flex-row max-w-sm text-xl font-bold my-3 xl:text-3xl xl:my-4 select-none">Top Rated for you</div>
        <TopRatedMovies />
      </section>
      <section>
        <div className="flex flex-row max-w-sm text-xl font-bold my-3 xl:text-3xl xl:my-4 select-none">Now Playing</div>
        <NowPlayingMovies />
      </section>
      <section>
        <div className="flex flex-row max-w-sm text-xl font-bold my-3 xl:text-3xl xl:my-4 select-none">Upcoming movies</div>
        <UpcomingMovies />
      </section>
      <section>
        <div className="flex flex-row max-w-sm text-xl font-bold my-3 xl:text-3xl xl:my-4 select-none">Ongoing TV-Series</div>
        <NowPlayingTV />
      </section>
      <section>
        <div className="flex flex-row max-w-sm text-xl font-bold my-3 xl:text-3xl xl:my-4 select-none">Top TV-Series</div>
        <TopRatedTV />
      </section>
      <section>
        <Footer />
      </section>
    </main>
  );
}
