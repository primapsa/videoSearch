import React, { useEffect } from 'react';
import { SimpleGrid, Stack } from '@mantine/core';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { SearchBar } from '@/components/searchBar';
import { getRated, getRatedStatus } from '@/store/selectors';
import { APP_STATUSES, PATH, TYPE } from '@/constants';
import { createMovieProps, getSimpleGenreName, getTotalPages } from '@/components/utils';
import { fetchRated } from '@/store/slices/ratedSlice';
import { AppDispatchType } from '@/store';
import { MovieCard } from '@/components/movieCard';
import { Pagination } from '@/components/pagination';
import s from './styles.module.scss';
import useRatedModal from '@/hooks/useRatedModal';
import { Modal } from '@/components/modal';
import { withEmptyContent, withLoading } from '@/HOC';
import { EmptyRated } from '@/components/emptyContent';
import useRatedPage from '@/hooks/useRatedPage';
import useRated from '@/hooks/useRated';

const Rated = () => {
  const dispatch = useDispatch();
  const votes = useSelector(getRated);
  const status = useSelector(getRatedStatus);
  const { modal, setModal, onModalClose, onModalSave } = useRatedModal();
  const { ratedId, movies } = useRated();
  const { page, onPageChange, pagedMovies } = useRatedPage(movies);
  const total = getTotalPages(movies.length);

  const isLoading = status === APP_STATUSES.LOADING;
  const isEmptyState = status === APP_STATUSES.SUCCESS && !movies.length;

  useEffect(() => {
    dispatch<AppDispatchType>(fetchRated({ ids: ratedId, query: '' }));
  }, []);

  const ratedMovies = pagedMovies?.map((movieItem) => {
    const vote = votes[movieItem.id] || 0;
    const genresNames = getSimpleGenreName(movieItem);
    const onVoteHandler = (idv: number) => {
      setModal({ id: idv, name: movieItem.original_title, rating: vote });
    };
    return (
      <Link className={s.link} to={`../${PATH.MOVIE}${movieItem.id}`} key={movieItem.id}>
        <MovieCard
          {...createMovieProps(movieItem, TYPE.MOVIES)}
          onVote={onVoteHandler}
          vote={vote}
          genres={genresNames}
        />
      </Link>
    );
  });

  const Content = () => (
    <Stack className={s.ratedMovies}>
      <SearchBar />
      {ratedMovies && (
        <SimpleGrid className={s.gridRated} cols={2}>
          {ratedMovies}
        </SimpleGrid>
      )}
      <Pagination total={total} onChange={onPageChange} page={page} />
    </Stack>
  );

  const ContentWithEmtyState = withEmptyContent(Content, EmptyRated, isEmptyState);
  const ContentWithLoading = withLoading(ContentWithEmtyState, isLoading);

  return (
    <>
      <ContentWithLoading />
      {modal && <Modal {...modal} onClose={onModalClose} onSave={onModalSave} />}
    </>
  );
};

export default Rated;
