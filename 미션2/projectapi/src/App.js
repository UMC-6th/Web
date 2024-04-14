import logo from './logo.svg';
import './App.css';
import {movies} from "./MovieList"
import React from 'react';
import MovieTest from './component/movieTest';
import OverView from './component/overview';

function App() {
  return(
    <div className='app-container'>
      {
        movies.results.map((item)=>{
          return(
            <MovieTest
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

export default App;
