import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetail, fetchMovieCredits } from '../pages/API2';
import LoadingSpinner from '../components/LoadingSpinner.jsx';
import styled from 'styled-components';

const Container = styled.div`
    position: relative;
    display: grid;
    justify-content: center;
    align-items: center;
    margin-top : 200px;
    @media (max-width: 768px) {
        display: inline;
          }
       
`;

const MovieDetailContainer = styled.div`
    
    font-size: 20px;
    color: white;
   
`;

const MovieDetailItem = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    color: white;
    @media (max-width: 768px) {
        display: grid;
        
        height : 1100px;
      margin-top : 100px;
      }
    
   
`;

const MovieDetailItem1 = styled.div`
    position: relative;
    display: grid;
    margin-left: 50px;
    
    
   
`;

const MovieDetailItem2 = styled.span`
    margin: 20px;
    font-size: 30px;
    line-height: 1.5;

    @media (max-width: 768px) {
        
        font-size : 15px;
        margin : 10px;
        padding : 0px;
      }

`;

const MovieDetailItem3 = styled.span`
    margin: 20px;
    font-size: 30px;
    line-height: 2;
    width: 700px;
    height: 400px;
    overflow: auto;
    list-style-type: none;
    grid-template-rows: auto;
    
    &::-webkit-scrollbar {
        width: 7px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: green;
        border-radius: 5px;
    }

    &::-webkit-scrollbar-track {
        background-color: white;
    }

    @media (max-width: 768px) {
        height: 100px;
        width: 400px;
        margin : 0px;
        padding : 0px;
        font-size : 10px;
        line-height: 2;
      }
`;

const LoadingText = styled.p`
    text-align: center;
    margin-left: 50px;
    font-size: bold;
    color: white;
`;

const MovieActorContainer = styled.div`
    display: grid;
    font-size: 10px;
    line-height: 1.5;
    color: white;
   
`;

const MovieActorItem = styled.div`
    margin-top: 100px;
    text-align: center;
    position: relative;
    font-size: 50px;
    line-height: 1.5;

    @media (max-width: 768px) {
        
        font-size : 30px;
      }
`;

const MovieActorItem1 = styled.div`
    
    text-align: center;
    position: relative;
    font-size: 30px;
    line-height: 1.5;
    justify-content: center;
    align-items: center;
    display:grid;

    @media (max-width: 768px) {
        margin-top : 50px;
        font-size : 20px;
        display:grid;
      }
`;

const MovieActorItem2 = styled.ul`
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 20px;
    line-height: 1.5;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: auto;
    gap: 10px;
    list-style-type: none;
    width: 1200px;
    height: 400px;
    overflow: auto;
    background-color: rgb(20, 52, 78);
    border-radius: 10px;
    position: relative;
    padding: 50px;

    &::-webkit-scrollbar {
        width: 7px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: rgb(236, 170, 70);
        border-radius: 5px;
    }

    &::-webkit-scrollbar-track {
        background-color: white;
    }

    @media (max-width: 768px) {
        grid-template-columns: 1fr 1fr;
        width : 400px;
        height : 800px;
        font-size : 10px;
        margin-bottom : 100px;
        
        
      }

`;

const MovieActorItemImage = styled.div`
    border-radius: 500%;
    margin: 10px;

    @media (max-width: 768px) {
        width : 100px;
   
      }
`;

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
        <Container>
            {isLoading && <LoadingSpinner />}

            {!isLoading && (
                <MovieDetailContainer>
                    {movie ? (
                        <MovieDetailItem>
                            {movie.poster_path && (
                                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`${movie.title} 포스터`} />
                            )}
                            <MovieDetailItem1>
                                <MovieDetailItem2><h1>{movie.title}</h1></MovieDetailItem2>
                                <MovieDetailItem2><strong>평점</strong><StarRating rating={movie.vote_average} /></MovieDetailItem2>
                                <MovieDetailItem2><strong>개봉일</strong> {movie.release_date}</MovieDetailItem2>
                                <MovieDetailItem3><strong>줄거리 </strong><div>{movie.overview ? movie.overview : "줄거리 없음"}</div></MovieDetailItem3>
                            </MovieDetailItem1>
                        </MovieDetailItem>
                    ) : (
                        <LoadingText>Loading...</LoadingText>
                    )}

                    <MovieActorContainer>
                        <MovieActorItem>
                            출연진 및 제작진
                        </MovieActorItem>
                        <MovieActorItem1>
                            <h2>출연진</h2>
                            <MovieActorItem2>
                                {credits && credits.cast.map(member => (
                                    <li key={member.id}>
                                        <MovieActorItemImage>
                                            <img
                                                src={member.profile_path
                                                    ? `https://image.tmdb.org/t/p/w200${member.profile_path}`
                                                    : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz7ztleRwzXhFdiwBYqZ8cib9RvEsukVVUS3niN1YQ&s'}
                                                alt={`${member.name} 프로필`}
                                            />
                                        </MovieActorItemImage>
                                        <div>{member.name}</div>
                                    </li>
                                ))}
                            </MovieActorItem2>
                            <h2>제작진</h2>
                            <MovieActorItem2>
                                {credits && credits.crew.map(member => (
                                    <li key={member.id}>
                                        <MovieActorItemImage>
                                            <img
                                                src={member.profile_path
                                                    ? `https://image.tmdb.org/t/p/w200${member.profile_path}`
                                                    : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz7ztleRwzXhFdiwBYqZ8cib9RvEsukVVUS3niN1YQ&s'}
                                                alt={`${member.name} 프로필`}
                                            />
                                        </MovieActorItemImage>
                                        <div>{member.name}</div>
                                    </li>
                                ))}
                            </MovieActorItem2>
                        </MovieActorItem1>
                    </MovieActorContainer>
                </MovieDetailContainer>
            )}
        </Container>
    );
}

export default MovieDetail;
