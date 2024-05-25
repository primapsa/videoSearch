import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { InitialRatedType } from '@/types/initialSlices';
import { RatedQueryProps } from '@/types';
import { API } from '@/api';
import { APP_STATUSES, ERRORS } from '@/constants';
import { MovieType } from '@/types/movie';

const MOCK = {
  157336: 5,
};
const initialState: InitialRatedType = {
  items: {},
  filter: null,
  fetched: null,
  status: APP_STATUSES.IDLE,
};
export const fetchRated = createAsyncThunk<MovieType[], RatedQueryProps, { rejectValue: string }>(
  'rated/fetch',
  async ({ ids, query }, thunkAPI) => {
    try {
      const fetchPack = ids.map((id) => API.fetchRated(id, query));
      const rated = await Promise.all(fetchPack);
      return rated.filter((rate) => rate.data).map((rate) => rate.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(ERRORS.FETCH);
    }
  }
);
export const ratedSlice = createSlice({
  initialState,
  name: 'rated',
  extraReducers: (builder) => {
    builder
      .addCase(fetchRated.fulfilled, (state, { payload }) => {
        state.fetched = payload;
        state.status = APP_STATUSES.SUCCESS;
      })
      .addCase(fetchRated.pending, (state) => {
        state.status = APP_STATUSES.LOADING;
      })
      .addCase(fetchRated.rejected, (state) => {
        state.status = APP_STATUSES.ERROR;
      });
  },
  reducers: {
    addToRated(state, { payload }) {
      state.items[String(payload.id)] = payload.rating;
    },
    removeFromRated(state, { payload }) {
      state.fetched = state.fetched?.filter((rated) => rated.id !== payload) || null;
      delete state.items[String(payload)];
    },
    setSearchFilter(state, { payload }) {
      state.filter = payload;
    },
    clearSearchFilter(state) {
      state.filter = null;
    },
    setRatedStatus(state, { payload }) {
      state.status = payload;
    },
    clearRatedFetched(state) {
      state.fetched = null;
      state.status = APP_STATUSES.IDLE;
    },
  },
});
export const {
  addToRated,
  removeFromRated,
  clearRatedFetched,
  setRatedStatus,
  setSearchFilter,
  clearSearchFilter,
} = ratedSlice.actions;
