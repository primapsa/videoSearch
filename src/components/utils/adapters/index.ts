import { GenreType } from '@/types/movie';
import { MultiselectDaraType, StateRecord } from '@/types';

export const convertToSelectData = (genres: GenreType[]): MultiselectDaraType[] =>
  [...genres].map((genre) => ({ value: String(genre.id), label: genre.name }));

const transfrom = (queryObj: StateRecord, adapter: StateRecord, query: string[] = []) => {
  Object.keys(queryObj).forEach((field) => {
    if (field in adapter) {
      queryObj[field] && query.push(`${adapter[field]}=${queryObj[field]}`);
    }
  });
  return query?.length ? query.join('&') : '';
};
export const transformToQuery = (queryObj: StateRecord) =>
  transfrom(queryObj, ADAPTER, ['language=en-US']);

export const transformRatedQuery = (queryObj: StateRecord) => transfrom(queryObj, ADAPTER_RATED);
export const ADAPTER = {
  genres: 'with_genres',
  years: 'primary_release_year',
  ratingFrom: 'vote_average.lte',
  ratingTo: 'vote_average.gte',
  sortBy: 'sort_by',
  page: 'page',
};
export const ADAPTER_RATED = {
  filter: 'original_title',
  apiPage: 'page',
};
