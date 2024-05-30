import React from 'react';
import { Link } from 'react-router-dom';
import './MovieTitle.css';
import { fetchMovies } from '../pages/API2.js';

// 무비 컴포넌트
function Movie({ movie }) {
  const formatMovieNameForURL = (name) => {
    return name.toLowerCase().replace(/\s+/g, '-'); // 공백을 하이픈으로 대체
  };

  return (
    <div className="movie-container">
      <div className="vertical">
        {/* 각 영화의 ID를 URL에 포함하여 상세 페이지로 이동 */}
        <Link to={`/movie/${movie.id}`}>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
          <h2>{movie.title}</h2>
          <p>{movie.vote_average}</p>
        </Link>
      </div>
    </div>
  );
}

export default Movie;
