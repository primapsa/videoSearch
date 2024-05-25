import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Movies from '@/components/movies/movies';
import MoviePage from '@/pages/MoviePage';
import RatedPage from '@/pages/RatedPage';
import MoviesPage from '@/pages/MoviesPage';
import Page404 from '@/pages/Page404';

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
  return <RouterProvider router={router} />;
}
