import React, { useState, useEffect } from "react";
import { fetchMovies } from './API2.js'; 
import Movie from '../components/MovieTitle.jsx';
import Story from '../components/Story.jsx';
import LoadingSpinner from '../components/LoadingSpinner.jsx';
import styled from 'styled-components';

// 스타일 컴포넌트 생성
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top : 100px;
  margin-bottom : 100px;
  
`;

const MapItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  padding: 20px;
  justify-content: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

const Button = styled.button`
  font-size: 70px;
  color: white;
  text-align: center;
  font-family: Georgia, serif;
  margin: 0 30px; /* 양 옆에 간격 추가 */
  background: none; /* 배경 제거 */
  border: none; /* 테두리 제거 */
  position: relative;
  
  &:hover {
    color: rgb(79, 147, 156);
  }
`;

const PageNumber = styled.span`
  font-size: 70px;
  color: white;
  text-align: center;
`;

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        //페이지 번호를 전달해줘야 버튼을 눌렀을 때 페이지가 바뀜
        const data = await fetchMovies(currentPage);
        setMovies(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      }
    };
    fetchData();
  }, [currentPage]);

  const handleNextPage = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
  };

  return (
    <AppContainer>
      {isLoading && <LoadingSpinner />}
      {!isLoading && (
        <MapItem>
          {movies.map((movie) => (
            <div key={movie.id}>
              <div className='movie-item'><Movie movie={movie} /></div>
              <div className='story-item'><Story movie={movie} /></div>
            </div>
          ))}
        </MapItem>
      )}
      <ButtonContainer>
        <Button onClick={handlePreviousPage} disabled={currentPage === 1}>
          {'<'}
        </Button>
        <PageNumber>{currentPage}</PageNumber>
        <Button onClick={handleNextPage}>
          {'>'}
        </Button>
      </ButtonContainer>
    </AppContainer>
  );
}
