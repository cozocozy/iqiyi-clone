import Head from "next/head";
import Slider from "./components/Slider";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MovieList from "./components/PopularMovies";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import PopularMovies from "./components/PopularMovies";

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
        <MovieList />
      </section>
      <section>
        <div className="flex flex-row max-w-sm text-xl font-bold py-2 xl:text-3xl xl:my-4 select-none">Now Playing</div>
        <MovieList />
      </section>
      <section>
        <div className="flex flex-row max-w-sm text-xl font-bold py-2 xl:text-3xl xl:my-4 select-none">Upcoming movies</div>
        <MovieList />
      </section>
      <section>
        <div className="flex flex-row max-w-sm text-xl font-bold py-2 xl:text-3xl xl:my-4 select-none">Latest Movies</div>
        <MovieList />
      </section>
      <section>
        <div className="flex flex-row max-w-sm text-xl font-bold py-2 xl:text-3xl xl:my-4 select-none">TV-Series</div>
        <MovieList />
      </section>
    </main>
  );
}
