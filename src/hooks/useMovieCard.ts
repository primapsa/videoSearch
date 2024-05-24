import { MovieCardProps, MovieCardType, MovieInfoType, MovieTypeShort, RateType } from '@/types';
import { MovieType } from '@/types/movie';

export const createMovieProps = (
  movie: MovieType | MovieTypeShort,
  type: MovieCardType
): MovieCardProps => {
  const vote = 0; // Get from localStorage
  const genres = ['1', '2', '3']; // write fn compare
  const onVote = () => {
    console.log('VOTE!');
  };
  const movieInfo: MovieInfoType = { title: movie.title, year: movie.release_date };
  const rate: RateType = { average: movie.vote_average, count: movie.vote_count };
  return {
    id: movie.id,
    movie: movieInfo,
    rate,
    source: movie.poster_path,
    vote,
    type,
    genres,
    onVote,
  };
};
