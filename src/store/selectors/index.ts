import { RootStateType } from '@/store';
import { convertToSelectData } from '@/components/utils/adapters';

export const getMovies = (state: RootStateType) => state.movies.movies;
export const getTotal = (state: RootStateType) => state.movies.total;
export const getGenres = (state: RootStateType) => convertToSelectData(state.genres.genres);
export const getFilters = (state: RootStateType) => state.filter;
export const getMovie = (state: RootStateType) => state.movie;
export const getFilterGenres = (state: RootStateType) => state.filter.genres;
export const getFilterYears = (state: RootStateType) => state.filter.years;
export const getFilterSort = (state: RootStateType) => state.filter.sortBy;
export const getFilterRatingFrom = (state: RootStateType) =>
  state.filter.ratingFrom ? String(state.filter.ratingFrom) : null;
export const getFilterRatingTo = (state: RootStateType) =>
  state.filter.ratingFrom ? String(state.filter.ratingTo) : null;
