import Head from "next/head";
import Slider from "./components/Slider";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import PopularMovies from "./components/PopularMovies";
import TopRatedMovies from "./components/TopRatedMovies";
import NowPlayingMovies from "./components/NowPlayingMovies";
import UpcomingMovies from "./components/UpcomingMovies";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import LatestMovies from "./components/NowPlayingTV";

export default function Home() {
  return (
    <main className="mx-4 lg:mx-12 scroll-smooth">
      <Head>
        <title>IQIYI - watch Asian drama shows anime movie free online</title>
        <meta name="description" content="CLONE OF IQIYI WEBSITE" />
      </Head>
      <Header />
      <Sidebar />
      <Slider />
      <section>
        <div className="flex flex-row max-w-sm text-xl font-bold py-2 xl:text-3xl xl:my-4 select-none">Popular on iQIYI</div>
        <PopularMovies />
      </section>
      <section>
        <div className="flex flex-row max-w-sm text-xl font-bold py-2 xl:text-3xl xl:my-4 select-none">Top Rated for you</div>
        <TopRatedMovies />
      </section>
      <section>
        <div className="flex flex-row max-w-sm text-xl font-bold py-2 xl:text-3xl xl:my-4 select-none">Now Playing</div>
        <NowPlayingMovies />
      </section>
      <section>
        <div className="flex flex-row max-w-sm text-xl font-bold py-2 xl:text-3xl xl:my-4 select-none">Upcoming movies</div>
        <UpcomingMovies />
      </section>
      <section>
        <div className="flex flex-row max-w-sm text-xl font-bold py-2 xl:text-3xl xl:my-4 select-none">Latest Movies</div>
        <LatestMovies />
      </section>
      <section>
        <div className="flex flex-row max-w-sm text-xl font-bold py-2 xl:text-3xl xl:my-4 select-none">TV-Series</div>
        <PopularMovies />
      </section>
    </main>
  );
}
