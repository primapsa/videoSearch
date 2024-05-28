import { useCallback, useEffect, useState } from 'react';
import queryString from 'query-string';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { transformToQuery } from '@/components/utils/adapters';
import { AppDispatchType } from '@/store';
import { fetchMovies } from '@/store/slices/moviesSlice';

const UseMoviesPage = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const loacation = useLocation();
  const query = queryString.parse(loacation.search, {
    arrayFormat: 'bracket',
  }) as Record<string, string | number>;

  const [pages, setPages] = useState<number>(Number(query?.page) || 0);

  const onPageCnange = useCallback((page: number) => {
    setPages(page);
    query.page = String(page + 1);
    const queryPaged = queryString.stringify(
      { ...query },
      { arrayFormat: 'bracket', skipNull: true }
    );
    history(`?${queryPaged}`, { replace: true });
  }, []);

  useEffect(() => {
    const queryToFetch = transformToQuery(query);
    !!queryToFetch && dispatch<AppDispatchType>(fetchMovies(queryToFetch));
  }, [loacation.search]);

  return { pages, onPageCnange };
};

export default UseMoviesPage;
