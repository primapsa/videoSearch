import React, { useEffect, useState } from 'react';
import { SimpleGrid, Group } from '@mantine/core';
import { useDispatch, useSelector } from 'react-redux';
import queryString from 'query-string';
import { useLocation, useNavigate } from 'react-router-dom';
import s from './styles.module.scss';
import { MovieCard } from '@/components/movieCard';
import { PAGE, TYPE } from '@/constants';
import { AdapterType, MovieInfoType, RateType } from '@/types';
import { AppDispatchType } from '@/store';
import { getMovies, getTotal } from '@/store/selectors';
import { fetchMovies } from '@/store/slices/moviesSlice';
import Filter from '@/components/filter/filter';
import { transformToQuery } from '@/components/utils/adapters';
import Pagination from '@/components/pagination/pagination';

const Movies = () => {
  const history = useNavigate();
  const movies = useSelector(getMovies);
  // const total = useSelector(getTotal);
  const total = 100;
  const dispatch = useDispatch();
  const loacation = useLocation();
  const query = queryString.parse(loacation.search, {
    arrayFormat: 'bracket',
  }) as Record<string, string | number>;
  const [pages, setPages] = useState<number>(Number(query?.page) || PAGE.INIT);

  useEffect(() => {
    // const query = queryString.parse(loacation.search, { arrayFormat: 'bracket' });
    console.log('TRANS', query);
    const queryToFetch = transformToQuery(query);
    //!!queryToFetch && dispatch<AppDispatchType>(fetchMovies(queryToFetch));
  }, [loacation.search]);
  const onPageCnange = (page: number) => {
    setPages(page);
    query.page = String(page);
    const queryPaged = queryString.stringify(
      { ...query },
      { arrayFormat: 'bracket', skipNull: true }
    );
    history(`?${queryPaged}`, { replace: true });
  };
  const moviesList = movies.map((movie) => {
    const movieInfo: MovieInfoType = { title: movie.title, year: movie.release_date };
    const rate: RateType = { average: movie.vote_average, count: movie.vote_count };
    //const genres = movie.genre_ids.map((e) => String(e));
    const genres = ['1', '2', '3'];
    const onVoteHandler = (id: number) => {
      console.log(id);
    };

    const vote = 0; // get from localstorage
    return (
      <MovieCard
        id={movie.id}
        type={TYPE.MOVIES}
        movie={movieInfo}
        rate={rate}
        genres={genres}
        onVote={onVoteHandler}
        vote={vote}
        source={movie.poster_path}
      />
    );
  });
  return (
    <>
      <Filter />
      <SimpleGrid cols={2}>{moviesList}</SimpleGrid>
      <Pagination page={pages} total={total} onChange={onPageCnange} />
    </>
  );
};

export default Movies;
