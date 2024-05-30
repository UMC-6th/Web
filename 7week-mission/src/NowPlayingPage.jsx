import React, { useState, useEffect, useRef, useCallback } from 'react';
import './App.css';
import MovieComponent from './MovieComponent';
import LoadingSpinner from './LoadingSpinner';

function NowPlayingPage() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const observer = useRef();

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?language=ko-KR&page=${page}`, {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3Y2Y2ZmM5ZDNiNGE5YTY5NDU3OGM2YjU0OWIxN2Q1ZSIsInN1YiI6IjY2MjYzYjJhMjIxYmE2MDBjODEyNGU0YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8NO-FgnQW-5s_IfqUVUPF1fDbPHCXmUL0UNzgVNFzU0'
          }
        });
        const data = await response.json();
        setMovies((prevMovies) => [...prevMovies, ...data.results]);
      } catch (error) {
        console.error('Error fetching popular movies:', error);
      }
      setLoading(false);
    };

    fetchMovies();
  }, [page]);

  const lastMovieElementRef = useCallback((node) => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setPage((prevPage) => prevPage + 1);
      }
    });
    if (node) observer.current.observe(node);
  }, [loading]);

  return (
    <div className="App">
      <div className='movie-wrap'>
        {movies.map((movie, index) => (
          <div key={`${movie.id}-${index}`} ref={index === movies.length - 1 ? lastMovieElementRef : null}>
            <MovieComponent
              id={movie.id}
              title={movie.title}
              voteAverage={movie.vote_average}
              overview={movie.overview}
              release={movie.release_date}
              imgUrl={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
            />
          </div>
        ))}
      </div>
      {loading && <LoadingSpinner />}
    </div>
  );
}

export default NowPlayingPage;
