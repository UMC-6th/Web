import { useEffect, useState, useRef, useCallback } from 'react';
import styled from 'styled-components';
import starIcon from '../assets/star.png';
import spinner from '../assets/loading.png';
import { useNavigate } from 'react-router-dom';

function NowPlaying() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const observer = useRef();
  const initialRender = useRef(true);

  const fetchMovies = async (page) => {
    setIsLoading(true);
    const url = `https://api.themoviedb.org/3/movie/now_playing?language=ko-KR&page=${page}`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMjhjZTE1MDcxOTI4YmY1MjFlMzczNTJiNmYxMTdkZiIsInN1YiI6IjY2MWNkOTgzZjNlMGRmMDE2M2E5NTg2NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.j90PFsY1a4nkgqMqWVK-aO0GE9zmozT37CxaXxMCctQ'
      }
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      setMovies((prevMovies) => [...prevMovies, ...data.results]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }
    fetchMovies(page);
  }, [page]);

  const lastMovieElementRef = useCallback((node) => {
    if (isLoading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setPage((prevPage) => prevPage + 1);
      }
    });
    if (node) observer.current.observe(node);
  }, [isLoading]);

  return (
    <Container>
      <MovieList className='movielist'>
        {movies.map((movie, index) => (
          <div
            ref={movies.length === index + 1 ? lastMovieElementRef : null}
            onClick={() => navigate(`/movie/${movie.id}`, { state: { movie } })}
            key={movie.id}
            role="button"
            tabIndex={0}
          >
            <MovieItem>
              <div className='movie-content'>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`${movie.title} poster`} />
                <div className='movie-info'>
                  <div className='title'>{movie.title}</div>
                  <div className='vote'><img style={{ height: '20px', width: '20px', marginRight: '3px' }} src={starIcon} alt="star icon" />{movie.vote_average}</div>
                </div>
              </div>
              <MovieOverview id='movie-overview'>
                <div className='wrap'>{movie.overview}</div>
              </MovieOverview>
            </MovieItem>
          </div>
        ))}
      </MovieList>
      {isLoading && (
        <div className='spinner-div'>
          <div className='loading_comment' style={{ paddingBottom: '20px' }}>데이터를 받아오는 중입니다</div>
          <img className='spinner-icon' src={spinner} alt="loading spinner" />
        </div>
      )}
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  padding-bottom: 50px;

  .spinner-div{
    width: 100%;
    height: 90vh;
    align-items: center;
    text-align: center;
    color: white;
    padding-top: 8vh;
  }

  .spinner-icon {
    width: 10%;
  }
`;

const MovieList = styled.div`
  overflow-y: auto;
  display: grid;
  gap: 20px;
  padding: 20px;
  padding-bottom: 0;
  margin: 0 15vw;

  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 900px) and (max-width: 1199px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 600px) and (max-width: 899px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 599px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const MovieOverview = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 10px;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  opacity: 0;
  height: 96.5%;
  padding-bottom: 10px;
  overflow-y: auto;

  .wrap {
    height: 95%;
    padding-bottom: 10%;
  }
`;

const MovieItem = styled.div`
  position: relative;
  overflow: hidden;
  margin-bottom: 10px;
  height: 100%;
  border-radius: 4px;
  background-color: rgb(55, 59, 105);

  .movie-content {
    position: relative;
  }
  .movie-content img {
    width: 100%;
    display: block;
  }
  .movie-info {
    color: white;
    padding: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .vote {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &:hover #movie-overview {
    opacity: 1;
  }
`;

export default NowPlaying;
