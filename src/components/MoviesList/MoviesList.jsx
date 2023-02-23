import { Link, useLocation } from 'react-router-dom';
import propTypes from 'prop-types';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  console.log(location);
  return (
    <ul>
      {' '}
      {movies &&
        movies.map(item => (
          <li key={item.id}>
            <Link
              state={{ from: location }}
              to={`/movies/${item.id}`}
              id={item.id}
            >
              {item.name} {item.title}
            </Link>
          </li>
        ))}
    </ul>
  );
};

MoviesList.propTypes = {
  movies: propTypes.array.isRequired,
};
