import {
  BreadcrumpsType,
  MovieCardProps,
  MovieCardType,
  MovieExtraInfo,
  MovieInfoType,
  MovieTypeShort,
  RateType,
  StateRecord,
} from '@/types';
import { API_ITEM_PER_PAGE, BREADCRUMBS, ITEM_PER_PAGE, TRAILER_TYPE, TYPE } from '@/constants';
import { GenreType, MovieType, MovieWithTrailer, TrailerContainer } from '@/types/movie';
import { InitialFilterType } from '@/types/initialSlices';

export const formattViews = (views: number): string => {
  if (views >= 1000000) {
    return `(${(views / 1000000).toFixed(1)}M)`;
  }
  if (views >= 1000) {
    return `(${(views / 1000).toFixed(1)}K)`;
  }
  return `(${views.toString()})`;
};
export const generateNumbers = (from: number, to: number): string[] => {
  const numbers = [];
  for (let year = from; year <= to; year += 1) {
    numbers.push(String(year));
  }
  return numbers;
};
export const generateYears = (from: number): string[] => {
  const current = new Date().getFullYear();
  return generateNumbers(from, current);
};
export const checkIsActiveFilter = (filters: InitialFilterType) => {
  const { sortBy, ...cutted } = filters;
  const values = Object.values(cutted);
  return !!values.flat().filter((value) => value)?.length;
};
const compareObj = (first: any, second: any) => {
  JSON.stringify(first) === JSON.stringify(second);
};
export const compareStates = (init: StateRecord, next: StateRecord): boolean => {
  for (const field of Object.keys(next)) {
    if (!(field in init && compareObj(init[field], next[field]))) {
      return false;
    }
  }
  return true;
};
export const createBreadcrumbs = (item: string): BreadcrumpsType[] => {
  const next = { title: item };
  return [...BREADCRUMBS, next];
};
export const getTrailer = (videos: TrailerContainer): string | null => {
  const trailers = videos?.videos?.results;
  const trailer = trailers.find((item) => item.type === TRAILER_TYPE.TRAILER);
  return trailer ? trailer.key : null;
};
export const getGenresName = (genres: GenreType[], genresId: number[]): string[] =>
  genresId.reduce((names, id) => {
    const genre = genres.find((e) => e.id === id);
    return genre ? [...names, genre.name] : names;
  }, [] as string[]);
export const getYear = (date: string) => new Date(date).getFullYear();
export const limitArray = (arr: string[], limit: number): string[] =>
  limit ? arr.slice(0, Math.min(limit, arr.length)) : arr;
export const getApiPage = (current: number) => {
  const multply = current * ITEM_PER_PAGE;
  return Math.floor(API_ITEM_PER_PAGE / multply);
};
export const createMovieProps = (
  movie: MovieType | MovieWithTrailer,
  type: MovieCardType
): MovieCardProps => {
  const vote = 0; // Get from localStorage
  const genres = type === TYPE.MOVIE ? movie.genres.map((genre) => genre.name) : []; // write fn compare
  const onVote = () => {
    console.log('VOTE!');
  };
  const movieInfo: MovieInfoType = { title: movie.title, year: movie.release_date };
  const rate: RateType = { average: movie.vote_average, count: movie.vote_count };
  const extra: MovieExtraInfo = {
    budget: movie.budget,
    runtime: movie.runtime,
    revenue: movie.revenue,
    release: movie.release_date,
  };
  return {
    id: movie.id,
    movie: movieInfo,
    rate,
    source: movie.poster_path,
    vote,
    type,
    genres,
    onVote,
    extra,
  };
};
