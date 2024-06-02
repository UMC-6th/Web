// Movies.jsx
import React, { useState, useEffect } from "react";
import { fetchTopRatedMovies } from './API2.js'; 
import Movie from '../components/MovieTitle.jsx';
import Story from '../components/Story.jsx';
import LoadingSpinner from '../components/LoadingSpinner.jsx';
import styled from "styled-components";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top : 100px;
`;

const MapItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
  padding: 20px;
`;

export default function TopRatedPage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchTopRatedMovies();
        setMovies(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      }
    };
    fetchData();
  }, []);

  return (

    <AppContainer>
    <div className='app-container'>
     
      {isLoading && <LoadingSpinner />}

      {!isLoading && (
        <MapItem>
          {movies.map((movie) => (
            <div key={movie.id}>
              <div className='movie-item'><Movie movie={movie} /></div>
              <div className='story-item'><Story movie={movie} /></div>
            </div>
          ))}
        </MapItem>
      )}
    </div>
  </AppContainer>
  );
}
