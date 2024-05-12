import './MainPage.css';
import React, { useState, useEffect } from "react";
import { fetchSearchMovies } from './API2.js';
import Movie from '../components/MovieTitle.jsx';
import Story from '../components/Story.jsx';
import LoadingSpinner from '../components/LoadingSpinner.jsx'; 

export default function MainPage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false); 
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      if (searchTerm !== '') { // 검색어가 비어있지 않을 때만 데이터를 불러옴
        setIsLoading(true);
        try {
          const data = await fetchSearchMovies();
          setMovies(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        } finally {
          setIsLoading(false);
        }
      } else {
        setMovies([]); // 검색어가 비어있을 경우 빈 배열로 설정하여 영화 목록을 비움
      }
    };
    fetchData();
  }, [searchTerm]);

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <body>
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
                  
                </div>
              ))}
            </div>
          ) : (
            <div className="no-results">검색 결과가 없습니다.</div>
          )}
        </div>
      )}
    </body>
  );
}
