import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import InfiniteScroll from 'react-infinite-scroll-component';

import MovieComponent from './MovieComponent';
import MovieDetailComponent from './MovieDetailComponent';
import SpinnerComponent from './SpinnerComponent';
import media from '../styles/media';

function InfiniteScrollFetchComponent({address}) {
    const [movieData, setMovieData] = useState([]);
    const [page, setPage] = useState(0);
    const [hasMore, setHasMore] = useState(true);

    const fetchInitialData = async () => {
        try {
            const response = await fetch(`${address}&page=1`, {
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

            if (movies.length === 0) {
                setHasMore(false);
            }

            const newMovieData = movies.map(movie => ({
                id: movie.id,
                movieComponent: (
                    <MovieComponent
                        key={movie.id}
                        id={movie.id}
                        image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                        title={movie.title}
                        voteAverage={movie.vote_average}
                    />
                ),
                movieDetailComponent: (
                    <MovieDetailComponent
                        key={movie.id}
                        id={movie.id}
                        title={movie.title}
                        overview={movie.overview}
                        originalTitle={movie.original_title}
                    />
                )
            }));
            setMovieData(newMovieData);
            setPage(1);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const fetchData = async () => {
        try {
            const response = await fetch(`${address}&page=${page + 1}`, {
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

            if (movies.length === 0) {
                setHasMore(false);
            }

            const newMovieData = movies.map(movie => ({
                id: movie.id,
                movieComponent: (
                    <MovieComponent
                        key={movie.id}
                        id={movie.id}
                        image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                        title={movie.title}
                        voteAverage={movie.vote_average}
                    />
                ),
                movieDetailComponent: (
                    <MovieDetailComponent
                        key={movie.id}
                        id={movie.id}
                        title={movie.title}
                        overview={movie.overview}
                        originalTitle={movie.original_title}
                    />
                )
            }));
            setMovieData(prevMovieData => [...prevMovieData, ...newMovieData]);
            setPage(prevPage => prevPage + 1);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    useEffect(() => {
        fetchInitialData();
    }, []);

    return (
        <InfiniteScroll
            dataLength={movieData.length}
            next={fetchData}
            hasMore={hasMore}
            loader={<SpinnerComponent />}
            endMessage={
                <p style={{ textAlign: 'center' }}>
                    <b>더 이상 없습니다.</b>
                </p>
            }>
            <MovieContainer>
                {movieData.map(({ id, movieComponent, movieDetailComponent }) => (
                    <MovieItem key={id} className="movieContainer__movieItem">
                        {movieComponent}
                        <MovieDetailWrapper className="movieContainer__movieItem__movieDetailWrapper">
                            {movieDetailComponent}
                        </MovieDetailWrapper>
                    </MovieItem>
                ))}
            </MovieContainer>
        </InfiniteScroll>
    );
}

const MovieContainer = styled.div`
    width: 98vw;
    height: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: start;
    padding-top: 20px;
    padding-left: 40px;
    gap: 10px;
    overflow-y: scroll;
    min-height: 100vh;
    margin: 0px;
`;

const MovieItem = styled.div`
    flex-basis: calc(12% - 5px);
    display: flex;
    height: 332px;
    position: relative;
    justify-content: center;
    margin-bottom: 30px;

    &:hover .movieContainer__movieItem__movieDetailWrapper {
        display: flex;
    }

    ${media.mobile`
        flex-basis: 80%;
    `}
`;

const MovieDetailWrapper = styled.div`
    display: none;
`;

export default InfiniteScrollFetchComponent;