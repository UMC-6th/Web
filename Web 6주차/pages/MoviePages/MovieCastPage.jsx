import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import CastComponent from '../../components/CastComponent';

function MovieCastPage() {
    const { movieId } = useParams();
    const [movieDetail, setMovieDetail] = useState(null);
    const [cast, setCast] = useState([])

    useEffect(() => {
        if (movieId) {
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNzcwN2Q5ZWM3ZTY2OGE5OTk4NjUzYTdhNjMzMzU0NCIsInN1YiI6IjY2MjUxZDVjMjIxYmE2MDE2MzEzNDVhMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fpocj-TMRKkVquXQ4yX-KtpHI7h6CZJVHAvDNdd_PO4'
                }
            };

            fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=ko-KR`, options)
                .then(response => response.json())
                .then(data => {
                    setMovieDetail(data);
                })
                .catch(err => console.error(err));

            fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?language=ko-KR`, options)
                .then(response => response.json())
                .then(data => {
                    setCast(data.cast); // 출연진 정보를 state에 저장
                })
                .catch(err => console.error(err));
        }
    }, [movieId]);

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
        ? <>
            <p>데이터를 받아오는 중입니다...</p>
        </>
        : <Wrapper>
            <MovieDetailBox posterPath={movieDetail.backdrop_path} alt={movieDetail.title}>
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

            <MovieCastBox>
                <CastText>출연진 및 제작진</CastText>
                <CastWrapper>
                    {cast.map((member) => (
                        <MovieItem key={member.id}>
                            <CastComponent 
                                id={member.id}
                                image={`https://image.tmdb.org/t/p/w500/${member.profile_path}`}
                                name={member.name}/>
                        </MovieItem>
                    ))}
                </CastWrapper>
            </MovieCastBox>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

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

const MovieCastBox = styled.div`
    width: 100vw;
    height: auto;
    min-height: 20vh;
    background-color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-contents: center;
`;

const CastText = styled.p`
    font-size: 25px;
    font-weight: bold;
    color: white;
    margin: 60px 0px;
`;

const CastWrapper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: start;
`;

const MovieItem = styled.div`
    flex-basis: calc(5% - 3px);
    display: flex;
    height: 100px;
    position: relative;
    margin-bottom: 30px;
    margin-left: 40px;
    padding: 0;
`;

export default MovieCastPage;