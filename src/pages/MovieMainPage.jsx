import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import BannerComponent from './Mainpageup';
import Moviestyle from '../components/Moviestyle';
import {SearchInputBox , SearchContainer,SearchText,SearchInput,SearchButton,SearchMovieContainer,MovieItem,MovieDetailWrapper,LoadingText } from '../components/SearchMovieStyle';
import MovieDetailComponents from '../components/MovieDetailComponents';

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0;
    
`;

const MovieMainPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [movieData, setMovieData] = useState([]);
    const [isLoading, setIsLoading] = useState(false); // 로딩 상태를 관리합니다.

    useEffect(() => {
        // 디바운스된 검색 함수
        const debouncedSearchMovies = setTimeout(() => {
            searchMovies();
        }, 2000);

        return () => {
            clearTimeout(debouncedSearchMovies); // 이전의 setTimeout을 지워줌
        };
    }, [searchQuery]); // searchQuery가 변경될 때마다 검색을 수행합니다.

    // 영화 검색 함수
    const searchMovies = async () => {
        setIsLoading(true); //검색시 로딩상태
        const response = await fetch(
            `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&include_adult=false&language=ko-KR&page=1`,
            {
                headers: {
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNzcwN2Q5ZWM3ZTY2OGE5OTk4NjUzYTdhNjMzMzU0NCIsInN1YiI6IjY2MjUxZDVjMjIxYmE2MDE2MzEzNDVhMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fpocj-TMRKkVquXQ4yX-KtpHI7h6CZJVHAvDNdd_PO4',
                },
            }
        );
        const data = await response.json();
        const newMovieData = data.results.map((movie) => ({
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
        setIsLoading(false);
    };

    const handleSearchInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSearchButtonClick = () => {
        searchMovies();
    };

   
    

    return (
        <Wrapper>
            <BannerComponent />

            <SearchContainer>
                <SearchText>🎬 Find Your Movies!</SearchText>
                <SearchInputBox>
                    <SearchInput
                        value={searchQuery}
                        onChange={handleSearchInputChange}
                        placeholder="Search movies..."
                    />
                    <SearchButton onClick={handleSearchButtonClick}>🔎</SearchButton>
                </SearchInputBox>
                
<<<<<<< HEAD
                {isLoading ? (<LoadingText>로딩 중...</LoadingText>):(
                    <SearchMovieContainer>
                        {movieData.map(({ id, Moviestyle , movieDetailComponents}) => (
                            <MovieItem key={id} className="movieContainer__movieItem">
                                {Moviestyle}
                                <MovieDetailWrapper className="movieContainer__movieItem__movieDetailWrapper">
                                    {movieDetailComponents}
                                </MovieDetailWrapper>
                            </MovieItem>
                        ))}
                    </SearchMovieContainer>
                )}
=======
                    {movieData.map(({ id, Moviestyle }) => (
                        <MovieItem key={id} className="movieContainer__movieItem">
                            {Moviestyle}
                        </MovieItem>
                        
                    ))}
                
                </SearchMovieContainer>
>>>>>>> a68e1c9a1b57c9ce7bdd8df9b8bb7be8864a3375
                
            </SearchContainer>
        </Wrapper>
    );
};

export default MovieMainPage;
