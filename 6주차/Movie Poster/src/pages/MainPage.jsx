import './MainPage.css';
import React, { useState, useEffect, useCallback } from "react";
import { fetchSearchMovies } from './API2.js';
import Movie from '../components/MovieTitle.jsx';
import Story from '../components/Story.jsx';
import LoadingSpinner from '../components/LoadingSpinner.jsx'; 

// 디바운스 함수 정의
function debounce(func, wait) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

export default function MainPage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // 디바운스를 적용한 fetch 함수
  const debouncedFetchMovies = useCallback(
    debounce(async (searchTerm) => {
      if (searchTerm !== '') {
        setIsLoading(true);
        try {
          const data = await fetchSearchMovies(searchTerm); // searchTerm을 전달
          setMovies(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        } finally {
          setIsLoading(false);
        }
      } else {
        setMovies([]);
      }
    }, 500),
    [] // 의존성 배열을 빈 배열로 설정하여 컴포넌트가 처음 렌더링될 때만 생성되도록 함
  );

  useEffect(() => {
    debouncedFetchMovies(searchTerm);
  }, [searchTerm, debouncedFetchMovies]);

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="Main_Title">환영합니다</div>
      <div>
        <div className="Main_Search">
          Find Your Movies !
          <div>
            <input
              type="text"
              className="textsearch"
              placeholder="검색어를 입력하세요"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button>검색</button>
          </div>
        </div>
      </div>

      {isLoading && <LoadingSpinner />}

      {!isLoading && searchTerm !== '' && (
        <div className='app-container'>
          {filteredMovies.length > 0 ? (
            <div className='main-mapitem'>
              {filteredMovies.map((movie) => (
                <div key={movie.id}>
                  <div className='movie-item'><Movie movie={movie} /></div>
                  <div className='story-item'><Story movie={movie} /></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-results">검색 결과가 없습니다.</div>
          )}
        </div>
      )}
    </div>
  );
}
