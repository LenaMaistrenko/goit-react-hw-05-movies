import { useLocation } from 'react-router-dom';
import { StyleLink, StyledUl } from '../MoviesList/MoviesList.styled';
import propTypes from 'prop-types';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <StyledUl>
      {' '}
      {movies &&
        movies.map(item => (
          <li key={item.id}>
            <StyleLink
              state={{ from: location }}
              to={`/movies/${item.id}`}
              id={item.id}
            >
              {item.name} {item.title}
            </StyleLink>
          </li>
        ))}
    </StyledUl>
  );
};

MoviesList.propTypes = {
  movies: propTypes.array.isRequired,
};
