import './../App.css';
import { movies } from './../MovieList';
import React from 'react';
import MovieFile from './MovieFile';



function Movie() {
  return(
    <div className='app-container'>
      {
        movies.results.map((item)=>{
          return(
            <MovieFile
            title={item.title}
            poster_path={item.poster_path}
            vote_average={item.vote_average}
            overview = {item.overview}
            />

          )
        })
      }

    </div>
  )
}

export default Movie;
