import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Movies from '@/components/movies/movies';
import Movie from '@/components/movie/movie';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Movies />,
  },
  {
    path: '/movie/:id',
    element: <Movie />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
