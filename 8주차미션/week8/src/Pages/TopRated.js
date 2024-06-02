import React, { useEffect, useState } from 'react';
import Loading from './Loading';
import Movies from './Movies';
import Pagenation from './Pagenation';


const API_KEY = '40af110aa06b1051f6264617ea84fe22';

function TopRated() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        const fetchData = async (page) => {
            setLoading(true);
            try {
                const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=ko-KR&page=${page}`);
                const data = await response.json();
                setMovies(data.results); // API 호출 결과를 상태에 저장
                setTotalPages(data.total_pages);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setTimeout(() => {
                    setLoading(false);
                }, 1000);
            }
        };

        fetchData(currentPage);
    }, [currentPage]);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className='tp-container'>
            {loading ? <Loading /> : <Movies movies={movies} />} {/* loading 상태에 따라 컴포넌트 렌더링 */}
            <Pagenation
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />
        </div>
    );
}

export default TopRated;