export const TYPE = {
  MOVIES: 'movies',
  MOVIE: 'movie',
} as const;
export const YEAR_FROM = 1994;
export const RATING = {
  from: 1,
  to: 10,
};
export const API_BASE_URL = 'https://proxy-psa.vercel.app/prx/';
export const STATUSES = {
  OK: 200,
};

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
  INIT: 0,
};
export const ERRORS = {
  FETCH: 'fetch error!',
};
