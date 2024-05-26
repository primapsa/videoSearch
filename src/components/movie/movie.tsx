import React, { useEffect } from 'react';
import { Stack } from '@mantine/core';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { MovieCard } from '@/components/movieCard';
import { MovieExtra } from '@/components/movieExtra';
import { clearMovie, fetchMovie, setMovieStatus } from '@/store/slices/movieSlice';
import { AppDispatchType } from '@/store';
import { APP_STATUSES, TYPE } from '@/constants';
import { getMovie, getMovieStatus, getRated } from '@/store/selectors';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { MovieProps } from '@/types';
import { createMovieProps, getTrailer } from '@/components/utils';
import s from './styles.module.scss';
import useRatedModal from '@/hooks/useRatedModal';
import { Modal } from '@/components/modal';
import { withLoading } from '@/HOC';

const Movie = ({ id }: MovieProps) => {
  const navigate = useNavigate();
  const movie = useSelector(getMovie || {});
  const votes = useSelector(getRated);
  const dispatch = useDispatch();
  const status = useSelector(getMovieStatus);
  const { modal, setModal, onModalClose, onModalSave } = useRatedModal();
  const isLoading = status === APP_STATUSES.LOADING;
  const isError = status === APP_STATUSES.ERROR;
  const currentCrumb = movie?.title;

  useEffect(() => {
    if (id) {
      dispatch<AppDispatchType>(fetchMovie(id));
    } else {
      dispatch(setMovieStatus(APP_STATUSES.ERROR));
    }
    return () => {
      dispatch(clearMovie());
    };
  }, []);
  useEffect(() => {
    isError && navigate('/404');
  }, [status]);

  const onVoteHandler = (idv: number) => {
    movie && setModal({ id: idv, name: movie.original_title, rating: vote });
  };
  const movieProps = movie && createMovieProps(movie, TYPE.MOVIE);
  const movieTrailer = movie && getTrailer(movie);
  const vote = (movie && votes[movie.id]) || 0;

  const MovieContent = () => (
    <>
      {movie && (
        <Stack className={s.rated}>
          <Breadcrumbs nextCrumb={currentCrumb} />
          <MovieCard {...movieProps} vote={vote} onVote={onVoteHandler} />
          <MovieExtra
            text={movie?.overview}
            compaines={movie?.production_companies}
            source={movieTrailer}
          />
        </Stack>
      )}
    </>
  );
  const MovieContentWithLoading = withLoading(MovieContent, isLoading);
  return (
    <>
      <MovieContentWithLoading />
      {modal && <Modal {...modal} onClose={onModalClose} onSave={onModalSave} />}
    </>
  );
};

export default React.memo(Movie);
