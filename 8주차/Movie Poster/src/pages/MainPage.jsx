import React, { useState, useEffect, useCallback } from "react";
import { fetchSearchMovies } from './API2.js';
import Movie from '../components/MovieTitle.jsx';
import Story from '../components/Story.jsx';
import LoadingSpinner from '../components/LoadingSpinner.jsx';
import styled from 'styled-components';
import { IoIosSearch } from "react-icons/io";


// 디바운스 함수 정의
function debounce(func, wait) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

// 스타일 컴포넌트로 스타일 정의
const MainTitle = styled.div`
    position: relative;
    place-items: center;
    color: white;
    text-align: center;
    
    padding-top: 200px;
    padding-bottom: 150px;
    background-color: black;
    font-size: 30px;
    font-weight: bold;
`;

const MainSearch = styled.div`
    color: white;
    text-align: center;
    padding-top: 70px;
    padding-bottom: 50px;
    margin-bottom: 100px;
    font-size: 30px;
    font-weight: bold;
`;

const SearchContainer = styled.div`

    grid-template-columns: 1fr 1fr;
    justify-content: center;

    display : flex;
  gap : 10px;
`;

const TextSearch = styled.input`
    text-align: center;
    border-color: white;
    border-radius: 30px;
    width: 450px;
    height: 40px;
    margin-top: 80px;
    margin-left : 50px;
    @media (max-width: 768px) {
       
      width: 250px;
  }
    
`;

const SearchButton = styled.button`
    border-color: orange;
    border-radius: 40px;
    width: 40px;
    height: 40px;
    background-color: orange;
    position: grid;
   
    margin-top: 82px;
    
`;

const NoResults = styled.div`
    text-align: center;
    color: white;
    font-size: 20px;
    font-weight: bold;
`;

const MainMapItem = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: auto;
    gap: 20px;
    position : relative;
    padding: 100px;
    padding-right : 100px;
    width: 1300px;
    height: 1000px;
    overflow: auto;
    background-color: rgba(3, 37, 65, 1);
    margin: 0 auto;

    &::-webkit-scrollbar {
      width: 12px; 
  }
  
  &::-webkit-scrollbar-thumb {
      background-color: red; 
      border-radius: 5px; 
  }
  
  &::-webkit-scrollbar-track {
      background-color: white; 
  }

    @media (max-width: 768px) {
      width : 300px;
      grid-template-columns: 1fr ;
  }
    
`;

// 메인 페이지 컴포넌트
export default function MainPage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [username, setUsername] = useState('');

  // 디바운스를 적용한 fetch 함수
  const debouncedFetchMovies = useCallback(
    debounce(async (searchTerm) => {
      if (searchTerm !== '') {
        setIsLoading(true);
        try {
          const data = await fetchSearchMovies(searchTerm); // searchTerm을 전달
          setMovies(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        } finally {
          setIsLoading(false);
        }
      } else {
        setMovies([]);
      }
    }, 500),
    [] // 의존성 배열을 빈 배열로 설정하여 컴포넌트가 처음 렌더링될 때만 생성되도록 함
  );

  useEffect(() => {
    debouncedFetchMovies(searchTerm);
  }, [searchTerm, debouncedFetchMovies]);

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <MainTitle>
        {username ? `${username}님 환영합니다!` : '환영합니다!'}
      </MainTitle>
      <MainSearch>
        Find Your Movies!
        <SearchContainer>
          <TextSearch
            type="text"
            placeholder="검색어를 입력하세요"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <SearchButton><IoIosSearch size='24'/></SearchButton>
        </SearchContainer>
      </MainSearch>

      {isLoading && <LoadingSpinner />}

      {!isLoading && searchTerm !== '' && (
        <div className='app-container'>
          {filteredMovies.length > 0 ? (
            <MainMapItem>
              {filteredMovies.map((movie) => (
                <div key={movie.id}>
                  <div className='movie-item'><Movie movie={movie} /></div>
                  <div className='story-item'><Story movie={movie} /></div>
                </div>
              ))}
            </MainMapItem>
          ) : (
            <NoResults>검색 결과가 없습니다.</NoResults>
          )}
        </div>
      )}
    </div>
  );
}
