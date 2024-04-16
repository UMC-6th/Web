import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {movies} from './API.js'
import Movie from './Movie.jsx'
import Story from './Story.jsx'

function App() {

  return (
    <body>
      <div class='app-container'>
          {movies && (
            <div class='mapitem'>
            {movies.results.map((movie) => (
              <div key={movie.id}>
                <div className='movie-item' ><Movie movie={movie} /></div>
                <div className='story-item' ><Story movie={movie} /></div>
              </div> ))}
            </div>
          )}
      </div>
    </body>
    
);
}


export default App
