import './MainPage.css';
import React, { useState, useEffect } from "react";
import { fetchMovies } from './API2.js';
import Movie from '../components/MovieTitle.jsx';
import Story from '../components/Story.jsx';
import LoadingSpinner from '../components/LoadingSpinner.jsx'; 

export default function MainPage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchMovies();
        setMovies(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false); 
      }
    };
    fetchData();
  }, []);

  return (
    <body>
      <div className="Main_Title">환영합니다</div>
      <div>
        <div className="Main_Search">
          Find Your Movies !
          <div>
            <input type="text" className="textsearch"></input>
            <button></button>
          </div>
        </div>
      </div>

    
      {isLoading && <LoadingSpinner />}

    
      {!isLoading && (
        <div className='app-container'>
          {movies.length > 0 && (
            <div className='mapitem'>
              {movies.map((movie) => (
                <div key={movie.id}>
                  <div className='movie-item'><Movie movie={movie} /></div>
                  {/* <div className='story-item'><Story movie={movie} /></div> */}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </body>
  );
}
