import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Moviestyle from '../components/Moviestyle';
import MovieDetailComponents from './MovieDetailComponents';
import SpinnerComponent from './SpinnerImg';

function Moviepop({address}) {
    const [movieData, setMovieData] = useState([]);
    const [spinner, setSpinner] = useState(true); // spinner 상태 추가

    // fetch
    useEffect(() => {
        const fetchData = async () => {
            try {
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
                console.log('Number of movies:', movies.length); // 영화 개수 출력

                const newMovieData = movies.map(movie => ({
                    id: movie.id,
                    Moviestyle: (
                        <Moviestyle
                            key={movie.id}
                            image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                            title={movie.title}
                            voteAverage={movie.vote_average}
                        />
                    ),
                    movieDetailComponents: (
                        <MovieDetailComponents
                            key={movie.id}
                            title={movie.title}
                            overview={movie.overview}
                            originalTitle={movie.original_title} // originalTitle 값 추가
                            id={movie.id}
                        />
                    )
                }));
                setMovieData(newMovieData);
                setSpinner(false); // 데이터 로딩이 완료된 후 spinner 상태 변경
            } catch (error) {
                console.error('Error:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            {spinner ? (
                <SpinnerComponent />
            ) : (
                <MovieContainer>
                    {movieData.map(({ id, Moviestyle, movieDetailComponents }) => (
                        <MovieItem key={id} className="movieContainer__movieItem">
                            {Moviestyle}
                            <MovieDetailWrapper className="movieContainer__movieItem__movieDetailWrapper">
                                {movieDetailComponents}
                            </MovieDetailWrapper>
                        </MovieItem>
                    ))}
                </MovieContainer>
            )}
        </>
    );
}

const MovieContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: start;
    padding-top: 10px;
    padding-left: 50px;
    gap: 10px;
    min-height: 100vh;
    margin: 0px;
    
`;

const MovieItem = styled.div`
    flex-basis: calc(12% - 3px);
    display: flex;
    height: 332px;
    position: relative;
    justify-content: center;
    margin-bottom: 30px;
    &:hover .movieContainer__movieItem__movieDetailWrapper {
        display: flex;
    }
`;

const MovieDetailWrapper = styled.div`
    display: none;
`;

export default Moviepop;
