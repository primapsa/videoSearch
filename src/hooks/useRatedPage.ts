import { useCallback, useMemo, useState } from 'react';
import { MovieType } from '@/types/movie';
import { getPagedMovies } from '@/components/utils';

const useRatedPage = (movies: MovieType[]) => {
  const [page, setPage] = useState<number>(0);
  const onPageChange = useCallback((currentPage: number) => {
    setPage(currentPage);
  }, []);
  const pagedMovies = useMemo(() => getPagedMovies(movies, page), [movies, page]);

  if (!pagedMovies?.length && page >= 1) {
    setPage(page - 1);
  }

  return {
    page,
    onPageChange,
    pagedMovies,
  };
};

export default useRatedPage;
