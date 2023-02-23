import { fetchMovieCredits } from '../../services/fetchMovies';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
export function Cast() {
  const [movieById, setMovieById] = useState([]);
  const { movieId } = useParams();
  //   console.log('>>>>>', movieId);

  useEffect(() => {
    const result = fetchMovieCredits(movieId).then(data => {
      setMovieById(data);
      console.log(data);
      console.log(movieById);
    });
  }, []);
  return (
    <>
      <ul>
        {movieById &&
          movieById.map(item => (
            <li key={item.id}>
              <img
                src={'https://image.tmdb.org/t/p/w500/' + item.profile_path}
                alt={item.name}
                width="200"
              />
              <h3>{item.name}</h3>
              <p>
                Character <span>{item.character} </span>
              </p>
            </li>
          ))}
      </ul>
    </>
  );
}
