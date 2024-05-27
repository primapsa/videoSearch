import axios from 'axios';

import { MoviesResponseType, ResponseGenresType } from '@/types';
import { API_BASE_URL } from '@/constants';
import { MovieType, MovieWithTrailer } from '@/types/movie';

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

export const API = {
  fetchMovies(params: string) {
    const query: string = params ? `?${params}` : '';
    return axiosInstance.get<MoviesResponseType>(`/movies${query}`);
  },
  fetchGenres() {
    return axiosInstance.get<ResponseGenresType>('/genres');
  },
  fetchMovie(id: number) {
    return axiosInstance.get<MovieWithTrailer>(`/detail/movie/${id}?append_to_response=videos`);
  },
  fetchRated(id: number, params: string) {
    const query = params ? `?${params}` : '';
    return axiosInstance.get<MovieType>(`/detail/movie/${id}${query}`);
  },
};
