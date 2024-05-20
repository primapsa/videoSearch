import React, { useCallback, useEffect, useMemo } from 'react';
import { Group, MultiSelect, Select, Stack, UnstyledButton } from '@mantine/core';
import { useDispatch, useSelector } from 'react-redux';
import queryString from 'query-string';

import { useNavigate, useLocation } from 'react-router-dom';
import {
  getFilterGenres,
  getFilterRatingFrom,
  getFilterRatingTo,
  getFilters,
  getFilterSort,
  getFilterYears,
  getGenres,
} from '@/store/selectors';
import {
  resetFilter,
  setFilters,
  setGenres,
  setRatinFrom,
  setRatingTo,
  setSortBy,
  setYears,
} from '@/store/slices/filterSlice';
import { compareStates, generateNumbers, generateYears } from '@/components/utils';
import { RATING, SORT, YEAR_FROM } from '@/constants';

const Filter = () => {
  const dispatch = useDispatch();
  const genres = useSelector(getGenres);
  const filters = useSelector(getFilters);
  const genresFilter = useSelector(getFilterGenres);
  const yearsFilter = useSelector(getFilterYears);
  const ratingFromFilter = useSelector(getFilterRatingFrom);
  const ratingToFilter = useSelector(getFilterRatingTo);
  const sortByFilter = useSelector(getFilterSort);
  const years = useMemo(() => generateYears(YEAR_FROM), []);
  const rating = useMemo(() => generateNumbers(RATING.from, RATING.to), []);
  const genresHandler = useCallback((genre: string[]) => dispatch(setGenres(genre)), []);
  const releaseHandler = useCallback((year: string[]) => dispatch(setYears(year)), []);
  const ratingFromHandler = useCallback((rate: string | null) => dispatch(setRatinFrom(rate)), []);
  const ratingToHandler = useCallback((rate: string | null) => dispatch(setRatingTo(rate)), []);
  const resetHandler = useCallback(() => dispatch(resetFilter()), []);
  const sortByHandler = useCallback((sort: string | null) => dispatch(setSortBy(sort)), []);
  const history = useNavigate();
  const loacation = useLocation();

  useEffect(() => {
    const query = queryString.stringify(filters, { arrayFormat: 'bracket', skipNull: true });
    history(`?${query}`, { replace: true });
  }, [filters, history]);

  useEffect(() => {
    const filterFromQuery = queryString.parse(loacation.search, { arrayFormat: 'bracket' });
    const isStatesEquals = compareStates(filters, filterFromQuery);
    !isStatesEquals && dispatch(setFilters(filterFromQuery));
  }, [loacation.search]);

  return (
    <Stack>
      <Group>
        <MultiSelect
          label="Genres"
          placeholder="Select genre"
          data={genres}
          value={genresFilter}
          onChange={genresHandler}
        />
        <MultiSelect
          label="Release year"
          placeholder="Select release year"
          value={yearsFilter}
          onChange={releaseHandler}
          data={years}
        />
        <Group>
          <Select
            label="Ratings"
            placeholder="From"
            data={rating}
            value={ratingFromFilter}
            onChange={ratingFromHandler}
          />
          <Select
            placeholder="To"
            value={ratingToFilter}
            data={rating}
            onChange={ratingToHandler}
          />
        </Group>
        <UnstyledButton onClick={resetHandler}>Reset filters</UnstyledButton>
      </Group>
      <Select label="Sort by" data={SORT} value={sortByFilter} onChange={sortByHandler} />
    </Stack>
  );
};

export default Filter;
