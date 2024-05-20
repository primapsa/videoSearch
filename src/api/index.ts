import axios from 'axios';

import { MoviesResponseType, ResponseGenresType } from '@/types';
import { API_BASE_URL } from '@/constants';
import { MovieWithTrailer } from '@/types/movie';

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMThlZjVjOTFjNDkzNDA5NGY2ZTk3YzUzNDEwYjQ1MyIsInN1YiI6IjY2M2Y5NmVjMTMyNzIxZjUxODIxMGJjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MHRIcWru0tXRfowkGqX1dJnfJoTCMAnKn3WDWY5ilYQ',
  },
});

export const API = {
  fetchMovies(params: string) {
    const query: string = params ? `?${params}` : '';
    return axiosInstance.get<MoviesResponseType>(`discover/movie${query}`);
  },
  fetchGenres() {
    return axiosInstance.get<ResponseGenresType>('genre/movie/list');
  },
  fetchMovie(id: number) {
    return axiosInstance.get<MovieWithTrailer>(`movie/${id}&append_to_response=videos`);
  },
};
