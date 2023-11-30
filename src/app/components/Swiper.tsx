// Import Swiper React components
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

type Data = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: [number, number, number];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export default function SwiperComponent({
  data,
}: {
  data: Data[] | undefined;
}) {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {data?.map((item) => {
          return (
            <SwiperSlide key={item.id} className="text-white group">
              <Image
                width={200}
                height={200}
                className="w-full"
                src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                alt={item.original_title}
              />
              <div className="swip-content">
                <div className="bg-yellow-400 p-2 text-gray-900">exciting</div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
