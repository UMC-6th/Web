import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'; // 스타일 컴포넌트 라이브러리 추가
import { fetchMovies } from '../pages/API2.js';

// 스타일 컴포넌트 생성
const MovieContainer = styled.div`
    position: absolute;
    display: flex;
    margin : auto;
   
    width: 300px;
    height: 530px;
    background-color: rgb(55, 59, 106);
    

`;



const MovieImage = styled.img`
    margin: 0;
    padding: 0;
    width: 300px;
    height: 400px;
    
`;

const MovieTitle = styled.h2`

    position: relative;
    margin-top: 20px;
    padding-left: 10px;
    color: white;
    text-align: left;
    font-size: 15px;
`;

const MovieRating = styled.p`
    position: relative;
    padding-right: 10px;
    color: white;
    text-align: right;
    font-size: 15px;
`;

// 무비 컴포넌트
function Movie({ movie }) {
  const formatMovieNameForURL = (name) => {
    return name.toLowerCase().replace(/\s+/g, '-'); // 공백을 하이픈으로 대체
  };

  return (
   
    <MovieContainer>
      <div>
        {/* 각 영화의 ID를 URL에 포함하여 상세 페이지로 이동 */}
        <Link to={`/movie/${movie.id}`}>
          <MovieImage src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
          <MovieTitle>{movie.title}</MovieTitle>
          <MovieRating>{movie.vote_average}</MovieRating>
        </Link>
      </div>
    </MovieContainer>

         
  
  );
}

export default Movie;
