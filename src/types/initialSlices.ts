import { GenreType, MovieType, MovieWithTrailer, RatedMovie } from '@/types/movie';
import { AppStatus, MovieTypeShort } from '@/types/index';

export type InitialMoviesType = {
  movies: MovieTypeShort[];
  ratedMovies: RatedMovie;
  page: number;
  isLoading: boolean;
  total: number;
  status: AppStatus;
};
export type InitialFilterType = {
  genres: string[];
  years: string | null;
  ratingFrom: number | null;
  ratingTo: number | null;
  sortBy: string;
};
export type InitialGenresType = {
  genres: GenreType[];
};
export type InitialMovieType = {
  item: MovieWithTrailer | null;
  status: AppStatus;
};
export type InitialRatedType = {
  items: Record<string, number>;
  filter: string | null;
  fetched: MovieType[] | null;
  status: AppStatus;
};
