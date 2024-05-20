import { GenreType } from '@/types/movie';
import { MultiselectDaraType, StateRecord } from '@/types';
import { SORT_INIT } from '@/constants';

export const convertToSelectData = (genres: GenreType[]): MultiselectDaraType[] =>
  [...genres].map((genre) => ({ value: String(genre.id), label: genre.name }));

export const transformToQuery = (queryObj: StateRecord) => {
  const query = ['language=en-US'];
  Object.keys(queryObj).forEach((field) => {
    if (field in ADAPTER) {
      // @ts-ignore
      query.push(`${ADAPTER[field]}=${queryObj[field]}`);
    }
  });
  return query.join('&');
};

export const ADAPTER = {
  genres: 'with_genres',
  years: 'primary_release_year',
  ratingFrom: 'vote_average.lte',
  ratingTo: 'vote_average.gte',
  sortBy: 'sort_by',
  page: 'page',
};
