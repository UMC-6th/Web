import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import star from '../assets/star.png';

function MovieDetail() {  
  const location = useLocation(); 
  const movie = location.state.movie;
  const backgroundImage = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`;

  const stars =(vote)=> {
    const vote_floor = Math.floor(vote);
    const starCount = [];
    for(let i=0; i<vote_floor; i++) {
      starCount.push(<img style={{ height: '20px', width: '20px', marginRight: '3px' }} key={i} src={star} alt='star' />)
    }
    return starCount;
  };

  const checkOverview =(overview)=> overview == '' ? 'TMDB에서 제공하는 API에 상세 줄거리 정보가 없습니다' : overview;


  return (
    <Container backgroundImage={backgroundImage}>
      <Overlay />
      <InfoContainer style={{color: 'white'}}>
        <div className='poster'>
          <img style={{height: '60vh'}} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
        </div>
        <div className='info'> 
          <h2>{movie.original_title}</h2>
          <h4>평점 {stars(movie.vote_average)}</h4>
          <h4>개봉일 {movie.release_date}</h4>
          <h4>줄거리</h4>
          <p>{checkOverview(movie.overview)}</p>
        </div>
      </InfoContainer>
    </Container>
  );
}

const Container = styled.div `
  position: relative;
  padding-top: 20px;
  width: 100vw;
  min-height: 90vh;
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Overlay = styled.div `
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(34, 37, 75, 0.9); /* 흰색 배경 위에 희미한 검은색 레이어 */
`;
const InfoContainer = styled.div `
  width: 70vw;
  position: relative;
  z-index: 1; 
  padding: 0 10vw 7vh 10vw;
  display: flex;
  justify-content: center;
  align-items: center;

  .poster {
    padding-right: 20px;

  }
`;

export default MovieDetail;
