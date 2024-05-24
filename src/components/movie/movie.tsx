import React, { useEffect } from 'react';
import { Stack } from '@mantine/core';
import { useDispatch, useSelector } from 'react-redux';
import { MovieCard } from '@/components/movieCard';
import { MovieExtra } from '@/components/movieExtra';
import { clearMovie, fetchMovie, setMovieStatus } from '@/store/slices/movieSlice';
import { AppDispatchType } from '@/store';
import { APP_STATUSES, TYPE } from '@/constants';
import { getGenresRaw, getMovie } from '@/store/selectors';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { MovieProps } from '@/types';
import { createMovieProps, getGenresName, getTrailer } from '@/components/utils';
import s from './styles.module.scss';

const Movie = ({ id }: MovieProps) => {
  const movie = useSelector(getMovie);
  const dispatch = useDispatch();

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
  const movieProps = createMovieProps(movie, TYPE.MOVIE);
  const movieTrailer = getTrailer(movie);
  return (
    <Stack className={s.rated}>
      <Breadcrumbs nextCrumb={currentCrumb} />
      <MovieCard {...movieProps} />
      <MovieExtra
        text={movie?.overview}
        compaines={movie?.production_companies}
        source={movieTrailer}
      />
    </Stack>
  );
};

export default React.memo(Movie);
