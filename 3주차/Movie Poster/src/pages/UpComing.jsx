// Movies.jsx
import React, { useState, useEffect } from "react";
import { fetchUpComingMovies } from './API2.js'; 
import Movie from '../components/MovieTitle.jsx';
import Story from '../components/Story.jsx';
import LoadingSpinner from '../components/LoadingSpinner.jsx';

export default function UpComing() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchUpComingMovies();
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
    <div className='app-container'>
     
      {isLoading && <LoadingSpinner />}

      {!isLoading && (
        <div className='mapitem'>
          {movies.map((movie) => (
            <div key={movie.id}>
              <div className='movie-item'><Movie movie={movie} /></div>
              <div className='story-item'><Story movie={movie} /></div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
