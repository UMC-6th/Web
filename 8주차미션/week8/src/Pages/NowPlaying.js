import React, { useCallback, useEffect, useState } from 'react';
import Pagenation from './Pagenation';
import { useRef } from 'react';
import Loading from './Loading';

import Movies from './Movies';

const API_KEY = '40af110aa06b1051f6264617ea84fe22';

export default function NowPlaying() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const observer = useRef();

    const fetchData = async (page) => {
        setLoading(true);
        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=ko-KR&page=${page}`);
            const data = await response.json();
            console.log("Fetched data:", data); // 데이터 확인을 위한 로그
            setMovies(prevMovies => [...prevMovies, ...data.results]); // Append new movies
            setTotalPages(data.total_pages); // 올바른 total_pages 설정
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    };
        
    useEffect(() => {
        fetchData(currentPage);
    }, [currentPage]);

    const lastMovieRef = useRef();

    const handleObserver = (entries) => {
        const target = entries[0];
        if (target.isIntersecting && currentPage < totalPages) {
            setCurrentPage(prevPage => prevPage + 1);
        }
    };

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 1.0
        };

        const observer = new IntersectionObserver(handleObserver, options);
        if (lastMovieRef.current) observer.observe(lastMovieRef.current);

        return () => {
            if (lastMovieRef.current) observer.unobserve(lastMovieRef.current);
        };
    }, [handleObserver, currentPage, totalPages]);

    return (
        <div className='np-container'>
            <Movies movies={movies} />
            {loading && <Loading />} {/* Use the Loading component here */}
            <div ref={lastMovieRef}></div> {/* IntersectionObserver 대상이 아닌 실제 페이지 내용 */}
        </div>
    );
}
