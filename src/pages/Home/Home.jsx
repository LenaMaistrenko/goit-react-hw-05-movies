import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from '../../services/fetchMovies';
import { Title, Main, StyledUl } from '../../pages/Home/Home.styled';
import { Link } from 'react-router-dom';

export function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then(data => {
      setMovies(data.results);
    });
  }, []);

  return (
    <Main>
      <Title>Trending today</Title>

      <StyledUl>
        {movies.map(movie => {
          return (
            <li key={movie.id}>
              <Link to={`movies/${movie.id}`}>{movie.title}</Link>
            </li>
          );
        })}
      </StyledUl>
    </Main>
  );
}
