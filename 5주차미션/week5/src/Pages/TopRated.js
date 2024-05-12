import React, { useEffect, useState } from 'react';
import Loading from './Loading';
import Movies from './Movies';

const API_KEY = '40af110aa06b1051f6264617ea84fe22';
const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=ko-KR&page=1`

function TopRated() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setMovies(data.results); // API 호출 결과를 상태에 저장
                setLoading(false); 
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);


  return(
    <div className='tp-container'>
    <Movies movies={movies} /> {/* Pass movies data to Movies component */}
    {loading ? <Loading /> : null} 
  </div>
  )}


export default TopRated;