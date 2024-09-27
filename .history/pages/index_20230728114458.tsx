import Head from "next/head";
import Slider from "./components/Slider";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MovieList from "./components/MovieList";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Home() {
  return (
    <main className="mx-4 lg:mx-12 scroll-smooth scroll-mx-2">
      <Head>
        <title>IQIYI - watch Asian drama shows anime movie free online</title>
        <meta name="description" content="CLONE OF IQIYI WEBSITE" />
      </Head>
      <Header />
      <Sidebar />
      <Slider />
      <section>
        <div className="flex flex-row max-w-sm text-xl font-bold py-2 xl:text-3xl xl:my-4">Popular on iQIYI</div>
        <MovieList />
      </section>
      <section>
        <div className="flex flex-row max-w-sm text-xl font-bold py-2 xl:text-3xl xl:my-4">Top Rated for you</div>
        <MovieList />
      </section>
      <section>
        <div className="flex flex-row max-w-sm text-xl font-bold py-2 xl:text-3xl xl:my-4">Now Playing</div>
        <MovieList />
      </section>
      <section>
        <div className="flex flex-row max-w-sm text-xl font-bold py-2 xl:text-3xl xl:my-4">Upcoming movies</div>
        <MovieList />
      </section>
      <section>
        <div className="flex flex-row max-w-sm text-xl font-bold py-2 xl:text-3xl xl:my-4">Latest Movies</div>
        <MovieList />
      </section>
      <section>
        <div className="flex flex-row max-w-sm text-xl font-bold py-2 xl:text-3xl xl:my-4">TV-Series</div>
        <MovieList />
      </section>
    </main>
  );
}
