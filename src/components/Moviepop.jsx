import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Moviestyle from '../components/Moviestyle';
import MovieDetailComponents from './MovieDetailComponents';
import SpinnerComponent from './SpinnerImg';

function Moviepop({ address }) {
    const [movieData, setMovieData] = useState([]);
    const [spinner, setSpinner] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const moviesPerPage = 20;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${address}&page=${currentPage}&per_page=${moviesPerPage}`, {
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
                setMovieData(data.results);
                setSpinner(false);
            } catch (error) {
                console.error('Error:', error);
            }
        };
        fetchData();
    }, [address, currentPage,moviesPerPage]);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        setSpinner(true);
    };

    const handleNextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
        setSpinner(true);
    };

    const handlePreviousPage = () => {
        setCurrentPage((prevPage) => prevPage - 1);
        setSpinner(true);
    };

    return (
        <>
            {spinner ? (
                <SpinnerComponent />
            ) : (
                <>
                <MovieNext>
                        <MovieContainer>
                            {movieData.map((movie) => (
                                <MovieItem key={movie.id} className="movieContainer__movieItem">
                                    <Moviestyle
                                        image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                        title={movie.title}
                                        voteAverage={movie.vote_average}
                                    />
                                    <MovieDetailWrapper className="movieContainer__movieItem__movieDetailWrapper">
                                        <MovieDetailComponents
                                            title={movie.title}
                                            overview={movie.overview}
                                            originalTitle={movie.original_title}
                                            id={movie.id}
                                        />
                                    </MovieDetailWrapper>
                                </MovieItem>
                            ))}
                        </MovieContainer>
                        <PaginationWrapper>
                            <Pagination>
                                {currentPage > 1 && (
                                    <PageButton onClick={handlePreviousPage}>
                                        Previous
                                    </PageButton>
                                )}
                                <PageNumber>{currentPage}</PageNumber>
                                {movieData.length === moviesPerPage && (
                                    <PageButton onClick={handleNextPage}>
                                        Next
                                    </PageButton>
                                )}
                            </Pagination>
                        </PaginationWrapper>
                 </MovieNext>
                </>
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

const MovieNext = styled.div`
    width: 100%;
    height: auto;
    flex-direction: row;
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

const PaginationWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 20px;
`;

const Pagination = styled.div`
    display: flex;
    justify-content: center;
`;

const PageButton = styled.button`
    margin: 0 5px;
    padding: 5px 10px;
    border: none;
    background-color: rgb(2,15,130);
    color: #fff;
    cursor: pointer;
`;

const PageNumber = styled.span`
    margin: 0 5px;
    padding: 5px 10px;
    border: 1px solid #007bff;
    background-color: #fff;
    color: #007bff;
`;

export default Moviepop;
