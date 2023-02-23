import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { Layout } from './Layout/Layout';
import { Home } from '../pages/Home/Home';
import { Movies } from 'pages/Movies/Movies';
import { MoviesDetails } from '../pages/MoviesDetails/MoviesDetails';
//import { Cast } from '../components/Cast/Cast';
//import { Reviews } from '../components/Reviews/Reviews';
import { NotFound } from '../pages/NotFound';

const Cast = lazy(() =>
  import('../components/Cast/Cast').then(module => ({
    ...module,
    default: module.Cast,
  }))
);

const Reviews = lazy(() =>
  import('../components/Reviews/Reviews').then(module => ({
    ...module,
    default: module.Reviews,
  }))
);

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MoviesDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
