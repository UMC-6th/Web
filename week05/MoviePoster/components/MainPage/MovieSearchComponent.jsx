import  { useState } from 'react';
import styled from 'styled-components';
import MoviesFetchComponent from '../MoviesFetchComponent';

function MovieSearchComponent() {
    const [query, setQuery] = useState('');
    const [url, setUrl] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const encodedQuery = encodeURIComponent(query);
        const searchUrl = `https://api.themoviedb.org/3/search/movie?query=${encodedQuery}&include_adult=false&language=ko-KR&page=1`;
        setUrl(searchUrl);
    };

    return (
        <Wrap>
            <SearchContainer>
                <SearchText>영화를 검색하세요.</SearchText>
                <SearchForm onSubmit={handleSubmit}>
                    <SearchInput 
                        type="text" 
                        placeholder="영화 제목을 입력하세요."
                        onChange={(e) => setQuery(e.target.value)} 
                        value={query}
                    />
                    <SearchBtn type="submit">🔎</SearchBtn>
                </SearchForm>
            </SearchContainer>
            {url && (
                <SearchResults>
                    <MoviesFetchComponent address={url} />
                </SearchResults>
            )}

        </Wrap>
    );
}

const Wrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0;
`;

const SearchContainer = styled.div`
    width: 100%;
    background-color: rgb(19, 19, 19);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: 50px;
`;

const SearchText = styled.div`
    color: white;
    font-size: 30px;
    font-weight: 600;
`;

const SearchForm = styled.form`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`;

const SearchInput = styled.input`
    width: 550px;
    height: 50px;
    border-radius: 50px;
    padding-left: 20px;
    font-size: 16px;
    border: none;
`;

const SearchBtn = styled.button`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    font-size: 20px;
    justify-content: center;
    align-items: center;
    background-color: white;
    border: none;
    cursor: pointer;
    margin-left: -60px; /* Adjust to align with input */
`;

const SearchResults = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow-y: scroll;
    scrollbar-width: none;
    scrollbar-color: white;
    
`;

export default MovieSearchComponent;
