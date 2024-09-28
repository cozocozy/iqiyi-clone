// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { getNowPlaying } from "../api/api";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useEffect, useState } from "react";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";

export default function Slider() {
  const [nowPlayingMovies, setNowPlayingMovies] = useState([] as any[]);

  useEffect(() => {
    getNowPlaying().then((results) => {
      setNowPlayingMovies(results);
    });
  }, []);

  return (
    <div className=" -mx-4 lg:-mx-12">
      <Swiper
        spaceBetween={30}
        centeredSlides={false}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper rounded-sm h-[38rem] gradient-mask-b-90 cursor-pointer  lg:p-10 lg:top-0 lg:h-[40rem] "
      >
        {nowPlayingMovies.map((movies, i) => (
          <SwiperSlide className="" key={i}>
            <img className="absolute w-full object-cover gradient-mask-t-90 inset-0 top-0 left-0" alt="" src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`}></img>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
