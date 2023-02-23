import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchField } from 'components/SearchField/SearchField';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { fetchMoviesBySearch } from '../../services/fetchMovies';
export function Movies() {
  const [searchMovies, setSearchMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') ?? '';
  //   const location = useLocation();
  const handleSubmit = query => {
    setSearchParams(query !== '' ? { query: query } : {});
  };

  useEffect(() => {
    if (searchQuery === null) return;
    fetchMoviesBySearch(searchQuery).then(data => {
      console.log(data);
      setSearchMovies(data);
    });
  }, [searchQuery]);

  return (
    <main>
      <SearchField handleSubmit={handleSubmit} />
      <MoviesList movies={searchMovies} />
    </main>
  );
}
