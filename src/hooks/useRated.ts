import { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { getRated, getRatedFetched, getRatedFilter } from '@/store/selectors';
import { MovieType } from '@/types/movie';

const useRated = () => {
  const rated = useSelector(getRated);
  const fetched = useSelector(getRatedFetched);
  const filter = useSelector(getRatedFilter);

  const [movies, setMovies] = useState<MovieType[]>([]);
  const ratedId = useMemo(() => Object.keys(rated).map((id) => Number(id)), []);

  useEffect(() => {
    if (!filter) return;
    const filtered = movies.filter((ratedItem) =>
      ratedItem.original_title.toLowerCase().startsWith(filter.toLowerCase())
    );
    setMovies(filtered);
  }, [filter]);

  useEffect(() => {
    fetched && setMovies(fetched);
  }, [fetched]);

  return { ratedId, movies };
};

export default useRated;
