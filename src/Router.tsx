import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Movies from '@/components/movies/movies';
import MoviePage from '@/pages/MoviePage';
import RatedPage from '@/pages/RatedPage';
import MoviesPage from '@/pages/MoviesPage';
import Page404 from '@/pages/Page404';
import { AppDispatchType } from '@/store';
import { fetchGenres } from './store/slices/genresSlice';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MoviesPage />,
  },
  {
    path: '/movie/:id',
    element: <MoviePage />,
  },
  {
    path: '/rated/',
    element: <RatedPage />,
  },
  {
    path: '*',
    element: <Page404 />,
  },
]);

export function Router() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch<AppDispatchType>(fetchGenres());
  }, []);

  return <RouterProvider router={router} />;
}
