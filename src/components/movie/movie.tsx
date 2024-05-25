import React, { useEffect } from 'react';
import { Stack } from '@mantine/core';
import { useDispatch, useSelector } from 'react-redux';
import { MovieCard } from '@/components/movieCard';
import { MovieExtra } from '@/components/movieExtra';
import { clearMovie, fetchMovie, setMovieStatus } from '@/store/slices/movieSlice';
import { AppDispatchType } from '@/store';
import { APP_STATUSES, TYPE } from '@/constants';
import { getGenresRaw, getMovie, getRated } from '@/store/selectors';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { MovieProps } from '@/types';
import { createMovieProps, getGenresName, getTrailer } from '@/components/utils';
import s from './styles.module.scss';
import useRatedModal from '@/hooks/useRatedModal';
import { Modal } from '@/components/modal';

const Movie = ({ id }: MovieProps) => {
  const movie = useSelector(getMovie);
  const votes = useSelector(getRated);
  const dispatch = useDispatch();
  const { modal, setModal, onModalClose, onModalSave } = useRatedModal();

  const currentCrumb = movie?.title;
  //const genresNames = getGenresName(genres, movie.genre_ids);
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

  if (!movie) {
    return null;
  }
  const onVoteHandler = (idv: number) => {
    setModal({ id: idv, name: movie.original_title, rating: vote });
  };
  const movieProps = createMovieProps(movie, TYPE.MOVIE);
  const movieTrailer = getTrailer(movie);
  const vote = votes[movie.id] || 0;
  return (
    <>
      <Stack className={s.rated}>
        <Breadcrumbs nextCrumb={currentCrumb} />
        <MovieCard {...movieProps} vote={vote} onVote={onVoteHandler} />
        <MovieExtra
          text={movie?.overview}
          compaines={movie?.production_companies}
          source={movieTrailer}
        />
      </Stack>
      {modal && <Modal {...modal} onClose={onModalClose} onSave={onModalSave} />}
    </>
  );
};

export default React.memo(Movie);
