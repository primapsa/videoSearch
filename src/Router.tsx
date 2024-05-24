import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Movies from '@/components/movies/movies';
import MoviePage from '@/pages/MoviePage';
import RatedPage from '@/pages/RatedPage';
import MoviesPage from '@/pages/MoviesPage';

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
]);

export function Router() {
  return <RouterProvider router={router} />;
}
