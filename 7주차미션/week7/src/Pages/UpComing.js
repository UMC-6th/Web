import React, { useEffect, useState } from 'react';
import Pagenation from './Pagenation';
import Loading from './Loading';
import Movies from './Movies';

const API_KEY = '40af110aa06b1051f6264617ea84fe22';
const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=ko-KR&page=1`

function Upcoming() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setMovies(data.results); // API 호출 결과를 상태에 저장
                setTotalPages(data.page);
                setLoading(false); 
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [currentPage]);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };



  return(
    <div className='uc-container'>
    <Movies movies={movies} /> {/* Pass movies data to Movies component */}
    {loading ? <Loading /> : null} 
    <Pagenation currentPage={currentPage} 
                        totalPages={totalPages} 
                        onPageChange={handlePageChange} />
  </div>
  )}


export default Upcoming;