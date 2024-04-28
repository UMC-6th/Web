import React, { useState, useEffect } from 'react';
import './App.css';
import MovieComponent from './MovieComponent';

function MainPage() {
    const [movies, setMovies] = useState([]);
    const [searchText, setSearchText] = useState('');

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

    const handleSearchChange = (event) => {
        setSearchText(event.target.value);
    };

    const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(searchText.toLowerCase()));

    return (
        <div className="App">
            <div className='wrap'>
                <div className='hi'>환영합니다.</div>
                <h2>Find your movies!</h2>
                <div className='search-wrap'>
                    <input id='movie-search' type="text" value={searchText} onChange={handleSearchChange} />
                    <button>검색</button>
                </div>
            </div>  
            <div className='movie-wrap'>
            {filteredMovies.map(movie => (
                <MovieComponent 
                    key={movie.id}
                    title={movie.title}
                    voteAverage={movie.vote_average}
                    overview={movie.overview}
                    imgUrl={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                />
            ))}
            </div>
        </div>
    );
}

export default MainPage;