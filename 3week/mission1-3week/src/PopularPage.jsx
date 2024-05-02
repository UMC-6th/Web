import React, { useState, useEffect } from 'react';
import './App.css';
import MovieComponent from './MovieComponent';

function PopularPage() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchPopularMovies = async () => {
            try {
                const response = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', {
                    method: 'GET',
                    headers: {
                        accept: 'application/json',
                        Authorization: '7cf6fc9d3b4a9a694578c6b549b17d5e'
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
                    imgUrl={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                />
            ))}
            </div>
        </div>
    );
}



export default PopularPage;
