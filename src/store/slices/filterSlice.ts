import { createSlice } from '@reduxjs/toolkit';
import { SORT_INIT } from '@/constants';
import { InitialFilterType } from '@/types/initialSlices';

const initialState: InitialFilterType = {
  genres: [],
  years: null,
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
      state.ratingFrom = Number(payload);
    },
    setRatingTo(state, { payload }) {
      state.ratingTo = Number(payload);
    },
    setSortBy(state, { payload }) {
      state.sortBy = payload;
    },
    resetFilter(state) {
      state.genres = [];
      state.years = null;
      state.ratingFrom = null;
      state.ratingTo = null;
      state.sortBy = SORT_INIT;
    },
    setFilters(state, { payload }) {
      for (const field of Object.keys(payload)) {
        if (field in state) {
          if (['ratingFrom', 'ratingTo'].includes(field)) {
            // @ts-ignore
            state[field] = Number(payload[field]);
          } else {
            // @ts-ignore
            state[field] = payload[field];
          }
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
