import { GenreType, MovieType, RatedMovie } from '@/types/movie';
import { AppStatus, MovieTypeShort } from '@/types/index';

export type InitialMoviesType = {
  movies: MovieType[] | MovieTypeShort[];
  ratedMovies: RatedMovie;
  page: number;
  isLoading: boolean;
  total: number;
  status: AppStatus;
};
export type InitialFilterType = {
  genres: string[];
  years: string[];
  ratingFrom: number | null;
  ratingTo: number | null;
  sortBy: string;
};
export type InitialGenresType = {
  genres: GenreType[];
};
export type InitialMovieType = {
  item: MovieType | MovieTypeShort | null;
  status: AppStatus;
};
