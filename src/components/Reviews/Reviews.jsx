import { fetchMovieReviews } from '../../services/fetchMovies';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export function Reviews() {
  const [reviewsById, setReviewsById] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieReviews(movieId).then(data => {
      setReviewsById(data);
    });
  }, [movieId]);
  // console.log('reviewsById.length', reviewsById.length);
  return reviewsById.length > 0 ? (
    <ul>
      {reviewsById.length > 0 &&
        reviewsById.map(item => (
          <li key={item.id}>
            <h3>Author: {item.author}</h3>
            <p>{item.content}</p>
          </li>
        ))}
    </ul>
  ) : (
    <p>Sorry,we don't have reviews for this movie</p>
  );
}
