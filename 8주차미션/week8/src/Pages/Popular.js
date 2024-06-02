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
                const response = await fetch(`${url}&page=${currentPage}`);
                const data = await response.json();
                setMovies(data.results); // API 호출 결과를 상태에 저장
                setTotalPages(data.total_pages); // 전체 페이지 정보 저장
                // 1초 후에 로딩을 완료로 변경
                setTimeout(() => {
                    setLoading(false);
                }, 1000);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };
        fetchData();
    }, [currentPage]);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className='pp-container'>
            {loading ? (
                <Loading />
            ) : (
                <>
                    <Movies movies={movies} /> {/* Pass movies data to Movies component */}
                    <Pagenation currentPage={currentPage} onPageChange={handlePageChange} />
                </>
            )}
        </div>
    );
}

export default Popular;