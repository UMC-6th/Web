import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetail, fetchMovieCredits } from '../pages/API2';
import './MovieDetail.css';
import LoadingSpinner from '../components/LoadingSpinner.jsx';

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
    const [isLoading, setIsLoading] = useState(true);
    const [credits, setCredits] = useState(null);

    useEffect(() => {
        const getMovieDetail = async () => {
            try {
                const movieData = await fetchMovieDetail(movieId); // movieId를 전달하여 영화 상세 정보 가져오기
                setMovie(movieData);
            } catch (error) {
                console.error('Error fetching movie detail:', error);
            } finally {
                setTimeout(() => {
                    setIsLoading(false);
                }, 500);
            }
        };
        const fetchCredits = async () => {
            try {
                const creditsData = await fetchMovieCredits(movieId);
                setCredits(creditsData);
            } catch (error) {
                console.error('Error fetching movie credits:', error);
            } finally {
                setIsLoading(false);
            }
        };

        getMovieDetail();
        fetchCredits();
    }, [movieId]); // movieId를 의존성 배열에 추가

    return (
        <div>
            {isLoading && <LoadingSpinner />}

            {!isLoading && (
                <div className='MovieDetail-container'>
                    {movie ? (
                        <div className='MovieDetail-item'>
                            {movie.poster_path && (
                                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`${movie.title} 포스터`} />
                            )}
                            <div className='MovieDetail-item-1'>
                                <span className='MovieDetail-item-2'><h1>{movie.title}</h1></span>
                                <span className='MovieDetail-item-2'><strong className='Strong'>평점</strong><StarRating rating={movie.vote_average} /></span>
                                <span className='MovieDetail-item-2'><strong className='Strong'>개봉일</strong> {movie.release_date}</span>
                                <span className='MovieDetail-item-3'><strong className='Strong'>줄거리 </strong><div>{movie.overview ? movie.overview : "줄거리 없음"}</div></span>
                            </div>
                        </div>
                    ) : (
                        <p>Loading...</p>
                    )}

                    <div className='MovieActor-container'>
                        <div className='MovieActor-item'>
                            출연진 및 제작진
                        </div>
                        <div className='MovieActor-item-1'>
                            <h2>출연진</h2>
                            <ul className='MovieActor-item-2'>
                                {credits && credits.cast.map(member => (
                                    <li key={member.id}>
                                        <div className='MovieActor-item-image'>
                                            <img
                                                src={member.profile_path
                                                    ? `https://image.tmdb.org/t/p/w200${member.profile_path}`
                                                    : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz7ztleRwzXhFdiwBYqZ8cib9RvEsukVVUS3niN1YQ&s'}
                                                alt={`${member.name} 프로필`}
                                            />
                                        </div>
                                        <div>{member.name}</div>
                                    </li>
                                ))}
                            </ul>
                            <h2>제작진</h2>
                            <ul className='MovieActor-item-2'>
                                {credits && credits.crew.map(member => (
                                    <li key={member.id}>
                                        <div className='MovieActor-item-image'>
                                            <img
                                                src={member.profile_path
                                                    ? `https://image.tmdb.org/t/p/w200${member.profile_path}`
                                                    : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz7ztleRwzXhFdiwBYqZ8cib9RvEsukVVUS3niN1YQ&s'}
                                                alt={`${member.name} 프로필`}
                                            />
                                        </div>
                                        <div>{member.name}</div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default MovieDetail;
