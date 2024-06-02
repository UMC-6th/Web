import './../App.css';
import { movies } from './../MovieList';
import React from 'react';
import MovieFile from './MovieFile';



function Movie() { //데이터의 개수만큼 띄우는 컴포넌트
  return(
    <div className='app-container'>
      {
        movies.results.map((item)=>{ //데이터의 개수만큼 띄어줌(results)
          return(
            <MovieFile
            title={item.title}
            poster_path={item.poster_path}
            vote_average={item.vote_average}
            overview = {item.overview}
            release_date = {item.release_date}
            />

          )
        })
      }
      

    </div>
  )
}

export default Movie;
