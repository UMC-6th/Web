import React, { useEffect, useState } from 'react';
import Movies from './Movies';
import Loading from './Loading';
import Pagenation from './Pagenation';
import MovieFile from './MovieFile';

const API_KEY = '40af110aa06b1051f6264617ea84fe22';
const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ko-KR`;

function Popular() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState("");

    useEffect(() => {

        const fetchData = async () => {
            setLoading(true); 
            try {
                const response = await fetch(`${url}&page=${currentPage}`); //&page=${currentPage}은 현재페이지 의미
                const data = await response.json();
                setMovies(data.results); // API 호출 결과를 상태에 저장
                setTotalPages(data.page) //page정보 저장
                setLoading(false); 
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [currentPage]); // currentPage가 변경될 때마다 useEffect가 실행, 빈 배열은 렌더링시작 시 한번만 실행

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };


  return(
    <div className='pp-container'>
    <Movies movies={movies} /> {/* Pass movies data to Movies component */}
   
    {loading ? <Loading /> : null} 

    <Pagenation currentPage={currentPage} 
                onPageChange={handlePageChange} />
  </div>
  )}


export default Popular;