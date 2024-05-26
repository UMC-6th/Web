// Movies.jsx
import React, { useState, useEffect } from "react";
import { fetchMovies } from './API2.js'; 
import Movie from '../components/MovieTitle.jsx';
import Story from '../components/Story.jsx';
import LoadingSpinner from '../components/LoadingSpinner.jsx';

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    
  const fetchData = async () => {
    setIsLoading(true);
    try {

      //페이지 번호를 전달해줘야 버튼을 눌렀을 때 페이지가 바뀜
      const data = await fetchMovies(currentPage);
      
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
},[currentPage]);

const handleNextPage = () => {
  setCurrentPage(prevPage => prevPage + 1);
};

const handlePreviousPage = () => {
  setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
};

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
        <div className='button'>
            <button className='button-design' onClick={handlePreviousPage} disabled={currentPage === 1}>
             {'<'}
            </button>
            <span>{currentPage}</span>
            <button className='button-design' onClick={handleNextPage} >
            {'>'}
            </button>
          </div>
    </div>
  );
}
