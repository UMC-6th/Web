import styled, {css} from 'styled-components';
import React, { useState, useEffect } from 'react';
import BannerComponent from '../components/MainPage/BannerComponent';
import MovieComponent from '../components/MovieComponent';
import media from '../styles/media';

function MainPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [movies, setMovies] = useState([]);

    const debouncedSearchTerm = useDebounce(searchTerm, 300);

    useEffect(() => {
        if (debouncedSearchTerm) { 
            fetchMovies(debouncedSearchTerm);
        }
    }, [debouncedSearchTerm]); 

    function useDebounce(value, delay) {
        const [debouncedValue, setDebouncedValue] = useState(value);
    
        useEffect(() => {
            // 설정된 지연 시간 후에 debouncedValue를 업데이트
            const handler = setTimeout(() => {
                setDebouncedValue(value);
            }, delay);
    
            // 컴포넌트가 언마운트되거나 value가 변경될 때마다 clearTimeout을 호출하여 이전 타이머를 제거
            return () => {
                clearTimeout(handler);
            };
        }, [value, delay]);
    
        return debouncedValue;
    }

    const fetchMovies = (query) => {
        const encodedQuery = encodeURIComponent(query); // 검색어 인코딩
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNzcwN2Q5ZWM3ZTY2OGE5OTk4NjUzYTdhNjMzMzU0NCIsInN1YiI6IjY2MjUxZDVjMjIxYmE2MDE2MzEzNDVhMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fpocj-TMRKkVquXQ4yX-KtpHI7h6CZJVHAvDNdd_PO4'
            }
        };
        
        fetch(`https://api.themoviedb.org/3/search/movie?query=${encodedQuery}&include_adult=false&language=ko-KR&page=1`, options)
            .then(response => response.json())
            .then(response => {
                setMovies(response.results);
            })
            .catch(err => console.error(err));
    };

    return(
        <Wrapper>
            <BannerComponent/>

            <SearchContainer>
                <SearchText>🎬 Find Your Movies!</SearchText>
                <SearchInput onChange={(e) => setSearchTerm(e.target.value)} />
            
                <SearchOutputContainer>
                    {movies.map(movie => (
                        <MovieItem>
                            <MovieComponent 
                                key={movie.id} 
                                id={movie.id}
                                image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                title={movie.title} 
                                voteAverage={movie.vote_average} />
                        </MovieItem>
                    ))}
                </SearchOutputContainer>
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
    background-color: black;
`;

const SearchContainer = styled.div`
    width: 100%;
    height: 20px;
    min-height: 80vh;
    background-color: black;
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
`;

const SearchText = styled.div`
    color: white;
    font-size: 30px;
    font-weight: 600;
    padding-top: 50px;

    ${media.mobile`
        font-size: 23px;
    `}
`;

const SearchInput = styled.input`
    width: 550px;
    height: 50px;
    margin-top: 50px;
    border-radius: 50px;
    padding-left: 20px;
    font-size: 18px;

    ${media.mobile`
        width: 80%;
        font-size: 15px;
    `}
`;

const SearchOutputContainer = styled.div`
    width: 60%;
    height: auto;
    display: flex; 
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: start;
    gap: 15px;
    overflow-y: scroll;
    max-height: 400px;
    margin-top: 30px;
    padding-left: 30px;
    &::-webkit-scrollbar {
        width: 10px;
        border: 2px solid rgba(255, 255, 255, 0.01);
        border-radius: 25px;
    }
    &::-webkit-scrollbar-track {
        background: rgba(255, 255, 255, 0.1);
    }
    &::-webkit-scrollbar-thumb {
        background: orange;
        border-radius: 15px;
    }
`;

const MovieItem = styled.div`
    flex-basis: calc(20% - 10px);
    display: flex;
    height: 332px;
    position: relative;
    margin-bottom: 30px;
    margin-right: 40px;
    padding: 0;
`;

export default MainPage;