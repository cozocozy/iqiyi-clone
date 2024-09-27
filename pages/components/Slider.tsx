// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { getNowPlaying } from "../api/api";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useEffect, useState } from "react";

// import required modules
<<<<<<< HEAD
import { Autoplay, Navigation } from "swiper/modules";
=======
import { Autoplay, Pagination, Navigation } from "swiper/modules";
>>>>>>> 96fea41977077dceda43ca01ea5be8f6ea3f3d65

export default function Slider() {
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);

  useEffect(() => {
    getNowPlaying().then((results) => {
      setNowPlayingMovies(results);
    });
  }, []);

  return (
<<<<<<< HEAD
    <div className=" -mx-4 lg:-mx-12">
=======
    <div className="-mx-4 lg:-mx-12">
>>>>>>> 96fea41977077dceda43ca01ea5be8f6ea3f3d65
      <Swiper
        spaceBetween={30}
        centeredSlides={false}
        autoplay={{
<<<<<<< HEAD
          delay: 7000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper rounded-sm h-[38rem] gradient-mask-b-90 cursor-pointer  lg:p-10 lg:top-0 lg:h-[40rem] "
      >
        {nowPlayingMovies.map((movies, i) => (
          <SwiperSlide className="" key={i}>
            <img className="absolute w-full object-cover gradient-mask-t-90 inset-0 top-0 left-0" src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`}></img>
=======
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper w-full h-[20rem] object-cover mt-12 bg-gradient-to-t cursor-pointer from-white  to-zinc-900 opacity-80 lg:h-[50rem] lg:w-full lg:top-0 lg:-mt-1"
      >
        {nowPlayingMovies.map((movies, i) => (
          <SwiperSlide key={i}>
            <img className="" src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`}></img>
>>>>>>> 96fea41977077dceda43ca01ea5be8f6ea3f3d65
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
