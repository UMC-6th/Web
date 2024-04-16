import React from 'react';
import './Movie.css';

//무비 컴포넌트 

function Movie({ movie }) {
  return (

<body>
    
    <div key={movie.id} class="movie-container">
        <div class="vertical">
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        <h2>{movie.title}</h2>
        <p>{movie.vote_average}</p>
      </div>
      <story/>
    </div>    
</body>
    
  );
}

export default Movie;