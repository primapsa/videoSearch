import React, { useCallback, useEffect, useMemo } from 'react';
import { Button, Group, MultiSelect, NumberInput, Select, Stack } from '@mantine/core';
import { useDispatch, useSelector } from 'react-redux';
import queryString from 'query-string';

import { useLocation, useNavigate } from 'react-router-dom';
import classNames from 'classnames';
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
import { checkIsActiveFilter, compareStates, generateYears } from '@/components/utils';
import { NUMBER_RATING, SORT, YEAR_FROM } from '@/constants';
import s from './styles.module.scss';
import IconDown from '@/assets/icons/iconDown';
import ToggleDropdown from '@/components/pattern/toggleDropdown';

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

  const genresHandler = useCallback((genre: string[]) => dispatch(setGenres(genre)), []);
  const releaseHandler = useCallback((year: string | null) => dispatch(setYears(year)), []);
  const ratingFromHandler = useCallback(
    (rate: string | number) => dispatch(setRatinFrom(Number(rate))),
    []
  );

  const ratingToHandler = useCallback(
    (rate: string | number) => dispatch(setRatingTo(Number(rate))),
    []
  );
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

  const placholderValue = (params: any, placeholder: string) => (!params ? placeholder : '');
  return (
    <Stack className={s.filters}>
      <Group className={s.line}>
        <ToggleDropdown>
          {({ menu, setMenu }) => (
            <MultiSelect
              classNames={{
                input: classNames(s.input, { [s.input_selected]: menu }),
                pill: s.pill,
                pillsList: s.pilllist,
                option: s.selected,
                label: s.label,
                wrapper: s.wrapper,
              }}
              label="Genres"
              placeholder={placholderValue(genresFilter.length, 'Select genre')}
              data={genres}
              rightSection={menu ? <IconDown up /> : <IconDown />}
              value={genresFilter}
              onChange={genresHandler}
              maxValues={3}
              onDropdownClose={() => setMenu(false)}
              onDropdownOpen={() => setMenu(true)}
            />
          )}
        </ToggleDropdown>

        <ToggleDropdown>
          {({ menu, setMenu }) => (
            <Select
              classNames={{
                input: classNames(s.input, { [s.input_selected]: menu }),
                option: s.selected,
                label: s.label,
                wrapper: s.wrapper,
              }}
              label="Release year"
              placeholder="Select release year"
              value={yearsFilter}
              onChange={releaseHandler}
              data={years}
              rightSection={menu ? <IconDown up /> : <IconDown />}
              onDropdownClose={() => setMenu(false)}
              onDropdownOpen={() => setMenu(true)}
            />
          )}
        </ToggleDropdown>
        <Group className={s.rating}>
          <NumberInput
            classNames={{
              input: classNames(s.input, s.input_rating),
              controls: s.controls,
              label: s.label,
            }}
            label="Ratings"
            placeholder="From"
            value={ratingFromFilter || ''}
            onChange={ratingFromHandler}
            step={NUMBER_RATING.STEP}
            min={NUMBER_RATING.MIN}
            max={Number(ratingToFilter) || NUMBER_RATING.MAX}
          />
          <NumberInput
            classNames={{
              input: classNames(s.input, s.input_rating),
              controls: s.controls,
              label: s.label,
            }}
            placeholder="To"
            value={ratingToFilter || ''}
            onChange={ratingToHandler}
            step={NUMBER_RATING.STEP}
            min={Math.max(NUMBER_RATING.MIN, Number(ratingFromFilter))}
            max={NUMBER_RATING.MAX}
          />
        </Group>
        <Stack className={s.container}>
          <Button
            className={s.reset}
            onClick={resetHandler}
            disabled={!checkIsActiveFilter(filters)}
          >
            Reset filters
          </Button>
        </Stack>
      </Group>

      <ToggleDropdown>
        {({ menu, setMenu }) => (
          <Select
            classNames={{
              input: classNames(s.input, { [s.input_selected]: menu }),
              option: s.selected,
              wrapper: s.wrapper,
              root: s.input_sort,
              label: s.label,
            }}
            label="Sort by"
            data={SORT}
            value={sortByFilter}
            onChange={sortByHandler}
            rightSection={menu ? <IconDown up /> : <IconDown />}
            onDropdownClose={() => setMenu(false)}
            onDropdownOpen={() => setMenu(true)}
          />
        )}
      </ToggleDropdown>
    </Stack>
  );
};

export default Filter;
