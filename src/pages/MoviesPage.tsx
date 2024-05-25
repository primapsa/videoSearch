import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Page from '@/components/page/page';
import Movies from '@/components/movies/movies';
import { getMoviesStatus } from '@/store/selectors';
import { APP_STATUSES } from '@/constants';
import { setMovieStatus } from '@/store/slices/movieSlice';

const MoviesPage = () => {
  const dispatch = useDispatch();
  useEffect(() => () => {
    dispatch(setMovieStatus(APP_STATUSES.IDLE));
  });
  return (
    <Page>
      <Movies />
    </Page>
  );
};
export default MoviesPage;
