import { createSlice } from '@reduxjs/toolkit';
import { SORT, SORT_INIT } from '@/constants';
import { InitialFilterType } from '@/types/initialSlices';

const initialState: InitialFilterType = {
  genres: [],
  years: [],
  ratingFrom: null,
  ratingTo: null,
  sortBy: SORT_INIT,
};

export const filterSlice = createSlice({
  initialState,
  name: 'filter',
  extraReducers: () => {},
  reducers: {
    setGenres(state, { payload }) {
      state.genres = payload;
    },
    setYears(state, { payload }) {
      state.years = payload;
    },
    setRatinFrom(state, { payload }) {
      state.ratingFrom = payload;
    },
    setRatingTo(state, { payload }) {
      state.ratingTo = payload;
    },
    setSortBy(state, { payload }) {
      state.sortBy = payload;
    },
    resetFilter(state) {
      state.genres = [];
      state.years = [];
      state.ratingFrom = null;
      state.ratingTo = null;
      state.sortBy = SORT_INIT;
    },
    setFilters(state, { payload }) {
      for (const field of Object.keys(payload)) {
        if (field in state) {
          // @ts-ignore
          state[field] = payload[field];
        }
      }
    },
  },
});
export const {
  setGenres,
  setYears,
  setRatinFrom,
  setRatingTo,
  resetFilter,
  setSortBy,
  setFilters,
} = filterSlice.actions;
