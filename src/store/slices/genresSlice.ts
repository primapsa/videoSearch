import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API } from '@/api';
import { ERRORS, STATUSES } from '@/constants';
import { InitialGenresType } from '@/types/initialSlices';
import { GenresMock } from '@/types/genresMock';

const initialState: InitialGenresType = {
  genres: GenresMock,
};

export const fetchGenres = createAsyncThunk('genres/fetch', async (_, { rejectWithValue }) => {
  try {
    const genres = await API.fetchGenres();
    if (genres.status === STATUSES.OK) {
      return genres.data;
    }
    return rejectWithValue(ERRORS.FETCH);
  } catch (error) {
    return rejectWithValue(ERRORS.FETCH);
  }
});

export const genresSlice = createSlice({
  extraReducers: (builder) => {
    builder.addCase(fetchGenres.fulfilled, (state, action) => {
      const { payload } = action;
      state.genres = payload.genres;
    });
  },
  initialState,
  name: 'genres',
  reducers: {},
});
