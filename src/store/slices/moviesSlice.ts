import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API } from '@/api';
import { APP_STATUSES, STATUSES } from '@/constants';
import { InitialMoviesType } from '@/types/initialSlices';
import { filmMock } from '@/types/filmMock';
import { ResponseMock } from '@/types/mock';
import App from '@/App';

const initialState: InitialMoviesType = {
  movies: [],
  ratedMovies: {},
  page: 0,
  isLoading: false,
  total: 0,
  status: APP_STATUSES.IDLE,
};

export const fetchMovies = createAsyncThunk('movies/fetch', async (query: string, thunkAPI) => {
  try {
    const concerts = await API.fetchMovies(query);
    if (concerts.status === STATUSES.OK) {
      return concerts.data;
    }
    return thunkAPI.rejectWithValue('fetch error');
  } catch (error) {
    return thunkAPI.rejectWithValue('fetch error');
  }
});

export const moviesSlice = createSlice({
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.fulfilled, (state, action) => {
        const { payload } = action;
        state.movies = payload.results;
        state.total = payload.total_pages;
        state.status = APP_STATUSES.SUCCESS;
      })
      .addCase(fetchMovies.pending, (state) => {
        state.status = APP_STATUSES.LOADING;
      })
      .addCase(fetchMovies.rejected, (state) => {
        state.status = APP_STATUSES.ERROR;
      });
  },
  initialState,
  name: 'movies',
  reducers: {
    setMovieStatus(state, { payload }) {
      state.status = payload;
    },
  },
});
export const { setMovieStatus } = moviesSlice.actions;
