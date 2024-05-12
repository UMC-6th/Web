import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetail } from '../pages/API2';
import './MovieDetail.css'

// 평점을 받아서 별로 표시하는 함수
function renderStars(rating) {
    const totalStars = 5;
    const fullStars = Math.floor(rating); // 전체 별 개수
    const emptyStars = totalStars - fullStars; // 빈 별 개수

    const stars = [];

    // 전체 별 추가
    for (let i = 0; i < fullStars; i++) {
        stars.push(<i className="fas fa-star" key={i}></i>);
    }

    // 빈 별 추가
    for (let i = 0; i < emptyStars; i++) {
        stars.push(<i className="far fa-star" key={`empty-${i}`}></i>);
    }

    return stars;
}

// 평점을 받아서 별로 표시하는 컴포넌트
function StarRating({ rating }) {
    return (
        <div>
            {renderStars(rating)}
        </div>
    );
}


function MovieDetail() {
  const { movieId } = useParams(); // URL 파라미터에서 movieId 가져오기
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getMovieDetail = async () => {
      try {
        const movieData = await fetchMovieDetail(movieId); // movieId를 전달하여 영화 상세 정보 가져오기
        setMovie(movieData);
      } catch (error) {
        console.error('Error fetching movie detail:', error);
      }
    };
  
    getMovieDetail();
  }, [movieId]); // movieId를 의존성 배열에 추가
  
  return (
    <div className='MovieDetail-container'>
      {movie ? (
        <div className='MovieDetail-item-1'>
          {movie.poster_path && (
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`${movie.title} 포스터`} />
          )}
        
          <div className='MovieDetail-item-1'>
            <div className='MovieDetail-item'>
          <span  className='MovieDetail-item-2'><h1>{movie.title}</h1></span>
          <span className='MovieDetail-item-2'><p>평점<StarRating rating={movie.vote_average} /></p></span>
          <span  className='MovieDetail-item-2'><p><strong>개봉일</strong> {movie.release_date}</p></span>
          <span  className='MovieDetail-item-2'><p><strong>줄거리 </strong><div>{movie.overview ? movie.overview : "줄거리 없음"}</div></p> </span>
            </div>
            
           
          </div>
        </div>
        
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default MovieDetail;
