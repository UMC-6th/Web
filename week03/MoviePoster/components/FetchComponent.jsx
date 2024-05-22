// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import MovieComponent from './MovieComponent';
import MovieDetailComponent from './MovieDetailComponent';
import Spinner from '../src/assets/Spinner.gif';

// eslint-disable-next-line react/prop-types
function MoviesFetchComponent({address}) {
    const [movieData, setMovieData] = useState([]);
    
    const [spinner, setSpinner] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
        try {
            setSpinner(true);
            const response = await fetch(address, {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNzcwN2Q5ZWM3ZTY2OGE5OTk4NjUzYTdhNjMzMzU0NCIsInN1YiI6IjY2MjUxZDVjMjIxYmE2MDE2MzEzNDVhMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fpocj-TMRKkVquXQ4yX-KtpHI7h6CZJVHAvDNdd_PO4'
            }
            });
            if (!response.ok) {
            throw new Error('Error : Not OK :(');
            }
            const data = await response.json();
            const movies = data.results;
            console.log('Number of movies:', movies.length);

            const newMovieData = movies.map(movie => ({
            id: movie.id,
            movieComponent: (
                <MovieComponent
                key={movie.id}
                image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                title={movie.title}
                voteAverage={movie.vote_average}
                />
            ),
            movieDetailComponent: (
                <MovieDetailComponent
                key={movie.id}
                title={movie.title}
                overview={movie.overview}
                />
            )
            }));
            setMovieData(newMovieData);
            setSpinner(false);
        } catch (error) {
            console.error('Error:', error);
        }
        };
        fetchData();
    }, [address]);

    return(
        spinner ?
            <SpinnerWrap>
                <img src={Spinner} alt="loading" width="25%" height="25%" color='white'/>
            </SpinnerWrap>
            : 
            <MovieContainer>
            {movieData.map(({ id, movieComponent, movieDetailComponent }) => (
                <MovieItem key={id} className="movieContainer_Item">
                {movieComponent}
                <MovieDetailWrap className="movieContainer_Item_DetailWrap">
                    {movieDetailComponent}
                </MovieDetailWrap>
                </MovieItem>
            ))}
            </MovieContainer>    
    );
}

const SpinnerWrap = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const MovieContainer = styled.div`
    display: flex;    

    width: 100%;
    height: auto;
    
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: start;
    padding-top: 10px;
    padding-left: 40px;
    gap: 10px;
    overflow-y: scroll;
    scrollbar-width: none;
    min-height: 100vh;
    margin: 0px;
`;

const MovieDetailWrap = styled.div`
    display: none;
`;

const MovieItem = styled.div`
    flex-basis: calc(12% - 5px);
    display: flex;
    height: 332px;
    position: relative;
    justify-content: center;
    margin-bottom: 30px;

    &:hover .movieContainer_Item_DetailWrap {
        display: flex;
    }
`;



export default MoviesFetchComponent;