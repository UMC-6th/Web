import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

// Styled components 정의 부분

const MovieDetailBox = styled.div`
  width: 80vw;
  height: 80vh;
  position: relative;
  display: flex;
  justify-content: start;
  background-color: rgba(0, 0, 0, 0.7);

  @media (max-width: 768px) {
    width: 95vw;
    height: auto;
    flex-direction: column;
  }
`;

const TextDetailBox = styled.div`
  padding: 10px;
  color: white;

  @media (max-width: 768px) {
    padding: 5px;
  }
`;

const Overview = styled.p`
  height: 280px;
  width: 110%;
  font-size: 13px;
  overflow: scroll;
  scrollbar-width: none;
  padding-left: -50px;
  margin-top: 10px;

  @media (max-width: 768px) {
    height: auto;
    width: 100%;
    font-size: 12px;
    padding-left: 0px;
    overflow: auto;
  }
`;

const TitleDetail = styled.p`
  margin-top: 10px;
  font-size: 13px;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

// eslint-disable-next-line react/prop-types
function MovieDetailComponent({ id, title, overview, originalTitle }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movie/${encodeURIComponent(originalTitle)}`, { state: { id: id } });
  };
  return (
    <MovieDetailBox onClick={handleClick}>
      <TextDetailBox>
        <TitleDetail>{title}</TitleDetail>
        <Overview>{overview}</Overview>
      </TextDetailBox>
    </MovieDetailBox>
  );
}

export default MovieDetailComponent;
