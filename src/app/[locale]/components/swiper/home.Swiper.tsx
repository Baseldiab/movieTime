"use client";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import { Skeleton } from "@mui/material";

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

export default function SwiperComponent({ data }: { data: Data[] | undefined }) {
  // console.log(data);
  return (
    <header className="myContainer">
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={8}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper !justify-center md:!gap-14 !gap-5 
        !grid xl:gird-cols-6 lg:grid-cols-4 md:grid-cols-3 mobile:grid-cols-2 grid-cols-1
        "
      >
        {data?.map((item) => {
          return (
            <SwiperSlide key={item.id} className="text-white">
              <>
                {item ? (
                  <>
                    <div className="slide__content group relative rounded-xl flex justify-center">
                      {item.poster_path ? (
                        // <div className="!grid !grid-cols-5 gap-4">
                        <Image
                          width={260}
                          height={400}
                          className="!min-w-[220px] !max-w-[400px] !h-auto rounded-xl"
                          src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                          alt={`${item.original_title} poster`}
                          loading="lazy"
                        />
                      ) : (
                        // </div>
                        <>
                          <p>{`${item.original_title} poster`}</p>{" "}
                          <Skeleton variant="rectangular" width={200} height={400} />
                        </>
                      )}
                      <div className="slide__text absolute bottom-5 -translate-x-2/4 left-1/2 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                        <div className="bg-yellow-400 p-2 text-gray-900 rounded-full">exciting</div>
                      </div>
                    </div>
                    {/* <div className="swiper-lazy-preloader swiper-lazy-preloader-primary w-full h-56"></div> */}
                  </>
                ) : (
                  <Skeleton variant="rectangular" width={200} height={400} />
                )}
              </>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </header>
  );
}
