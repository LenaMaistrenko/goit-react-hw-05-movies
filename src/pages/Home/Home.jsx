import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from '../../services/fetchMovies';
import { Title, Main, StyleLink, StyledUl } from '../../pages/Home/Home.styled';

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
              <StyleLink to={`movies/${movie.id}`}>{movie.title}</StyleLink>
            </li>
          );
        })}
      </StyledUl>
    </Main>
  );
}
