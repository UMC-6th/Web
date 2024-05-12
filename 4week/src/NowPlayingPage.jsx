import React, { useState, useEffect } from 'react';
import './App.css';
import MovieComponent from './MovieComponent';

function NowPlayingPage() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchPopularMovies = async () => {
            try {
                const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', {
                    method: 'GET',
                    headers: {
                        accept: 'application/json',
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3Y2Y2ZmM5ZDNiNGE5YTY5NDU3OGM2YjU0OWIxN2Q1ZSIsInN1YiI6IjY2MjYzYjJhMjIxYmE2MDBjODEyNGU0YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8NO-FgnQW-5s_IfqUVUPF1fDbPHCXmUL0UNzgVNFzU0'
                    }
                });
                const data = await response.json();
                setMovies(data.results);
            } catch (error) {
                console.error('Error fetching popular movies:', error);
            }
        };

        fetchPopularMovies();
    }, []);

    return (
        <div className="App">
            <div className='movie-wrap'>
            {movies.map(movie => (
                <MovieComponent
                    key={movie.id}
                    title={movie.title}
                    voteAverage={movie.vote_average}
                    overview={movie.overview}
                    release={movie.release_date}
                    imgUrl={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                />
            ))}
            </div>
        </div>
    );
}



export default NowPlayingPage;
