import React from 'react';
import { useParams } from 'react-router-dom';
import Movie from '@/components/movie/movie';
import Page from '@/components/page/page';

const MoviePage = () => {
  const { id } = useParams();
  const movieId = Number(id);

  return (
    <Page>
      <Movie id={movieId} />
    </Page>
  );
};

export default MoviePage;
