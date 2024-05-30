import React, { useState, useEffect, useRef, useCallback } from "react";
import { fetchNowPlayingMovies } from './API2'; // 경로를 API 파일 위치에 맞게 수정
import Movie from '../components/MovieTitle.jsx';
import Story from '../components/Story.jsx';
import LoadingSpinner from '../components/LoadingSpinner.jsx';

export default function NowPlayingPage() {
  const [movies, setMovies] = useState([]); // 영화 데이터를 저장하는 상태
  const [isLoading, setIsLoading] = useState(false); // 로딩 상태를 관리하는 상태
  const [page, setPage] = useState(1); // 현재 페이지 번호를 저장하는 상태
  const [hasMore, setHasMore] = useState(true); // 더 많은 데이터를 불러올 수 있는지 여부를 저장하는 상태
  const observer = useRef(); // 관찰자를 저장하는 ref

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); // 데이터 로드 시작 시 로딩 상태를 true로 설정
      try {
        const data = await fetchNowPlayingMovies(page); // 페이지 번호를 매개변수로 전달하여 영화 데이터 가져옴
        setMovies((prevMovies) => {
          // 새 데이터를 기존 데이터와 비교하여 중복을 방지함
          const newMovies = data.filter(
            (newMovie) => !prevMovies.some((prevMovie) => prevMovie.id === newMovie.id)
          );
          return [...prevMovies, ...newMovies];
        });
        setHasMore(data.length > 0); // 데이터가 더 있는지 여부를 설정
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
        
        // setIsLoading(false); // 데이터 로드 완료 후 로딩 상태를 false로 설정
      }
    };
    fetchData();
  }, [page]); // 페이지 번호가 변경될 때마다 데이터를 다시 가져옴
  
  const lastMovieElementRef = useCallback((node) => {
    if (isLoading) return; // 로딩 중일 때는 관찰자 설정을 하지 않음
    if (observer.current) observer.current.disconnect(); // 이전 관찰자가 있으면 해제
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMore) {
        setPage((prevPage) => prevPage + 1); // 마지막 요소가 보이면 페이지 번호 증가
      }
    });
    if (node) observer.current.observe(node); // 새 요소를 관찰
  }, [isLoading, hasMore]); // 로딩 상태와 더 많은 데이터 여부가 변경될 때마다 콜백 재설정

  return (
    <div className='app-container'>

{isLoading && <LoadingSpinner />}

{!isLoading && (

      <div className='mapitem'>
        {movies.map((movie, index) => {
          if (movies.length === index + 1) { // 마지막 영화 요소일 때
            return (
              <div ref={lastMovieElementRef} key={movie.id}>
                <div className='movie-item'><Movie movie={movie} /></div>
                <div className='story-item'><Story movie={movie} /></div>
              </div>
            );
          
          } else { // 마지막 요소가 아닐 때
            return (
              <div key={movie.id}>
                <div className='movie-item'><Movie movie={movie} /></div>
                <div className='story-item'><Story movie={movie} /></div>
              </div>
            );
          }
        })}
      
      </div>
      )}
    </div>
    
  );
}
