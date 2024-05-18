import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import starIcon from '../assets/star.png';
import noImage from '../assets/noImage.png';

function MovieDetail() {
  const location = useLocation();
  const [movie, setMovie] = useState(null);
  const [credits, setCredits] = useState(null);

  
useEffect(() => {
    const movieId = location.pathname.split('/')[2];
    const fetchMovieAndCredits = async () => {
      const movieUrl = `https://api.themoviedb.org/3/movie/${movieId}?language=ko-KR&api_key=b28ce15071928bf521e37352b6f117df`;
      const creditsUrl = `https://api.themoviedb.org/3/movie/${movieId}/credits?language=ko-KR&api_key=b28ce15071928bf521e37352b6f117df`;
  
      const [movieResponse, creditsResponse] = await Promise.all([
        axios.get(movieUrl),
        axios.get(creditsUrl),
      ]);
  
      setMovie(movieResponse.data);
      setCredits(creditsResponse.data);
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
      starCount.push(<img style={{ height: '20px', width: '20px', marginRight: '3px' }} key={i} src={starIcon} alt='star' />)
    }
    return starCount;
  };

  const checkOverview = (overview) => overview === '' ? 'TMDB에서 제공하는 API에 상세 줄거리 정보가 없습니다' : overview;

  return (
    <Container backgroundImage={backgroundImage}>
      <Overlay />
      <InfoContainer style={{ color: 'white' }}>
        <div className='poster'>
          <img style={{ height: '60vh' }} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
        </div>
        <div className='info'>
          <h2>{movie.original_title}</h2>
          <h4>평점 {stars(movie.vote_average)}</h4>
          <h4>개봉일 {movie.release_date}</h4>
          <h4>줄거리</h4>
          <p>{checkOverview(movie.overview)}</p>
        </div>
      </InfoContainer>
      <CastContainer>
        {credits.cast.map((cast, id) => (
          <CastItem key={id}>
            <div className='cast-content'>
            <img src={cast.profile_path ? `https://image.tmdb.org/t/p/w500${cast.profile_path}` : noImage} alt={cast.original_name} />
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
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  // display: flex;
  // justify-content: center;
  // align-items: center;
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
const CastContainer = styled.div `
  width: 70vw;
  position: relative;
  z-index: 1;
  padding: 0 10vw 7vh 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color:white;
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  gap: 20px;
  margin: 0 15vw;
`;
const CastItem = styled.div `
  img {
    height: 10vh;
    width: 10vh;
    border-radius: 50%;
    object-fit: cover;
  }
`;
export default MovieDetail;
