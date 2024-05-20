import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API } from '@/api';
import { APP_STATUSES, ERRORS, STATUSES } from '@/constants';
import { InitialMovieType } from '@/types/initialSlices';

const initialState: InitialMovieType = {
  item: null,
  status: APP_STATUSES.IDLE,
};

export const fetchMovie = createAsyncThunk(
  'movie/fetch',
  async (id: number, { rejectWithValue }) => {
    try {
      const movie = await API.fetchMovie(id);
      if (movie.status === STATUSES.OK) {
        return movie.data;
      }
      return rejectWithValue(ERRORS.FETCH);
    } catch (error) {
      return rejectWithValue(ERRORS.FETCH);
    }
  }
);

export const movieSlice = createSlice({
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovie.fulfilled, (state, action) => {
        const { payload } = action;
        state.item = payload;
        state.status = APP_STATUSES.SUCCESS;
      })
      .addCase(fetchMovie.rejected, (state, _) => {
        state.status = APP_STATUSES.ERROR;
      })
      .addCase(fetchMovie.pending, (state, _) => {
        state.status = APP_STATUSES.LOADING;
      });
  },
  initialState,
  name: 'movie',
  reducers: {
    clearMovie(state) {
      state.item = null;
      state.status = APP_STATUSES.IDLE;
    },
    setMovieStatus(state, { payload }) {
      state.status = payload;
    },
  },
});
export const { clearMovie, setMovieStatus } = movieSlice.actions;
