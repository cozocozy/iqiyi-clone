// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { getNowPlaying } from "../api/api";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useEffect, useState } from "react";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Slider() {
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);

  useEffect(() => {
    getNowPlaying().then((results) => {
      setNowPlayingMovies(results);
    });
  }, []);

  return (
    <div className="-mx-4 lg:-mx-12">
      <Swiper
        spaceBetween={30}
        centeredSlides={false}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper w-full h-[20rem] mt-12 bg-gradient-to-t cursor-pointer from-white  to-zinc-900 opacity-80 lg:h-[50rem] lg:top-0 lg:-mt-1"
      >
        {nowPlayingMovies.map((movies) => (
          // <PopularMovies key={movies.id} movies={movies} />
          <SwiperSlide>
            <img className="object-fit" src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`}></img>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
