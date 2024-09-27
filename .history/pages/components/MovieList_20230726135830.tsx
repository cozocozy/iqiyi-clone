import React from "react";

type Props = {};

function MovieList({ movies }: Props) {
  return (
    <div>
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
        className="mySwiper  w-full h-[18rem] mt-12 bg-gradient-to-t  from-white contents[hello] to-zinc-900 opacity-80 lg:h-[50rem] lg:top-0 lg:-mt-1"
      ></Swiper>
      <img className="h-40" src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`}></img>
      <div>{movies.title}</div>
    </div>
  );
}
export default MovieList;
