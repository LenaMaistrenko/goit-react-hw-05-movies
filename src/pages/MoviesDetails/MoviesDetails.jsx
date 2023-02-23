import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import { fetchMovieDetails } from '../../services/fetchMovies';

export function MoviesDetails() {
  const [movieInfo, setMovieInfo] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  useEffect(() => {
    fetchMovieDetails(movieId).then(data => {
      setMovieInfo(data);
    });
  }, [movieId]);
  if (!movieInfo) {
    return null;
  }
  const { title, release_date, vote_average, overview, genres } = movieInfo;
  console.log(location.state?.from);

  return (
    <>
      <div>
        <Link to={location.state?.from ?? '/'}>Go back</Link>
      </div>
      <img
        src={'https://image.tmdb.org/t/p/w500/'.concat(movieInfo.poster_path)}
        alt="{title}"
        width="350"
      />
      <h1>
        {title}({release_date.slice(0, 4)})
      </h1>
      <p>User score: {vote_average}</p>
      <h2>Overview</h2>
      <p>{overview}</p>
      <h2>Genres</h2>
      <p>{genres && genres.map(genre => genre.name).join(', ')}</p>
      <div>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link state={location.state} to={`/movies/${movieId}/cast`}>
              Cast
            </Link>
          </li>
          <li>
            <Link state={location.state} to={`/movies/${movieId}/reviews`}>
              Review
            </Link>
          </li>
        </ul>
        <Suspense>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
}
