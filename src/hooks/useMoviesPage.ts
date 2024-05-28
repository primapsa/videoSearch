import { useCallback, useEffect, useState } from 'react';
import queryString from 'query-string';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { transformToQuery } from '@/components/utils/adapters';
import { AppDispatchType } from '@/store';
import { fetchMovies } from '@/store/slices/moviesSlice';
import { getFilters } from '@/store/selectors';
import { InitialFilterType } from '@/types/initialSlices';

const UseMoviesPage = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const loacation = useLocation();
  const filters = useSelector(getFilters);
  const [compareFilters, setCompareFilters] = useState<InitialFilterType>(filters);
  const query = queryString.parse(loacation.search, {
    arrayFormat: 'bracket',
  }) as Record<string, string | number>;

  const [pages, setPages] = useState<number>(Number(query?.page) || 0);

  const onPageCnange = useCallback(
    (page: number) => {
      setPages(page);
      query.page = String(page + 1);
      const queryPaged = queryString.stringify(
        { ...query },
        { arrayFormat: 'bracket', skipNull: true }
      );

      history(`?${queryPaged}`, { replace: true });
    },
    [history, loacation.search]
  );

  useEffect(() => {
    if (!pages) return;
    const copyFilters = { ...filters };
    const isFilterEquals = JSON.stringify(compareFilters) === JSON.stringify(copyFilters);
    if (!isFilterEquals) {
      setCompareFilters(copyFilters);
      setPages(0);
    }
  }, [filters]);

  useEffect(() => {
    const query = { ...filters, page: pages + 1 };
    const queryToFetch = transformToQuery(query);
    !!queryToFetch && dispatch<AppDispatchType>(fetchMovies(queryToFetch));
  }, [filters, pages]);

  return { pages, onPageCnange };
};

export default UseMoviesPage;
