import { createSelector } from '@reduxjs/toolkit';
import { RootStateType } from '@/store';
import { convertToSelectData } from '@/components/utils/adapters';

export const getGenresRaw = (state: RootStateType) => state.genres.genres;
export const getGenres = createSelector([getGenresRaw], (data) => convertToSelectData(data));

export const getMovies = (state: RootStateType) => state.movies.movies;
export const getTotal = (state: RootStateType) => state.movies.total;

export const getFilters = (state: RootStateType) => state.filter;
export const getMovie = (state: RootStateType) => state.movie.item;
export const getRated = (state: RootStateType) => state.rated.items;
export const getRatedFetched = (state: RootStateType) => state.rated.fetched;
export const getRatedFilter = (state: RootStateType) => state.rated.filter;
export const getMovieStatus = (state: RootStateType) => state.movie.status;
export const getFilterGenres = (state: RootStateType) => state.filter.genres;
export const getFilterYears = (state: RootStateType) => state.filter.years;
export const getFilterSort = (state: RootStateType) => state.filter.sortBy;
export const getFilterRatingFrom = (state: RootStateType) => state.filter.ratingFrom;
export const getFilterRatingTo = (state: RootStateType) => state.filter.ratingTo;
