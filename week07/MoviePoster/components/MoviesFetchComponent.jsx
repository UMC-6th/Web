// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import MovieComponent from '../components/MovieComponent';
import MovieDetailComponent from '../components/MovieDetailComponent';
import Spinner from '../src/assets/Spinner.gif';

// eslint-disable-next-line react-refresh/only-export-components
export async function searchMovies(searchTerm) {
    try {
        const response = await fetch(`API_URL/search?query=${searchTerm}`);
        if (!response.ok) {
            throw new Error('에러: OK 아님 :(');
        }
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error('에러:', error);
        return []; 
    }
}

// eslint-disable-next-line react/prop-types
function MoviesFetchComponent({address}) {
    const [movieData, setMovieData] = useState([]);
    
    const [spinner, setSpinner] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            try {
                setSpinner(true);
                // searchMovies 함수 사용
                const results = await searchMovies(address);
                setMovieData(results);
                setSpinner(false);
            } catch (error) {
                console.error('에러:', error);
            }
        };
        fetchData();
    }, [address]);
    

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
    display: grid;
    width: 100%;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); 
    gap: 10px;
    padding: 10px 40px 0; /* 위, 왼쪽, 아래 여백 적용 */
    overflow-y: hidden;
    padding-right: 40px; /* 오른쪽 여백 적용 */
    min-height: 100vh;
`;


const MovieDetailWrap = styled.div`
    display: none;

`;

const MovieItem = styled.div`
    flex: 0 0 calc(25% - 20px);
    display: flex;
    height: 332px;
    position: relative;
    justify-content: center;
    margin-bottom: 30px;
    
`;



export default MoviesFetchComponent;