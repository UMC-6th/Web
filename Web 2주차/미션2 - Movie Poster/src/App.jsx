import { useState } from 'react'
import { movies } from '../public/data/movies.jsx';
import MovieComponent from '../components/MovieComponent.jsx';
import MovieDetailComponent from '../components/MovieDetailComponent.jsx';
import './App.css';

function App() {
  // 실패한 코드 ,,
  // const [MovieComponents, setMovieComponents] = useState([]);
  // const [MovieDetailComponents, setMovieDetailComponents] = useState([]);

  // const generateMovieComponents = () => {
  //   const newMovieComponents = movies.results.map(movie => (
  //     <MovieComponent
  //       key={movie.id}
  //       image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
  //       title={movie.title}
  //       voteAverage={movie.vote_average}
  //     />
  //   ));  
  //   const newMovieDetailComponents = movies.results.map(movie => (
  //     <MovieDetailComponent
  //       key={movie.id}
  //       title={movie.title}
  //       overview={movie.overview}
  //     />
  //   ))
  //   setMovieComponents(newMovieComponents);
  //   setMovieDetailComponents(newMovieDetailComponents);
  // }

  // useState(() => {
  //   generateMovieComponents();
  // }, []);

  const [movieData, setMovieData] = useState([]);

  useState(() => {
    const newMovieData = movies.results.map(movie => ({
      id: movie.id,
      movieComponent: (
        <MovieComponent
          key={movie.id}
          image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          title={movie.title}
          voteAverage={movie.vote_average}
        />
      ),
      movieDetailComponent: (
        <MovieDetailComponent
          key={movie.id}
          title={movie.title}
          overview={movie.overview}
        />
      )
    }));
    setMovieData(newMovieData);
  }, []);

  return (
    <div className='Container'>
      <div className='movieContainer'>

        {movieData.map(({ id, movieComponent, movieDetailComponent }) => (
          <div key={id} className="movieItem">
            {movieComponent}
            <div className="movieDetailWrapper"> {/* 클래스 이름 변경 */}
              {movieDetailComponent}
            </div>
          </div>
        ))} 


        {/* 두 개 따로 구현했을 때 -> 영화 리스트 다음에 설명 리스트가 붙어서 나옴 */}
        {/* {MovieComponents.map((component, index) => (
          <div key={index} className="movieItem">
            {component}
          </div>
        ))} 
        
        {MovieDetailComponents.map((detailComponent, index) => (
          <div key={index} className="movieItem">
            {detailComponent}
          </div>
        ))}  */}
      </div>
    </div>
  )
}

export default App