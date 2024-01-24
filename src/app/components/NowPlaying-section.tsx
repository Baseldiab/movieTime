// Import Swiper React components

import getTopRated from "../../../lib/getTopRated";
import SwiperComponent from "./Swiper";

type MovieResult = {
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
export default async function NowPlayingSec() {
  const moviesData: Promise<NowPlaying> = getTopRated("1");
  const data = await moviesData;
  const dataResults: MovieResult[] | undefined = data.results;
  return (
    <>
      <SwiperComponent data={dataResults} />
    </>
  );
}
