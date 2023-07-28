import Head from "next/head";
import Slider from "./components/Slider";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { getMovieList, searchMovie } from "./api/api";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Home() {
  const [popularMovies, setPopularMovies] = useState([]);
  useEffect(() => {
    getMovieList().then((results) => {
      setPopularMovies(results);
    });
  }, []);

  const search = (q) => {
    console.log({ q });
  };
  return (
    <main>
      <Head>
        <title>IQIYI - watch Asian drama shows anime movie free online</title>
        <meta name="description" content="CLONE OF IQIYI WEBSITE" />
      </Head>
      <Header />
      <Sidebar />
      <Slider />
      <section>
        <div className="flex flex-row max-w-sm text-xl font-bold py-2 px-4 xl:text-3xl xl:mx-10 xl:my-4">Popular on iQIYI</div>
        <Swiper
          spaceBetween={10}
          // slidesPerView={3}
          // slidesPerGroup={1}
          breakpoints={{
            300: {
              slidesPerView: 3,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 3,
            },
            // when window width is >= 1024px
            1024: {
              spaceBetween: 10,
              slidesPerView: 3,
            },
            1280: {
              slidesPerGroup: 3,
              slidesPerView: 6,
            },
          }}
          centeredSlides={false}
          navigation={true}
          modules={[Navigation]}
          className="flex w-full"
        >
          {popularMovies.map((movies) => (
            // <MovieList key={movies.id} movies={movies} />
            <SwiperSlide>
              <img className="rounded-md gradient-mask-b-80 object-cover" src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`}></img>
              <div className="xl:text-2xl">{movies.title}</div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <section>
        <div className="flex flex-row max-w-sm text-xl font-bold py-2 px-4 xl:text-3xl xl:mx-10 xl:my-4">Top Rated for you</div>
        <div className="flex flex-row ml-4 w-[9rem] h-[12rem] rounded rounded-md space-x-2 cursor-pointer">
          <img src="https://wallpapercave.com/wp/wp5709958.jpg" alt="" />
          <img src="https://wallpapercave.com/wp/wp5709958.jpg" alt="" />
          <img src="https://wallpapercave.com/wp/wp5709958.jpg" alt="" />
        </div>
        <h2 className="flex flex-row max-w-sm text-md items-center py-2 px-4 xl:text-3xl xl:mx-10 xl:my-4">hello world</h2>
      </section>
      <section>
        <div className="flex flex-row max-w-sm text-xl font-bold py-2 px-4 xl:text-3xl xl:mx-10 xl:my-4">Now Playing</div>
        <div className="flex flex-row ml-4 w-[9rem] h-[12rem] rounded rounded-md space-x-2 cursor-pointer">
          <img src="https://wallpapercave.com/wp/wp5709958.jpg" alt="" />
          <img src="https://wallpapercave.com/wp/wp5709958.jpg" alt="" />
          <img src="https://wallpapercave.com/wp/wp5709958.jpg" alt="" />
        </div>
        <h2 className="flex flex-row max-w-sm text-md items-center py-2 px-4 xl:text-3xl xl:mx-10 xl:my-4">hello world</h2>
      </section>
      <section>
        <div className="flex flex-row max-w-sm text-xl font-bold p-2 px-4 xl:text-3xl xl:mx-10 xl:my-4">Upcoming movies</div>
        <div className="flex flex-row ml-4 w-[9rem] h-[12rem] rounded rounded-md space-x-2 cursor-pointer">
          <img src="https://wallpapercave.com/wp/wp5709958.jpg" alt="" />
          <img src="https://wallpapercave.com/wp/wp5709958.jpg" alt="" />
          <img src="https://wallpapercave.com/wp/wp5709958.jpg" alt="" />
        </div>
        <h2 className="flex flex-row max-w-sm text-md items-center p-2 px-4 xl:text-3xl xl:mx-10 xl:my-4">hello world</h2>
      </section>
      <section>
        <div className="flex flex-row max-w-sm text-xl font-bold p-2 px-4 xl:text-3xl xl:mx-10 xl:my-4">Latest Movies</div>
        <div className="flex flex-row ml-4 w-[9rem] h-[12rem] rounded rounded-md space-x-2 cursor-pointer">
          <img src="https://wallpapercave.com/wp/wp5709958.jpg" alt="" />
          <img src="https://wallpapercave.com/wp/wp5709958.jpg" alt="" />
          <img src="https://wallpapercave.com/wp/wp5709958.jpg" alt="" />
        </div>
      </section>
      <section>
        <div className="flex flex-row max-w-sm text-xl font-bold p-2 px-4 xl:text-3xl xl:mx-10 xl:my-4">TV-Series</div>
        <div className="flex flex-row ml-4 w-[9rem] h-[12rem] rounded rounded-md space-x-2 cursor-pointer">
          <img src="https://wallpapercave.com/wp/wp5709958.jpg" alt="" />
          <img src="https://wallpapercave.com/wp/wp5709958.jpg" alt="" />
          <img src="https://wallpapercave.com/wp/wp5709958.jpg" alt="" />
        </div>
        <h2 className="flex flex-row max-w-sm text-md items-center p-2 px-4 xl:text-3xl xl:mx-10 xl:my-4">hello world</h2>
      </section>
    </main>
  );
}
