import React, { useEffect, useState } from 'react';

import MovieFile from './MovieFile';
import Loading from './Loading';
import Movies from './Movies';

const API_KEY = '40af110aa06b1051f6264617ea84fe22';
const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=ko-KR&page=1`

function Upcoming() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true); 
            try {
                const response = await fetch(url);
                const data = await response.json();
                setMovies(data.results); // API 호출 결과를 상태에 저장
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);


  return(
    <div className='uc-container'>
    <Movies movies={movies} /> {/* Pass movies data to Movies component */}
    {loading ? <Loading /> : null} 
  </div>
  )}


export default Upcoming;