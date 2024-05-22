import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom'; // useLocation import 추가

// Styled components for MovieDetailComponent
const MovieDetailBox = styled.div`
  width: 80vw;
  height: 80vh;
  position: relative;
  display: flex;
  justify-content: start;
  background-color: rgba(0, 0, 0, 0.7);
`;

const TextDetailBox = styled.div`
  padding: 10px;
  color: white;
`;

const Overview = styled.p`
  height: 280px;
  width: 110%;
  font-size: 13px;
  overflow: scroll;
  scrollbar-width: none;
  padding-left: -50px;
  margin-top: 10px;
`;

const TitleDetail = styled.p`
  margin-top: 10px;
  font-size: 13px;
  font-weight: 500;
`;

// MovieDetailComponent
// eslint-disable-next-line react/prop-types
function MovieDetailComponent({ title, overview }) {
  return (
    <MovieDetailBox>
      <TextDetailBox>
        <TitleDetail>{title}</TitleDetail>
        <Overview>{overview}</Overview>
      </TextDetailBox>
    </MovieDetailBox>
  );
}

// Main MovieDetail component
function MovieDetail() {
  const location = useLocation(); // useLocation 사용
  
  const [movie, setMovie] = useState(null);
  const [credits, setCredits] = useState(null);

  useEffect(() => {
    const fetchMovieAndCredits = async () => {
      try {
        //const pathArray = location.pathname.split('/');
        const movieId = location.pathname.match(/\/movie\/(\d+)/)[1];
        console.log(location.pathname);
        console.log(movieId);

    
        if (!movieId) {
          // movieId가 없으면 오류 처리
          throw new Error('Movie ID not found in URL');
        }
    
        const movieUrl = `https://api.themoviedb.org/3/movie/${movieId}?language=ko-KR&api_key=b28ce15071928bf521e37352b6f117df`;
        const creditsUrl = `https://api.themoviedb.org/3/movie/${movieId}/credits?language=ko-KR&api_key=b28ce15071928bf521e37352b6f117df`;
    
        const [movieResponse, creditsResponse] = await Promise.all([
          axios.get(movieUrl),
          axios.get(creditsUrl),
        ]);
    
        setMovie(movieResponse.data);
        setCredits(creditsResponse.data);
      } catch (error) {
        console.error('Failed to fetch movie and credits:', error);
      }
    };
    
    
    fetchMovieAndCredits();
  }, [location.pathname]);

  if (!movie) {
    return <div>Loading...</div>;
  }
  if (!credits) {
    return <div>Loading cast...</div>;
  }

  const backgroundImage = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`;

  const stars = (vote) => {
    const vote_floor = Math.floor(vote);
    const starCount = [];
    for (let i = 0; i < vote_floor; i++) {
      starCount.push(
        <span style={{ fontSize: '20px', marginRight: '3px' }} key={i}>★</span>
      );
    }
    return starCount;
  };

  const checkOverview = (overview) =>
    overview === '' ? 'TMDB에서 제공하는 API에 상세 줄거리 정보가 없습니다' : overview;

  return (
    <Container backgroundImage={backgroundImage}>
      <Overlay />
      <InfoContainer style={{ color: 'white' }}>
        <div className='poster'>
          <img
            style={{ height: '60vh' }}
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.original_title}
          />
        </div>
        <div className='info'>
          <h2>{movie.original_title}</h2>
          <h4>평점 {stars(movie.vote_average)}</h4>
          <h4>개봉일 {movie.release_date}</h4>
          <MovieDetailComponent title="줄거리" overview={checkOverview(movie.overview)} />
        </div>
      </InfoContainer>
      <CastContainer>
        {credits.cast.map((cast, id) => (
          <CastItem key={id}>
            <div className='cast-content'>
              <img
                src={
                  cast.profile_path
                    ? `https://image.tmdb.org/t/p/w500${cast.profile_path}`
                    : "이미지가 어디갔지? 아무튼 없어요!"
                }
                alt={cast.original_name}
              />
              <div className='original-name'>{cast.original_name}</div>
            </div>
          </CastItem>
        ))}
      </CastContainer>
    </Container>
  );
}

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(34, 37, 75, 0.9);
`;

const Container = styled.div`
  position: relative;
  padding-top: 20px;
  width: 100vw;
  min-height: 90vh;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
`;

const InfoContainer = styled.div`
  width: 70vw;
  position: relative;
  z-index: 1;
  padding: 7vh 10vw 7vh 15vw;
  display: flex;
  justify-content: center;
  align-items: center;

  .poster {
    padding-right: 20px;
  }
`;

const CastContainer = styled.div`
  width: 70vw;
  position: relative;
  z-index: 1;
  padding: 0 10vw 7vh 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  gap: 20px;
  margin: 0 15vw;
`;

const CastItem = styled.div`
  img {
    height: 10vh;
    width: 10vh;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export default MovieDetail;
