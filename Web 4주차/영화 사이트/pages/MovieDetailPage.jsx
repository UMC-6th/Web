import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

import SpinnerComponent from '../components/SpinnerComponent';

function MovieDetailPage() {
    const { state } = useLocation();
    const [movieDetail, setMovieDetail] = useState(null);

    useEffect(() => {
        if (state && state.id) {
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNzcwN2Q5ZWM3ZTY2OGE5OTk4NjUzYTdhNjMzMzU0NCIsInN1YiI6IjY2MjUxZDVjMjIxYmE2MDE2MzEzNDVhMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fpocj-TMRKkVquXQ4yX-KtpHI7h6CZJVHAvDNdd_PO4'
                }
            };

            fetch(`https://api.themoviedb.org/3/movie/${state.id}?language=ko-KR`, options)
                .then(response => response.json())
                .then(data => {
                    setMovieDetail(data);
                })
                .catch(err => console.error(err));
        }
    }, [state]);

    function renderStars(voteAverage) {
        const starsCount = Math.floor(voteAverage);
        let stars = '';
        for(let i = 0; i < starsCount; i++) {
            stars += '⭐️';
        }
        return stars;
    }
    

    return (
        !movieDetail 
        ? <SpinnerComponent/>
        : <MovieDetailBox posterPath={movieDetail.backdrop_path} alt={movieDetail.title}>
            <Overlay/>
            
            <MovieDetailWrapper>
                <MoviePoster posterPath={movieDetail.poster_path}/>

                <MovieContentWrapper>
                    <MainText>{movieDetail.title}</MainText>
                    <SubText>평점 {renderStars(movieDetail.vote_average)}</SubText>
                    <SubText>개봉일 {movieDetail.release_date}</SubText>
                    <SubText>줄거리</SubText>
                    <OverViewBox>{movieDetail.overview ? movieDetail.overview : "TMDB에서 제공하는 API에 상세 줄거리 정보가 없습니다."}</OverViewBox>
                </MovieContentWrapper>
                            </MovieDetailWrapper>
        
        </MovieDetailBox>
    );
}

const MovieDetailBox = styled.div`
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    background-image: url('${props => `https://image.tmdb.org/t/p/w500/${props.posterPath}`}');
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Overlay = styled.div`
    position: absolute;
    top: 50px;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.85);
    z-index: 0;
`;

const MovieDetailWrapper = styled.div`
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    z-index: 1;
    margin-top: -30px;
`;

const MoviePoster = styled.div`
    width: 400px;
    height: 600px;
    background-image: url('${props => `https://image.tmdb.org/t/p/w500/${props.posterPath}`}');
    background-size: cover;
`;

const MovieContentWrapper = styled.div`
    width: 30%;
    color: white;
    margin-left: 80px;
`;

const MainText = styled.p`
    font-size: 25px;
    font-weight: bold;
`;

const SubText = styled.p`
    font-size: 18px;
    font-weight: 500;
    margin-top: 25px;
`;

const OverViewBox = styled.div`
    font-size: 16px;
    font-weight: 300;
    margin-top: 25px;
`;

export default MovieDetailPage;
