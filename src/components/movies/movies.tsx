import React from 'react';
import { SimpleGrid, Stack, Title } from '@mantine/core';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import s from './styles.module.scss';
import { MovieCard } from '@/components/movieCard';
import { APP_STATUSES, PATH, TYPE } from '@/constants';
import { getGenresRaw, getMovies, getMoviesStatus, getRated, getTotal } from '@/store/selectors';
import Filter from '@/components/filter/filter';
import { Pagination } from '@/components/pagination';
import { Modal } from '@/components/modal';
import useRatedModal from '@/hooks/useRatedModal';
import { createMoviesProps, getGenresName, getTotalPagesLimit } from '@/components/utils';
import { withEmptyContent, withLoading } from '@/HOC';
import { EmptyMovies } from '@/components/emptyContent';
import useMoviesPage from '@/hooks/useMoviesPage';

const Movies = () => {
  const movies = useSelector(getMovies);
  const votes = useSelector(getRated);
  const genres = useSelector(getGenresRaw);
  const total = useSelector(getTotal);
  const status = useSelector(getMoviesStatus);
  const { modal, setModal, onModalClose, onModalSave } = useRatedModal();
  const { pages, onPageCnange } = useMoviesPage();
  const totalPages = getTotalPagesLimit(total);
  const isLoading = status === APP_STATUSES.LOADING;
  const isEmptyState = status === APP_STATUSES.SUCCESS && !movies.length;

  const moviesList = movies.map((movie, id) => {
    const vote = votes[movie.id] || 0;
    const movieProps = createMoviesProps(movie);
    const genresNames = getGenresName(genres, movie.genre_ids);

    const onVoteHandler = (idv: number) => {
      setModal({ id: idv, name: movie.original_title, rating: vote });
    };

    return (
      <Link className={s.link} to={`${PATH.MOVIE}${movie.id}`} key={movie.id}>
        <MovieCard
          {...movieProps}
          type={TYPE.MOVIES}
          genres={genresNames}
          onVote={onVoteHandler}
          vote={vote}
        />
      </Link>
    );
  });
  const MoviesList = () => (
    <>
      <SimpleGrid className={s.grid} cols={2}>
        {moviesList}
      </SimpleGrid>
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
