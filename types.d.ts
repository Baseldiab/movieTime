type TopRated = {
  page?: number;
  results?: [
    {
      adult?: boolean;
      backdrop_path?: string;
      genre_ids?: [number, number];
      id?: number;
      original_language?: string;
      original_title?: string;
      overview?: string;
      popularity?: number;
      poster_path?: string;
      release_date?: string;
      title?: string;
      video?: boolean;
      vote_average?: number;
      vote_count?: number;
    }
  ];
  total_pages?: number;
  total_results?: number;
};

type Upcoming = {
  dates?: {
    maximum?: string;
    minimum?: string;
  };
  page?: number;
  results?: [
    {
      adult?: boolean;
      backdrop_path?: string;
      genre_ids?: [number, number, number, number, number];
      id?: number;
      original_language?: string;
      original_title?: string;
      overview?: string;
      popularity?: number;
      poster_path?: string;
      release_date?: string;
      title?: string;
      video?: boolean;
      vote_average?: number;
      vote_count?: number;
    }
  ];
  total_pages?: number;
  total_results?: number;
};

type Popular = {
  page?: number;
  results?: [
    {
      adult?: boolean;
      backdrop_path?: string;
      genre_ids?: [number, number, number];
      id?: number;
      original_language?: string;
      original_title?: string;
      overview?: string;
      popularity?: number;
      poster_path?: string;
      release_date?: string;
      title?: string;
      video?: boolean;
      vote_average?: number;
      vote_count?: number;
    }
  ];
  total_pages?: number;
  total_results?: number;
};

type NowPlaying = {
  dates?: {
    maximum: string;
    minimum: string;
  };
  page?: number;
  results?: [
    {
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
    }
  ];
  total_pages?: number;
  total_results?: number;
};
