import { APP_STATUSES, TYPE } from '@/constants';
import { GenreType, MovieType } from '@/types/movie';
import { ADAPTER } from '@/components/utils/adapters';

export type MovieCardType = (typeof TYPE)[keyof typeof TYPE];
export type MovieCardProps = {
  id: number;
  type: MovieCardType;
  movie: MovieInfoType;
  rate: RateType;
  extra?: MovieExtraInfo;
  genres: string[];
  onVote: (id: number) => void;
  vote: number;
  source: string;
};
export type RatingProps = {
  rate: RateType;
};
export type MovieExtraInfo = {
  runtime: number;
  release: string;
  budget: number;
  revenue: number;
};
export type RateType = {
  average: number;
  count: number;
};
export type MovieInfoType = {
  title: string;
  year: string;
};
export type MovieTypeShort = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
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

export type MoviesResponseType = {
  page: number;
  results: MovieType[];
  total_pages: number;
  total_results: number;
};
export type AppStatus = (typeof APP_STATUSES)[keyof typeof APP_STATUSES];
export type ResponseGenresType = {
  genres: GenreType[];
};
export type MultiselectDaraType = {
  value: string;
  label: string;
};
export type StateRecord = {
  [key: string]: any;
};
export type PaginationProps = {
  page: number;
  total: number;
  onChange: (page: number) => void;
};
export type PaginationOnPageType = {
  selected: number;
};

export type AdapterType = (typeof ADAPTER)[keyof typeof ADAPTER];