import { BreadcrumpsType } from '@/types';

export const TYPE = {
  MOVIES: 'movies',
  MOVIE: 'movie',
} as const;
export const YEAR_FROM = 1994;
export const RATING = {
  from: 1,
  to: 10,
};
const API_BASE = 'https://proxy-psa.vercel.app/';
export const API_BASE_URL = `${API_BASE}prx/`;
export const IMAGE_HOST = `${API_BASE}/img/w500`;
export const IMAGE_HOST_SVG = `${API_BASE}/img/original`;
export const STATUSES = {
  OK: 200,
};
export const GENRES_LIMIT = 3;
export const APP_STATUSES = {
  LOADING: 'loading',
  ERROR: 'error',
  IDLE: 'idle',
  SUCCESS: 'success',
};
export const SORT_INIT = 'popularity.desc';
export const SORT = [
  { value: 'original_title.asc', label: 'Original Title (Ascending)' },
  { value: 'original_title.desc', label: 'Original Title (Descending)' },
  { value: 'popularity.asc', label: 'Least Popular' },
  { value: 'popularity.desc', label: 'Most Popular' },
  { value: 'revenue.asc', label: 'Lowest Revenue' },
  { value: 'revenue.desc', label: 'Highest Revenue' },
  { value: 'primary_release_date.asc', label: 'Oldest Release Date' },
  { value: 'primary_release_date.desc', label: 'Newest Release Date' },
  { value: 'title.asc', label: 'Title (Ascending)' },
  { value: 'title.desc', label: 'Title (Descending)' },
  { value: 'vote_average.asc', label: 'Lowest Vote Average' },
  { value: 'vote_average.desc', label: 'Highest Vote Average' },
  { value: 'vote_count.asc', label: 'Least Votes' },
  { value: 'vote_count.desc', label: 'Most Votes' },
];
export const PAGINATE = {
  LABEL: 0,
  RANGE: 3,
  MARGIN: 0,
};
export const PAGE = {
  INIT: 1,
};
export const ERRORS = {
  FETCH: 'fetch error!',
};

export const BREADCRUMBS: BreadcrumpsType[] = [{ title: 'Movies', href: '../' }];
export const TRAILER_TYPE = {
  TRAILER: 'Trailer',
};
export const ITEM_PER_PAGE = 4;
export const ITEM_PER_PAGE_MOVIES = 20;
export const MAX_PAGES = 500;
export const API_ITEM_PER_PAGE = 20;
export const PATH = {
  MOVIE: 'movie/',
};
export const NUMBER_RATING = {
  MIN: 1,
  MAX: 10,
  STEP: 1,
};
export const VIDEO_URL = 'https://www.youtube.com/embed/';
