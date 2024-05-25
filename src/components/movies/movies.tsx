import React, { useEffect, useState } from 'react';
import { SimpleGrid, Stack, Title } from '@mantine/core';
import { useDispatch, useSelector } from 'react-redux';
import queryString from 'query-string';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import s from './styles.module.scss';
import { MovieCard } from '@/components/movieCard';
import { APP_STATUSES, ITEM_PER_PAGE_MOVIES, MAX_PAGES, PATH, TYPE } from '@/constants';
import { MovieInfoType, RateType } from '@/types';
import { AppDispatchType } from '@/store';
import { getGenresRaw, getMovies, getMoviesStatus, getRated, getTotal } from '@/store/selectors';
import { fetchMovies } from '@/store/slices/moviesSlice';
import Filter from '@/components/filter/filter';
import { transformToQuery } from '@/components/utils/adapters';
import { Pagination } from '@/components/pagination';
import { Modal } from '@/components/modal';
import useRatedModal from '@/hooks/useRatedModal';
import { getGenresName } from '@/components/utils';
import { withEmptyContent, withLoading } from '@/HOC';
import { EmptyMovies } from '@/components/emptyContent';

const Movies = () => {
  const history = useNavigate();
  const movies = useSelector(getMovies);
  const votes = useSelector(getRated);
  const genres = useSelector(getGenresRaw);
  const total = useSelector(getTotal);
  const status = useSelector(getMoviesStatus);
  const dispatch = useDispatch();
  const loacation = useLocation();
  const query = queryString.parse(loacation.search, {
    arrayFormat: 'bracket',
  }) as Record<string, string | number>;
  const [pages, setPages] = useState<number>(Number(query?.page) || 0);
  const { modal, setModal, onModalClose, onModalSave } = useRatedModal();
  const totalPages = Math.min(Math.ceil(total / ITEM_PER_PAGE_MOVIES), MAX_PAGES);
  const isLoading = status === APP_STATUSES.LOADING;
  const isEmptyState = status === APP_STATUSES.SUCCESS && !movies.length;

  useEffect(() => {
    const queryToFetch = transformToQuery(query);
    !!queryToFetch && dispatch<AppDispatchType>(fetchMovies(queryToFetch));
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

  const moviesList = movies.map((movie, id) => {
    const vote = votes[movie.id] || 0;
    const movieInfo: MovieInfoType = { title: movie.title, year: movie.release_date };
    const rate: RateType = { average: movie.vote_average, count: movie.vote_count };
    const genresNames = getGenresName(genres, movie.genre_ids);

    const onVoteHandler = (idv: number) => {
      setModal({ id: idv, name: movie.original_title, rating: vote });
    };

    return (
      <Link className={s.link} to={`${PATH.MOVIE}${movie.id}`} key={movie.id}>
        <MovieCard
          id={movie.id}
          type={TYPE.MOVIES}
          movie={movieInfo}
          rate={rate}
          genres={genresNames}
          onVote={onVoteHandler}
          vote={vote}
          source={movie.poster_path}
        />
      </Link>
    );
  });
  const MoviesList = () => (
    <>
      <SimpleGrid cols={2}>{moviesList}</SimpleGrid>
      <Pagination
        className={s.pagination}
        page={pages}
        total={totalPages}
        onChange={onPageCnange}
      />
    </>
  );
  const MoviesListWithState = withEmptyContent(MoviesList, EmptyMovies, isEmptyState);
  const MovieWithLoading = withLoading(MoviesListWithState, isLoading);

  return (
    <>
      <Stack className={s.movies}>
        <Title className={s.title} order={2}>
          Movies
        </Title>
        <Filter />
        <MovieWithLoading />
      </Stack>
      {modal && <Modal {...modal} onClose={onModalClose} onSave={onModalSave} />}
    </>
  );
};

export default Movies;
