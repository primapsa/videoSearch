import React, { useEffect, useState } from 'react';
import { SimpleGrid, Group, Stack, Box, Title } from '@mantine/core';
import { useDispatch, useSelector } from 'react-redux';
import queryString from 'query-string';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import s from './styles.module.scss';
import { MovieCard } from '@/components/movieCard';
import { PAGE, PATH, TYPE } from '@/constants';
import { AdapterType, ModalData, ModalOnSave, MovieInfoType, RateType } from '@/types';
import { AppDispatchType } from '@/store';
import { getGenres, getGenresRaw, getMovies, getRated, getTotal } from '@/store/selectors';
import { fetchMovies } from '@/store/slices/moviesSlice';
import Filter from '@/components/filter/filter';
import { transformToQuery } from '@/components/utils/adapters';
import Pagination from '@/components/pagination/pagination';
import useMovieCard from '@/hooks/useMovieCard';
import { addToRated } from '@/store/slices/ratedSlice';
import { Modal } from '@/components/modal';
import useRatedModal from '@/hooks/useRatedModal';
import { GenreType } from '@/types/movie';
import { getGenresName } from '@/components/utils';

const Movies = () => {
  const history = useNavigate();
  const movies = useSelector(getMovies);
  const votes = useSelector(getRated);
  const genres = useSelector(getGenresRaw);
  // const total = useSelector(getTotal);
  const total = 100;
  const dispatch = useDispatch();
  const loacation = useLocation();
  const query = queryString.parse(loacation.search, {
    arrayFormat: 'bracket',
  }) as Record<string, string | number>;
  const [pages, setPages] = useState<number>(Number(query?.page) || PAGE.INIT);
  const { modal, setModal, onModalClose, onModalSave } = useRatedModal();

  useEffect(() => {
    // const query = queryString.parse(loacation.search, { arrayFormat: 'bracket' });
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
    // const abc = useMovieCard(movie, TYPE.MOVIE);
    const vote = votes[movie.id] || 0;
    const movieInfo: MovieInfoType = { title: movie.title, year: movie.release_date };
    const rate: RateType = { average: movie.vote_average, count: movie.vote_count };
    const genresNames = getGenresName(genres, movie.genre_ids);

    const onVoteHandler = (id: number) => {
      setModal({ id, name: movie.original_title, rating: vote });
    };
    if (id > 5) return;
    // get from localstorage
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
  return (
    <Stack className={s.movies}>
      <Title className={s.title} order={2}>
        Movies
      </Title>
      <Filter />
      <SimpleGrid cols={2}>{moviesList}</SimpleGrid>
      <Pagination className={s.pagination} page={pages} total={total} onChange={onPageCnange} />
      {modal && <Modal {...modal} onClose={onModalClose} onSave={onModalSave} />}
    </Stack>
  );
};

export default Movies;
