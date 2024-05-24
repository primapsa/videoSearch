import React, { useEffect, useState } from 'react';
import { SimpleGrid, Stack } from '@mantine/core';
import { useDispatch, useSelector } from 'react-redux';
import { SearchBar } from '@/components/searchBar';
import { getRated, getRatedFetched, getRatedFilter } from '@/store/selectors';
import { ITEM_PER_PAGE, PAGE, TYPE } from '@/constants';
import { createMovieProps } from '@/components/utils';
import usePage from '@/hooks/usePage';
import { transformRatedQuery } from '@/components/utils/adapters';
import { addToRated, fetchRated } from '@/store/slices/ratedSlice';
import { AppDispatchType } from '@/store';
import { MovieCard } from '@/components/movieCard';
import { MovieType } from '@/types/movie';
import { Pagination } from '@/components/pagination';
import s from './styles.module.scss';

const Rated = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState<number>(PAGE.INIT);
  const rated = useSelector(getRated);
  const fetched = useSelector(getRatedFetched);
  const filter = useSelector(getRatedFilter);
  const ratedId = Object.keys(rated).map((id) => Number(id));
  const total = filter ? fetched?.length || 0 : ratedId.length;
  const getFilteredData = (movies: MovieType[] | null) => {
    if (!movies) return null;
    return filter ? movies.slice(page - 1, Math.min(total, page + ITEM_PER_PAGE)) : movies;
  };

  const onPageChange = (currentPage: number) => {
    setPage(currentPage);
  };

  useEffect(() => {
    if (filter) return;
    const ids = ratedId.slice(page - 1, Math.min(total, page + ITEM_PER_PAGE));
    // dispatch<AppDispatchType>(addToRated({ id: 157336, rate: 5 }));
    dispatch<AppDispatchType>(fetchRated({ ids, query: '' }));
  }, [page]);

  useEffect(() => {
    filter && setPage(PAGE.INIT);
    const query = transformRatedQuery({ filter });
    dispatch<AppDispatchType>(fetchRated({ ids: ratedId, query }));
  }, [filter]);

  const ratedMovies = getFilteredData(fetched)?.map((movieItem) => (
    <MovieCard {...createMovieProps(movieItem, TYPE.MOVIES)} />
  ));
  return (
    <Stack className={s.rated}>
      <SearchBar />
      {ratedMovies && (
        <SimpleGrid className={s.grid} cols={2}>
          {ratedMovies}
        </SimpleGrid>
      )}
      <Pagination total={total} onChange={onPageChange} page={page} />
    </Stack>
  );
};

export default Rated;
