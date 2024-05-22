import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // useParams 가져오기
import styled from 'styled-components';
import SpinnerComponent from '../components/SpinnerImg';
import axios from 'axios';

function MovieDetailPage() {
    const { id } = useParams();              // URL에서 영화 ID 가져오기
    const [movieDetail, setMovieDetail] = useState(null);
    const [cast, setCast] = useState([]);
    

    useEffect(() => {
        if (id) {                            // id를 사용하여 fetch 요청 
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNzcwN2Q5ZWM3ZTY2OGE5OTk4NjUzYTdhNjMzMzU0NCIsInN1YiI6IjY2MjUxZDVjMjIxYmE2MDE2MzEzNDVhMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fpocj-TMRKkVquXQ4yX-KtpHI7h6CZJVHAvDNdd_PO4'
                }
            };

            fetch(`https://api.themoviedb.org/3/movie/${id}?language=ko-KR`, options)
                .then(response => response.json())
                .then(data => {
                    setMovieDetail(data);
                })
                .catch(err => console.error(err));
        }
    }, [id]);                                                // id가 변경될 때마다 useEffect 실행

    function renderStars(voteAverage) {
        const starsCount = Math.floor(voteAverage);
        let stars = '';
        for(let i = 0; i < starsCount; i++) {
            stars += '⭐️';
        }
        return stars;
    }

    useEffect(() => {
        const fetchCredits = async () => {
            try {
                // 영화 ID를 사용하여 출연진과 감독 정보를 불러옵니다.
                const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=d81db69360007704f1d39205b9305389`);
                console.log(response.data);
                setCast(response.data.cast);
            } catch (error) {
                console.error('Error fetching movie credits:', error);
            }
        };    
        fetchCredits();
    }, [id]);

    

    return (
        !movieDetail 
        ? <SpinnerComponent/>
        : <MovieDetailBox posterpath={movieDetail.backdrop_path} alt={movieDetail.title}>
            <Overlay/>

            <MovieDetailWrapper>
                <MovieImgText>
                    <MoviePoster posterpath={movieDetail.poster_path}/>

                    <MovieContentWrapper>
                        <MainText>{movieDetail.title}</MainText>
                        <SubText>평점 {renderStars(movieDetail.vote_average)}</SubText>
                        <SubText>개봉일 {movieDetail.release_date}</SubText>
                        <SubText>줄거리</SubText>
                        <OverViewBox>{movieDetail.overview ? movieDetail.overview : "TMDB에서 제공하는 API에 상세 줄거리 정보가 없습니다."}</OverViewBox>
                        
                    </MovieContentWrapper> 
                </MovieImgText>

                <CastText>출연진 및 제작진</CastText>   
                <ActorsWrapper>
                {cast.map((actor, index) => (
                    <Actor key={actor.id}>
                        <ActorImage src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`} alt={actor.name} />
                        <ActorName>{actor.name}</ActorName>
                    </Actor>
                ))}
                </ActorsWrapper>                   
                
                
            </MovieDetailWrapper>

        </MovieDetailBox>
    );
}

const MovieDetailBox = styled.div`
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    background-image: url('${props => `https://image.tmdb.org/t/p/w500/${props.posterpath}`}');
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
    width: 100%;
    display: flex;
    flex-direction : column;
    justify-content: center;
    align-items: center;
    z-index: 1;
    margin-top: -30px;
    overflow: auto;
    &::-webkit-scrollbar {
        width: 4px;
    }
    &::-webkit-scrollbar-thumb {
        border-radius: 2px;
        background: yellow;
    }
`;
const MovieImgText =  styled.div`
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
    background-image: url('${props => `https://image.tmdb.org/t/p/w500/${props.posterpath}`}');
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
const CastText = styled.p`
    font-size: 18px;
    font-weight: 500;
    margin-top: 135px;
    color : white;
`;

const OverViewBox = styled.div`
    font-size: 16px;
    font-weight: 300;
    margin-top: 35px;
`;

const Actor = styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;
    flex-direction : column;
    padding : 20px;
`;

const ActorImage = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-right: 10px;
`;

const ActorName = styled.p`
    font-size: 16px;
    font-weight: bold;
    margin: 0;
    color : white;
    flex-wrap: wrap;
    max-width: 70px;
    word-wrap: break-word;
`;

const ActorsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap; /* 가로로 채워지고 공간이 부족해지면 다음 줄로 넘어감 */
    justify-content: flex-start; /* 출연진을 왼쪽부터 정렬 */
    margin-top: 20px;
    width: 1500px;
    height: 500px;
`;



export default MovieDetailPage;
