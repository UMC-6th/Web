import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import BannerComponent from './Mainpageup';
import Moviestyle from '../components/Moviestyle';

function MovieMainPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [movieData, setMovieData] = useState([]);

    // 영화 검색 함수
    const searchMovies = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${searchQuery}&include_adult=false&language=en-Ko-KR&page=1`, {
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNzcwN2Q5ZWM3ZTY2OGE5OTk4NjUzYTdhNjMzMzU0NCIsInN1YiI6IjY2MjUxZDVjMjIxYmE2MDE2MzEzNDVhMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fpocj-TMRKkVquXQ4yX-KtpHI7h6CZJVHAvDNdd_PO4'
            }
        });
        const data = await response.json();
        const newMovieData = data.results.map(movie => ({
            id: movie.id,
            Moviestyle: (
                <Moviestyle
                    key={movie.id}
                    image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    title={movie.title}
                    voteAverage={movie.vote_average}
                />
            )
        }));
        setMovieData(newMovieData);
    };

    
    useEffect(() => {
        searchMovies();
    }, [searchQuery]); // searchQuery가 변경될 때마다 검색을 수행합니다.

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
                    /><SearchButton onClick={handleSearchButtonClick}>🔎</SearchButton>
                </SearchInputBox>
                <SearchMovieContainer>
                
                    {movieData.map(({ id, Moviestyle }) => (
                        <MovieItem key={id} className="movieContainer__movieItem">
                            {Moviestyle}
                        </MovieItem>
                        
                    ))}
                
                </SearchMovieContainer>
                
            </SearchContainer>

            
        </Wrapper>
    );
}


const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0;
    
`;

const SearchInputBox = styled.div`
    display: flex;
    align-item : center;
`
const SearchContainer = styled.div`
    width: 100%;
    height: 20px;
    min-height: 80vh;
    background-color: rgb(19,19,40) ;
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
`;

const SearchText = styled.div`
    color: white;
    font-size: 30px;
    font-weight: 600;
    padding-top: 100px;
`;

const SearchInput = styled.input`
    width: 550px;
    height: 50px;
    margin-top: 50px;
    border-radius: 50px;
    margin-right: 10px;
    
`;

const SearchButton = styled.button`
    width: 40px;
    height: 40px;
    background-color: yellow;
    color: white;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    font-size: 16px;
    margin-top: 60px;
`;

const SearchMovieContainer = styled.div`
    width: 50%;
    height: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: start;
    padding-top: 10px;
    padding-left: 10px;
    gap: 10px;

    overflow-y: auto;
    &::-webkit-scrollbar {
        width: 4px;
    }
    &::-webkit-scrollbar-thumb {
        border-radius: 2px;
        background: yellow;
    }
    overflow-x: hidden;
    min-height: 50vh;
    margin: 0px;
`;
const MovieItem = styled.div`
    flex-basis: calc(25% - 10px);
    display: flex;
    height: 400px;
    position: relative;
    justify-content: center;
    margin-bottom: 30px;
    &:hover .movieContainer__movieItem__movieDetailWrapper {
        display: flex;
    }
`;

const MovieTitle = styled.div`
    font-size: 20px;
    font-weight: bold;
`;

const MovieRating = styled.div`
    font-size: 14px;
`;

export default MovieMainPage;