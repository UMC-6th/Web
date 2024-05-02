
import { useEffect, useState } from 'react';
import styled from 'styled-components';

// eslint-disable-next-line react/prop-types
function Fetch({url}) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
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
        setMovies(data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovies();
  }, [url]);

  return (
    <MovieList className='movielist'>
      {movies.map((movie) => ( 
        <MovieItem key={movie.id}>
          <div className='movie-content'>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <div className='movie-info'>
              <div className='title'>{movie.title}</div>
              <div className='vote'>{movie.vote_average}</div>
            </div>
          </div>
          <MovieOverview id='movie-overview' style={{height: '96.5%'}}><div className='wrap' style={{height: '95%'}}>{movie.overview}</div></MovieOverview>
        </MovieItem>
      ))}
    </MovieList>
  );
}

const MovieList = styled.div `
  overflow-y: hidden;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 20px;
  margin:0 15vw;
`;
const MovieOverview = styled.div `
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 10px;
  height:97%;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  opacity: 0;
  height: 100%;
  overflow-y: auto;
`;
const MovieItem = styled.div `
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

  &:hover #movie-overview {
    opacity:1;
  }
`;

export default Fetch;
